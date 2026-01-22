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
  setBarWidth: (width: number) => void;
}

/**
 * Format tooltip text for browser tooltip
 */
function formatTooltipText(point: DataPoint, language: string = 'en'): string {
  const locale = language === 'es' ? 'es-ES' : language === 'be' ? 'be-BY' : 'en-US';
  const valueStr = point.value.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const date = point.timestamp ? new Date(point.timestamp) : null;
  let dateStr = 'N/A';
  if (date) {
    const monthNames = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    dateStr = `${day} ${month}`;
  }

  return `${valueStr} kWh\n${dateStr}`;
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
    const topY = y;
    const bottomY = y + height;
    return `
      M ${x},${topY}
      L ${x + width},${topY}
      L ${x + width},${bottomY}
      L ${x},${bottomY}
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
    .style('cursor', 'pointer')
    .attr('title', (d) => formatTooltipText(d, config.language))
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

  // Handle animations if enabled
  const animConfig = options.animation;
  if (animConfig?.enabled) {
    const duration = animConfig.duration || 2000; // Match Victory.js timing (2000ms)
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
        return createRectPath(barX, barY, currentBarWidth, barHeight);
      })
      .transition()
      .duration(duration)
      .delay((d, i) => (animConfig.delay || 0) + i * 50) // Fixed 50ms per bar (Victory.js pattern)
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
