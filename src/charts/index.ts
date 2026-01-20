/**
 * Main export file for D3.js Chart Library
 * This allows the library to be reused in other projects
 */

// Export D3Chart as the main chart implementation
export { D3Chart } from './d3-chart';

export type {
  ChartConfig,
  ChartColors,
  ChartData,
  DataPoint,
  AxisConfig,
  AnimationConfig,
  ChartOptions,
  LineChartOptions,
  BarChartOptions,
  StackedAreaOptions,
  StackedLayer,
  StackedData,
  AxisLabel,
  GridLine
} from './chart-types';
