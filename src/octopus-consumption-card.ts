/**
 * Octopus Energy España Consumption Card
 * 
 * A Lovelace card for displaying consumption graphs and tariff comparisons.
 */

import { LitElement, html, css, PropertyValues, TemplateResult } from "lit";

// Disable Lit dev mode warnings (only available in dev builds)
// This will be tree-shaken out in production builds
if (typeof LitElement !== 'undefined' && (LitElement as any).disableWarning) {
  (LitElement as any).disableWarning('change-in-update');
}
import { property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig, ConsumptionDataPoint, ComparisonResult, FetchConsumptionResult, TariffComparisonResult } from "./types";
// Import editor to ensure it's included in the bundle and get the class
import "./octopus-consumption-card-editor";
import { OctopusConsumptionCardEditor } from "./octopus-consumption-card-editor";

// Home Assistant types
interface HomeAssistant {
  states: Record<string, any>;
  callService: (domain: string, service: string, serviceData?: Record<string, any>) => Promise<any>;
  language?: string;
  [key: string]: any;
}

export class OctopusConsumptionCard extends LitElement {
  // Disable Lit dev mode warnings for this class
  static enabledWarnings: ('migration' | 'change-in-update')[] = [];

  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: OctopusConsumptionCardConfig;

  @state() private _consumptionData: ConsumptionDataPoint[] = [];
  @state() private _comparisonResult: ComparisonResult | null = null;
  @state() private _loading = false;
  @state() private _error: string | null = null;
  @state() private _comparisonError: string | null = null;
  @state() private _currentPeriod: "day" | "week" | "month" = "week";
  @state() private _currentDate: Date = new Date();

  // Service call timeout in milliseconds (10 seconds)
  private readonly SERVICE_TIMEOUT = 10000;

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .card-title {
      font-size: 24px;
      font-weight: 500;
      margin: 0;
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
      margin-bottom: 16px;
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
      margin-bottom: 24px;
      min-height: 300px;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: var(--secondary-text-color);
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
      border: 2px solid var(--error-color);
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
  `;

  /**
   * Set the card configuration (required by Home Assistant)
   */
  public setConfig(config: OctopusConsumptionCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    this.config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._validateConfig();
    this._currentPeriod = this.config.default_period || "week";
    this._loadData();
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has("config")) {
      this._validateConfig();
      // Only reload data if config actually changed (not just initial set)
      if (changedProperties.get("config") !== undefined) {
        this._loadData();
      }
    }
  }

  /**
   * Validates the card configuration
   */
  private _validateConfig(): void {
    if (!this.config) {
      this._error = "Card configuration is required";
      this._loading = false;
      return;
    }

    // Require source_entry_id
    if (!this.config.source_entry_id) {
      this._error = "source_entry_id is required. Please select your tariff from the card editor.";
      this._loading = false;
      return;
    }

    if (this.config.show_tariff_comparison && (!this.config.tariff_entry_ids || this.config.tariff_entry_ids.length === 0)) {
      console.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled.");
    }

    if (this.config.show_cost_on_chart && !this.config.selected_tariff_for_cost) {
      console.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.");
    }
  }

  /**
   * Creates a timeout promise for service calls
   */
  private _createTimeoutPromise(timeoutMs: number): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timeout. The service call took too long to respond.")), timeoutMs);
    });
  }

  /**
   * Calls a Home Assistant service with timeout and returns response data
   * Uses callService which may return data if the service supports it
   */
  private async _callServiceWithTimeout<T>(
    domain: string,
    service: string,
    serviceData?: Record<string, any>
  ): Promise<T> {
    try {
      // Ensure we're not passing return_response - explicitly exclude it
      const cleanServiceData = { ...serviceData };
      if (cleanServiceData && 'return_response' in cleanServiceData) {
        delete cleanServiceData.return_response;
      }
      
      // Log what we're calling
      console.log(
        '%c  Calling service: %c' + domain + '.' + service,
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px; font-family: monospace;'
      );
      console.log(
        '%c  Service data: %c' + JSON.stringify(cleanServiceData, null, 2),
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px; font-family: monospace;'
      );
      
      // Use callService directly - some services return data through the promise
      // Note: callService should NOT automatically add return_response
      const serviceCall = this.hass.callService(domain, service, cleanServiceData);
      const timeout = this._createTimeoutPromise(this.SERVICE_TIMEOUT);
      const result = await Promise.race([serviceCall, timeout]);
      
      // Log raw response for debugging
      console.log(
        '%c  Raw Service Response: %c' + JSON.stringify(result, null, 2),
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px; font-family: monospace;'
      );
      
      return result as T;
    } catch (error) {
      // Log the full error object for debugging
      console.error(
        '%c  Service Error Details: %c' + JSON.stringify(error, Object.getOwnPropertyNames(error), 2),
        'color: #f00; font-size: 11px;',
        'color: #f00; font-size: 11px; font-family: monospace;'
      );
      
      // Re-throw with more context (styled logging happens in caller)
      if (error instanceof Error) {
        if (error.message.includes("timeout")) {
          throw new Error(`Service call timeout: ${domain}.${service} took longer than ${this.SERVICE_TIMEOUT}ms`);
        }
        // Check if it's a service error
        if (error.message.includes("Service not found") || error.message.includes("not available")) {
          throw new Error(`Service ${domain}.${service} is not available. Please ensure the Octopus Energy España integration is installed and configured.`);
        }
        // Handle validation errors
        if ((error as any).code === 'service_validation_error') {
          const errorObj = error as any;
          let message = errorObj.message || errorObj.translation_key || 'Service validation error';
          
          // Provide user-friendly message for return_response error
          if (message.includes('return_response')) {
            message = "The Octopus Energy España integration service does not support response data. This is a limitation of the integration. Please update the integration to the latest version, or contact the integration maintainer. The service may need to be updated to support response data properly.";
          }
          
          throw new Error(`Service validation error: ${message}`);
        }
        throw new Error(`Service call failed: ${domain}.${service} - ${error.message}`);
      }
      // Handle non-Error objects (like the validation error object)
      if (error && typeof error === 'object') {
        const errorObj = error as any;
        let message = errorObj.message || errorObj.translation_key || 'Unknown service error';
        
        // Provide user-friendly message for return_response error
        if (errorObj.code === 'service_validation_error' && message.includes('return_response')) {
          message = "The Octopus Energy España integration service does not support response data. This is a limitation of the integration. Please update the integration to the latest version, or contact the integration maintainer. The service may need to be updated to support response data properly.";
        }
        
        throw new Error(`Service call failed: ${domain}.${service} - ${message}`);
      }
      throw error;
    }
  }

  private async _loadData(): Promise<void> {
    if (!this.hass || !this.config) {
      return;
    }

    // Use source_entry_id directly
    const entryId = this.config.source_entry_id;

    if (!entryId) {
      this._error = "source_entry_id is required. Please select your tariff from the card editor.";
      this._loading = false;
      return;
    }

    this._loading = true;
    this._error = null;
    this._comparisonError = null;

    try {
      // Calculate date range based on current period
      const { startDate, endDate } = this._getDateRange();

      // Validate date range
      const now = new Date();
      if (startDate > now) {
        throw new Error(`Invalid date range: start date (${startDate.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);
      }
      
      if (startDate > endDate) {
        throw new Error(`Invalid date range: start date is after end date.`);
      }

      // Log request details for debugging (styled)
      console.log(
        '%cℹ Fetching consumption data',
        'color: #666; font-size: 11px;'
      );
      console.log(
        '%c  Entry ID: %c' + entryId + '%c | Period: %c' + this._currentPeriod + '%c | Dates: %c' + startDate.toISOString().split("T")[0] + ' → ' + endDate.toISOString().split("T")[0],
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px;',
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px;',
        'color: #666; font-size: 11px;',
        'color: #999; font-size: 11px;'
      );

      // Fetch consumption data with timeout
      let consumptionResult: FetchConsumptionResult;
      let rawResponse: any;
      try {
        rawResponse = await this._callServiceWithTimeout<any>(
          "octopus_energy_es",
          "fetch_consumption",
          {
            entry_id: entryId,
            start_date: startDate.toISOString().split("T")[0],
            end_date: endDate.toISOString().split("T")[0],
            granularity: this._currentPeriod === "day" ? "hourly" : this._currentPeriod === "week" ? "hourly" : "daily",
          }
        );
        
        // Log the raw response immediately
        console.log(
          '%c  Raw Service Response (before processing): %c' + JSON.stringify(rawResponse, null, 2),
          'color: #666; font-size: 11px;',
          'color: #999; font-size: 11px; font-family: monospace;'
        );
        
        // Handle response format - callService returns the response directly
        if (rawResponse && typeof rawResponse === 'object') {
          consumptionResult = rawResponse as FetchConsumptionResult;
        } else {
          consumptionResult = rawResponse as FetchConsumptionResult;
        }
      } catch (serviceError) {
        // Service call failed (timeout, service not found, etc.)
        let errorMsg: string;
        let userFriendlyMsg: string;
        
        if (serviceError instanceof Error) {
          errorMsg = serviceError.message;
          userFriendlyMsg = errorMsg;
        } else if (serviceError && typeof serviceError === 'object') {
          const errorObj = serviceError as any;
          errorMsg = errorObj.message || errorObj.translation_key || JSON.stringify(serviceError);
          
          // Handle specific service validation errors
          if (errorObj.code === 'service_validation_error') {
            // Check if it's the return_response error
            if (errorMsg.includes('return_response')) {
              userFriendlyMsg = "The Octopus Energy España integration service does not support response data. This is a limitation of the integration. Please update the integration to the latest version, or contact the integration maintainer. The service may need to be updated to support response data properly.";
            } else {
              userFriendlyMsg = errorMsg || "Service validation error. Please check your configuration.";
            }
          } else {
            userFriendlyMsg = errorMsg;
          }
        } else {
          errorMsg = String(serviceError);
          userFriendlyMsg = errorMsg;
        }
        
        console.error(
          '%c✗ Service call failed: %c' + errorMsg,
          'color: #f00; font-size: 11px; font-weight: bold;',
          'color: #f00; font-size: 11px;'
        );
        
        // Log full error object for debugging
        console.error(
          '%c  Full Error Object: %c' + JSON.stringify(serviceError, Object.getOwnPropertyNames(serviceError), 2),
          'color: #666; font-size: 11px;',
          'color: #999; font-size: 11px; font-family: monospace;'
        );
        
        // Throw a user-friendly error
        throw new Error(userFriendlyMsg);
      }

      // Check if result indicates failure
      if (!consumptionResult || typeof consumptionResult !== 'object') {
        console.error(
          '%c✗ Invalid service response: %cexpected object with success field',
          'color: #f00; font-size: 11px; font-weight: bold;',
          'color: #f00; font-size: 11px;'
        );
        throw new Error("Invalid response from service: expected object with success field");
      }

      if (!consumptionResult.success) {
        const errorMsg = consumptionResult.error || "Failed to fetch consumption data";
        
        // Build user-friendly error message (focus on the actual error)
        let userErrorMsg = errorMsg;
        
        // Add warning if present (as it might provide helpful context)
        if (consumptionResult.warning) {
          userErrorMsg += `. ${consumptionResult.warning}`;
        }
        
        console.error(
          '%c✗ Service returned error: %c' + errorMsg,
          'color: #f00; font-size: 11px; font-weight: bold;',
          'color: #f00; font-size: 11px;'
        );
        
        // Log request details for debugging
        console.log(
          '%c  Requested Entry ID: %c' + entryId,
          'color: #666; font-size: 11px;',
          'color: #999; font-size: 11px; font-family: monospace;'
        );
        
        // Log context information for debugging (but don't include in user error)
        if (consumptionResult.context) {
          console.log(
            '%c  Service Context: %c' + JSON.stringify(consumptionResult.context, null, 2),
            'color: #666; font-size: 11px;',
            'color: #999; font-size: 11px; font-family: monospace;'
          );
          
          // Only add context ID to error if it's clearly a mismatch issue
          if (consumptionResult.context.id && consumptionResult.context.id !== entryId) {
            console.warn(
              '%c⚠ Note: Service context shows different entry ID (%c' + consumptionResult.context.id + '%c). This may be informational.',
              'color: #ff9800; font-size: 11px;',
              'color: #ff9800; font-size: 11px; font-family: monospace;',
              'color: #ff9800; font-size: 11px;'
            );
          }
        }
        
        // Log warning separately if present
        if (consumptionResult.warning) {
          console.warn(
            '%c⚠ Service Warning: %c' + consumptionResult.warning,
            'color: #ff9800; font-size: 11px;',
            'color: #ff9800; font-size: 11px;'
          );
        }
        
        // Log full response for debugging
        console.log(
          '%c  Full Response: %c' + JSON.stringify({ 
            success: consumptionResult.success,
            error: consumptionResult.error, 
            warning: consumptionResult.warning,
            context: consumptionResult.context 
          }, null, 2),
          'color: #666; font-size: 11px;',
          'color: #999; font-size: 11px; font-family: monospace;'
        );
        
        throw new Error(userErrorMsg);
      }


      this._consumptionData = consumptionResult.consumption_data || [];

      // Fetch tariff comparison if enabled (with graceful degradation)
      this._comparisonError = null;
      if (this.config.show_tariff_comparison && this.config.tariff_entry_ids && this.config.tariff_entry_ids.length > 0) {
        try {
          const period = this._currentPeriod === "day" ? "daily" : this._currentPeriod === "week" ? "weekly" : "monthly";
          
          const comparisonResult = await this._callServiceWithTimeout<{ success: boolean; result?: ComparisonResult; error?: string }>(
            "octopus_energy_es",
            "compare_tariffs",
            {
              tariff_entry_ids: this.config.tariff_entry_ids,
              source_entry_id: entryId,
              period: period,
              start_date: startDate.toISOString().split("T")[0],
              end_date: endDate.toISOString().split("T")[0],
            }
          );

          if (comparisonResult.success && comparisonResult.result) {
            this._comparisonResult = comparisonResult.result;
          } else {
            const errorMsg = comparisonResult.error || "Failed to compare tariffs";
            this._comparisonError = errorMsg;
            console.warn(
              '%c⚠ Tariff comparison failed: %c' + errorMsg,
              'color: #ff9800; font-size: 11px;',
              'color: #ff9800; font-size: 11px;'
            );
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          this._comparisonError = `Tariff comparison error: ${errorMsg}`;
          console.warn(
            '%c⚠ Tariff comparison error: %c' + errorMsg,
            'color: #ff9800; font-size: 11px;',
            'color: #ff9800; font-size: 11px;'
          );
          // Don't throw - allow consumption data to display even if comparison fails
        }
      }
    } catch (error) {
      this._error = error instanceof Error ? error.message : String(error);
      console.error("Error loading data:", error);
    } finally {
      this._loading = false;
    }
  }

  private _getDateRange(): { startDate: Date; endDate: Date } {
    const endDate = new Date(this._currentDate);
    endDate.setHours(23, 59, 59, 999);
    
    const startDate = new Date(endDate);
    
    if (this._currentPeriod === "day") {
      startDate.setHours(0, 0, 0, 0);
    } else if (this._currentPeriod === "week") {
      startDate.setDate(startDate.getDate() - 6); // Last 7 days
      startDate.setHours(0, 0, 0, 0);
    } else if (this._currentPeriod === "month") {
      startDate.setDate(startDate.getDate() - 29); // Last 30 days
      startDate.setHours(0, 0, 0, 0);
    }

    return { startDate, endDate };
  }

  private _navigatePeriod(direction: "prev" | "next"): void {
    const change = direction === "prev" ? -1 : 1;
    
    if (this._currentPeriod === "day") {
      this._currentDate.setDate(this._currentDate.getDate() + change);
    } else if (this._currentPeriod === "week") {
      this._currentDate.setDate(this._currentDate.getDate() + (change * 7));
    } else if (this._currentPeriod === "month") {
      this._currentDate.setMonth(this._currentDate.getMonth() + change);
    }
    
    this._currentDate = new Date(this._currentDate);
    this._loadData();
  }

  private _setPeriod(period: "day" | "week" | "month"): void {
    this._currentPeriod = period;
    this._loadData();
  }

  protected render(): TemplateResult {
    if (this._loading) {
      return html`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `;
    }

    if (this._error) {
      return html`
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle" class="error-icon"></ha-icon>
          <div class="error-title">Unable to Load Data</div>
          <div class="error-details">${this._error}</div>
          <button class="retry-button" @click=${this._loadData}>
            Retry
          </button>
        </div>
      `;
    }

    return html`
      <div class="card-header">
        <h2 class="card-title">${this.config.title || "Consumption"}</h2>
      </div>

      ${this.config.show_navigation !== false ? html`
        <div class="period-selector">
          <button
            class="period-button ${this._currentPeriod === "day" ? "active" : ""}"
            @click=${() => this._setPeriod("day")}
          >
            Day
          </button>
          <button
            class="period-button ${this._currentPeriod === "week" ? "active" : ""}"
            @click=${() => this._setPeriod("week")}
          >
            Week
          </button>
          <button
            class="period-button ${this._currentPeriod === "month" ? "active" : ""}"
            @click=${() => this._setPeriod("month")}
          >
            Month
          </button>
        </div>

        <div class="navigation-controls">
          <button class="nav-button" @click=${() => this._navigatePeriod("prev")}>
            ← Previous
          </button>
          <button class="nav-button" @click=${() => this._navigatePeriod("next")}>
            Next →
          </button>
        </div>
      ` : ""}

      <div class="chart-container">
        ${this._renderChart()}
      </div>

      ${this.config.show_tariff_comparison ? html`
        <div class="comparison-section">
          <h3 class="comparison-title">Tariff Comparison</h3>
          ${this._comparisonError ? html`
            <div class="comparison-error">
              <ha-icon icon="mdi:alert"></ha-icon>
              ${this._comparisonError}
            </div>
          ` : this._comparisonResult ? this._renderComparison() : html`
            <div class="loading">Loading tariff comparison...</div>
          `}
        </div>
      ` : ""}
    `;
  }

  private _renderChart(): TemplateResult {
    // Placeholder for chart - will be implemented with ha-chart-base or similar
    if (this._consumptionData.length === 0) {
      return html`<p>No consumption data available</p>`;
    }

    return html`
      <div>
        <p>Chart will be rendered here (${this._consumptionData.length} data points)</p>
        <p>Total consumption: ${this._consumptionData.reduce((sum, d) => sum + (d.consumption || d.value || 0), 0).toFixed(2)} kWh</p>
      </div>
    `;
  }

  private _renderComparison(): TemplateResult {
    if (!this._comparisonResult || !this._comparisonResult.tariffs || this._comparisonResult.tariffs.length === 0) {
      return html`<p>No comparison data available</p>`;
    }

    const sortedTariffs = [...this._comparisonResult.tariffs].sort((a, b) => a.total_cost - b.total_cost);
    const bestTariffId = this._comparisonResult.best_tariff?.entry_id;

    return html`
      <div class="tariff-list">
        ${sortedTariffs.map(tariff => html`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${tariff.name}
                ${bestTariffId === tariff.entry_id ? html`<span class="best-tariff-badge">Best</span>` : ""}
              </span>
              <span class="tariff-cost">€${tariff.total_cost.toFixed(2)}</span>
            </div>
            
            <div class="tariff-breakdown">
              <div class="breakdown-item">
                <span class="breakdown-label">Energy Cost</span>
                <span class="breakdown-value">€${tariff.energy_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Power Cost</span>
                <span class="breakdown-value">€${tariff.power_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Management Fee</span>
                <span class="breakdown-value">€${tariff.management_fee.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Taxes</span>
                <span class="breakdown-value">€${tariff.taxes.toFixed(2)}</span>
              </div>
            </div>

            ${this._renderPeriodBreakdown(tariff.period_breakdown)}
          </div>
        `)}
      </div>

      ${this._comparisonResult.savings ? html`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      ` : ""}
    `;
  }

  private _renderPeriodBreakdown(breakdown: TariffComparisonResult["period_breakdown"]): TemplateResult {
    const maxConsumption = Math.max(breakdown.p1_consumption, breakdown.p2_consumption, breakdown.p3_consumption);
    
    return html`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${maxConsumption > 0 ? (breakdown.p1_consumption / maxConsumption) * 100 : 0}%"
            ></div>
            <div class="period-bar-label">
              P1: ${breakdown.p1_consumption.toFixed(2)} kWh<br>
              ${breakdown.p1_percentage.toFixed(1)}%
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${maxConsumption > 0 ? (breakdown.p2_consumption / maxConsumption) * 100 : 0}%"
            ></div>
            <div class="period-bar-label">
              P2: ${breakdown.p2_consumption.toFixed(2)} kWh<br>
              ${breakdown.p2_percentage.toFixed(1)}%
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${maxConsumption > 0 ? (breakdown.p3_consumption / maxConsumption) * 100 : 0}%"
            ></div>
            <div class="period-bar-label">
              P3: ${breakdown.p3_consumption.toFixed(2)} kWh<br>
              ${breakdown.p3_percentage.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Returns a stub configuration for the card editor
   * Used when adding the card through the UI
   */
  static getStubConfig(): OctopusConsumptionCardConfig {
    return {
      type: "custom:octopus-consumption-card",
      source_entry_id: "",
      title: "Consumption",
      show_comparison: true,
      default_period: "week",
      chart_type: "line",
      show_tariff_comparison: false,
      tariff_entry_ids: [],
      show_cost_on_chart: false,
      show_navigation: true,
    };
  }

  /**
   * Returns the config element for the card editor
   * Used by Home Assistant to show the visual editor
   */
  static getConfigElement(): HTMLElement {
    return document.createElement("octopus-consumption-card-editor");
  }
}

// Export functions for Home Assistant card picker
// These functions are required by Home Assistant to discover and instantiate the card
export function getCardElement() {
  return OctopusConsumptionCard;
}

export function getCardConfigElement() {
  return OctopusConsumptionCardEditor;
}

export function getStubConfig(): OctopusConsumptionCardConfig {
  return OctopusConsumptionCard.getStubConfig();
}

// Make functions available globally for Home Assistant (IIFE bundle)
if (typeof window !== 'undefined') {
  (window as any).getCardElement = getCardElement;
  (window as any).getCardConfigElement = getCardConfigElement;
  (window as any).getStubConfig = getStubConfig;
}

declare global {
  interface HTMLElementTagNameMap {
    "octopus-consumption-card": OctopusConsumptionCard;
  }
}

// Explicitly register the custom element for Home Assistant
// This ensures the element is available even if decorators don't work properly
// Register immediately when module loads (for IIFE bundles)
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  // Register the custom element FIRST
  try {
    if (!customElements.get('octopus-consumption-card')) {
      customElements.define('octopus-consumption-card', OctopusConsumptionCard);
    }
  } catch (error) {
    console.error('Failed to register octopus-consumption-card:', error);
  }
  
  // Make the class available globally for Home Assistant card picker
  // Initialize customCards as array if it doesn't exist
  if (typeof (window as any).customCards === 'undefined') {
    (window as any).customCards = [];
  }
  
  // Add card with metadata to the card picker (only if it's an array)
  if (Array.isArray((window as any).customCards)) {
    // Check if not already added
    const alreadyAdded = (window as any).customCards.some(
      (card: any) => card.type === 'custom:octopus-consumption-card'
    );
    if (!alreadyAdded) {
      (window as any).customCards.push({
        type: 'custom:octopus-consumption-card',
        name: 'Octopus Energy España Consumption Card',
        preview: false,
        description: 'Display consumption data and tariff comparisons for Octopus Energy España',
      });
    }
  }
  
  // Also keep object assignment for backward compatibility
  (window as any).customCards['octopus-consumption-card'] = OctopusConsumptionCard;
  
  // Also expose directly on window for compatibility
  (window as any).OctopusConsumptionCard = OctopusConsumptionCard;

  // Styled console logs for DevTools (after registration)
  const VERSION = '0.4.55';
  const isRegistered = !!customElements.get('octopus-consumption-card');
  
  console.groupCollapsed(
    '%c⚡ OCTOPUS ENERGY ESPAÑA',
    'background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);' +
    'color: #fff;' +
    'padding: 4px 8px;' +
    'border-radius: 4px;' +
    'font-weight: bold;'
  );
  console.log(
    '%cConsumption Card %cv' + VERSION,
    'color: #e10090; font-weight: bold;',
    'color: #999;'
  );
  console.log(
    '%c' + (isRegistered ? '✓' : '✗') + ' Custom element: %coctopus-consumption-card',
    isRegistered ? 'color: #0a0; font-size: 11px;' : 'color: #f00; font-size: 11px;',
    'color: #666; font-size: 11px;'
  );
  console.log(
    '%c✓ Added to card picker',
    'color: #0a0; font-size: 11px;'
  );
  console.log(
    '%c✓ Visual editor enabled',
    'color: #0a0; font-size: 11px;'
  );
  console.log(
    '%cℹ Supported languages: %cen, es, be',
    'color: #666; font-size: 11px;',
    'color: #999; font-size: 11px;'
  );
  
  // Debug info
  if (!isRegistered) {
    console.error('%c✗ Registration failed! Element not found in customElements registry', 'color: #f00; font-weight: bold;');
  }
  
  console.groupEnd();
}
