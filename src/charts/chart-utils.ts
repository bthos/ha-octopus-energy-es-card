/**
 * Utility functions for Canvas Chart Library
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
 * Generate X-axis labels (first, middle, last)
 */
export function generateXAxisLabels(
  points: DataPoint[],
  formatDate: (dateStr: string) => string
): Array<{ label: string; x: number }> {
  if (points.length === 0) return [];
  
  const labels: Array<{ label: string; x: number }> = [];
  
  // First point
  if (points[0]?.timestamp) {
    labels.push({
      label: formatDate(points[0].timestamp),
      x: points[0].x
    });
  }
  
  // Middle point
  if (points.length > 2) {
    const midIndex = Math.floor(points.length / 2);
    if (points[midIndex]?.timestamp) {
      labels.push({
        label: formatDate(points[midIndex].timestamp),
        x: points[midIndex].x
      });
    }
  }
  
  // Last point
  if (points.length > 1 && points[points.length - 1]?.timestamp) {
    const timestamp = points[points.length - 1].timestamp;
    if (timestamp) {
      labels.push({
        label: formatDate(timestamp),
        x: points[points.length - 1].x
      });
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
 * Format date for X-axis labels
 */
export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
