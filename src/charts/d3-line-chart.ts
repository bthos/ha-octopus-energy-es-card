/**
 * D3.js Line Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  LineChartOptions,
  DataPoint
} from './chart-types';
import { formatDate, calculateMovingAverage } from './chart-utils';

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

export async function renderD3LineChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  data: ChartData,
  options: LineChartOptions,
  context: D3ChartContext
): Promise<void> {
  const { width, height, padding } = config;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.line, path.area, circle.point').remove();

  // Create main content group
  const contentGroup = svg
    .append('g')
    .attr('class', 'chart-content')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);

  // Prepare data
  const timestamps = data.points.map(p => p.timestamp || '');
  const values = data.points.map(p => p.value);

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
    .domain([0, data.maxValue * 1.1])
    .range([chartHeight, 0]);

  context.setXScale(xScale);
  context.setYScale(yScale);

  // Create grid lines group
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
    .tickFormat(d => `${d} kWh`);

  yAxisGroup.call(yAxis)
    .selectAll('text')
    .attr('fill', config.colors.text)
    .attr('font-size', '13px')
    .attr('font-family', config.fontFamily || 'Roboto, sans-serif')
    .attr('opacity', 0.9);

  yAxisGroup.selectAll('line, path')
    .attr('stroke', config.colors.axis)
    .attr('opacity', 0.2);

  // Create line generator
  const line = d3.line<DataPoint>()
    .x((d, i) => {
      if (period === 'month' || period === 'week') {
        const bandScale = xScale as d3.ScaleBand<string>;
        const center = bandScale(d.timestamp || '');
        return center ? center + bandScale.bandwidth() / 2 : 0;
      } else {
        return (xScale as d3.ScaleLinear<number, number>)(i);
      }
    })
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);

  // Draw area if enabled
  if (options.showArea) {
    const area = d3.area<DataPoint>()
      .x((d, i) => {
        if (period === 'month' || period === 'week') {
          const bandScale = xScale as d3.ScaleBand<string>;
          const center = bandScale(d.timestamp || '');
          return center ? center + bandScale.bandwidth() / 2 : 0;
        } else {
          return (xScale as d3.ScaleLinear<number, number>)(i);
        }
      })
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
    const movingAvgPoints: DataPoint[] = movingAvg.map((value, i) => ({
      x: 0,
      y: 0,
      value: value || 0,
      timestamp: timestamps[i]
    }));

    const movingAvgLine = d3.line<DataPoint>()
      .x((d, i) => {
        if (period === 'month' || period === 'week') {
          const bandScale = xScale as d3.ScaleBand<string>;
          const center = bandScale(d.timestamp || '');
          return center ? center + bandScale.bandwidth() / 2 : 0;
        } else {
          return (xScale as d3.ScaleLinear<number, number>)(i);
        }
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

  // Draw data points
  const pointsGroup = contentGroup.append('g').attr('class', 'points');

  const points = pointsGroup.selectAll('circle.point')
    .data(data.points);

  points.enter()
    .append('circle')
    .attr('class', 'point')
    .merge(points as any)
    .attr('cx', (d, i) => {
      if (period === 'month' || period === 'week') {
        const bandScale = xScale as d3.ScaleBand<string>;
        const center = bandScale(d.timestamp || '');
        return center ? center + bandScale.bandwidth() / 2 : 0;
      } else {
        return (xScale as d3.ScaleLinear<number, number>)(i);
      }
    })
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
    .style('cursor', 'pointer')
    .on('mouseenter', function(event, d) {
      context.setHoveredPoint(d);
      d3.select(this)
        .transition()
        .duration(150) // Match Victory.js tooltip fade timing
        .attr('r', 6)
        .attr('fill', config.colors.hover || '#ff69b4');
      
      const [x, y] = d3.pointer(event, svg.node());
      context.showTooltip(x, y, d);
    })
    .on('mouseleave', function() {
      context.setHoveredPoint(null);
      d3.select(this)
        .transition()
        .duration(200)
        .attr('r', 3)
        .attr('fill', config.colors.primary);
      
      context.hideTooltip();
    })
    .on('mousemove', function(event, d) {
      const [x, y] = d3.pointer(event, svg.node());
      context.showTooltip(x, y, d);
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
