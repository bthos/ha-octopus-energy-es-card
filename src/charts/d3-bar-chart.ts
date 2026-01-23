/**
 * D3.js Bar Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  BarChartOptions,
  DataPoint,
  D3ChartContext
} from './chart-types';
import { formatTooltipText, calculateMovingAverage } from './chart-utils';
import {
  getChartDimensions,
  createXScale,
  createYScale,
  createContentGroup,
  createGridLines,
  createXAxis,
  createYAxis,
  getXCoordinate,
  CHART_CONSTANTS
} from './chart-render-utils';

export async function renderD3BarChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  data: ChartData,
  options: BarChartOptions,
  context: D3ChartContext
): Promise<void> {
  const { padding } = config;
  const { chartWidth, chartHeight } = getChartDimensions(config);

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.bar, path.moving-average').remove();

  // Create main content group
  const contentGroup = createContentGroup(svg, padding);

  // Prepare data
  const timestamps = data.points.map(p => p.timestamp || '');
  const values = data.points.map(p => p.value);
  const period = options.period || 'month';

  // Setup scales
  // Bar charts use different padding (0.4) for month/week periods
  const barPadding = period === 'month' || period === 'week' 
    ? CHART_CONSTANTS.BAR_PADDING_MONTH_WEEK 
    : CHART_CONSTANTS.BAR_PADDING_DAY;
  const xScale = createXScale(timestamps, chartWidth, period, barPadding);
  const yScale = createYScale(data.maxValue, chartHeight);

  // Store scales in context
  context.setXScale(xScale);
  context.setYScale(yScale);

  // Calculate bar width
  const barWidth = options.barWidth || (period === 'month' || period === 'week' 
    ? (xScale as d3.ScaleBand<string>).bandwidth()
    : chartWidth / values.length * 0.6);
  if (context.setBarWidth) {
    context.setBarWidth(barWidth);
  }

  // Create grid lines
  createGridLines(contentGroup, yScale, chartWidth, config);

  // Create axes
  createXAxis(svg, xScale, timestamps, period, config);
  createYAxis(svg, yScale, config);

  // Create gradient if enabled (Octopus Energy pink gradient pattern)
  const useGradient = config.colors.gradient?.enabled ?? false;
  if (useGradient && config.colors.gradient) {
    const defs = svg.select('defs').empty() 
      ? svg.append('defs') 
      : svg.select('defs');

    // Remove existing gradient if present
    defs.select('#octopus-pink-gradient').remove();

    // Use custom gradient config or default Octopus Energy pink gradient
    const gradientConfig = config.colors.gradient;
    const gradientId = gradientConfig.id || 'octopus-pink-gradient';
    const stops = gradientConfig.stops || [
      { offset: '0%', color: '#F050F8' }, // Bright pink (top)
      { offset: '100%', color: '#FA98FF' } // Light pink (bottom)
    ];

    // Create linear gradient (top to bottom by default)
    const gradient = defs.append('linearGradient')
      .attr('id', gradientId)
      .attr('x1', gradientConfig.x1 || '0%')
      .attr('y1', gradientConfig.y1 || '0%')
      .attr('x2', gradientConfig.x2 || '0%')
      .attr('y2', gradientConfig.y2 || '100%');

    // Add gradient stops
    stops.forEach(stop => {
      gradient.append('stop')
        .attr('offset', stop.offset)
        .attr('stop-color', stop.color);
    });
  }

  // Draw bars with sharp corners (no rounding)
  const barsGroup = contentGroup.append('g').attr('class', 'bars');

  // Helper function to create rectangle path (no rounded corners)
  const createRectPath = (
    x: number,
    y: number,
    width: number,
    height: number
  ): string => {
    return `
      M ${x},${y}
      L ${x + width},${y}
      L ${x + width},${y + height}
      L ${x},${y + height}
      Z
    `;
  };

  const bars = barsGroup.selectAll('path.bar')
    .data(data.points);

  bars.enter()
    .append('path')
    .attr('class', 'bar')
    .merge(bars as any)
    .attr('d', (d, i) => {
      const barX = period === 'month' || period === 'week'
        ? (xScale as d3.ScaleBand<string>)(d.timestamp || '') || 0
        : ((xScale as d3.ScaleLinear<number, number>)(i) || 0) - barWidth / 2;
      const barY = yScale(d.value);
      const currentBarWidth = period === 'month' || period === 'week'
        ? (xScale as d3.ScaleBand<string>).bandwidth()
        : barWidth;
      const barHeight = chartHeight - barY;
      return createRectPath(barX, barY, currentBarWidth, barHeight);
    })
    .attr('fill', d => {
      // Use hover color if this is the hovered point
      if (context.hoveredPoint && 
          context.hoveredPoint.timestamp === d.timestamp &&
          context.hoveredPoint.value === d.value) {
        return config.colors.hover || '#ff69b4';
      }
      // Use gradient if enabled, otherwise use theme color
      if (useGradient) {
        const gradientId = config.colors.gradient?.id || 'octopus-pink-gradient';
        return `url(#${gradientId})`;
      }
      return config.colors.primary;
    })
    .style('cursor', 'help')
    .each(function(d) {
      // Use title element instead of title attribute for better browser compatibility
      d3.select(this).select('title').remove(); // Remove old title if exists
      d3.select(this).append('title').text(formatTooltipText(d, config.locale || 'en-US'));
    })
    .on('mouseenter', function(event, d) {
      context.setHoveredPoint(d);
      
      // Change color to hover color
      d3.select(this)
        .transition()
        .duration(200)
        .attr('fill', config.colors.hover || '#ff69b4');
    })
    .on('mouseleave', function() {
      context.setHoveredPoint(null);
      
      // Restore original color
      d3.select(this)
        .transition()
        .duration(150) // Match Victory.js tooltip fade timing
        .attr('fill', config.colors.primary);
    });

  bars.exit().remove();

  // Draw moving average if enabled
  if (options.showMovingAverage && options.movingAverageDays) {
    const movingAvg = calculateMovingAverage(values, options.movingAverageDays);
    // Filter out null values and create points starting from windowSize - 1 position
    // This ensures moving average starts at the correct offset without zero values at the beginning
    const movingAvgPoints: DataPoint[] = [];
    const windowSize = options.movingAverageDays;
    
    for (let i = windowSize - 1; i < movingAvg.length; i++) {
      const value = movingAvg[i];
      if (value !== null) {
        movingAvgPoints.push({
          x: 0,
          y: 0,
          value: value,
          timestamp: timestamps[i]
        });
      }
    }

    if (movingAvgPoints.length > 0) {
      const movingAvgLine = d3.line<DataPoint>()
        .x((d, i) => {
          // Find the original index in timestamps array for correct X position
          const timestamp = d.timestamp || '';
          const originalIndex = timestamps.indexOf(timestamp);
          return getXCoordinate(xScale, timestamp, originalIndex, period);
        })
        .y(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

      contentGroup.append('path')
        .datum(movingAvgPoints)
        .attr('class', 'line moving-average')
        .attr('d', movingAvgLine)
        .attr('fill', 'none')
        .attr('stroke', config.colors.accent)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5');
    }
  }

  // Handle animations if enabled
  if (options.animation?.enabled) {
    const animation = options.animation;
    const duration = animation.duration || 2000; // Match Victory.js timing (2000ms)
    bars
      .attr('d', (d, i) => {
        const barX = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>)(d.timestamp || '') || 0
          : ((xScale as d3.ScaleLinear<number, number>)(i) || 0) - barWidth / 2;
        const currentBarWidth = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>).bandwidth()
          : barWidth;
        return createRectPath(barX, chartHeight, currentBarWidth, 0);
      })
      .transition()
      .duration(duration)
      .delay((d, i) => (animation.delay || 0) + i * 50) // Fixed 50ms per bar (Victory.js pattern)
      .ease(d3.easeExpOut)
      .attr('d', (d, i) => {
        const barX = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>)(d.timestamp || '') || 0
          : ((xScale as d3.ScaleLinear<number, number>)(i) || 0) - barWidth / 2;
        const barY = yScale(d.value);
        const currentBarWidth = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>).bandwidth()
          : barWidth;
        const barHeight = chartHeight - barY;
        return createRectPath(barX, barY, currentBarWidth, barHeight);
      });
  }
}
