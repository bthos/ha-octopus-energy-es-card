/**
 * D3.js Bar Chart rendering implementation
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  BarChartOptions,
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
  setBarWidth: (width: number) => void;
}

export async function renderD3BarChart(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  config: ChartConfig,
  data: ChartData,
  options: BarChartOptions,
  context: D3ChartContext
): Promise<void> {
  const { width, height, padding } = config;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Clear previous content
  svg.selectAll('g.chart-content, g.axis, g.grid, path.bar').remove();

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
    // Use band scale for categorical data (days/weeks)
    xScale = d3.scaleBand<string>()
      .domain(timestamps)
      .range([0, chartWidth])
      .padding(0.4); // Space between bars
  } else {
    // Use linear scale for continuous data (hours)
    xScale = d3.scaleLinear<number, number>()
      .domain([0, timestamps.length - 1])
      .range([0, chartWidth]);
  }

  const yScale = d3.scaleLinear<number, number>()
    .domain([0, data.maxValue * 1.1]) // Add 10% padding at top
    .range([chartHeight, 0]);

  // Store scales in context
  context.setXScale(xScale);
  context.setYScale(yScale);

  // Calculate bar width
  const barWidth = options.barWidth || (period === 'month' || period === 'week' 
    ? (xScale as d3.ScaleBand<string>).bandwidth()
    : chartWidth / values.length * 0.6);
  context.setBarWidth(barWidth);

  // Create grid lines group
  const gridGroup = contentGroup.append('g').attr('class', 'grid');
  
  // Generate grid lines (horizontal)
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

  // Create axes group
  const xAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-x')
    .attr('transform', `translate(${padding.left}, ${height - padding.bottom})`);

  const yAxisGroup = svg
    .append('g')
    .attr('class', 'axis axis-y')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);

  // Create X-axis
  if (period === 'month' || period === 'week') {
    const xAxis = d3.axisBottom(xScale as d3.ScaleBand<string>)
      .tickFormat((d) => {
        return formatDate(d as string, period);
      });
    
    // For month view, show only odd-numbered days
    if (period === 'month') {
      xAxis.tickValues(timestamps.filter((ts, i) => {
        const date = new Date(ts);
        return date.getDate() % 2 === 1; // Odd days only
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

  // Create Y-axis
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

  // Draw bars with rounded top corners
  const barsGroup = contentGroup.append('g').attr('class', 'bars');

  // Helper function to create rounded rectangle path (top corners only)
  const createRoundedRectPath = (
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ): string => {
    const topY = y;
    const bottomY = y + height;
    return `
      M ${x + radius},${topY}
      L ${x + width - radius},${topY}
      Q ${x + width},${topY} ${x + width},${topY + radius}
      L ${x + width},${bottomY}
      L ${x},${bottomY}
      L ${x},${topY + radius}
      Q ${x},${topY} ${x + radius},${topY}
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
      const cornerRadius = Math.min(currentBarWidth * 0.15, 4); // Rounded top corners like Octopus Energy
      return createRoundedRectPath(barX, barY, currentBarWidth, barHeight, cornerRadius);
    })
    .attr('fill', d => {
      // Use hover color if this is the hovered point
      if (context.hoveredPoint && 
          context.hoveredPoint.timestamp === d.timestamp &&
          context.hoveredPoint.value === d.value) {
        return config.colors.hover || '#ff69b4';
      }
      return config.colors.primary;
    })
    .style('cursor', 'pointer')
    .on('mouseenter', function(event, d) {
      context.setHoveredPoint(d);
      
      // Change color to hover color
      d3.select(this)
        .transition()
        .duration(200)
        .attr('fill', config.colors.hover || '#ff69b4');

      // Show tooltip
      const [x, y] = d3.pointer(event, svg.node());
      context.showTooltip(x, y, d);
    })
    .on('mouseleave', function() {
      context.setHoveredPoint(null);
      
      // Restore original color
      d3.select(this)
        .transition()
        .duration(200)
        .attr('fill', config.colors.primary);

      context.hideTooltip();
    })
    .on('mousemove', function(event, d) {
      // Update tooltip position
      const [x, y] = d3.pointer(event, svg.node());
      context.showTooltip(x, y, d);
    });

  bars.exit().remove();

  // Handle animations if enabled
  const animConfig = options.animation;
  if (animConfig?.enabled) {
    const duration = animConfig.duration || 800;
    bars
      .attr('d', (d, i) => {
        const barX = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>)(d.timestamp || '') || 0
          : ((xScale as d3.ScaleLinear<number, number>)(i) || 0) - barWidth / 2;
        const barY = chartHeight; // Start from bottom
        const currentBarWidth = period === 'month' || period === 'week'
          ? (xScale as d3.ScaleBand<string>).bandwidth()
          : barWidth;
        const barHeight = 0; // Start with zero height
        const cornerRadius = Math.min(currentBarWidth * 0.15, 4);
        return createRoundedRectPath(barX, barY, currentBarWidth, barHeight, cornerRadius);
      })
      .transition()
      .duration(duration)
      .delay((d, i) => (animConfig.delay || 0) + i * duration / data.points.length)
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
        const cornerRadius = Math.min(currentBarWidth * 0.15, 4);
        return createRoundedRectPath(barX, barY, currentBarWidth, barHeight, cornerRadius);
      });
  }
}
