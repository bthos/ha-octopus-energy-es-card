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
    await renderLineChart(
      this.ctx,
      this.config,
      this.renderer,
      this.animator,
      data,
      options
    );
  }

  /**
   * Render a bar chart
   */
  async renderBarChart(
    data: ChartData,
    options?: BarChartOptions
  ): Promise<void> {
    await renderBarChart(
      this.ctx,
      this.config,
      this.renderer,
      this.animator,
      data,
      options
    );
  }

  /**
   * Render a stacked area chart
   */
  async renderStackedAreaChart(
    stackedData: StackedData,
    options?: StackedAreaOptions
  ): Promise<void> {
    await renderStackedAreaChart(
      this.ctx,
      this.config,
      this.renderer,
      this.animator,
      stackedData,
      options
    );
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
    if (!this.interactive || !this.hoverCallback) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find nearest point (this would need to be implemented based on current chart type)
    // For now, just call with null
    this.hoverCallback(null);
  }

  private _handleMouseLeave(): void {
    if (this.hoverCallback) {
      this.hoverCallback(null);
    }
  }
}
