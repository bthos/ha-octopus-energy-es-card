/**
 * Utility functions for D3.js Chart Library
 */

import type { DataPoint, ChartData, AxisLabel, GridLine, ChartConfig } from './chart-types';

/**
 * Calculate chart coordinates for data points
 */
export function calculatePoints(
  data: number[],
  config: ChartConfig,
  minValue: number,
  maxValue: number,
  timestamps?: string[]
): DataPoint[] {
  const { width, height, padding } = config;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const range = maxValue - minValue || 1;
  
  const xStep = data.length > 1 ? chartWidth / (data.length - 1) : 0;
  
  return data.map((value, index) => {
    const x = padding.left + index * xStep;
    const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
    
    return {
      x,
      y,
      value,
      label: timestamps?.[index],
      timestamp: timestamps?.[index]
    };
  });
}

/**
 * Generate Y-axis labels
 */
export function generateYAxisLabels(
  minValue: number,
  maxValue: number,
  steps: number,
  config: ChartConfig
): AxisLabel[] {
  const { height, padding } = config;
  const chartHeight = height - padding.top - padding.bottom;
  const range = maxValue - minValue || 1;
  
  const labels: AxisLabel[] = [];
  for (let i = 0; i <= steps; i++) {
    const value = minValue + (range * i / steps);
    const y = padding.top + chartHeight - (i / steps) * chartHeight;
    labels.push({ value, y });
  }
  
  return labels;
}

/**
 * Generate X-axis labels - show all labels like Octopus Energy España
 */
export function generateXAxisLabels(
  points: DataPoint[],
  formatDate: (dateStr: string) => string,
  period?: 'day' | 'week' | 'month' | 'year'
): Array<{ label: string; x: number }> {
  if (points.length === 0) return [];
  
  const labels: Array<{ label: string; x: number }> = [];
  
  // For month view, show all odd-numbered days (1, 3, 5, 7, etc.) like Octopus Energy España
  if (period === 'month') {
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      if (point?.timestamp) {
        const date = new Date(point.timestamp);
        const day = date.getDate();
        // Show only odd-numbered days (1, 3, 5, 7, 9, etc.)
        if (day % 2 === 1) {
          labels.push({
            label: formatDate(point.timestamp),
            x: point.x
          });
        }
      }
    }
    // Always include the last point if not already included
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      const lastLabel = labels[labels.length - 1];
      if (lastPoint?.timestamp && (!lastLabel || lastLabel.x !== lastPoint.x)) {
        labels.push({
          label: formatDate(lastPoint.timestamp),
          x: lastPoint.x
        });
      }
    }
  } else {
    // For other periods, show labels with reasonable spacing
    const maxLabels = period === 'year' ? 12 : period === 'week' ? 7 : 24;
    const step = Math.max(1, Math.floor(points.length / maxLabels));
    
    for (let i = 0; i < points.length; i += step) {
      const point = points[i];
      if (point?.timestamp) {
        labels.push({
          label: formatDate(point.timestamp),
          x: point.x
        });
      }
    }
    
    // Always include the last point if not already included
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      const lastLabel = labels[labels.length - 1];
      if (lastPoint?.timestamp && (!lastLabel || lastLabel.x !== lastPoint.x)) {
        labels.push({
          label: formatDate(lastPoint.timestamp),
          x: lastPoint.x
        });
      }
    }
  }
  
  return labels;
}

/**
 * Generate grid lines
 */
export function generateGridLines(
  yAxisLabels: AxisLabel[],
  config: ChartConfig
): GridLine[] {
  const { width, padding } = config;
  const x1 = padding.left;
  const x2 = width - padding.right;
  
  return yAxisLabels.map(label => ({
    x1,
    y1: label.y,
    x2,
    y2: label.y
  }));
}

/**
 * Format date for X-axis labels based on period type
 */
export function formatDate(dateStr: string, period?: 'day' | 'week' | 'month' | 'year'): string {
  try {
    const date = new Date(dateStr);
    
    if (period === 'day') {
      // Format as hour:minute for hourly data (e.g., "14:00")
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false });
    } else if (period === 'week') {
      // Format as DD/MM for week view (shows individual days of the week)
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    } else if (period === 'month') {
      // Format as DD/MM (e.g., "08/01" for January 8th)
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    } else if (period === 'year') {
      // Format as abbreviated month name in Spanish (e.g., "ene", "feb", "mar") - matching Octopus Energy España
      const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
      return monthNames[date.getMonth()];
    }
    
    // Default: abbreviated month name in Spanish
    const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return monthNames[date.getMonth()];
  } catch {
    return dateStr.split('T')[0];
  }
}


/**
 * Format value for Y-axis labels
 */
export function formatValue(value: number, decimals: number = 1): string {
  return value.toFixed(decimals);
}

/**
 * Calculate moving average
 */
export function calculateMovingAverage(
  data: number[],
  windowSize: number
): (number | null)[] {
  if (windowSize <= 0 || data.length === 0) {
    return data.map(() => null);
  }
  
  const result: (number | null)[] = [];
  
  for (let i = 0; i < data.length; i++) {
    if (i < windowSize - 1) {
      result.push(null);
      continue;
    }
    
    let sum = 0;
    for (let j = i - windowSize + 1; j <= i; j++) {
      sum += data[j];
    }
    
    result.push(sum / windowSize);
  }
  
  return result;
}

/**
 * Get computed color from CSS variable
 */
export function getComputedColor(
  element: HTMLElement,
  cssVar: string,
  fallback: string
): string {
  if (typeof window === 'undefined') {
    return fallback;
  }
  
  try {
    const root = element.getRootNode() as ShadowRoot | Document;
    const target = root instanceof ShadowRoot ? root.host : document.documentElement;
    const style = getComputedStyle(target);
    const value = style.getPropertyValue(cssVar).trim();
    return value || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Prepare chart data from raw values
 */
export function prepareChartData(
  values: number[],
  timestamps?: string[]
): ChartData {
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 1);
  const range = maxValue - minValue || 1;
  
  // Points will be calculated later with config
  return {
    points: [],
    minValue,
    maxValue,
    range
  };
}

/**
 * Group daily data by weeks (ISO weeks)
 * Returns aggregated weekly data with week start timestamps
 */
export function groupByWeeks(
  values: number[],
  timestamps: string[]
): { values: number[]; timestamps: string[] } {
  if (values.length === 0 || timestamps.length === 0) {
    return { values: [], timestamps: [] };
  }
  
  const weekMap = new Map<string, { sum: number; count: number; weekStart: Date }>();
  
  for (let i = 0; i < values.length; i++) {
    const date = new Date(timestamps[i]);
    const weekStart = getWeekStart(date);
    const weekKey = weekStart.toISOString().split('T')[0];
    
    if (!weekMap.has(weekKey)) {
      weekMap.set(weekKey, { sum: 0, count: 0, weekStart });
    }
    
    const weekData = weekMap.get(weekKey)!;
    weekData.sum += values[i];
    weekData.count += 1;
  }
  
  // Sort by week start date
  const sortedWeeks = Array.from(weekMap.entries()).sort((a, b) => 
    a[1].weekStart.getTime() - b[1].weekStart.getTime()
  );
  
  return {
    values: sortedWeeks.map(week => week[1].sum),
    timestamps: sortedWeeks.map(week => week[1].weekStart.toISOString())
  };
}

/**
 * Group daily data by months
 * Returns aggregated monthly data with month start timestamps
 */
export function groupByMonths(
  values: number[],
  timestamps: string[]
): { values: number[]; timestamps: string[] } {
  if (values.length === 0 || timestamps.length === 0) {
    return { values: [], timestamps: [] };
  }
  
  const monthMap = new Map<string, { sum: number; count: number; monthStart: Date }>();
  
  for (let i = 0; i < values.length; i++) {
    const date = new Date(timestamps[i]);
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, { sum: 0, count: 0, monthStart });
    }
    
    const monthData = monthMap.get(monthKey)!;
    monthData.sum += values[i];
    monthData.count += 1;
  }
  
  // Sort by month start date
  const sortedMonths = Array.from(monthMap.entries()).sort((a, b) => 
    a[1].monthStart.getTime() - b[1].monthStart.getTime()
  );
  
  return {
    values: sortedMonths.map(month => month[1].sum),
    timestamps: sortedMonths.map(month => month[1].monthStart.toISOString())
  };
}

/**
 * Get start of ISO week (Monday) for a date
 */
function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  const weekStart = new Date(d.setDate(diff));
  weekStart.setHours(0, 0, 0, 0);
  return weekStart;
}

/**
 * Get ISO week number for a date
 */
function getISOWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}
