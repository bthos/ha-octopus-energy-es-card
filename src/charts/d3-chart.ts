/**
 * Main D3.js Chart class
 * Provides SVG-based chart rendering using D3.js for interactive data visualization
 */

import * as d3 from 'd3';
import type {
  ChartConfig,
  ChartData,
  DataPoint,
  LineChartOptions,
  BarChartOptions,
  StackedData,
  StackedAreaOptions
} from './chart-types';
import { renderD3BarChart } from './d3-bar-chart';
import { renderD3LineChart } from './d3-line-chart';
import { renderD3StackedAreaChart } from './d3-stacked-area-chart';
import { localize, localizeWithVars } from '../localization';

export class D3Chart {
  private container: HTMLElement;
  private svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private config: ChartConfig;
  private xScale: d3.ScaleBand<string> | d3.ScaleLinear<number, number> | null = null;
  private yScale: d3.ScaleLinear<number, number> | null = null;
  private hoveredPoint: DataPoint | null = null;
  private currentDataPoints: DataPoint[] = [];
  private currentBarWidth: number = 0;
  private chartId: string;
  private _resizeTimeout: number | null = null;
  private _resizeObserver: ResizeObserver | null = null;

  constructor(container: HTMLElement, config: ChartConfig) {
    this.container = container;
    this.config = config;

    // Generate unique ID for ARIA linkage
    this.chartId = `chart-${Math.random().toString(36).substring(2, 9)}`;

    // Create SVG element with accessibility attributes (Victory.js pattern)
    this.svg = d3.select(container)
      .append('svg')
      .attr('class', 'chart-svg')
      .attr('width', config.width)
      .attr('height', config.height)
      .attr('viewBox', `0 0 ${config.width} ${config.height}`)
      .attr('role', 'img') // Identify as image for screen readers
      .attr('aria-labelledby', `${this.chartId}-title`) // Link to title element
      .attr('aria-live', 'polite') // Announce dynamic updates
      .attr('tabindex', '0') // Make keyboard-focusable
      .style('display', 'block')
      .style('pointer-events', 'all'); // SVG interactive (Victory pattern)

    // Add title element for screen readers (localized)
    const language = config.language || 'en';
    this.svg.append('title')
      .attr('id', `${this.chartId}-title`)
      .text(localize('chart.accessibility.title', language));


    // Add keyboard and touch support
    this._addKeyboardSupport();
    this._addTouchSupport();
    this._addResizeSupport();
  }

  /**
   * Clear the SVG (remove all children except tooltip)
   */
  clear(): void {
    this.svg.selectAll('g.chart-content, g.axis, g.grid, path.bar, path.line, path.area, circle.point, g.areas, text.y-axis-label').remove();
  }

  /**
   * Resize the chart
   */
  resize(width: number, height: number): void {
    this.config.width = width;
    this.config.height = height;
    this.svg
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);
    
    // Re-render if we have data
    if (this.currentDataPoints.length > 0) {
      // Scales will be recalculated on next render
      this.xScale = null;
      this.yScale = null;
    }
  }

  /**
   * Get computed color from CSS variable
   */
  getComputedColor(cssVar: string, fallback: string): string {
    if (typeof window === 'undefined') {
      return fallback;
    }

    try {
      const root = this.container.getRootNode() as ShadowRoot | Document;
      const target = root instanceof ShadowRoot ? root.host : document.documentElement;
      const style = getComputedStyle(target);
      const value = style.getPropertyValue(cssVar).trim();
      return value || fallback;
    } catch {
      return fallback;
    }
  }


  /**
   * Render a bar chart
   */
  async renderBarChart(
    data: ChartData,
    options?: BarChartOptions
  ): Promise<void> {
    this.currentDataPoints = data.points;
    await renderD3BarChart(
      this.svg,
      this.config,
      data,
      options || {},
      {
        xScale: this.xScale,
        yScale: this.yScale,
        setXScale: (scale) => { this.xScale = scale; },
        setYScale: (scale) => { this.yScale = scale; },
        hoveredPoint: this.hoveredPoint,
        setHoveredPoint: (point) => { this.hoveredPoint = point; },
        setBarWidth: (width) => { this.currentBarWidth = width; }
      }
    );
  }

  /**
   * Render a line chart
   */
  async renderLineChart(
    data: ChartData,
    options?: LineChartOptions
  ): Promise<void> {
    this.currentDataPoints = data.points;
    await renderD3LineChart(
      this.svg,
      this.config,
      data,
      options || {},
      {
        xScale: this.xScale,
        yScale: this.yScale,
        setXScale: (scale) => { this.xScale = scale; },
        setYScale: (scale) => { this.yScale = scale; },
        hoveredPoint: this.hoveredPoint,
        setHoveredPoint: (point) => { this.hoveredPoint = point; },
      }
    );
  }

  /**
   * Render a stacked area chart
   */
  async renderStackedAreaChart(
    stackedData: StackedData,
    options?: StackedAreaOptions
  ): Promise<void> {
    // Use first layer points for hover detection
    if (stackedData.layers.length > 0 && stackedData.timestamps) {
      const firstLayer = stackedData.layers[0];
      this.currentDataPoints = firstLayer.data.map((value, index) => ({
        x: 0, // Will be calculated by scale
        y: 0, // Will be calculated by scale
        value: value,
        timestamp: stackedData.timestamps?.[index]
      }));
    }
    
    await renderD3StackedAreaChart(
      this.svg,
      this.config,
      stackedData,
      options || {},
      {
        xScale: this.xScale,
        yScale: this.yScale,
        setXScale: (scale) => { this.xScale = scale; },
        setYScale: (scale) => { this.yScale = scale; },
        hoveredPoint: this.hoveredPoint,
        setHoveredPoint: (point) => { this.hoveredPoint = point; },
      }
    );
  }

  /**
   * Get SVG element (for external access if needed)
   */
  getSVG(): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    return this.svg;
  }

  /**
   * Update chart title dynamically when data changes
   */
  updateTitle(period: string, total: number): void {
    const language = this.config.language || 'en';
    // Format total based on language locale
    const locale = language === 'es' ? 'es-ES' : language === 'be' ? 'be-BY' : 'en-US';
    const formattedTotal = total.toLocaleString(locale, { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
    
    this.svg.select('title')
      .text(localizeWithVars('chart.accessibility.title_with_data', {
        period,
        total: formattedTotal
      }, language));
  }

  /**
   * Enable keyboard navigation for chart elements
   */
  private _addKeyboardSupport(): void {
    this.svg.on('keydown', (event: KeyboardEvent) => {
      const key = event.key;
      
      switch (key) {
        case 'ArrowLeft':
          // Navigate to previous period
          event.preventDefault();
          this.container.dispatchEvent(new CustomEvent('chart-navigate', {
            detail: { direction: 'previous' }
          }));
          break;
          
        case 'ArrowRight':
          // Navigate to next period
          event.preventDefault();
          this.container.dispatchEvent(new CustomEvent('chart-navigate', {
            detail: { direction: 'next' }
          }));
          break;
          
        case 'Home':
          // Go to first data point
          event.preventDefault();
          this.container.dispatchEvent(new CustomEvent('chart-navigate', {
            detail: { direction: 'first' }
          }));
          break;
          
        case 'End':
          // Go to last data point
          event.preventDefault();
          this.container.dispatchEvent(new CustomEvent('chart-navigate', {
            detail: { direction: 'last' }
          }));
          break;
      }
    });
  }

  /**
   * Add touch event support for mobile devices
   * Implements swipe gestures for period navigation
   */
  private _addTouchSupport(): void {
    // Check if touch is supported
    if (typeof window === 'undefined' || !('ontouchstart' in window)) {
      return;
    }

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    this.container.addEventListener('touchstart', (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    }, { passive: true });

    this.container.addEventListener('touchmove', (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        
        // Swipe detection criteria:
        // - Horizontal movement > 50px
        // - Vertical movement < 30px (to allow vertical scrolling)
        // - Duration < 300ms (quick swipe)
        const duration = Date.now() - touchStartTime;
        
        if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 30 && duration < 300) {
          // Prevent default to stop scrolling during swipe
          e.preventDefault();
          
          // Determine swipe direction
          const direction = deltaX > 0 ? 'previous' : 'next';
          
          // Dispatch custom event for period navigation
          this.container.dispatchEvent(new CustomEvent('chart-swipe', {
            detail: { direction, deltaX, deltaY }
          }));
          
          // Reset touch tracking
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartTime = Date.now();
        }
      }
    });

    // Optional: Add touch end handler for cleanup
    this.container.addEventListener('touchend', () => {
      touchStartX = 0;
      touchStartY = 0;
      touchStartTime = 0;
    }, { passive: true });
  }

  /**
   * Add responsive resize handling with debounce
   */
  private _addResizeSupport(): void {
    if (typeof window === 'undefined' || typeof ResizeObserver === 'undefined') {
      return;
    }

    // Use ResizeObserver for better performance than window.resize
    this._resizeObserver = new ResizeObserver((entries) => {
      // Debounce resize events (250ms delay like Octopus)
      if (this._resizeTimeout !== null) {
        window.clearTimeout(this._resizeTimeout);
      }

      this._resizeTimeout = window.setTimeout(() => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          
          // Only redraw if size actually changed
          if (width !== this.config.width || height !== this.config.height) {
            this.config.width = width;
            this.config.height = height;
            
            // Dispatch event for redraw
            this.container.dispatchEvent(new CustomEvent('chart-resize', {
              detail: { width, height }
            }));
          }
        }
      }, 250); // 250ms debounce (Octopus uses ~200-300ms)
    });

    // Observe container size changes
    this._resizeObserver.observe(this.container);
  }

  /**
   * Cleanup method for removing event listeners and observers
   */
  destroy(): void {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    
    if (this._resizeTimeout !== null) {
      window.clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }
  }
}
