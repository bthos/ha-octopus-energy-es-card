/**
 * D3.js Stacked Area Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  StackedData,
  StackedAreaOptions,
  DataPoint,
  D3ChartContext
} from './chart-types';
import { formatTooltipText } from './chart-utils';
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

export async function renderD3StackedAreaChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  stackedData: StackedData,
  options: StackedAreaOptions,
  context: D3ChartContext
): Promise<void> {
  const { padding } = config;
  const { chartWidth, chartHeight } = getChartDimensions(config);

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.area-stack').remove();

  // Create main content group
  const contentGroup = createContentGroup(svg, padding);

  // Prepare data
  const timestamps = stackedData.timestamps || [];
  const period = options.period || 'month';

  if (stackedData.layers.length === 0 || timestamps.length === 0) {
    return;
  }

  // Setup scales
  const xScale = createXScale(timestamps, chartWidth, period);
  const yScale = createYScale(stackedData.maxValue, chartHeight);

  context.setXScale(xScale);
  context.setYScale(yScale);

  // Create grid lines
  createGridLines(contentGroup, yScale, chartWidth, config);

  // Create axes
  createXAxis(svg, xScale, timestamps, period, config);
  createYAxis(svg, yScale, config);

  // Prepare stacked data using d3.stack
  // Create data array for stacking - each element is an array of values for all layers at that timestamp
  const dataForStacking: { [key: string]: number }[] = Array.from({ length: timestamps.length }, (_, i) => {
    const obj: { [key: string]: number } = {};
    stackedData.layers.forEach((layer, layerIdx) => {
      obj[layerIdx.toString()] = layer.data[i] || 0;
    });
    return obj;
  });

  const stack = d3.stack<{ [key: string]: number }>()
    .keys(stackedData.layers.map((_, i) => i.toString()))
    .value((d, key) => d[key] || 0)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

  const stacked = stack(dataForStacking);

  // Create area generator
  const area = d3.area<d3.SeriesPoint<{ [key: string]: number }>>()
    .x((d, i) => getXCoordinate(xScale, timestamps[i], i, period))
    .y0(d => yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(d3.curveMonotoneX);

  // Draw stacked areas (bottom to top)
  const areasGroup = contentGroup.append('g').attr('class', 'areas');

  stacked.forEach((layerData, layerIndex) => {
    const layer = stackedData.layers[layerIndex];
    if (!layer) return;

    areasGroup.append('path')
      .datum(layerData)
      .attr('class', `area-stack layer-${layerIndex}`)
      .attr('d', area as any)
      .attr('fill', layer.color)
      .attr('fill-opacity', layer.opacity || 0.7)
      .attr('stroke', 'none')
      .style('cursor', 'help')
      .on('mouseenter', function(event, d) {
        // Find the point being hovered
        const [x] = d3.pointer(event, contentGroup.node());
        let closestIndex = 0;
        let minDistance = Infinity;

        layerData.forEach((point, i) => {
          if (i < timestamps.length) {
            const pointX = getXCoordinate(xScale, timestamps[i], i, period);
            const distance = Math.abs(x - pointX);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = i;
            }
          }
        });

        if (closestIndex < timestamps.length) {
          const point: DataPoint = {
            x: 0,
            y: 0,
            value: layer.data[closestIndex],
            timestamp: timestamps[closestIndex]
          };
          context.setHoveredPoint(point);
          // Update title dynamically - use title element for better browser compatibility
          d3.select(this).select('title').remove(); // Remove old title if exists
          d3.select(this).append('title').text(formatTooltipText(point, config.locale || 'en-US'));
        }
      })
      .on('mouseleave', function() {
        context.setHoveredPoint(null);
        d3.select(this).select('title').remove();
      })
      .on('mousemove', function(event, d) {
        const [x] = d3.pointer(event, contentGroup.node());
        let closestIndex = 0;
        let minDistance = Infinity;

        layerData.forEach((point, i) => {
          if (i < timestamps.length) {
            const pointX = getXCoordinate(xScale, timestamps[i], i, period);
            const distance = Math.abs(x - pointX);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = i;
            }
          }
        });

        if (closestIndex < timestamps.length) {
          const point: DataPoint = {
            x: 0,
            y: 0,
            value: layer.data[closestIndex],
            timestamp: timestamps[closestIndex]
          };
          // Update title dynamically - use title element for better browser compatibility
          d3.select(this).select('title').remove(); // Remove old title if exists
          d3.select(this).append('title').text(formatTooltipText(point, config.locale || 'en-US'));
        }
      });
  });

  // Handle animations
  if (options.animation?.enabled) {
    const animation = options.animation;
    areasGroup.selectAll('path.area-stack')
      .attr('opacity', 0)
      .transition()
      .duration(animation.duration || 800)
      .delay((d, i) => (animation.delay || 0) + i * 100)
      .ease(d3.easeExpOut)
      .attr('opacity', (d, i) => stackedData.layers[i]?.opacity || 0.7);
  }
}
