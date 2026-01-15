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
import { Logger } from "./logger";

// Home Assistant types
interface HomeAssistant {
  states: Record<string, any>;
  callService: (domain: string, service: string, serviceData?: Record<string, any>) => Promise<any>;
  callWS?: <T = any>(message: {
    type: string;
    domain?: string;
    service?: string;
    service_data?: Record<string, any>;
    return_response?: boolean;
    [key: string]: any;
  }) => Promise<T>;
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

  // Constants
  private static readonly SERVICE_TIMEOUT = 10000;
  private static readonly SERVICE_DOMAIN = "octopus_energy_es";
  private static readonly SERVICE_FETCH_CONSUMPTION = "fetch_consumption";
  private static readonly SERVICE_COMPARE_TARIFFS = "compare_tariffs";

  static styles = css`
    :host {
      display: block;
      padding: 16px;
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

  /**
   * Returns the card size for grid layout
   * Home Assistant uses this to determine card height in grid layouts
   * This prevents the "Cannot set properties of undefined (setting 'layout')" error
   */
  public getCardSize(): number {
    // Base size: 1 for basic card
    // Add 1 if showing navigation controls
    // Add 1 if showing tariff comparison
    let size = 1;
    if (this.config && this.config.show_navigation !== false) {
      size += 1;
    }
    if (this.config && this.config.show_tariff_comparison) {
      size += 1;
    }
    return size;
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
      Logger.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled.");
    }

    if (this.config.show_cost_on_chart && !this.config.selected_tariff_for_cost) {
      Logger.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.");
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
   * 
   * For services registered with SupportsResponse.OPTIONAL (like octopus_energy_es.fetch_consumption),
   * uses callWS with return_response: true to get response data.
   * Falls back to callService if callWS is unavailable or fails.
   * 
   * @param domain - Service domain (e.g., "octopus_energy_es")
   * @param service - Service name (e.g., "fetch_consumption")
   * @param serviceData - Service parameters
   * @param returnResponse - Whether to request response data (default: true)
   */
  private async _callServiceWithTimeout<T>(
    domain: string,
    service: string,
    serviceData?: Record<string, any>,
    returnResponse: boolean = true
  ): Promise<T> {
    try {
      Logger.serviceCall(domain, service, returnResponse);
      if (serviceData) {
        Logger.serviceData(serviceData);
      }
      
      // Use callWS for services that support return_response (SupportsResponse.OPTIONAL)
      let result: any;
      if (returnResponse && this.hass.callWS) {
        try {
          result = await this._callServiceViaWebSocket<T>(domain, service, serviceData);
        } catch (wsError) {
          // If callWS fails, fallback to callService
          const errorMsg = wsError instanceof Error ? wsError.message : String(wsError);
          Logger.warn('⚠ WebSocket call failed, falling back to callService: ', errorMsg);
          result = await this._callServiceViaStandard<T>(domain, service, serviceData);
        }
      } else {
        // Use standard callService for services that don't need return_response
        result = await this._callServiceViaStandard<T>(domain, service, serviceData);
      }
      
      Logger.serviceResponse(result);
      return result as T;
    } catch (error) {
      Logger.serviceError(error);
      throw this._handleServiceError(error, domain, service);
    }
  }

  /**
   * Handles service call errors and converts them to user-friendly messages
   */
  private _handleServiceError(error: any, domain: string, service: string): Error {
    if (error instanceof Error) {
      if (error.message.includes("timeout")) {
        return new Error(`Service call timeout: ${domain}.${service} took longer than ${OctopusConsumptionCard.SERVICE_TIMEOUT}ms`);
      }
      if (error.message.includes("Service not found") || error.message.includes("not available")) {
        return new Error(`Service ${domain}.${service} is not available. Please ensure the Octopus Energy España integration is installed and configured.`);
      }
      if ((error as any).code === 'service_validation_error') {
        return this._handleValidationError(error);
      }
      return new Error(`Service call failed: ${domain}.${service} - ${error.message}`);
    }
    
    if (error && typeof error === 'object') {
      const errorObj = error as any;
      if (errorObj.code === 'service_validation_error') {
        return this._handleValidationError(errorObj);
      }
      const message = errorObj.message || errorObj.translation_key || 'Unknown service error';
      return new Error(`Service call failed: ${domain}.${service} - ${message}`);
    }
    
    return error instanceof Error ? error : new Error(String(error));
  }

  /**
   * Handles service validation errors with user-friendly messages
   */
  private _handleValidationError(error: any): Error {
    const errorObj = error instanceof Error ? error as any : error;
    let message = errorObj.message || errorObj.translation_key || 'Service validation error';
    
    if (message.includes('return_response')) {
      message = "The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.";
    }
    
    return new Error(`Service validation error: ${message}`);
  }

  /**
   * Validates consumption service response structure
   */
  private _validateConsumptionResponse(result: any): void {
    if (!result || typeof result !== 'object') {
      Logger.error('✗ Invalid service response: ', 'expected object with success field');
      throw new Error("Invalid response from service: expected object with success field");
    }

    if (!('success' in result)) {
      Logger.error('✗ Invalid service response format: ', 'response does not contain success field');
      Logger.data('Received response', result);
      throw new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.");
    }
  }

  /**
   * Extracts error message from various error types
   */
  private _extractErrorMessage(error: any): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (error && typeof error === 'object') {
      return error.message || error.translation_key || JSON.stringify(error);
    }
    return String(error);
  }

  /**
   * Creates user-friendly error message from service error
   */
  private _createUserFriendlyError(error: any): Error {
    if (error instanceof Error) {
      return error;
    }
    
    if (error && typeof error === 'object') {
      const errorObj = error as any;
      let message = errorObj.message || errorObj.translation_key || JSON.stringify(error);
      
      if (errorObj.code === 'service_validation_error') {
        if (message.includes('return_response')) {
          message = "The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.";
        } else {
          message = message || "Service validation error. Please check your configuration.";
        }
      }
      
      return new Error(message);
    }
    
    return new Error(String(error));
  }

  /**
   * Extracts response data from WebSocket result
   */
  private _extractWebSocketResponse<T>(wsResult: any): T {
    if (wsResult && typeof wsResult === 'object') {
      if ('service_response' in wsResult) {
        return wsResult.service_response as T;
      }
      if ('response' in wsResult) {
        return wsResult.response as T;
      }
      return wsResult as T;
    }
    return wsResult as T;
  }

  /**
   * Calls service via WebSocket API with return_response support
   */
  private async _callServiceViaWebSocket<T>(
    domain: string,
    service: string,
    serviceData?: Record<string, any>
  ): Promise<T> {
    if (!this.hass.callWS) {
      throw new Error('callWS is not available');
    }
    const wsCall = this.hass.callWS<{ response?: T; service_response?: T }>({
      type: 'call_service',
      domain: domain,
      service: service,
      service_data: serviceData,
      return_response: true
    });
    const timeout = this._createTimeoutPromise(OctopusConsumptionCard.SERVICE_TIMEOUT);
    const wsResult = await Promise.race([wsCall, timeout]);
    return this._extractWebSocketResponse<T>(wsResult);
  }

  /**
   * Calls service via standard callService API (fallback)
   */
  private async _callServiceViaStandard<T>(
    domain: string,
    service: string,
    serviceData?: Record<string, any>
  ): Promise<T> {
    const serviceCall = this.hass.callService(domain, service, serviceData);
    const timeout = this._createTimeoutPromise(OctopusConsumptionCard.SERVICE_TIMEOUT);
    return await Promise.race([serviceCall, timeout]) as T;
  }

  private async _loadData(): Promise<void> {
    if (!this.hass || !this.config) {
      return;
    }

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
      const { startDate, endDate } = this._getDateRange();
      this._validateDateRange(startDate, endDate);

      Logger.info(
        'ℹ Fetching consumption data',
        `Entry ID: ${entryId} | Period: ${this._currentPeriod} | Dates: ${startDate.toISOString().split("T")[0]} → ${endDate.toISOString().split("T")[0]}`
      );

      const consumptionResult = await this._fetchConsumptionData(entryId, startDate, endDate);
      this._consumptionData = consumptionResult.consumption_data || [];

      if (this.config.show_tariff_comparison && this.config.tariff_entry_ids?.length) {
        await this._fetchTariffComparison(entryId, startDate, endDate);
      }
    } catch (error) {
      this._error = error instanceof Error ? error.message : String(error);
      Logger.error("Error loading data: ", this._extractErrorMessage(error));
      Logger.data("Error details", error);
    } finally {
      this._loading = false;
    }
  }

  /**
   * Validates date range for consumption data request
   */
  private _validateDateRange(startDate: Date, endDate: Date): void {
    const now = new Date();
    if (startDate > now) {
      throw new Error(`Invalid date range: start date (${startDate.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);
    }
    
    if (startDate > endDate) {
      throw new Error(`Invalid date range: start date is after end date.`);
    }
  }

  /**
   * Fetches consumption data from the service
   */
  private async _fetchConsumptionData(
    entryId: string,
    startDate: Date,
    endDate: Date
  ): Promise<FetchConsumptionResult> {
    const granularity = this._currentPeriod === "day" ? "hourly" : this._currentPeriod === "week" ? "hourly" : "daily";
    
    let rawResponse: any;
    try {
      rawResponse = await this._callServiceWithTimeout<any>(
        OctopusConsumptionCard.SERVICE_DOMAIN,
        OctopusConsumptionCard.SERVICE_FETCH_CONSUMPTION,
        {
          entry_id: entryId,
          start_date: startDate.toISOString().split("T")[0],
          end_date: endDate.toISOString().split("T")[0],
          granularity: granularity,
        }
      );
      
      Logger.data('Raw Service Response (before processing)', rawResponse);
      
      const consumptionResult = rawResponse as FetchConsumptionResult;
      this._validateConsumptionResponse(consumptionResult);

      if (!consumptionResult.success) {
        this._handleConsumptionError(consumptionResult, entryId);
      }

      return consumptionResult;
    } catch (serviceError) {
      Logger.error('✗ Service call failed: ', this._extractErrorMessage(serviceError));
      Logger.data('Full Error Object', serviceError);
      throw this._createUserFriendlyError(serviceError);
    }
  }

  /**
   * Handles consumption service error response
   */
  private _handleConsumptionError(result: FetchConsumptionResult, entryId: string): void {
    const errorMsg = result.error || "Failed to fetch consumption data";
    let userErrorMsg = errorMsg;
    
    if (result.warning) {
      userErrorMsg += `. ${result.warning}`;
      Logger.warn('⚠ Service Warning: ', result.warning);
    }
    
    Logger.error('✗ Service returned error: ', errorMsg);
    Logger.data('Requested Entry ID', entryId);
    
    if (result.context) {
      Logger.data('Service Context', result.context);
      if (result.context.id && result.context.id !== entryId) {
        Logger.warn('⚠ Note: Service context shows different entry ID (', result.context.id + '). This may be informational.');
      }
    }
    
    Logger.data('Full Response', {
      success: result.success,
      error: result.error,
      warning: result.warning,
      context: result.context
    });
    
    throw new Error(userErrorMsg);
  }

  /**
   * Fetches tariff comparison data
   */
  private async _fetchTariffComparison(
    entryId: string,
    startDate: Date,
    endDate: Date
  ): Promise<void> {
    try {
      const period = this._currentPeriod === "day" ? "daily" : this._currentPeriod === "week" ? "weekly" : "monthly";
      
      const comparisonResult = await this._callServiceWithTimeout<{ success: boolean; result?: ComparisonResult; error?: string }>(
        OctopusConsumptionCard.SERVICE_DOMAIN,
        OctopusConsumptionCard.SERVICE_COMPARE_TARIFFS,
        {
          tariff_entry_ids: this.config.tariff_entry_ids!,
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
        Logger.warn('⚠ Tariff comparison failed: ', errorMsg);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      this._comparisonError = `Tariff comparison error: ${errorMsg}`;
      Logger.warn('⚠ Tariff comparison error: ', errorMsg);
      // Don't throw - allow consumption data to display even if comparison fails
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
    Logger.error('Failed to register octopus-consumption-card: ', error instanceof Error ? error.message : String(error));
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
  const VERSION = '0.4.57';
  const isRegistered = !!customElements.get('octopus-consumption-card');
  
  // Branding header (keep styled for visual impact)
  console.groupCollapsed(
    '%c⚡ OCTOPUS ENERGY ESPAÑA',
    'background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);' +
    'color: #fff;' +
    'padding: 4px 8px;' +
    'border-radius: 4px;' +
    'font-weight: bold;'
  );
  
  Logger.info('Consumption Card', `v${VERSION}`);
  Logger.info(isRegistered ? '✓ Custom element: ' : '✗ Custom element: ', 'octopus-consumption-card');
  Logger.success('✓ Added to card picker');
  Logger.success('✓ Visual editor enabled');
  Logger.info('ℹ Supported languages: ', 'en, es, be');
  
  if (!isRegistered) {
    Logger.error('✗ Registration failed! Element not found in customElements registry');
  }
  
  console.groupEnd();
}
