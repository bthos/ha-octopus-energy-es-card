/**
 * Main Canvas Chart class
 */

import type {
  ChartConfig,
  ChartData,
  DataPoint,
  LineChartOptions,
  BarChartOptions,
  StackedData,
  StackedAreaOptions
} from './chart-types';
import { ChartAnimator } from './chart-animator';
import { ChartRenderer } from './chart-renderer';
import { renderLineChart } from './line-chart';
import { renderBarChart } from './bar-chart';
import { renderStackedAreaChart } from './stacked-area-chart';

export class CanvasChart {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: ChartConfig;
  private animator: ChartAnimator;
  private renderer: ChartRenderer;
  private hoverCallback: ((point: DataPoint | null) => void) | null = null;
  private interactive: boolean = false;
  private currentDataPoints: DataPoint[] = []; // Store current chart data points
  private currentBarWidth: number = 0; // Store bar width for bar charts
  private hoveredPoint: DataPoint | null = null;
  private tooltipElement: HTMLElement | null = null;
  private renderFunction: (() => Promise<void>) | null = null; // Store render function to re-render on hover

  constructor(canvas: HTMLCanvasElement, config: ChartConfig) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D context from canvas');
    }
    this.ctx = context;
    this.config = config;
    this.animator = new ChartAnimator();
    this.renderer = new ChartRenderer(this.ctx, this.config);

    // Set canvas size
    this.canvas.width = config.width;
    this.canvas.height = config.height;
    
    // Create tooltip element
    this._createTooltip();
  }

  /**
   * Clear the canvas
   */
  clear(): void {
    this.renderer.clear();
  }

  /**
   * Resize the canvas
   */
  resize(width: number, height: number): void {
    this.config.width = width;
    this.config.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  /**
   * Get computed color from CSS variable
   */
  getComputedColor(cssVar: string, fallback: string): string {
    if (typeof window === 'undefined') {
      return fallback;
    }

    try {
      const root = this.canvas.getRootNode() as ShadowRoot | Document;
      const target = root instanceof ShadowRoot ? root.host : document.documentElement;
      const style = getComputedStyle(target);
      const value = style.getPropertyValue(cssVar).trim();
      return value || fallback;
    } catch {
      return fallback;
    }
  }

  /**
   * Render a line chart
   */
  async renderLineChart(
    data: ChartData,
    options?: LineChartOptions
  ): Promise<void> {
    // Store data points for interactivity
    this.currentDataPoints = data.points;
    
    // Store render function for re-rendering on hover
    this.renderFunction = async () => {
      await renderLineChart(
        this.ctx,
        this.config,
        this.renderer,
        this.animator,
        data,
        options
      );
      // Re-draw hover effect if needed
      if (this.hoveredPoint) {
        this._drawHoverEffect(this.hoveredPoint);
      }
    };
    
    await this.renderFunction();
    
    // Enable interactivity if requested
    if (options?.interactive !== false) {
      this.enableInteractivity();
    }
  }

  /**
   * Render a bar chart
   */
  async renderBarChart(
    data: ChartData,
    options?: BarChartOptions
  ): Promise<void> {
    // Store data points for interactivity
    this.currentDataPoints = data.points;
    
    // Calculate bar width
    const { width, padding } = this.config;
    const chartWidth = width - padding.left - padding.right;
    this.currentBarWidth = options?.barWidth || Math.max((chartWidth / data.points.length) * 0.6, 2);
    
    // Store render function for re-rendering on hover
    this.renderFunction = async () => {
      await renderBarChart(
        this.ctx,
        this.config,
        this.renderer,
        this.animator,
        data,
        options
      );
      // Re-draw hover effect if needed
      if (this.hoveredPoint) {
        this._drawHoverEffect(this.hoveredPoint);
      }
    };
    
    await this.renderFunction();
    
    // Enable interactivity if requested
    if (options?.interactive !== false) {
      this.enableInteractivity();
    }
  }

  /**
   * Render a stacked area chart
   */
  async renderStackedAreaChart(
    stackedData: StackedData,
    options?: StackedAreaOptions
  ): Promise<void> {
    // Store data points for interactivity (use first layer points)
    if (stackedData.layers && stackedData.layers.length > 0) {
      const firstLayer = stackedData.layers[0];
      const timestamps = stackedData.timestamps || [];
      const { width, height, padding } = this.config;
      const chartWidth = width - padding.left - padding.right;
      const chartHeight = height - padding.top - padding.bottom;
      const range = stackedData.range || 1;
      
      this.currentDataPoints = firstLayer.data.map((value, index) => {
        const xStep = firstLayer.data.length > 1 ? chartWidth / (firstLayer.data.length - 1) : 0;
        const x = padding.left + index * xStep;
        const y = padding.top + chartHeight - ((value - stackedData.minValue) / range) * chartHeight;
        return {
          x,
          y,
          value,
          timestamp: timestamps[index]
        };
      });
    }
    
    // Store render function for re-rendering on hover
    this.renderFunction = async () => {
      await renderStackedAreaChart(
        this.ctx,
        this.config,
        this.renderer,
        this.animator,
        stackedData,
        options
      );
      // Re-draw hover effect if needed
      if (this.hoveredPoint) {
        this._drawHoverEffect(this.hoveredPoint);
      }
    };
    
    await this.renderFunction();
    
    // Enable interactivity if requested
    if (options?.interactive !== false) {
      this.enableInteractivity();
    }
  }

  /**
   * Enable interactivity (tooltips, hover effects)
   */
  enableInteractivity(): void {
    this.interactive = true;
    this._setupMouseHandlers();
  }

  /**
   * Disable interactivity
   */
  disableInteractivity(): void {
    this.interactive = false;
    this.canvas.removeEventListener('mousemove', this._handleMouseMove);
    this.canvas.removeEventListener('mouseleave', this._handleMouseLeave);
  }

  /**
   * Set callback for point hover events
   */
  onPointHover(callback: (point: DataPoint | null) => void): void {
    this.hoverCallback = callback;
  }

  private _setupMouseHandlers(): void {
    this.canvas.addEventListener('mousemove', this._handleMouseMove.bind(this));
    this.canvas.addEventListener('mouseleave', this._handleMouseLeave.bind(this));
  }

  private _handleMouseMove(event: MouseEvent): void {
    if (!this.interactive) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Scale coordinates to canvas size
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const canvasX = x * scaleX;
    const canvasY = y * scaleY;

    // Find nearest point
    const nearestPoint = this._findNearestPoint(canvasX, canvasY);
    
    if (nearestPoint !== this.hoveredPoint) {
      this.hoveredPoint = nearestPoint;
      
      // Re-render chart with hover effect
      if (this.renderFunction) {
        this.renderFunction();
      }
      
      // Show/hide tooltip
      if (nearestPoint) {
        this._showTooltip(event.clientX, event.clientY, nearestPoint);
      } else {
        this._hideTooltip();
      }
      
      // Call callback if set
      if (this.hoverCallback) {
        this.hoverCallback(nearestPoint);
      }
    }
  }

  private _handleMouseLeave(): void {
    this.hoveredPoint = null;
    this._hideTooltip();
    
    // Re-render chart without hover effect
    if (this.renderFunction) {
      this.renderFunction();
    }
    
    if (this.hoverCallback) {
      this.hoverCallback(null);
    }
  }

  /**
   * Find nearest data point to mouse coordinates
   */
  private _findNearestPoint(x: number, y: number): DataPoint | null {
    if (this.currentDataPoints.length === 0) return null;

    const { padding } = this.config;
    const hitRadius = 20; // Radius for hit detection
    
    let nearestPoint: DataPoint | null = null;
    let minDistance = Infinity;

    for (const point of this.currentDataPoints) {
      // For bar charts, check if mouse is within bar bounds
      if (this.currentBarWidth > 0) {
        const barX = point.x - this.currentBarWidth / 2;
        const barRight = point.x + this.currentBarWidth / 2;
        const barTop = point.y;
        const barBottom = this.config.height - padding.bottom;
        
        if (x >= barX && x <= barRight && y >= barTop && y <= barBottom) {
          return point; // Direct hit on bar
        }
      }
      
      // For line charts or general case, find nearest point
      const dx = x - point.x;
      const dy = y - point.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < hitRadius && distance < minDistance) {
        minDistance = distance;
        nearestPoint = point;
      }
    }

    return nearestPoint;
  }

  /**
   * Draw hover effect (highlight bar/point)
   * For bars: change color to hover color instead of overlay
   */
  private _drawHoverEffect(point: DataPoint): void {
    if (!point) return;

    this.ctx.save();
    
    if (this.currentBarWidth > 0) {
      // Change bar color to hover color (bright pink)
      const { height, padding } = this.config;
      const bottomY = height - padding.bottom;
      const barX = point.x - this.currentBarWidth / 2;
      const barTop = point.y;
      const barHeight = bottomY - barTop;
      
      // Use hover color if available, otherwise use primary color
      const hoverColor = this.config.colors.hover || this.config.colors.primary;
      this.ctx.fillStyle = hoverColor;
      this.ctx.globalAlpha = 1.0;
      
      // Draw rounded rectangle with hover color
      const cornerRadius = Math.min(this.currentBarWidth * 0.15, 4);
      this.ctx.beginPath();
      this.ctx.moveTo(barX + cornerRadius, barTop);
      this.ctx.lineTo(barX + this.currentBarWidth - cornerRadius, barTop);
      this.ctx.quadraticCurveTo(barX + this.currentBarWidth, barTop, barX + this.currentBarWidth, barTop + cornerRadius);
      this.ctx.lineTo(barX + this.currentBarWidth, barTop + barHeight - cornerRadius);
      this.ctx.quadraticCurveTo(barX + this.currentBarWidth, barTop + barHeight, barX + this.currentBarWidth - cornerRadius, barTop + barHeight);
      this.ctx.lineTo(barX + cornerRadius, barTop + barHeight);
      this.ctx.quadraticCurveTo(barX, barTop + barHeight, barX, barTop + barHeight - cornerRadius);
      this.ctx.lineTo(barX, barTop + cornerRadius);
      this.ctx.quadraticCurveTo(barX, barTop, barX + cornerRadius, barTop);
      this.ctx.closePath();
      this.ctx.fill();
    } else {
      // Highlight point with circle
      this.ctx.fillStyle = this.config.colors.hover || this.config.colors.primary;
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw white border
      this.ctx.strokeStyle = '#fff';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    }
    
    this.ctx.restore();
  }

  /**
   * Create tooltip element
   */
  private _createTooltip(): void {
    if (typeof document === 'undefined') return;
    
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.style.cssText = `
      position: fixed;
      background: rgba(40, 26, 61, 0.95);
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 13px;
      pointer-events: none;
      z-index: 10000;
      display: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      font-family: Roboto, sans-serif;
      white-space: nowrap;
    `;
    
    // Append to body or shadow root
    const root = this.canvas.getRootNode() as ShadowRoot | Document;
    if (root instanceof ShadowRoot) {
      root.appendChild(this.tooltipElement);
    } else {
      document.body.appendChild(this.tooltipElement);
    }
  }

  /**
   * Show tooltip at mouse position
   * Format: value first, then date (matching Octopus Energy España)
   */
  private _showTooltip(mouseX: number, mouseY: number, point: DataPoint): void {
    if (!this.tooltipElement) return;
    
    // Format value with Spanish locale (comma as decimal separator)
    const valueStr = point.value.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    // Format date as "8 ENE" (day + abbreviated month)
    const date = point.timestamp ? new Date(point.timestamp) : null;
    let dateStr = 'N/A';
    if (date) {
      const monthNames = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      dateStr = `${day} ${month}`;
    }
    
    // Show value first, then date (matching Octopus Energy España)
    this.tooltipElement.innerHTML = `
      <div style="font-size: 16px; font-weight: 600; color: #ff69b4; margin-bottom: 4px;">${valueStr} kWh</div>
      <div style="font-weight: 500; color: #fff;">${dateStr}</div>
    `;
    
    this.tooltipElement.style.display = 'block';
    
    // Position tooltip near mouse cursor
    const offset = 15;
    this.tooltipElement.style.left = `${mouseX + offset}px`;
    this.tooltipElement.style.top = `${mouseY + offset}px`;
    
    // Adjust if tooltip goes off screen
    const rect = this.tooltipElement.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      this.tooltipElement.style.left = `${mouseX - rect.width - offset}px`;
    }
    if (rect.bottom > window.innerHeight) {
      this.tooltipElement.style.top = `${mouseY - rect.height - offset}px`;
    }
  }

  /**
   * Hide tooltip
   */
  private _hideTooltip(): void {
    if (this.tooltipElement) {
      this.tooltipElement.style.display = 'none';
    }
  }
}
