/**
 * Type definitions for Canvas Chart Library
 */

export interface ChartConfig {
  width: number;
  height: number;
  padding: { top: number; right: number; bottom: number; left: number };
  colors: ChartColors;
  fontFamily?: string;
}

export interface ChartColors {
  text: string;
  accent: string;
  primary: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  background: string;
  grid: string;
  axis: string;
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
