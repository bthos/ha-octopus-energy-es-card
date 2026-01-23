/**
 * D3.js Line Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  LineChartOptions,
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
  getXCoordinate
} from './chart-render-utils';

export async function renderD3LineChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  data: ChartData,
  options: LineChartOptions,
  context: D3ChartContext
): Promise<void> {
  const { padding } = config;
  const { chartWidth, chartHeight } = getChartDimensions(config);

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.line, path.area, circle.point').remove();

  // Create main content group
  const contentGroup = createContentGroup(svg, padding);

  // Prepare data
  const timestamps = data.points.map(p => p.timestamp || '');
  const values = data.points.map(p => p.value);
  const period = options.period || 'month';

  // Setup scales
  const xScale = createXScale(timestamps, chartWidth, period);
  const yScale = createYScale(data.maxValue, chartHeight);

  context.setXScale(xScale);
  context.setYScale(yScale);

  // Create grid lines
  createGridLines(contentGroup, yScale, chartWidth, config);

  // Create axes
  createXAxis(svg, xScale, timestamps, period, config);
  createYAxis(svg, yScale, config);

  // Create line generator
  const line = d3.line<DataPoint>()
    .x((d, i) => getXCoordinate(xScale, d.timestamp, i, period))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);

  // Draw area if enabled
  if (options.showArea) {
    const area = d3.area<DataPoint>()
      .x((d, i) => getXCoordinate(xScale, d.timestamp, i, period))
      .y0(chartHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    contentGroup.append('path')
      .datum(data.points)
      .attr('class', 'area')
      .attr('d', area)
      .attr('fill', config.colors.primary)
      .attr('fill-opacity', 0.2)
      .attr('stroke', 'none');
  }

  // Draw line
  const linePath = contentGroup.append('path')
    .datum(data.points)
    .attr('class', 'line')
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', config.colors.primary)
    .attr('stroke-width', 2);

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

  // Draw data points
  const pointsGroup = contentGroup.append('g').attr('class', 'points');

  const points = pointsGroup.selectAll('circle.point')
    .data(data.points);

  points.enter()
    .append('circle')
    .attr('class', 'point')
    .merge(points as any)
    .attr('cx', (d, i) => getXCoordinate(xScale, d.timestamp, i, period))
    .attr('cy', d => yScale(d.value))
    .attr('r', d => {
      if (context.hoveredPoint && 
          context.hoveredPoint.timestamp === d.timestamp &&
          context.hoveredPoint.value === d.value) {
        return 6;
      }
      return 3;
    })
    .attr('fill', d => {
      if (context.hoveredPoint && 
          context.hoveredPoint.timestamp === d.timestamp &&
          context.hoveredPoint.value === d.value) {
        return config.colors.hover || '#ff69b4';
      }
      return config.colors.primary;
    })
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .style('cursor', 'help')
    .each(function(d) {
      // Use title element instead of title attribute for better browser compatibility
      d3.select(this).select('title').remove(); // Remove old title if exists
      d3.select(this).append('title').text(formatTooltipText(d, config.locale || 'en-US'));
    })
    .on('mouseenter', function(event, d) {
      context.setHoveredPoint(d);
      d3.select(this)
        .transition()
        .duration(150) // Match Victory.js tooltip fade timing
        .attr('r', 6)
        .attr('fill', config.colors.hover || '#ff69b4');
    })
    .on('mouseleave', function() {
      context.setHoveredPoint(null);
      d3.select(this)
        .transition()
        .duration(200)
        .attr('r', 3)
        .attr('fill', config.colors.primary);
    });

  points.exit().remove();

  // Handle animations
  if (options.animation?.enabled) {
    const totalLength = (linePath.node() as SVGPathElement)?.getTotalLength() || 0;
    linePath
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(options.animation.duration || 2000) // Match Victory.js timing (2000ms)
      .ease(d3.easeExpOut)
      .attr('stroke-dashoffset', 0);
  }
}
