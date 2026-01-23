/**
 * Styles for Octopus Energy España Consumption Card
 * Extracted from the main component for better organization
 */

import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
  }

  .period-selector {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .period-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .period-button.active {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }

  .navigation-controls {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .nav-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .chart-container {
    margin: 0;
    min-height: 300px;
    position: relative;
    width: 100%;
    /* Victory.js-inspired touch optimization */
    touch-action: auto; /* Allow browser pan/zoom */
    -webkit-tap-highlight-color: transparent; /* No iOS tap flash */
    -webkit-touch-callout: none; /* No iOS callout on long press */
    user-select: none; /* Prevent text selection */
  }

  .chart-svg-container {
    width: 100%;
    height: 300px;
    position: relative;
    /* Pointer events structure (Victory pattern) */
    pointer-events: none; /* Container non-interactive */
  }

  .chart-svg {
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: all; /* SVG interactive */
  }

  /* Mobile-specific optimizations */
  @media (hover: none) and (pointer: coarse) {
    .chart-container {
      touch-action: pan-y pinch-zoom; /* Allow vertical scroll + pinch zoom */
    }

    /* Increase touch target sizes on mobile */
    .chart-bar,
    .chart-point,
    path.bar,
    circle.point {
      min-width: 44px;
      min-height: 44px;
    }
  }

  /* Disable pointer events during animations */
  .chart-animating {
    pointer-events: none;
  }

  .chart-bar {
    fill: #8B5CF6;
    transition: fill 0.2s ease;
    cursor: pointer;
  }

  .chart-bar:hover {
    fill: #ff69b4;
  }

  /* Path-based bars (for rounded top corners) */
  path.bar {
    fill: #8B5CF6;
    transition: fill 0.2s ease;
    cursor: pointer;
  }

  path.bar:hover {
    fill: #ff69b4;
  }

  .chart-grid-line {
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 1;
  }

  .chart-tooltip {
    pointer-events: none;
  }

  .tooltip-content {
    pointer-events: none;
  }

  .tooltip-bg {
    fill: rgba(40, 26, 61, 0.95);
    stroke: none;
  }

  .tooltip-value {
    fill: #ff69b4;
    font-size: 16px;
    font-weight: 600;
    font-family: Roboto, sans-serif;
  }

  .tooltip-date {
    fill: #fff;
    font-size: 13px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
  }


  .loading {
    text-align: center;
    padding: 40px;
    color: var(--secondary-text-color);
  }

  .card-content-wrapper {
    position: relative;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--card-background-color, rgba(255, 255, 255, 0.95));
    opacity: 0.9;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    border-radius: var(--ha-card-border-radius, 4px);
  }

  .error {
    padding: 16px;
    background: var(--error-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .error-message {
    padding: 24px;
    text-align: center;
    background: var(--card-background-color);
    border-radius: 8px;
    border: none;
  }

  .error-icon {
    color: var(--error-color);
    margin-bottom: 12px;
  }

  .error-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--error-color);
  }

  .error-details {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 16px;
  }

  .retry-button {
    padding: 10px 20px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;
  }

  .retry-button:hover {
    opacity: 0.9;
  }

  .integration-badges {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .integration-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .integration-badge ha-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
  }

  .integration-badge.hacs-badge {
    background: var(--hacs-badge-background, rgba(41, 128, 185, 0.1));
    color: var(--hacs-badge-color, #2980b9);
    border-color: var(--hacs-badge-border, rgba(41, 128, 185, 0.3));
  }

  .integration-badge.hacs-badge:hover {
    background: var(--hacs-badge-background-hover, rgba(41, 128, 185, 0.2));
    border-color: var(--hacs-badge-border-hover, #2980b9);
    transform: translateY(-1px);
  }

  .integration-badge.github-badge {
    background: var(--github-badge-background, rgba(33, 33, 33, 0.1));
    color: var(--github-badge-color, #212121);
    border-color: var(--github-badge-border, rgba(33, 33, 33, 0.3));
  }

  .integration-badge.github-badge:hover {
    background: var(--github-badge-background-hover, rgba(33, 33, 33, 0.2));
    border-color: var(--github-badge-border-hover, #212121);
    transform: translateY(-1px);
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .integration-badge.hacs-badge {
      background: var(--hacs-badge-background, rgba(41, 128, 185, 0.2));
      color: var(--hacs-badge-color, #5dade2);
      border-color: var(--hacs-badge-border, rgba(41, 128, 185, 0.4));
    }

    .integration-badge.github-badge {
      background: var(--github-badge-background, rgba(255, 255, 255, 0.1));
      color: var(--github-badge-color, #ffffff);
      border-color: var(--github-badge-border, rgba(255, 255, 255, 0.3));
    }
  }

  .comparison-error {
    padding: 12px;
    background: var(--warning-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    margin-top: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .comparison-error ha-icon {
    flex-shrink: 0;
  }

  .comparison-section {
    margin-top: 24px;
  }

  .comparison-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .tariff-comparison-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    margin-bottom: 16px;
    background: var(--info-color, rgba(33, 150, 243, 0.1));
    border-left: 3px solid var(--info-color, #2196f3);
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .tariff-comparison-info ha-icon {
    color: var(--info-color, #2196f3);
    flex-shrink: 0;
  }

  .tariff-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .tariff-item {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
  }

  .tariff-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .tariff-name {
    font-size: 18px;
    font-weight: 500;
  }

  .tariff-cost {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-color);
  }

  .tariff-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
    font-size: 14px;
  }

  .breakdown-item {
    display: flex;
    flex-direction: column;
  }

  .breakdown-label {
    color: var(--secondary-text-color);
    font-size: 12px;
  }

  .breakdown-value {
    font-weight: 500;
    margin-top: 4px;
  }

  .period-breakdown {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .period-breakdown-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .period-bars {
    display: flex;
    gap: 8px;
    height: 40px;
    margin-bottom: 8px;
  }

  .period-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    min-width: 60px;
  }

  .period-bar-fill {
    width: 100%;
    border-radius: 4px 4px 0 0;
    transition: height 0.3s ease;
  }

  .period-bar-fill.p1 {
    background: var(--error-color);
  }

  .period-bar-fill.p2 {
    background: var(--warning-color);
  }

  .period-bar-fill.p3 {
    background: var(--success-color);
  }

  .period-bar-label {
    margin-top: 4px;
    font-size: 12px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .cost-per-kwh {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 11px;
  }

  .best-tariff-badge {
    display: inline-block;
    padding: 4px 8px;
    background: var(--success-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
  }

  .savings-info {
    margin-top: 16px;
    padding: 12px;
    background: var(--info-color);
    border-radius: 4px;
    font-size: 14px;
  }

  .consumption-summary-header {
    margin-bottom: 24px;
    padding: 16px;
    background: var(--card-background-color);
    border-radius: 8px;
  }

  .summary-header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .summary-title-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .summary-icon {
    color: var(--primary-color);
    font-size: 24px;
  }

  .summary-view-toggle {
    display: flex;
    gap: 8px;
  }

  .view-icon {
    color: var(--secondary-text-color);
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  .view-icon.active {
    color: var(--primary-color);
    opacity: 1;
  }

  .summary-date-range {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }

  .summary-total-consumption {
    font-size: 32px;
    font-weight: 700;
    color: var(--primary-text-color);
    line-height: 1.2;
  }

  .consumption-summary {
    margin-bottom: 24px;
    padding: 16px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 8px;
  }

  .summary-title {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: var(--primary-text-color);
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }

  .summary-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: var(--secondary-background-color);
    border-radius: 6px;
  }

  .summary-item.summary-total {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }

  .summary-period {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .period-icon {
    font-size: 18px;
  }

  .period-name {
    font-weight: 500;
  }

  .summary-value {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .summary-percentage {
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  .summary-total .summary-value,
  .summary-total .summary-percentage {
    color: var(--text-primary-color);
  }

  .consumption-list-container {
    margin-top: 16px;
  }

  .consumption-list {
    width: 100%;
    overflow-x: auto;
  }

  .consumption-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  .consumption-table thead {
    background: var(--secondary-background-color);
    border-bottom: 2px solid var(--divider-color);
  }

  .consumption-table th {
    padding: 12px 8px;
    text-align: left;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  .consumption-table td {
    padding: 10px 8px;
    border-bottom: 1px solid var(--divider-color);
    color: var(--primary-text-color);
  }

  .consumption-table tbody tr:hover {
    background: var(--secondary-background-color);
  }

  .consumption-table .consumption-value {
    font-weight: 600;
    color: var(--primary-color);
  }

  .heat-calendar-container {
    margin-top: 24px;
  }

  .heat-calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-top: 16px;
  }

  .heat-calendar-day {
    aspect-ratio: 1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    cursor: pointer;
    position: relative;
    border: 1px solid var(--divider-color);
    transition: transform 0.2s ease;
  }

  .heat-calendar-day:hover {
    transform: scale(1.1);
    z-index: 10;
  }

  .heat-calendar-day.intensity-low {
    background: var(--info-color, #2196f3);
    opacity: 0.4;
  }

  .heat-calendar-day.intensity-medium {
    background: var(--success-color, #4caf50);
    opacity: 0.6;
  }

  .heat-calendar-day.intensity-high {
    background: var(--error-color, #f44336);
    opacity: 0.8;
  }

  .heat-calendar-day.empty {
    background: var(--card-background-color);
    opacity: 0.3;
    cursor: default;
  }

  .heat-calendar-legend {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    font-size: 12px;
    align-items: center;
  }

  .heat-calendar-legend-label {
    font-size: 12px;
    color: var(--primary-text-color);
    margin-right: 4px;
  }

  .heat-calendar-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: help;
  }

  .heat-calendar-legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
  }

  .heat-calendar-legend-color.intensity-low {
    background: var(--info-color, #2196f3);
    opacity: 0.4;
  }

  .heat-calendar-legend-color.intensity-medium {
    background: var(--success-color, #4caf50);
    opacity: 0.6;
  }

  .heat-calendar-legend-color.intensity-high {
    background: var(--error-color, #f44336);
    opacity: 0.8;
  }

  .heat-calendar-year-view {
    /* Remove max-height to allow card to expand naturally */
    overflow-y: visible;
  }

  .heat-calendar-year-view .heat-calendar-grid {
    /* Remove max-height to avoid double scroll */
    overflow-y: visible;
  }

  .heat-calendar-grid-year .heat-calendar-day {
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
    font-size: 9px;
    padding: 0;
  }

  .heat-calendar-grid-year .heat-calendar-day.empty {
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
  }

  .heat-calendar-month-label {
    grid-column: 1 / -1;
    font-size: 10px;
    font-weight: 600;
    color: var(--secondary-text-color);
    padding: 4px 0;
    text-align: left;
    border-bottom: 1px solid var(--divider-color);
    margin-bottom: 2px;
  }

  .heat-calendar-summary {
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--secondary-text-color);
    flex-wrap: wrap;
  }

  .heat-calendar-summary span {
    padding: 4px 8px;
    background: var(--secondary-background-color);
    border-radius: 4px;
  }

  .heat-calendar-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    margin-top: 16px;
    background: var(--info-color, rgba(33, 150, 243, 0.1));
    border-left: 3px solid var(--info-color, #2196f3);
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .heat-calendar-info ha-icon {
    color: var(--info-color, #2196f3);
    flex-shrink: 0;
  }

  .week-comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 8px;
    margin-top: 16px;
  }

  .week-card {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
  }

  .week-card-incomplete {
    background: rgba(var(--primary-color-rgb, 3, 169, 244), 0.05);
    border: 1px dashed var(--divider-color);
    opacity: 0.9;
  }

  .week-card-header {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--primary-text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .week-card-header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .week-incomplete-badge {
    display: inline-block;
    padding: 2px 8px;
    background: var(--warning-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .week-card-metrics {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .week-metric {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .week-metric-label {
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  .week-metric-value-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .week-metric-value {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .week-period-date {
    font-size: 13px;
    font-weight: 400;
    font-family: var(--code-font-family, 'Courier New', monospace);
    color: var(--secondary-text-color);
    letter-spacing: 0.5px;
  }

  .week-change {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
  }

  .week-change.positive {
    background: var(--error-color);
    color: var(--text-primary-color);
  }

  .week-change.negative {
    background: var(--success-color);
    color: var(--text-primary-color);
  }

  .week-change-disabled {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color);
    background: var(--secondary-background-color);
    opacity: 0.6;
    cursor: help;
  }

  .week-change.week-change-forecast {
    opacity: 0.85;
  }

  .week-change-forecast-indicator {
    font-size: 10px;
    margin-left: 2px;
    vertical-align: super;
  }

  .week-metric-days {
    padding-bottom: 8px;
    border-bottom: 1px dashed var(--divider-color);
    margin-bottom: 4px;
  }

  .week-metric-days .week-incomplete-badge {
    margin-top: 4px;
  }

  .week-forecast {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-weight: 400;
    text-align: right;
  }

  .tariff-chart-container {
    margin-top: 16px;
  }

  .tariff-chart-bars {
    display: flex;
    gap: 8px;
    height: 200px;
    align-items: flex-end;
    margin-top: 16px;
  }

  .tariff-chart-bar-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .tariff-chart-bar-label {
    text-align: center;
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .tariff-chart-bar {
    border-radius: 4px 4px 0 0;
    min-height: 4px;
    position: relative;
    transition: opacity 0.2s ease;
  }

  .tariff-chart-bar:hover {
    opacity: 0.8;
  }

  .tariff-chart-bar.consumption {
    background: var(--primary-color, #03a9f4);
  }

  .tariff-chart-bar.cost {
    background: var(--accent-color, #ff9800);
  }

  .tariff-chart-bar.p1 {
    background: var(--error-color, #f44336);
  }

  .tariff-chart-bar.p2 {
    background: var(--warning-color, #ff9800);
  }

  .tariff-chart-bar.p3 {
    background: var(--success-color, #4caf50);
  }

  .tooltip {
    position: absolute;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
    pointer-events: none;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: none;
  }

  .tooltip.visible {
    display: block;
  }

  /* Print optimization */
  @media print {
    .chart-container {
      break-inside: avoid; /* Don't split chart across pages */
      page-break-inside: avoid;
    }

    /* Hide interactive elements */
    .chart-navigation,
    .chart-controls,
    .period-selector {
      display: none !important;
    }

    /* Expand to full width */
    .chart-container {
      width: 100% !important;
      max-width: none !important;
    }

    /* Ensure colors are visible in print */
    .chart-bar,
    .chart-line,
    path.bar,
    path.line {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    /* Add page header for context */
    .chart-container::before {
      content: "Energy Consumption Chart";
      display: block;
      font-size: 14pt;
      font-weight: bold;
      margin-bottom: 10pt;
    }
  }
`;

/**
 * Styles for Octopus Energy España Consumption Card Editor
 */
export const editorStyles = css`
  .card-config {
    padding: 16px;
  }

  .section {
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--primary-text-color);
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .form-group ha-textfield,
  .form-group ha-select,
  .form-group ha-entity-picker {
    width: 100%;
  }

  .form-group ha-switch {
    margin-right: 8px;
  }

  .switch-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .switch-row label {
    flex: 1;
    margin-bottom: 0;
  }

  .tariff-entry-list {
    margin-top: 8px;
  }

  .tariff-entry-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px;
    background: var(--card-background-color);
    border-radius: 4px;
  }

  .tariff-entry-item ha-textfield {
    flex: 1;
    margin-right: 8px;
  }

  .add-tariff-entry {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .add-tariff-entry ha-textfield {
    flex: 1;
  }

  .tariff-dropdown-list {
    margin-top: 8px;
  }

  .tariff-dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .tariff-dropdown-item ha-selector {
    flex: 1;
  }

  .tariff-dropdown-item ha-icon-button {
    --mdc-icon-button-size: 40px;
    --mdc-icon-size: 20px;
  }

  .error {
    color: var(--error-color);
    font-size: 12px;
    margin-top: 4px;
  }
`;
