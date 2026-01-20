/**
 * Bar Chart rendering implementation
 */

import type {
  ChartConfig,
  ChartData,
  BarChartOptions,
  DataPoint
} from './chart-types';
import { ChartAnimator } from './chart-animator';
import { ChartRenderer } from './chart-renderer';
import {
  calculatePoints,
  generateYAxisLabels,
  generateXAxisLabels,
  generateGridLines,
  formatDate,
  formatValue
} from './chart-utils';

export async function renderBarChart(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  renderer: ChartRenderer,
  animator: ChartAnimator,
  data: ChartData,
  options?: BarChartOptions
): Promise<void> {
  const {
    showCostOverlay = false,
    costData,
    barWidth,
    animation
  } = options || {};

  const animConfig = animation || { enabled: false };
  const duration = animConfig.duration || 800;
  const easing = animConfig.easing || 'easeOut';

  // Clear canvas
  renderer.clear();

  // Calculate points
  const timestamps = data.points.map(p => p.timestamp || '');
  const values = data.points.map(p => p.value);
  const points = calculatePoints(
    values,
    config,
    data.minValue,
    data.maxValue,
    timestamps
  );

  // Generate axes labels
  const yAxisLabels = generateYAxisLabels(
    data.minValue,
    data.maxValue,
    5,
    config
  );
  const period = options?.period || 'month';
  const xAxisLabels = generateXAxisLabels(points, (dateStr) => formatDate(dateStr, period), period);
  const gridLines = generateGridLines(yAxisLabels, config);

  // Draw grid lines
  renderer.drawGridLines(gridLines, config.colors.grid);

  // Draw axes
  renderer.drawAxes(yAxisLabels, xAxisLabels, config.colors);

  // Draw Y-axis labels (left)
  renderer.drawYAxisLabels(
    yAxisLabels,
    config.colors.text,
    (v) => formatValue(v, 1),
    ' kWh'
  );

  // Draw X-axis labels
  renderer.drawXAxisLabels(xAxisLabels, config.colors.text);

  // Calculate bar width
  const { width, padding } = config;
  const chartWidth = width - padding.left - padding.right;
  const calculatedBarWidth = barWidth || Math.max((chartWidth / points.length) * 0.6, 2);

  // Draw bars with animation
  await drawBars(
    ctx,
    config,
    animator,
    points,
    calculatedBarWidth,
    config.colors.primary,
    animConfig
  );

  // Draw cost overlay (if enabled)
  if (showCostOverlay && costData) {
    const costYAxisLabels = generateYAxisLabels(
      costData.minValue,
      costData.maxValue,
      5,
      config
    );
    renderer.drawYAxisLabelsRight(
      costYAxisLabels,
      config.colors.accent,
      (v) => formatValue(v, 2),
      '€'
    );
    renderer.drawRightYAxis(costYAxisLabels, config.colors.accent);

    const costValues = costData.points.map(p => p.value);
    const costPoints = calculatePoints(
      costValues,
      config,
      costData.minValue,
      costData.maxValue,
      timestamps
    );

    // Draw cost line
    await drawLine(
      ctx,
      config,
      animator,
      costPoints,
      config.colors.accent,
      2,
      { ...animConfig, delay: (animConfig.delay || 0) + duration * 0.3 },
      [5, 5] // dash array
    );

    // Draw cost data points
    await drawDataPoints(
      ctx,
      animator,
      costPoints,
      config.colors.accent,
      config.colors.background,
      { ...animConfig, delay: (animConfig.delay || 0) + duration * 0.3 }
    );
  }

  // Draw legend
  if (showCostOverlay && costData) {
    renderer.drawLegend(
      [
        {
          label: 'Consumption',
          color: config.colors.primary,
          type: 'rect'
        },
        {
          label: 'Cost',
          color: config.colors.accent,
          type: 'line',
          dashArray: [5, 5]
        }
      ],
      config.width - config.padding.right - 100,
      config.padding.top + 5
    );
  }
}

/**
 * Draw rounded rectangle (like Octopus Energy España style)
 */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

async function drawBars(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  animator: ChartAnimator,
  points: DataPoint[],
  barWidth: number,
  color: string,
  animConfig: { enabled: boolean; duration?: number; easing?: string; delay?: number }
): Promise<void> {
  if (points.length === 0) return;

  const { height, padding } = config;
  const bottomY = height - padding.bottom;
  const cornerRadius = Math.min(barWidth * 0.15, 4); // Rounded corners like Octopus Energy

  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 1.0; // Full opacity like Octopus Energy

  if (animConfig.enabled) {
    const duration = animConfig.duration || 800;
    const easing = (animConfig.easing || 'easeOut') as any;
    const delay = animConfig.delay || 0;
    const barDelay = duration / points.length;

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      const barX = point.x - barWidth / 2;
      const barTop = point.y;
      const maxHeight = bottomY - barTop;

      await animator.animate(
        0,
        1,
        duration * 0.3,
        easing,
        (progress) => {
          const currentHeight = maxHeight * progress;
          const currentTop = bottomY - currentHeight;
          
          // Draw rounded rectangle
          drawRoundedRect(ctx, barX, currentTop, barWidth, currentHeight, cornerRadius);
        },
        delay + i * barDelay
      );
    }
  } else {
    points.forEach(point => {
      const barX = point.x - barWidth / 2;
      const barTop = point.y;
      const barHeight = bottomY - barTop;

      // Draw rounded rectangle
      drawRoundedRect(ctx, barX, barTop, barWidth, barHeight, cornerRadius);
    });
  }

  ctx.restore();
}

async function drawLine(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  animator: ChartAnimator,
  points: DataPoint[],
  color: string,
  lineWidth: number,
  animConfig: { enabled: boolean; duration?: number; easing?: string; delay?: number },
  dashArray?: number[]
): Promise<void> {
  if (points.length === 0) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  if (dashArray) {
    ctx.setLineDash(dashArray);
  } else {
    ctx.setLineDash([]);
  }

  if (animConfig.enabled && points.length > 1) {
    const duration = animConfig.duration || 800;
    const easing = (animConfig.easing || 'easeOut') as any;
    const delay = animConfig.delay || 0;

    await animator.animate(
      0,
      1,
      duration,
      easing,
      (progress) => {
        const endIndex = Math.floor(progress * (points.length - 1));
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i <= endIndex; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
      },
      delay
    );
  } else {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  }

  ctx.restore();
}

async function drawDataPoints(
  ctx: CanvasRenderingContext2D,
  animator: ChartAnimator,
  points: DataPoint[],
  fillColor: string,
  strokeColor: string,
  animConfig: { enabled: boolean; duration?: number; easing?: string; delay?: number }
): Promise<void> {
  if (points.length === 0) return;

  ctx.save();

  if (animConfig.enabled) {
    const duration = animConfig.duration || 800;
    const easing = (animConfig.easing || 'easeOut') as any;
    const delay = animConfig.delay || 0;
    const pointDelay = duration / points.length;

    for (let i = 0; i < points.length; i++) {
      await animator.animate(
        0,
        1,
        duration * 0.2,
        easing,
        (progress) => {
          const point = points[i];
          const radius = 3 * progress;
          const alpha = progress;

          ctx.globalAlpha = alpha;
          ctx.fillStyle = fillColor;
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 2;

          ctx.beginPath();
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        },
        delay + i * pointDelay
      );
    }
  } else {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;

    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  }

  ctx.restore();
}
