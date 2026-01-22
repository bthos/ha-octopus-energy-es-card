/**
 * Type definitions for D3.js Chart Library
 */

// Import d3 types for interfaces
import * as d3 from 'd3';

export interface ChartConfig {
  width: number;
  height: number;
  padding: { top: number; right: number; bottom: number; left: number };
  colors: ChartColors;
  fontFamily?: string;
  language?: string; // Language code for localization (e.g., 'en', 'es', 'be')
}

export interface ChartGradient {
  enabled: boolean;
  id?: string;
  stops: Array<{ offset: string; color: string }>;
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
}

export interface ChartColors {
  text: string;
  accent: string;
  primary: string;
  hover?: string; // Hover color for bars/points
  error: string;
  warning: string;
  success: string;
  info: string;
  background: string;
  grid: string;
  axis: string;
  gradient?: ChartGradient; // Optional Octopus-style gradient
}

export interface DataPoint {
  x: number;
  y: number;
  value: number;
  label?: string;
  timestamp?: string;
}

export interface ChartData {
  points: DataPoint[];
  minValue: number;
  maxValue: number;
  range: number;
}

export interface AxisConfig {
  min: number;
  max: number;
  steps: number;
  format: (value: number) => string;
  label?: string;
}

export interface AnimationConfig {
  enabled: boolean;
  duration?: number; // в миллисекундах, по умолчанию 800ms
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  delay?: number; // задержка перед началом анимации
}

export interface ChartOptions {
  animation?: AnimationConfig;
  interactive?: boolean; // включить tooltips и hover эффекты
  period?: 'day' | 'week' | 'month' | 'year'; // Period type for proper X-axis formatting
}

export interface LineChartOptions extends ChartOptions {
  showArea?: boolean;
  showMovingAverage?: boolean;
  movingAverageDays?: number;
  showCostAxis?: boolean;
  costData?: ChartData;
}

export interface BarChartOptions extends ChartOptions {
  showCostOverlay?: boolean;
  costData?: ChartData;
  barWidth?: number;
}

export interface StackedAreaOptions extends ChartOptions {
  layers?: StackedLayer[];
}

export interface StackedLayer {
  data: number[];
  color: string;
  opacity?: number;
  label?: string;
}

export interface StackedData {
  layers: StackedLayer[];
  timestamps?: string[];
  minValue: number;
  maxValue: number;
  range: number;
}

export interface AxisLabel {
  value: number;
  y: number;
  x?: number;
}

export interface GridLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/**
 * Context interface for D3 chart rendering
 * Used to share state between chart rendering functions
 */
export interface D3ChartContext {
  xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number> | null;
  yScale: d3.ScaleLinear<number, number> | null;
  setXScale: (scale: d3.ScaleBand<string> | d3.ScaleLinear<number, number>) => void;
  setYScale: (scale: d3.ScaleLinear<number, number>) => void;
  hoveredPoint: DataPoint | null;
  setHoveredPoint: (point: DataPoint | null) => void;
  setBarWidth?: (width: number) => void; // Optional, only for bar charts
}
