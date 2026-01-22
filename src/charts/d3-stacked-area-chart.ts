/**
 * D3.js Stacked Area Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  StackedData,
  StackedAreaOptions,
  DataPoint
} from './chart-types';
import { formatDate } from './chart-utils';

interface D3ChartContext {
  xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number> | null;
  yScale: d3.ScaleLinear<number, number> | null;
  setXScale: (scale: d3.ScaleBand<string> | d3.ScaleLinear<number, number>) => void;
  setYScale: (scale: d3.ScaleLinear<number, number>) => void;
  hoveredPoint: DataPoint | null;
  setHoveredPoint: (point: DataPoint | null) => void;
  showTooltip: (x: number, y: number, point: DataPoint) => void;
  hideTooltip: () => void;
}

export async function renderD3StackedAreaChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  stackedData: StackedData,
  options: StackedAreaOptions,
  context: D3ChartContext
): Promise<void> {
  const { width, height, padding } = config;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.area-stack').remove();

  // Create main content group
  const contentGroup = svg
    .append('g')
    .attr('class', 'chart-content')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);

  // Prepare data
  const timestamps = stackedData.timestamps || [];
  const layers = stackedData.layers;

  if (layers.length === 0 || timestamps.length === 0) {
    return;
  }

  // Setup scales
  let xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number>;
  const period = options.period || 'month';

  if (period === 'month' || period === 'week') {
    xScale = d3.scaleBand<string>()
      .domain(timestamps)
      .range([0, chartWidth])
      .padding(0.1);
  } else {
    xScale = d3.scaleLinear<number, number>()
      .domain([0, timestamps.length - 1])
      .range([0, chartWidth]);
  }

  const yScale = d3.scaleLinear<number, number>()
    .domain([0, stackedData.maxValue * 1.1])
    .range([chartHeight, 0]);

  context.setXScale(xScale);
  context.setYScale(yScale);

  // Create grid lines
  const gridGroup = contentGroup.append('g').attr('class', 'grid');
  
  const yTicks = yScale.ticks(5);
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
    .attr('opacity', 0.2);

  // Create axes
  const xAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-x')
    .attr('transform', `translate(${padding.left}, ${height - padding.bottom})`);

  const yAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-y')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);

  if (period === 'month' || period === 'week') {
    const xAxis = d3.axisBottom(xScale as d3.ScaleBand<string>)
      .tickFormat((d) => formatDate(d as string, period));
    
    if (period === 'month') {
      xAxis.tickValues(timestamps.filter((ts, i) => {
        const date = new Date(ts);
        return date.getDate() % 2 === 1;
      }));
    }
    
    xAxisGroup.call(xAxis);
  } else {
    const xAxis = d3.axisBottom(xScale as d3.ScaleLinear<number, number>)
      .ticks(Math.min(timestamps.length, 12))
      .tickFormat((d, i) => {
        const idx = Math.round(d as number);
        if (idx >= 0 && idx < timestamps.length) {
          return formatDate(timestamps[idx], period);
        }
        return '';
      });
    
    xAxisGroup.call(xAxis);
  }

  xAxisGroup.selectAll('text')
    .attr('fill', config.colors.text)
    .attr('font-size', '13px')
    .attr('font-family', config.fontFamily || 'Roboto, sans-serif')
    .attr('opacity', 0.9);

  xAxisGroup.selectAll('line, path')
    .attr('stroke', config.colors.axis)
    .attr('opacity', 0.2);

  const yAxis = d3.axisLeft(yScale)
    .ticks(5)
    .tickFormat(d => String(d));

  yAxisGroup.call(yAxis)
    .selectAll('text')
    .attr('fill', config.colors.text)
    .attr('font-size', '13px')
    .attr('font-family', config.fontFamily || 'Roboto, sans-serif')
    .attr('opacity', 0.9);

  yAxisGroup.selectAll('line, path')
    .attr('stroke', config.colors.axis)
    .attr('opacity', 0.2);

  // Add "kWh" label above Y-axis (once)
  svg.append('text')
    .attr('class', 'y-axis-label')
    .attr('x', padding.left - 10)
    .attr('y', padding.top - 10)
    .attr('text-anchor', 'end')
    .attr('fill', config.colors.text)
    .attr('font-size', '13px')
    .attr('font-family', config.fontFamily || 'Roboto, sans-serif')
    .attr('opacity', 0.9)
    .text('kWh');

  // Prepare stacked data using d3.stack
  // Create data array for stacking - each element is an array of values for all layers at that timestamp
  const dataForStacking: { [key: string]: number }[] = Array.from({ length: timestamps.length }, (_, i) => {
    const obj: { [key: string]: number } = {};
    layers.forEach((layer, layerIdx) => {
      obj[layerIdx.toString()] = layer.data[i] || 0;
    });
    return obj;
  });

  const stack = d3.stack<{ [key: string]: number }>()
    .keys(layers.map((_, i) => i.toString()))
    .value((d, key) => d[key] || 0)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

  const stacked = stack(dataForStacking);

  // Create area generator
  const area = d3.area<d3.SeriesPoint<{ [key: string]: number }>>()
    .x((d, i) => {
      if (period === 'month' || period === 'week') {
        const bandScale = xScale as d3.ScaleBand<string>;
        const center = bandScale(timestamps[i]);
        return center ? center + bandScale.bandwidth() / 2 : 0;
      } else {
        return (xScale as d3.ScaleLinear<number, number>)(i);
      }
    })
    .y0(d => yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(d3.curveMonotoneX);

  // Draw stacked areas (bottom to top)
  const areasGroup = contentGroup.append('g').attr('class', 'areas');

  stacked.forEach((layerData, layerIndex) => {
    const layer = layers[layerIndex];
    if (!layer) return;

    areasGroup.append('path')
      .datum(layerData)
      .attr('class', `area-stack layer-${layerIndex}`)
      .attr('d', area as any)
      .attr('fill', layer.color)
      .attr('fill-opacity', layer.opacity || 0.7)
      .attr('stroke', 'none')
      .style('cursor', 'pointer')
      .on('mouseenter', function(event, d) {
        // Find the point being hovered
        const [x] = d3.pointer(event, contentGroup.node());
        let closestIndex = 0;
        let minDistance = Infinity;

        layerData.forEach((point, i) => {
          if (i < timestamps.length) {
            const pointX = period === 'month' || period === 'week'
              ? (xScale as d3.ScaleBand<string>)(timestamps[i])! + (xScale as d3.ScaleBand<string>).bandwidth() / 2
              : (xScale as d3.ScaleLinear<number, number>)(i);
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
          const [absX, absY] = d3.pointer(event, svg.node());
          context.showTooltip(absX, absY, point);
        }
      })
      .on('mouseleave', function() {
        context.setHoveredPoint(null);
        context.hideTooltip();
      })
      .on('mousemove', function(event, d) {
        const [x] = d3.pointer(event, contentGroup.node());
        let closestIndex = 0;
        let minDistance = Infinity;

        layerData.forEach((point, i) => {
          if (i < timestamps.length) {
            const pointX = period === 'month' || period === 'week'
              ? (xScale as d3.ScaleBand<string>)(timestamps[i])! + (xScale as d3.ScaleBand<string>).bandwidth() / 2
              : (xScale as d3.ScaleLinear<number, number>)(i);
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
          const [absX, absY] = d3.pointer(event, svg.node());
          context.showTooltip(absX, absY, point);
        }
      });
  });

  // Handle animations
  const animConfig = options.animation;
  if (animConfig?.enabled) {
    areasGroup.selectAll('path.area-stack')
      .attr('opacity', 0)
      .transition()
      .duration(animConfig.duration || 800)
      .delay((d, i) => (animConfig.delay || 0) + i * 100)
      .ease(d3.easeExpOut)
      .attr('opacity', (d, i) => layers[i]?.opacity || 0.7);
  }
}
