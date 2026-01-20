/**
 * Line Chart rendering implementation
 */

import type {
  ChartConfig,
  ChartData,
  LineChartOptions,
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
  formatValue,
  calculateMovingAverage
} from './chart-utils';

export async function renderLineChart(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  renderer: ChartRenderer,
  animator: ChartAnimator,
  data: ChartData,
  options?: LineChartOptions
): Promise<void> {
  const {
    showArea = true,
    showMovingAverage = false,
    movingAverageDays = 7,
    showCostAxis = false,
    costData,
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

  // Draw area under line (if enabled)
  if (showArea && points.length > 0) {
    await drawArea(ctx, config, animator, points, config.colors.primary, animConfig);
  }

  // Draw main line
  await drawLine(ctx, config, animator, points, config.colors.primary, 2, animConfig);

  // Draw moving average line (if enabled)
  if (showMovingAverage && points.length > 0) {
    const movingAvg = calculateMovingAverage(values, movingAverageDays);
    const movingAvgPoints = movingAvg
      .map((value, index) => {
        if (value === null) return null;
        const point = calculatePoints(
          [value],
          config,
          data.minValue,
          data.maxValue,
          [timestamps[index]]
        )[0];
        return point;
      })
      .filter((p): p is DataPoint => p !== null);

    if (movingAvgPoints.length > 0) {
      await drawLine(
        ctx,
        config,
        animator,
        movingAvgPoints,
        config.colors.info,
        2,
        { ...animConfig, delay: (animConfig.delay || 0) + duration * 0.3 },
        [3, 3] // dash array
      );
    }
  }

  // Draw data points
  await drawDataPoints(ctx, animator, points, config.colors.primary, config.colors.background, animConfig);

  // Draw cost axis and line (if enabled)
  if (showCostAxis && costData) {
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

    await drawLine(
      ctx,
      config,
      animator,
      costPoints,
      config.colors.accent,
      2,
      animConfig,
      [5, 5] // dash array
    );

    await drawDataPoints(
      ctx,
      animator,
      costPoints,
      config.colors.accent,
      config.colors.background,
      animConfig
    );
  }

  // Draw legend
  const legendItems: Array<{
    label: string;
    color: string;
    type: 'line' | 'rect' | 'circle';
    dashArray?: number[];
  }> = [];

  if (showCostAxis && costData) {
    legendItems.push(
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
    );
  }

  if (showMovingAverage) {
    legendItems.push({
      label: `${movingAverageDays}-day avg`,
      color: config.colors.info,
      type: 'line',
      dashArray: [3, 3]
    });
  }

  if (legendItems.length > 0) {
    renderer.drawLegend(
      legendItems,
      config.width - config.padding.right - 120,
      config.padding.top + 5
    );
  }
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

async function drawArea(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  animator: ChartAnimator,
  points: DataPoint[],
  color: string,
  animConfig: { enabled: boolean; duration?: number; easing?: string; delay?: number }
): Promise<void> {
  if (points.length === 0) return;

  const { height, padding } = config;
  const bottomY = height - padding.bottom;

  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.2;

  if (animConfig.enabled) {
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
        ctx.moveTo(points[0].x, bottomY);
        ctx.lineTo(points[0].x, points[0].y);
        for (let i = 1; i <= endIndex; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.lineTo(points[endIndex].x, bottomY);
        ctx.closePath();
        ctx.fill();
      },
      delay
    );
  } else {
    ctx.beginPath();
    ctx.moveTo(points[0].x, bottomY);
    ctx.lineTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, bottomY);
    ctx.closePath();
    ctx.fill();
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
