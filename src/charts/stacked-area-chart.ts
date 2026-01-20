/**
 * Stacked Area Chart rendering implementation
 */

import type {
  ChartConfig,
  StackedData,
  StackedAreaOptions
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

export async function renderStackedAreaChart(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  renderer: ChartRenderer,
  animator: ChartAnimator,
  stackedData: StackedData,
  options?: StackedAreaOptions
): Promise<void> {
  const { animation } = options || {};
  const animConfig = animation || { enabled: false };
  const duration = animConfig.duration || 800;
  const easing = animConfig.easing || 'easeOut';

  // Clear canvas
  renderer.clear();

  const { layers, timestamps = [], minValue, maxValue } = stackedData;

  if (layers.length === 0) return;

  // Calculate cumulative values for each layer
  const cumulativeLayers: number[][] = [];
  let currentCumulative: number[] = new Array(layers[0].data.length).fill(0);

  for (const layer of layers) {
    const cumulative = layer.data.map((value, index) => {
      return currentCumulative[index] + value;
    });
    cumulativeLayers.push(cumulative);
    currentCumulative = cumulative;
  }

  // Generate axes labels
  const yAxisLabels = generateYAxisLabels(
    minValue,
    maxValue,
    5,
    config
  );

  // Calculate points for first layer to get X positions
  const firstLayerPoints = calculatePoints(
    cumulativeLayers[0] || [],
    config,
    minValue,
    maxValue,
    timestamps
  );

  const period = options?.period || 'month';
  const xAxisLabels = generateXAxisLabels(firstLayerPoints, (dateStr) => formatDate(dateStr, period), period);
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

  // Draw stacked areas from bottom to top
  let previousCumulative: number[] = new Array(layers[0].data.length).fill(0);

  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const cumulative = cumulativeLayers[i];
    const delay = animConfig.enabled ? (animConfig.delay || 0) + i * (duration * 0.2) : 0;

    await drawStackedArea(
      ctx,
      config,
      animator,
      cumulative,
      previousCumulative,
      timestamps,
      minValue,
      maxValue,
      layer.color,
      layer.opacity || 0.6,
      { ...animConfig, delay }
    );

    previousCumulative = cumulative;
  }

  // Draw legend
  const legendItems = layers.map((layer, index) => ({
    label: layer.label || `Layer ${index + 1}`,
    color: layer.color,
    type: 'rect' as const
  }));

  if (legendItems.length > 0) {
    renderer.drawLegend(
      legendItems,
      config.padding.left + 10,
      config.padding.top + 5
    );
  }
}

async function drawStackedArea(
  ctx: CanvasRenderingContext2D,
  config: ChartConfig,
  animator: ChartAnimator,
  topData: number[],
  bottomData: number[],
  timestamps: string[],
  minValue: number,
  maxValue: number,
  color: string,
  opacity: number,
  animConfig: { enabled: boolean; duration?: number; easing?: string; delay?: number }
): Promise<void> {
  if (topData.length === 0) return;

  const topPoints = calculatePoints(topData, config, minValue, maxValue, timestamps);
  const bottomPoints = calculatePoints(bottomData, config, minValue, maxValue, timestamps);

  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = opacity;

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
        ctx.beginPath();
        
        // Top path (animated)
        const animatedTopPoints = topPoints.map((point, index) => {
          const bottomY = bottomPoints[index]?.y || point.y;
          const range = point.y - bottomY;
          return {
            ...point,
            y: bottomY + range * progress
          };
        });

        ctx.moveTo(animatedTopPoints[0].x, bottomPoints[0]?.y || animatedTopPoints[0].y);
        ctx.lineTo(animatedTopPoints[0].x, animatedTopPoints[0].y);
        
        for (let i = 1; i < animatedTopPoints.length; i++) {
          ctx.lineTo(animatedTopPoints[i].x, animatedTopPoints[i].y);
        }

        // Bottom path (reverse)
        for (let i = bottomPoints.length - 1; i >= 0; i--) {
          ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
        }

        ctx.closePath();
        ctx.fill();
      },
      delay
    );
  } else {
    ctx.beginPath();
    ctx.moveTo(topPoints[0].x, bottomPoints[0]?.y || topPoints[0].y);
    ctx.lineTo(topPoints[0].x, topPoints[0].y);
    
    for (let i = 1; i < topPoints.length; i++) {
      ctx.lineTo(topPoints[i].x, topPoints[i].y);
    }

    for (let i = bottomPoints.length - 1; i >= 0; i--) {
      ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
    }

    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}
