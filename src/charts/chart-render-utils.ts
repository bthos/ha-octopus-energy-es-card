/**
 * Shared chart rendering utilities for D3.js charts
 * Contains common functions used across all chart types (bar, line, stacked area)
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  D3ChartContext,
  DataPoint
} from './chart-types';
import { formatDate } from './chart-utils';

/**
 * Chart rendering constants
 */
export const CHART_CONSTANTS = {
  GRID_OPACITY: 0.2,
  AXIS_OPACITY: 0.2,
  TEXT_OPACITY: 0.9,
  FONT_SIZE: '13px',
  FONT_FAMILY: 'Roboto, sans-serif',
  Y_AXIS_TICKS: 5,
  Y_AXIS_PADDING: 1.1, // 10% padding at top
  BAR_PADDING_MONTH_WEEK: 0.4,
  BAR_PADDING_DAY: 0.1,
  Y_AXIS_LABEL_OFFSET_X: -10,
  Y_AXIS_LABEL_OFFSET_Y: -10,
  MAX_X_TICKS_DAY: 12,
} as const;

/**
 * Calculate chart dimensions from config
 */
export function getChartDimensions(config: ChartConfig): { chartWidth: number; chartHeight: number } {
  const { width, height, padding } = config;
  return {
    chartWidth: width - padding.left - padding.right,
    chartHeight: height - padding.top - padding.bottom
  };
}

/**
 * Create X scale based on period type
 * @param padding - Optional padding value for band scales (default: 0.1 for line/area charts, 0.4 for bar charts)
 */
export function createXScale(
  timestamps: string[],
  chartWidth: number,
  period: 'day' | 'week' | 'month' | 'year',
  padding?: number
): d3.ScaleBand<string> | d3.ScaleLinear<number, number> {
  if (period === 'month' || period === 'week') {
    const bandPadding = padding !== undefined 
      ? padding 
      : CHART_CONSTANTS.BAR_PADDING_DAY; // Default for line/area charts
    return d3.scaleBand<string>()
      .domain(timestamps)
      .range([0, chartWidth])
      .padding(bandPadding);
  } else {
    return d3.scaleLinear<number, number>()
      .domain([0, timestamps.length - 1])
      .range([0, chartWidth]);
  }
}

/**
 * Create Y scale
 */
export function createYScale(
  maxValue: number,
  chartHeight: number
): d3.ScaleLinear<number, number> {
  return d3.scaleLinear<number, number>()
    .domain([0, maxValue * CHART_CONSTANTS.Y_AXIS_PADDING])
    .range([chartHeight, 0]);
}

/**
 * Create main content group
 */
export function createContentGroup(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  padding: { top: number; left: number }
): d3.Selection<SVGGElement, unknown, null, undefined> {
  return svg
    .append('g')
    .attr('class', 'chart-content')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);
}

/**
 * Create grid lines
 */
export function createGridLines(
  contentGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
  yScale: d3.ScaleLinear<number, number>,
  chartWidth: number,
  config: ChartConfig
): void {
  const gridGroup = contentGroup.append('g').attr('class', 'grid');
  const yTicks = yScale.ticks(CHART_CONSTANTS.Y_AXIS_TICKS);
  
  gridGroup.selectAll('line.grid-line')
    .data(yTicks)
    .join('line')
    .attr('class', 'grid-line')
    .attr('x1', 0)
    .attr('x2', chartWidth)
    .attr('y1', d => yScale(d))
    .attr('y2', d => yScale(d))
    .attr('stroke', config.colors.grid)
    .attr('stroke-width', 1)
    .attr('opacity', CHART_CONSTANTS.GRID_OPACITY);
}

/**
 * Create X-axis
 */
export function createXAxis(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number>,
  timestamps: string[],
  period: 'day' | 'week' | 'month' | 'year',
  config: ChartConfig
): d3.Selection<SVGGElement, unknown, null, undefined> {
  const { width, height, padding } = config;
  const xAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-x')
    .attr('transform', `translate(${padding.left}, ${height - padding.bottom})`);

  if (period === 'month' || period === 'week') {
    const xAxis = d3.axisBottom(xScale as d3.ScaleBand<string>)
      .tickFormat((d) => formatDate(d as string, period));
    
    if (period === 'month') {
      xAxis.tickValues(timestamps.filter((ts) => {
        const date = new Date(ts);
        return date.getDate() % 2 === 1; // Odd days only
      }));
    }
    
    xAxisGroup.call(xAxis);
  } else {
    const xAxis = d3.axisBottom(xScale as d3.ScaleLinear<number, number>)
      .ticks(Math.min(timestamps.length, CHART_CONSTANTS.MAX_X_TICKS_DAY))
      .tickFormat((d) => {
        const idx = Math.round(d as number);
        if (idx >= 0 && idx < timestamps.length) {
          return formatDate(timestamps[idx], period);
        }
        return '';
      });
    
    xAxisGroup.call(xAxis);
  }

  // Style X-axis
  xAxisGroup.selectAll('text')
    .attr('fill', config.colors.text)
    .attr('font-size', CHART_CONSTANTS.FONT_SIZE)
    .attr('font-family', config.fontFamily || CHART_CONSTANTS.FONT_FAMILY)
    .attr('opacity', CHART_CONSTANTS.TEXT_OPACITY);

  xAxisGroup.selectAll('line, path')
    .attr('stroke', config.colors.axis)
    .attr('opacity', CHART_CONSTANTS.AXIS_OPACITY);

  return xAxisGroup;
}

/**
 * Create Y-axis
 */
export function createYAxis(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  yScale: d3.ScaleLinear<number, number>,
  config: ChartConfig
): d3.Selection<SVGGElement, unknown, null, undefined> {
  const { padding } = config;
  const yAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-y')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);

  const yAxis = d3.axisLeft(yScale)
    .ticks(CHART_CONSTANTS.Y_AXIS_TICKS)
    .tickFormat(d => String(d));

  yAxisGroup.call(yAxis)
    .selectAll('text')
    .attr('fill', config.colors.text)
    .attr('font-size', CHART_CONSTANTS.FONT_SIZE)
    .attr('font-family', config.fontFamily || CHART_CONSTANTS.FONT_FAMILY)
    .attr('opacity', CHART_CONSTANTS.TEXT_OPACITY);

  yAxisGroup.selectAll('line, path')
    .attr('stroke', config.colors.axis)
    .attr('opacity', CHART_CONSTANTS.AXIS_OPACITY);

  return yAxisGroup;
}

/**
 * Add Y-axis label (kWh)
 */
export function addYAxisLabel(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  padding: { left: number; top: number },
  config: ChartConfig
): void {
  svg.append('text')
    .attr('class', 'y-axis-label')
    .attr('x', padding.left + CHART_CONSTANTS.Y_AXIS_LABEL_OFFSET_X)
    .attr('y', padding.top + CHART_CONSTANTS.Y_AXIS_LABEL_OFFSET_Y)
    .attr('text-anchor', 'end')
    .attr('fill', config.colors.text)
    .attr('font-size', CHART_CONSTANTS.FONT_SIZE)
    .attr('font-family', config.fontFamily || CHART_CONSTANTS.FONT_FAMILY)
    .attr('opacity', CHART_CONSTANTS.TEXT_OPACITY)
    .text('kWh');
}

/**
 * Get X coordinate for a data point based on period type
 */
export function getXCoordinate(
  xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number>,
  timestamp: string | undefined,
  index: number,
  period: 'day' | 'week' | 'month' | 'year'
): number {
  if (period === 'month' || period === 'week') {
    const bandScale = xScale as d3.ScaleBand<string>;
    const center = bandScale(timestamp || '');
    return center ? center + bandScale.bandwidth() / 2 : 0;
  } else {
    return (xScale as d3.ScaleLinear<number, number>)(index);
  }
}
