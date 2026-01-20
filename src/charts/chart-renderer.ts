/**
 * Base renderer for common chart elements (grid, axes, labels, legend)
 */

import type {
  ChartConfig,
  AxisLabel,
  GridLine,
  ChartColors
} from './chart-types';
import { generateGridLines, formatDate, formatValue } from './chart-utils';

export class ChartRenderer {
  protected ctx: CanvasRenderingContext2D;
  protected config: ChartConfig;

  constructor(ctx: CanvasRenderingContext2D, config: ChartConfig) {
    this.ctx = ctx;
    this.config = config;
  }

  /**
   * Clear the canvas
   */
  clear(): void {
    const { width, height } = this.config;
    this.ctx.clearRect(0, 0, width, height);
  }

  /**
   * Draw grid lines (horizontal lines for better readability)
   */
  drawGridLines(gridLines: GridLine[], color: string): void {
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 1;
    this.ctx.globalAlpha = 0.2; // Make grid lines more subtle
    this.ctx.setLineDash([]); // Solid lines like Octopus Energy

    gridLines.forEach(line => {
      this.ctx.beginPath();
      this.ctx.moveTo(line.x1, line.y1);
      this.ctx.lineTo(line.x2, line.y2);
      this.ctx.stroke();
    });

    this.ctx.restore();
  }

  /**
   * Draw X and Y axes
   */
  drawAxes(
    yAxisLabels: AxisLabel[],
    xAxisLabels: Array<{ label: string; x: number }>,
    colors: ChartColors
  ): void {
    const { width, height, padding } = this.config;
    const leftX = padding.left;
    const rightX = width - padding.right;
    const bottomY = height - padding.bottom;

    this.ctx.save();
    this.ctx.strokeStyle = colors.axis;
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([]);

    // Y-axis (left)
    if (yAxisLabels.length > 0) {
      const firstLabel = yAxisLabels[0];
      const lastLabel = yAxisLabels[yAxisLabels.length - 1];
      this.ctx.beginPath();
      this.ctx.moveTo(leftX, firstLabel.y);
      this.ctx.lineTo(leftX, lastLabel.y);
      this.ctx.stroke();
    }

    // X-axis (bottom)
    if (xAxisLabels.length > 0) {
      const firstLabel = xAxisLabels[0];
      const lastLabel = xAxisLabels[xAxisLabels.length - 1];
      this.ctx.beginPath();
      this.ctx.moveTo(firstLabel.x, bottomY);
      this.ctx.lineTo(lastLabel.x, bottomY);
      this.ctx.stroke();
    }

    this.ctx.restore();
  }

  /**
   * Draw Y-axis labels (left side) - improved styling like Octopus Energy
   */
  drawYAxisLabels(
    labels: AxisLabel[],
    color: string,
    format: (value: number) => string = (v) => formatValue(v, 1),
    suffix: string = ''
  ): void {
    const { padding } = this.config;
    const labelX = padding.left - 10;

    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.font = `13px ${this.config.fontFamily || 'Roboto, sans-serif'}`;
    this.ctx.textAlign = 'end';
    this.ctx.textBaseline = 'middle';
    this.ctx.globalAlpha = 0.9; // Slightly transparent for better readability

    labels.forEach(label => {
      const text = format(label.value) + suffix;
      this.ctx.fillText(text, labelX, label.y);
    });

    this.ctx.restore();
  }

  /**
   * Draw Y-axis labels (right side)
   */
  drawYAxisLabelsRight(
    labels: AxisLabel[],
    color: string,
    format: (value: number) => string = (v) => formatValue(v, 2),
    prefix: string = ''
  ): void {
    const { width, padding } = this.config;
    const labelX = width - padding.right + 10;

    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.font = `12px ${this.config.fontFamily || 'Roboto, sans-serif'}`;
    this.ctx.textAlign = 'start';
    this.ctx.textBaseline = 'middle';

    labels.forEach(label => {
      const text = prefix + format(label.value);
      this.ctx.fillText(text, labelX, label.y);
    });

    this.ctx.restore();
  }

  /**
   * Draw X-axis labels - improved styling like Octopus Energy
   */
  drawXAxisLabels(
    labels: Array<{ label: string; x: number }>,
    color: string
  ): void {
    const { height, padding } = this.config;
    const labelY = height - padding.bottom + 20;

    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.font = `13px ${this.config.fontFamily || 'Roboto, sans-serif'}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'top';
    this.ctx.globalAlpha = 0.9; // Slightly transparent for better readability

    labels.forEach(label => {
      this.ctx.fillText(label.label, label.x, labelY);
    });

    this.ctx.restore();
  }

  /**
   * Draw right Y-axis line (for cost axis)
   */
  drawRightYAxis(
    yAxisLabels: AxisLabel[],
    color: string
  ): void {
    if (yAxisLabels.length === 0) return;

    const { width, padding } = this.config;
    const rightX = width - padding.right;
    const firstLabel = yAxisLabels[0];
    const lastLabel = yAxisLabels[yAxisLabels.length - 1];

    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 1;
    this.ctx.globalAlpha = 0.5;
    this.ctx.setLineDash([]);

    this.ctx.beginPath();
    this.ctx.moveTo(rightX, firstLabel.y);
    this.ctx.lineTo(rightX, lastLabel.y);
    this.ctx.stroke();

    this.ctx.restore();
  }

  /**
   * Draw legend
   */
  drawLegend(
    items: Array<{
      label: string;
      color: string;
      type: 'line' | 'rect' | 'circle';
      dashArray?: number[];
    }>,
    x: number,
    y: number
  ): void {
    this.ctx.save();
    this.ctx.font = `11px ${this.config.fontFamily || 'Roboto, sans-serif'}`;
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'middle';

    let currentY = y;
    const itemHeight = 20;
    const iconWidth = 15;
    const spacing = 5;

    items.forEach((item, index) => {
      const iconX = x;
      const iconY = currentY;
      const textX = iconX + iconWidth + spacing;
      const textY = iconY;

      // Draw icon
      this.ctx.save();
      this.ctx.fillStyle = item.color;
      this.ctx.strokeStyle = item.color;

      if (item.type === 'rect') {
        this.ctx.fillRect(iconX, iconY - 5, iconWidth, 10);
      } else if (item.type === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(iconX + iconWidth / 2, iconY, 3, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (item.type === 'line') {
        this.ctx.lineWidth = 2;
        if (item.dashArray) {
          this.ctx.setLineDash(item.dashArray);
        } else {
          this.ctx.setLineDash([]);
        }
        this.ctx.beginPath();
        this.ctx.moveTo(iconX, iconY);
        this.ctx.lineTo(iconX + iconWidth, iconY);
        this.ctx.stroke();
      }

      this.ctx.restore();

      // Draw text
      this.ctx.fillStyle = this.config.colors.text;
      this.ctx.fillText(item.label, textX, textY);

      currentY += itemHeight;
    });

    this.ctx.restore();
  }
}
