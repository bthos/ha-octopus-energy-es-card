/**
 * Octopus Energy España Consumption Card
 * 
 * A Lovelace card for displaying consumption graphs and tariff comparisons.
 */

import { LitElement, html, PropertyValues, TemplateResult } from "lit";

// Disable Lit dev mode warnings (only available in dev builds)
// This will be tree-shaken out in production builds
if (typeof LitElement !== 'undefined' && (LitElement as any).disableWarning) {
  (LitElement as any).disableWarning('change-in-update');
}
import { property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig, ConsumptionDataPoint, ComparisonResult, FetchConsumptionResult, TariffComparisonResult, TariffCostBreakdown, HeatCalendarDay, WeekComparisonData } from "./types";
// Import editor to ensure it's included in the bundle and get the class
import "./octopus-consumption-card-editor";
import { OctopusConsumptionCardEditor } from "./octopus-consumption-card-editor";
import { Logger } from "./logger";
import { cardStyles } from "./styles";
import { CanvasChart } from "./charts";
import type { ChartData, StackedData, AnimationConfig, ChartConfig } from "./charts";
import { prepareChartData, calculatePoints } from "./charts/chart-utils";

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
  @state() private _tariffCosts: Record<string, TariffCostBreakdown> | null = null;
  @state() private _loading = false;
  @state() private _error: string | null = null;
  @state() private _comparisonError: string | null = null;
  @state() private _currentPeriod: "day" | "week" | "month" = "week";
  @state() private _currentDate: Date = new Date();
  @state() private _weekComparisonData: WeekComparisonData | null = null;
  private _chartInstance: CanvasChart | null = null;

  // Constants
  private static readonly SERVICE_TIMEOUT = 10000;
  private static readonly SERVICE_DOMAIN = "octopus_energy_es";
  private static readonly SERVICE_FETCH_CONSUMPTION = "fetch_consumption";
  private static readonly SERVICE_COMPARE_TARIFFS = "compare_tariffs";

  static styles = cardStyles;

  /**
   * Get computed color value from CSS variable
   * Used to dynamically retrieve CSS variable values for Canvas chart rendering
   */
  private _getComputedColor(cssVar: string, fallback: string): string {
    if (typeof window !== 'undefined' && this.shadowRoot) {
      try {
        const root = this.shadowRoot.host || document.documentElement;
        const style = getComputedStyle(root);
        const value = style.getPropertyValue(cssVar).trim();
        return value || fallback;
      } catch {
        return fallback;
      }
    }
    return fallback;
  }

  /**
   * Set the card configuration (required by Home Assistant)
   */
  public setConfig(config: OctopusConsumptionCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    // Ensure view defaults to "consumption" if not specified
    const configWithDefaults = {
      ...config,
      view: config.view || "consumption",
    };

    this.config = configWithDefaults;
    
    // Initialize state from config if available
    if (configWithDefaults.default_period) {
      this._currentPeriod = configWithDefaults.default_period;
    }
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
    const view = this.config?.view || "consumption";
    if (this.config && view === "tariff-comparison") {
      size += 1;
    }
    return size;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._validateConfig();
    this._currentPeriod = this.config.default_period || "week";
    // Only load data if configuration is valid
    if (!this._error) {
      this._loadData();
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has("config")) {
      this._validateConfig();
      
      // Update state to match config changes
      if (this.config.default_period && this._currentPeriod !== this.config.default_period) {
        this._currentPeriod = this.config.default_period;
      }
      
      // Only reload data if config actually changed (not just initial set)
      if (changedProperties.get("config") !== undefined) {
        this._loadData();
      }
    }
    
    // Render canvas chart when data or config changes
    if (changedProperties.has("_consumptionData") || 
        changedProperties.has("config") ||
        changedProperties.has("_tariffCosts")) {
      this._renderCanvasChart();
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
      this._error = "Configuration incomplete. Please edit this card and select your Octopus Energy tariff.";
      this._loading = false;
      return;
    }

    const view = this.config.view || "consumption";
    // Check if tariff comparison is active (only for tariff-comparison view)
    if (view === "tariff-comparison" && (!this.config.tariff_entry_ids || this.config.tariff_entry_ids.length === 0)) {
      Logger.warn("Tariff comparison view is active but no tariff_entry_ids provided. Comparison will be disabled.");
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
    Logger.groupServiceCall(domain, service);
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
      Logger.groupEnd();
      return result as T;
    } catch (error) {
      Logger.serviceError(error);
      Logger.groupEnd();
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
      Logger.groupError('Invalid service response');
      Logger.error('✗ Invalid service response: ', 'expected object with success field');
      Logger.groupEnd();
      throw new Error("Invalid response from service: expected object with success field");
    }

    if (!('success' in result)) {
      Logger.groupError('Invalid service response format');
      Logger.error('✗ Invalid service response format: ', 'response does not contain success field');
      Logger.data('Received response', result);
      Logger.groupEnd();
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

      const dateRange = `${startDate.toISOString().split("T")[0]} → ${endDate.toISOString().split("T")[0]}`;
      Logger.groupDataLoad(entryId, this._currentPeriod, dateRange);

      const consumptionResult = await this._fetchConsumptionData(entryId, startDate, endDate);
      this._consumptionData = consumptionResult.consumption_data || [];
      
      // Store tariff costs if available (for cost display on chart)
      if (consumptionResult.tariff_costs) {
        this._tariffCosts = consumptionResult.tariff_costs;
      } else {
        // Clear tariff costs if not available
        this._tariffCosts = null;
      }

      // Optimize data loading based on active view
      const view = this.config.view || "consumption";

      // Fetch tariff comparison only if tariff-comparison view is active
      if (view === "tariff-comparison" && this.config.tariff_entry_ids?.length) {
        await this._fetchTariffComparison(entryId, startDate, endDate);
      } else {
        // Clear comparison result if not needed
        this._comparisonResult = null;
      }

      // Only calculate week comparison if week-analysis view is active
      if (view === "week-analysis" && this.config.show_week_comparison) {
        this._weekComparisonData = this._calculateWeekComparison();
      } else {
        this._weekComparisonData = null;
      }

      Logger.groupEnd();
    } catch (error) {
      Logger.groupError("Error loading data");
      this._error = error instanceof Error ? error.message : String(error);
      Logger.error("Error loading data: ", this._extractErrorMessage(error));
      Logger.data("Error details", error);
      Logger.groupEnd();
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
    // Determine granularity based on period and view
    const view = this.config.view || "consumption";
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    const granularity = isHeatCalendarYear 
      ? "daily" // Year view always needs daily data
      : (this._currentPeriod === "day" ? "hourly" : this._currentPeriod === "week" ? "hourly" : "daily");
    
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
      Logger.groupError('Service call failed');
      Logger.error('✗ Service call failed: ', this._extractErrorMessage(serviceError));
      Logger.data('Full Error Object', serviceError);
      Logger.groupEnd();
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
    
    Logger.groupError('Service returned error');
    Logger.error('✗ Service returned error: ', errorMsg);
    Logger.data('Requested Entry ID', entryId);

    if (result.context) {
      Logger.data('Service Context', result.context);
      if (result.context.id && result.context.id !== entryId) {
        Logger.warn('⚠ Note: Service context shows different entry ID (', result.context.id + '). This may be informational.');
      }
    }
    Logger.groupEnd();
    
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
        Logger.groupError('Tariff comparison failed');
        Logger.warn('⚠ Tariff comparison failed: ', errorMsg);
        Logger.groupEnd();
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      this._comparisonError = `Tariff comparison error: ${errorMsg}`;
      Logger.groupError('Tariff comparison error');
      Logger.warn('⚠ Tariff comparison error: ', errorMsg);
      Logger.groupEnd();
      // Don't throw - allow consumption data to display even if comparison fails
    }
  }

  private _getDateRange(): { startDate: Date; endDate: Date } {
    // Check if heat calendar year view is requested
    const view = this.config.view || "consumption";
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    if (isHeatCalendarYear) {
      // For year view, fetch full year of data
      const selectedYear = this._currentDate.getFullYear();
      const now = new Date();
      const isCurrentYear = selectedYear === now.getFullYear();
      
      const startDate = new Date(selectedYear, 0, 1); // January 1st
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = isCurrentYear 
        ? new Date(now) // Today if current year
        : new Date(selectedYear, 11, 31); // December 31st if past year
      endDate.setHours(23, 59, 59, 999);
      
      return { startDate, endDate };
    }
    
    // Standard period-based date range
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

  /**
   * Check if navigating "next" would go into the future
   */
  private _wouldNavigateToFuture(): boolean {
    const now = new Date();
    now.setHours(23, 59, 59, 999); // End of today
    
    const view = this.config.view || "consumption";
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    if (isHeatCalendarYear) {
      const nextYear = this._currentDate.getFullYear() + 1;
      return nextYear > now.getFullYear();
    }
    
    const testDate = new Date(this._currentDate);
    if (this._currentPeriod === "day") {
      testDate.setDate(testDate.getDate() + 1);
    } else if (this._currentPeriod === "week") {
      testDate.setDate(testDate.getDate() + 7);
    } else if (this._currentPeriod === "month") {
      testDate.setMonth(testDate.getMonth() + 1);
    }
    
    // Check if the end date of the next period would be in the future
    const { endDate } = this._getDateRangeForDate(testDate);
    return endDate > now;
  }

  /**
   * Get date range for a specific date (used for future check)
   */
  private _getDateRangeForDate(date: Date): { startDate: Date; endDate: Date } {
    const view = this.config.view || "consumption";
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    if (isHeatCalendarYear) {
      const selectedYear = date.getFullYear();
      const now = new Date();
      const isCurrentYear = selectedYear === now.getFullYear();
      
      const startDate = new Date(selectedYear, 0, 1);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = isCurrentYear 
        ? new Date(now)
        : new Date(selectedYear, 11, 31);
      endDate.setHours(23, 59, 59, 999);
      
      return { startDate, endDate };
    }
    
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    
    const startDate = new Date(endDate);
    
    if (this._currentPeriod === "day") {
      startDate.setHours(0, 0, 0, 0);
    } else if (this._currentPeriod === "week") {
      startDate.setDate(startDate.getDate() - 6);
      startDate.setHours(0, 0, 0, 0);
    } else if (this._currentPeriod === "month") {
      startDate.setDate(startDate.getDate() - 29);
      startDate.setHours(0, 0, 0, 0);
    }
    
    return { startDate, endDate };
  }

  private _navigatePeriod(direction: "prev" | "next"): void {
    // Prevent navigating to the future
    if (direction === "next" && this._wouldNavigateToFuture()) {
      return;
    }
    
    const change = direction === "prev" ? -1 : 1;
    
    // Check if heat calendar year view navigation is needed
    const view = this.config.view || "consumption";
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    if (isHeatCalendarYear) {
      // Navigate by year for heat calendar year view
      this._currentDate.setFullYear(this._currentDate.getFullYear() + change);
      this._currentDate = new Date(this._currentDate);
      this._loadData();
      return;
    }
    
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

  /**
   * Extracts period breakdown data (P1/P2/P3) from tariff costs
   * Returns array of period data matching consumption data length
   */
  private _extractPeriodData(): Array<{ p1: number; p2: number; p3: number; timestamp: string }> | null {
    // Try to get period data from tariff costs first
    if (this._tariffCosts && this.config.source_entry_id) {
      const tariffCost = this._tariffCosts[this.config.source_entry_id];
      if (tariffCost && tariffCost.hourly_breakdown) {
        // Group hourly data by timestamp and aggregate by period
        const periodMap = new Map<string, { p1: number; p2: number; p3: number }>();
        
        for (const hourData of tariffCost.hourly_breakdown) {
          const timestamp = hourData.hour || '';
          const consumption = hourData.consumption || 0;
          const period = hourData.period;
          
          if (!periodMap.has(timestamp)) {
            periodMap.set(timestamp, { p1: 0, p2: 0, p3: 0 });
          }
          
          const entry = periodMap.get(timestamp)!;
          if (period === 'P1') {
            entry.p1 += consumption;
          } else if (period === 'P2') {
            entry.p2 += consumption;
          } else if (period === 'P3') {
            entry.p3 += consumption;
          }
        }
        
        // Convert map to array matching consumption data order
        const result = Array.from(periodMap.entries()).map(([timestamp, periods]) => ({
          timestamp,
          ...periods
        }));
        
        if (result.length > 0) {
          return result;
        }
      }
      
      // Try daily breakdown for month view
      if (tariffCost && tariffCost.daily_breakdown && this._currentPeriod === 'month') {
        // For daily data, we need to estimate P1/P2/P3 distribution
        // Use the period_breakdown percentages to estimate
        if (tariffCost.period_breakdown) {
          const p1Pct = tariffCost.period_breakdown.p1_percentage / 100;
          const p2Pct = tariffCost.period_breakdown.p2_percentage / 100;
          const p3Pct = tariffCost.period_breakdown.p3_percentage / 100;
          
          return tariffCost.daily_breakdown.map(day => ({
            timestamp: day.date,
            p1: day.consumption * p1Pct,
            p2: day.consumption * p2Pct,
            p3: day.consumption * p3Pct,
          }));
        }
      }
    }
    
    // Try to extract from consumption data if it has period information
    if (this._consumptionData.length > 0) {
      const firstPoint = this._consumptionData[0];
      if (firstPoint.p1_consumption !== undefined || firstPoint.period) {
        return this._consumptionData.map(point => ({
          timestamp: point.start_time || point.date || '',
          p1: point.p1_consumption || (point.period === 'P1' ? point.consumption : 0),
          p2: point.p2_consumption || (point.period === 'P2' ? point.consumption : 0),
          p3: point.p3_consumption || (point.period === 'P3' ? point.consumption : 0),
        }));
      }
    }
    
    return null;
  }

  /**
   * Calculate moving average for consumption data
   * @param data - Array of consumption values
   * @param windowSize - Number of periods for moving average
   * @returns Array of moving average values (same length as input, nulls for insufficient data)
   */
  private _calculateMovingAverage(data: number[], windowSize: number): (number | null)[] {
    if (windowSize < 2 || data.length === 0) {
      return data.map(() => null);
    }
    
    const result: (number | null)[] = [];
    
    for (let i = 0; i < data.length; i++) {
      if (i < windowSize - 1) {
        // Not enough data points yet for moving average
        result.push(null);
      } else {
        // Calculate average of window
        let sum = 0;
        for (let j = 0; j < windowSize; j++) {
          sum += data[i - j];
        }
        result.push(sum / windowSize);
      }
    }
    
    return result;
  }

  /**
   * Calculate moving average for cost data
   * @param costData - Array of cost values
   * @param windowSize - Number of periods for moving average (default: 30)
   * @returns Array of moving average values (same length as input, nulls for insufficient data)
   */
  private _calculateCostMovingAverage(costData: number[], windowSize: number = 30): (number | null)[] {
    return this._calculateMovingAverage(costData, windowSize);
  }

  /**
   * Render heat calendar (heatmap) visualization
   */
  private _renderHeatCalendar(): TemplateResult {
    const calendarData = this._getHeatCalendarData();
    const period = this.config.heat_calendar_period || "month";
    const isYearView = period === "year";
    
    if (calendarData.length === 0) {
      return html`
        <div class="error-message">
          <div class="error-title">Heat Calendar Unavailable</div>
          <div class="error-details">
            Daily breakdown data is not available. Please ensure tariff comparison is enabled or daily data is available from the service.
          </div>
        </div>
      `;
    }

    // Group data by week and day
    const calendarMap = new Map<number, Map<number, HeatCalendarDay>>();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Track month changes for year view
    const monthChanges = new Map<number, number>(); // week -> month
    
    for (const day of calendarData) {
      const weekIndex = isYearView ? (day.weekOfYear ?? 0) : (day.weekOfMonth ?? 0);
      
      if (!calendarMap.has(weekIndex)) {
        calendarMap.set(weekIndex, new Map());
      }
      calendarMap.get(weekIndex)!.set(day.dayOfWeek, day);
      
      // Track month changes for year view
      if (isYearView && day.month !== undefined) {
        if (!monthChanges.has(weekIndex) || (monthChanges.get(weekIndex)! !== day.month)) {
          monthChanges.set(weekIndex, day.month);
        }
      }
    }

    let maxWeek: number;
    let minWeek: number;
    
    if (isYearView) {
      // For year view, generate all 53 weeks (ISO weeks can go up to 53)
      // ISO weeks can span year boundaries, so we need to normalize
      // Find the actual range from data
      const dataWeeks = Array.from(calendarMap.keys());
      if (dataWeeks.length > 0) {
        minWeek = Math.min(...dataWeeks);
        maxWeek = Math.max(...dataWeeks);
        // Ensure we cover at least 52 weeks for a full year
        if (maxWeek - minWeek < 51) {
          maxWeek = minWeek + 52;
        }
      } else {
        minWeek = 0;
        maxWeek = 52;
      }
    } else {
      // For month view, use actual data range
      maxWeek = Math.max(...Array.from(calendarMap.keys()), 0);
      minWeek = Math.min(...Array.from(calendarMap.keys()), 0);
    }
    
    const weeks: Array<Array<HeatCalendarDay | null>> = [];
    
    // Generate all weeks from min to max
    for (let week = minWeek; week <= maxWeek; week++) {
      const weekDays: Array<HeatCalendarDay | null> = [];
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const day = calendarMap.get(week)?.get(dayOfWeek) || null;
        weekDays.push(day);
      }
      weeks.push(weekDays);
    }

    // Calculate year summary for year view
    let yearSummary = null;
    if (isYearView && calendarData.length > 0) {
      const totalConsumption = calendarData.reduce((sum, day) => sum + day.consumption, 0);
      const totalCost = calendarData.reduce((sum, day) => sum + day.cost, 0);
      const avgDailyConsumption = totalConsumption / calendarData.length;
      yearSummary = {
        totalConsumption,
        totalCost,
        avgDailyConsumption,
        year: calendarData[0]?.year || this._currentDate.getFullYear(),
      };
    }

    return html`
      <div class="heat-calendar-container ${isYearView ? 'heat-calendar-year-view' : ''}">
        <div class="comparison-title">
          Consumption Heat Calendar
          ${isYearView && yearSummary ? html` - ${yearSummary.year}` : ''}
        </div>
        ${isYearView && yearSummary ? html`
          <div class="heat-calendar-summary">
            <span>Total: ${yearSummary.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${yearSummary.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${yearSummary.totalCost.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="heat-calendar-grid ${isYearView ? 'heat-calendar-grid-year' : ''}">
          ${dayNames.map(day => html`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${day}</div>
          `)}
          ${weeks.map((week, weekIndex) => {
            const weekNum = minWeek + weekIndex;
            const monthChange = monthChanges.get(weekNum);
            const showMonthLabel = isYearView && monthChange !== undefined && 
              (weekIndex === 0 || monthChanges.get(minWeek + weekIndex - 1) !== monthChange);
            
            return html`
              ${showMonthLabel ? html`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${monthNames[monthChange!]}
                </div>
              ` : ''}
              ${week.map(day => {
                if (!day) {
                  return html`<div class="heat-calendar-day empty"></div>`;
                }
                const date = new Date(day.date);
                const dayNum = date.getDate();
                const monthName = monthNames[date.getMonth()];
                const tooltip = isYearView 
                  ? `${monthName} ${dayNum}, ${day.year}: ${day.consumption.toFixed(2)} kWh, €${day.cost.toFixed(2)}`
                  : `${day.date}: ${day.consumption.toFixed(2)} kWh, €${day.cost.toFixed(2)}`;
                
                return html`
                  <div 
                    class="heat-calendar-day intensity-${day.intensity}"
                    title="${tooltip}"
                  >
                    ${isYearView ? '' : dayNum}
                  </div>
                `;
              })}
            `;
          })}
        </div>
        <div class="heat-calendar-legend">
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-low"></div>
            <span>Low</span>
          </div>
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-medium"></div>
            <span>Medium</span>
          </div>
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-high"></div>
            <span>High</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render week-over-week comparison
   */
  private _renderWeekComparison(): TemplateResult {
    if (!this._weekComparisonData || this._weekComparisonData.weeks.length === 0) {
      return html`<div class="loading">No week comparison data available</div>`;
    }

    const { weeks, comparisons } = this._weekComparisonData;

    return html`
      <div class="week-comparison-section">
        <div class="comparison-title">Week-over-Week Comparison</div>
        <div class="week-comparison-grid">
          ${weeks.map((week, index) => {
            const comparison = comparisons.find(c => c.weekIndex === index);
            return html`
              <div class="week-card">
                <div class="week-card-header">
                  Week ${weeks.length - index}
                  ${comparison ? html`
                    <span class="week-change ${comparison.consumptionChangePercent >= 0 ? 'positive' : 'negative'}">
                      ${comparison.consumptionChangePercent >= 0 ? '↑' : '↓'} ${Math.abs(comparison.consumptionChangePercent).toFixed(1)}%
                    </span>
                  ` : ''}
                </div>
                <div class="week-card-metrics">
                  <div class="week-metric">
                    <span class="week-metric-label">Consumption:</span>
                    <span class="week-metric-value">${week.consumption.toFixed(1)} kWh</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Cost:</span>
                    <span class="week-metric-value">€${week.cost.toFixed(2)}</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Period:</span>
                    <span class="week-metric-value">${week.weekStart} - ${week.weekEnd}</span>
                  </div>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  /**
   * Render tariff comparison chart with grouped bars
   */
  private _renderTariffComparisonChart(): TemplateResult {
    if (!this._comparisonResult || !this._comparisonResult.tariffs || this._comparisonResult.tariffs.length === 0) {
      return html``;
    }

    const tariffs = this._comparisonResult.tariffs;
    
    // Find max values for scaling
    let maxConsumption = 0;
    let maxCost = 0;
    
    for (const tariff of tariffs) {
      const breakdown = tariff.period_breakdown;
      maxConsumption = Math.max(maxConsumption, breakdown.p1_consumption, breakdown.p2_consumption, breakdown.p3_consumption);
      
      // Calculate cost per period
      const p1Cost = breakdown.p1_consumption > 0 ? 
        (tariff.hourly_breakdown?.filter(h => h.period === 'P1').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
      const p2Cost = breakdown.p2_consumption > 0 ? 
        (tariff.hourly_breakdown?.filter(h => h.period === 'P2').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
      const p3Cost = breakdown.p3_consumption > 0 ? 
        (tariff.hourly_breakdown?.filter(h => h.period === 'P3').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
      
      maxCost = Math.max(maxCost, p1Cost, p2Cost, p3Cost);
    }

    return html`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${tariffs.map(tariff => {
          const breakdown = tariff.period_breakdown;
          
          // Calculate costs per period
          const p1Cost = breakdown.p1_consumption > 0 ? 
            (tariff.hourly_breakdown?.filter(h => h.period === 'P1').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
          const p2Cost = breakdown.p2_consumption > 0 ? 
            (tariff.hourly_breakdown?.filter(h => h.period === 'P2').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
          const p3Cost = breakdown.p3_consumption > 0 ? 
            (tariff.hourly_breakdown?.filter(h => h.period === 'P3').reduce((sum, h) => sum + h.cost, 0) || 0) : 0;
          
          const p1CostPerKwh = breakdown.p1_consumption > 0 ? p1Cost / breakdown.p1_consumption : 0;
          const p2CostPerKwh = breakdown.p2_consumption > 0 ? p2Cost / breakdown.p2_consumption : 0;
          const p3CostPerKwh = breakdown.p3_consumption > 0 ? p3Cost / breakdown.p3_consumption : 0;

          return html`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${tariff.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${maxConsumption > 0 ? (breakdown.p1_consumption / maxConsumption) * 100 : 0}%"
                    title="P1: ${breakdown.p1_consumption.toFixed(2)} kWh, €${p1Cost.toFixed(2)} (€${p1CostPerKwh.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${maxConsumption > 0 ? (breakdown.p2_consumption / maxConsumption) * 100 : 0}%"
                    title="P2: ${breakdown.p2_consumption.toFixed(2)} kWh, €${p2Cost.toFixed(2)} (€${p2CostPerKwh.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${maxConsumption > 0 ? (breakdown.p3_consumption / maxConsumption) * 100 : 0}%"
                    title="P3: ${breakdown.p3_consumption.toFixed(2)} kWh, €${p3Cost.toFixed(2)} (€${p3CostPerKwh.toFixed(3)}/kWh)"
                  ></div>
                </div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  /**
   * Calculate ISO week number (week 1 contains January 4th)
   * Returns week number 0-52 (0-based for easier array indexing)
   */
  private _getISOWeekOfYear(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7; // Convert Sunday (0) to 7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum); // Get to Monday of the week
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNum = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNum - 1; // Return 0-based for array indexing
  }

  private _getHeatCalendarData(): HeatCalendarDay[] {
    if (!this._tariffCosts || !this.config.source_entry_id) {
      return [];
    }

    const tariffCost = this._tariffCosts[this.config.source_entry_id];
    if (!tariffCost || !tariffCost.daily_breakdown || tariffCost.daily_breakdown.length === 0) {
      return [];
    }

    const period = this.config.heat_calendar_period || "month";
    let dailyBreakdown = tariffCost.daily_breakdown;
    
    // Filter by year if year view is selected
    if (period === "year") {
      const selectedYear = this._currentDate.getFullYear();
      dailyBreakdown = dailyBreakdown.filter(day => {
        const dayDate = new Date(day.date);
        return dayDate.getFullYear() === selectedYear;
      });
    } else {
      // For month view, filter by current month
      const selectedYear = this._currentDate.getFullYear();
      const selectedMonth = this._currentDate.getMonth();
      dailyBreakdown = dailyBreakdown.filter(day => {
        const dayDate = new Date(day.date);
        return dayDate.getFullYear() === selectedYear && dayDate.getMonth() === selectedMonth;
      });
    }
    
    if (dailyBreakdown.length === 0) {
      return [];
    }
    
    // Calculate intensity thresholds based on filtered consumption values
    const consumptions = dailyBreakdown.map(d => d.consumption).filter(c => c > 0);
    if (consumptions.length === 0) {
      return [];
    }

    const sortedConsumptions = [...consumptions].sort((a, b) => a - b);
    const lowThreshold = sortedConsumptions[Math.floor(sortedConsumptions.length * 0.33)];
    const highThreshold = sortedConsumptions[Math.floor(sortedConsumptions.length * 0.67)];

    const result: HeatCalendarDay[] = [];
    
    for (const day of dailyBreakdown) {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-11
      
      let weekOfMonth: number | undefined;
      let weekOfYear: number | undefined;
      
      if (period === "year") {
        // Calculate week of year (ISO standard, 0-based)
        weekOfYear = this._getISOWeekOfYear(date);
      } else {
        // Calculate week of month (0-based)
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const firstDayOfWeek = firstDay.getDay();
        const dayOfMonth = date.getDate();
        weekOfMonth = Math.floor((dayOfMonth + firstDayOfWeek - 1) / 7);
      }

      // Determine intensity
      let intensity: "low" | "medium" | "high" = "medium";
      if (day.consumption <= lowThreshold) {
        intensity = "low";
      } else if (day.consumption >= highThreshold) {
        intensity = "high";
      }

      result.push({
        date: day.date,
        consumption: day.consumption,
        cost: day.cost,
        dayOfWeek,
        weekOfMonth,
        weekOfYear,
        month,
        year,
        intensity,
      });
    }

    return result;
  }

  /**
   * Calculate week comparison data
   * @returns WeekComparisonData with week comparisons
   */
  private _calculateWeekComparison(): WeekComparisonData | null {
    if (!this._tariffCosts || !this.config.source_entry_id) {
      return null;
    }

    const tariffCost = this._tariffCosts[this.config.source_entry_id];
    if (!tariffCost || !tariffCost.daily_breakdown || tariffCost.daily_breakdown.length === 0) {
      return null;
    }

    const comparisonCount = this.config.week_comparison_count || 2;
    const dailyBreakdown = tariffCost.daily_breakdown;

    // Group days by week (Monday to Sunday)
    const weeks: Array<{
      weekStart: string;
      weekEnd: string;
      consumption: number;
      cost: number;
      periodBreakdown: {
        p1_consumption: number;
        p2_consumption: number;
        p3_consumption: number;
      };
    }> = [];

    // Group days into weeks
    const weekMap = new Map<string, typeof weeks[0]>();
    
    for (const day of dailyBreakdown) {
      const date = new Date(day.date);
      // Get Monday of the week
      const dayOfWeek = date.getDay();
      const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust to Monday
      const monday = new Date(date.setDate(diff));
      monday.setHours(0, 0, 0, 0);
      
      const weekKey = monday.toISOString().split("T")[0];
      
      if (!weekMap.has(weekKey)) {
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        weekMap.set(weekKey, {
          weekStart: weekKey,
          weekEnd: sunday.toISOString().split("T")[0],
          consumption: 0,
          cost: 0,
          periodBreakdown: {
            p1_consumption: 0,
            p2_consumption: 0,
            p3_consumption: 0,
          },
        });
      }

      const week = weekMap.get(weekKey)!;
      week.consumption += day.consumption;
      week.cost += day.cost;
      
      // Estimate period breakdown from percentages if available
      if (tariffCost.period_breakdown) {
        const p1Pct = tariffCost.period_breakdown.p1_percentage / 100;
        const p2Pct = tariffCost.period_breakdown.p2_percentage / 100;
        const p3Pct = tariffCost.period_breakdown.p3_percentage / 100;
        week.periodBreakdown.p1_consumption += day.consumption * p1Pct;
        week.periodBreakdown.p2_consumption += day.consumption * p2Pct;
        week.periodBreakdown.p3_consumption += day.consumption * p3Pct;
      }
    }

    // Sort weeks by start date (most recent first)
    const sortedWeeks = Array.from(weekMap.values()).sort((a, b) => 
      new Date(b.weekStart).getTime() - new Date(a.weekStart).getTime()
    );

    // Take only the requested number of weeks
    const weeksToCompare = sortedWeeks.slice(0, comparisonCount);

    // Calculate comparisons
    const comparisons: Array<{
      weekIndex: number;
      consumptionChange: number;
      consumptionChangePercent: number;
      costChange: number;
      costChangePercent: number;
    }> = [];

    for (let i = 0; i < weeksToCompare.length - 1; i++) {
      const currentWeek = weeksToCompare[i];
      const previousWeek = weeksToCompare[i + 1];
      
      const consumptionChange = currentWeek.consumption - previousWeek.consumption;
      const consumptionChangePercent = previousWeek.consumption > 0
        ? (consumptionChange / previousWeek.consumption) * 100
        : 0;
      
      const costChange = currentWeek.cost - previousWeek.cost;
      const costChangePercent = previousWeek.cost > 0
        ? (costChange / previousWeek.cost) * 100
        : 0;

      comparisons.push({
        weekIndex: i,
        consumptionChange,
        consumptionChangePercent,
        costChange,
        costChangePercent,
      });
    }

    return {
      weeks: weeksToCompare,
      comparisons,
    };
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
      const isConfigError = this._error.includes("Configuration incomplete") || this._error.includes("configuration is required");
      
      return html`
        <div class="error-message">
          <ha-icon icon="${isConfigError ? "mdi:cog-outline" : "mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${isConfigError ? "Configuration Required" : "Unable to Load Data"}</div>
          <div class="error-details">${this._error}</div>
          ${isConfigError ? html`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              Click the <strong>⋮</strong> menu in the top-right corner of this card and select <strong>Edit</strong> to configure it.
            </div>
          ` : html`
            <button class="retry-button" @click=${this._loadData}>
              Retry
            </button>
          `}
        </div>
      `;
    }

    const view = this.config.view || "consumption";

    return html`
      ${view === "consumption" ? this._renderConsumptionView() : ""}
      ${view === "heat-calendar" ? this._renderHeatCalendarView() : ""}
      ${view === "week-analysis" ? this._renderWeekAnalysisView() : ""}
      ${view === "tariff-comparison" ? this._renderTariffComparisonView() : ""}
    `;
  }

  /**
   * Render consumption view (time-series charts)
   */
  private _renderConsumptionView(): TemplateResult {
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
          <button 
            class="nav-button" 
            @click=${() => this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture() ? "opacity: 0.5; cursor: not-allowed;" : ""}
          >
            Next →
          </button>
        </div>
      ` : ""}

      <div class="chart-container">
        ${this._renderChart()}
      </div>
    `;
  }

  /**
   * Render heat calendar view
   */
  private _renderHeatCalendarView(): TemplateResult {
    return html`
      ${this.config.show_navigation !== false ? html`
        <div class="navigation-controls">
          <button class="nav-button" @click=${() => this._navigatePeriod("prev")}>
            ${this.config.heat_calendar_period === "year" ? "← Previous Year" : "← Previous Month"}
          </button>
          <button 
            class="nav-button" 
            @click=${() => this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture() ? "opacity: 0.5; cursor: not-allowed;" : ""}
          >
            ${this.config.heat_calendar_period === "year" ? "Next Year →" : "Next Month →"}
          </button>
        </div>
      ` : ""}

      <div class="chart-container">
        ${this._renderHeatCalendar()}
      </div>
    `;
  }

  /**
   * Render week analysis view
   */
  private _renderWeekAnalysisView(): TemplateResult {
    if (!this.config.show_week_comparison) {
      return html`
        <div class="error-message">
          <div class="error-title">Week Comparison Not Enabled</div>
          <div class="error-details">
            Please enable "Show Week Comparison" in the card configuration to use the Week Analysis view.
          </div>
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
          <button 
            class="nav-button" 
            @click=${() => this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture() ? "opacity: 0.5; cursor: not-allowed;" : ""}
          >
            Next →
          </button>
        </div>
      ` : ""}

      ${this._renderWeekComparison()}
    `;
  }

  /**
   * Render tariff comparison view
   */
  private _renderTariffComparisonView(): TemplateResult {
    return html`
      <div class="comparison-section">
        <h3 class="comparison-title">Tariff Comparison</h3>
        ${this._comparisonError ? html`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        ` : this._comparisonResult ? html`
          ${this._renderComparison()}
          ${this.config.show_tariff_chart !== false ? this._renderTariffComparisonChart() : ""}
        ` : html`
          <div class="loading">Loading tariff comparison...</div>
        `}
      </div>
    `;
  }

  /**
   * Format date for display
   */
  private _formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  }

  /**
   * Format date range for display
   */
  private _formatDateRange(): string {
    const { startDate, endDate } = this._getDateRange();
    const startStr = this._formatDate(startDate);
    const endStr = this._formatDate(endDate);
    
    if (startStr === endStr) {
      return startStr;
    }
    
    return `${startStr} - ${endStr}`;
  }

  private _renderChart(): TemplateResult {
    if (this._consumptionData.length === 0) {
      const dateRange = this._formatDateRange();
      return html`
        <div class="loading">
          <div>No consumption data available</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${dateRange}
          </div>
        </div>
      `;
    }

    // Return canvas element - actual rendering happens in _renderCanvasChart
    return html`
      <canvas 
        id="chart-canvas"
        class="chart-canvas"
        width="800" 
        height="300">
      </canvas>
    `;
  }

  private async _renderCanvasChart(): Promise<void> {
    const canvas = this.shadowRoot?.querySelector('#chart-canvas') as HTMLCanvasElement;
    if (!canvas || this._consumptionData.length === 0) {
      return;
    }

    const chartType = this.config.chart_type || "line";
    const width = 800;
    const height = 300;
    
    // Prepare cost data if enabled
    let costData: ChartData | undefined;
    const costEnabled = !!(this.config.show_cost_on_chart && 
                        this.config.selected_tariff_for_cost && 
                        this._tariffCosts !== null);
    
    if (costEnabled && this._tariffCosts && this.config.selected_tariff_for_cost) {
      const tariffCost = this._tariffCosts[this.config.selected_tariff_for_cost];
      if (tariffCost) {
        const breakdown = this._currentPeriod === "month" 
          ? tariffCost.daily_breakdown 
          : tariffCost.hourly_breakdown;
        
        if (breakdown && breakdown.length > 0) {
          const costValues = breakdown.map((item: { cost: number }) => item.cost);
          const consumptionValues = this._consumptionData.map(d => d.consumption || d.value || 0);
          
          if (costValues.length === consumptionValues.length) {
            const maxCost = Math.max(...costValues, 0.01);
            const minCost = Math.min(...costValues, 0);
            const timestamps = this._consumptionData.map(d => d.start_time || d.date || '');
            const tempConfig: ChartConfig = {
              width,
              height,
              padding: { top: 20, right: 60, bottom: 40, left: 60 },
              colors: {} as any
            };
            
            costData = {
              points: calculatePoints(costValues, tempConfig, minCost, maxCost, timestamps),
              minValue: minCost,
              maxValue: maxCost,
              range: maxCost - minCost || 1
            };
          }
        }
      }
    }

    const rightPadding = costData ? 60 : 20;
    const padding = { top: 20, right: rightPadding, bottom: 40, left: 60 };

    // Prepare chart data
    const values = this._consumptionData.map(d => d.consumption || d.value || 0);
    const timestamps = this._consumptionData.map(d => d.start_time || d.date || '');
    const chartData: ChartData = prepareChartData(values, timestamps);
    const tempConfig: ChartConfig = {
      width,
      height,
      padding,
      colors: {} as any
    };
    chartData.points = calculatePoints(
      values,
      tempConfig,
      chartData.minValue,
      chartData.maxValue,
      timestamps
    );

    // Get colors
    const colors = {
      text: this._getComputedColor('--secondary-text-color', '#888'),
      accent: this._getComputedColor('--accent-color', '#ff9800'),
      primary: this._getComputedColor('--primary-color', '#03a9f4'),
      error: this._getComputedColor('--error-color', '#f44336'),
      warning: this._getComputedColor('--warning-color', '#ff9800'),
      success: this._getComputedColor('--success-color', '#4caf50'),
      info: this._getComputedColor('--info-color', '#2196f3'),
      background: this._getComputedColor('--card-background-color', '#fff'),
      grid: this._getComputedColor('--divider-color', '#e0e0e0'),
      axis: this._getComputedColor('--divider-color', '#e0e0e0')
    };

    // Create or update chart instance
    if (!this._chartInstance) {
      this._chartInstance = new CanvasChart(canvas, {
        width,
        height,
        padding,
        colors
      });
    } else {
      this._chartInstance.resize(width, height);
    }

    // Animation config - disabled for instant display
    const animationConfig: AnimationConfig = {
      enabled: false
    };

    // Render based on chart type
    try {
      switch (chartType) {
        case 'line':
          await this._chartInstance.renderLineChart(chartData, {
            showArea: true,
            showMovingAverage: !!this.config.show_moving_average,
            movingAverageDays: this.config.moving_average_days || 7,
            showCostAxis: !!(costEnabled && costData),
            costData,
            animation: animationConfig
          });
          break;
        case 'bar':
          await this._chartInstance.renderBarChart(chartData, {
            showCostOverlay: !!(costEnabled && costData),
            costData,
            animation: animationConfig
          });
          break;
        case 'stacked-area':
          const stackedData = this._prepareStackedData();
          if (stackedData) {
            await this._chartInstance.renderStackedAreaChart(stackedData, {
              animation: animationConfig
            });
          } else {
            // Show error message in canvas parent
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `
              <div class="error-title">Stacked Area Chart Unavailable</div>
              <div class="error-details">
                Period breakdown data (P1/P2/P3) is not available. 
                Please ensure tariff comparison is enabled or period data is available from the service.
              </div>
            `;
            canvas.parentElement?.replaceChild(errorDiv, canvas);
          }
          break;
      }
    } catch (error) {
      Logger.error('Error rendering chart: ', error instanceof Error ? error.message : String(error));
    }
  }

  private _prepareStackedData(): StackedData | null {
      const periodData = this._extractPeriodData();
      
      if (!periodData || periodData.length === 0) {
      return null;
    }

      const p1Data = periodData.map(d => d.p1 || 0);
      const p2Data = periodData.map(d => d.p2 || 0);
      const p3Data = periodData.map(d => d.p3 || 0);
      
      const p3Cumulative = p3Data;
      const p2Cumulative = p3Data.map((p3, i) => p3 + (p2Data[i] || 0));
      const p1Cumulative = p2Cumulative.map((p2p3, i) => p2p3 + (p1Data[i] || 0));
      
      const maxStackedValue = Math.max(...p1Cumulative, 1);
    const minStackedValue = 0;
      const stackedRange = maxStackedValue - minStackedValue || 1;

    const errorColor = this._getComputedColor('--error-color', '#f44336');
    const warningColor = this._getComputedColor('--warning-color', '#ff9800');
    const successColor = this._getComputedColor('--success-color', '#4caf50');

    return {
      layers: [
        {
          data: p3Data,
          color: successColor,
          opacity: 0.6,
          label: 'P3 (Valley)'
        },
        {
          data: p2Data,
          color: warningColor,
          opacity: 0.6,
          label: 'P2 (Flat)'
        },
        {
          data: p1Data,
          color: errorColor,
          opacity: 0.6,
          label: 'P1 (Peak)'
        }
      ],
      timestamps: periodData.map(d => d.timestamp),
      minValue: minStackedValue,
      maxValue: maxStackedValue,
      range: stackedRange
    };
  }

  private _renderComparison(): TemplateResult {
    if (!this._comparisonResult || !this._comparisonResult.tariffs || this._comparisonResult.tariffs.length === 0) {
      return html`<p>No comparison data available</p>`;
    }

    const sortedTariffs = [...this._comparisonResult.tariffs].sort((a, b) => a.total_cost - b.total_cost);
    const bestTariffId = this._comparisonResult.best_tariff?.entry_id;
    
    // Calculate overall period distribution (use first tariff as reference)
    const referenceTariff = this._comparisonResult.tariffs[0];
    const periodBreakdown = referenceTariff?.period_breakdown;

    return html`
      <!-- Consumption Summary -->
      ${periodBreakdown ? html`
        <div class="consumption-summary">
          <div class="summary-title">Period Summary</div>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-period p1">
                <span class="period-icon">🔴</span>
                <span class="period-name">Peak (P1)</span>
              </div>
              <div class="summary-value">${periodBreakdown.p1_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${periodBreakdown.p1_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p2">
                <span class="period-icon">🟠</span>
                <span class="period-name">Flat (P2)</span>
              </div>
              <div class="summary-value">${periodBreakdown.p2_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${periodBreakdown.p2_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p3">
                <span class="period-icon">🟢</span>
                <span class="period-name">Valley (P3)</span>
              </div>
              <div class="summary-value">${periodBreakdown.p3_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${periodBreakdown.p3_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item summary-total">
              <div class="summary-period">
                <span class="period-name"><strong>Total</strong></span>
              </div>
              <div class="summary-value"><strong>${periodBreakdown.total_consumption.toFixed(1)} kWh</strong></div>
            </div>
          </div>
        </div>
      ` : ''}
      
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

            ${this._renderPeriodBreakdown(tariff.period_breakdown, tariff)}
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

  private _renderPeriodBreakdown(breakdown: TariffComparisonResult["period_breakdown"], tariff: TariffComparisonResult): TemplateResult {
    const maxConsumption = Math.max(breakdown.p1_consumption, breakdown.p2_consumption, breakdown.p3_consumption);
    
    // Calculate cost per kWh for each period from hourly breakdown
    let p1Cost = 0, p2Cost = 0, p3Cost = 0;
    let p1Hours = 0, p2Hours = 0, p3Hours = 0;
    
    if (tariff.hourly_breakdown && tariff.hourly_breakdown.length > 0) {
      for (const hour of tariff.hourly_breakdown) {
        if (hour.period === 'P1' && hour.consumption > 0) {
          p1Cost += hour.cost;
          p1Hours++;
        } else if (hour.period === 'P2' && hour.consumption > 0) {
          p2Cost += hour.cost;
          p2Hours++;
        } else if (hour.period === 'P3' && hour.consumption > 0) {
          p3Cost += hour.cost;
          p3Hours++;
        }
      }
    }
    
    // Calculate average cost per kWh
    const p1CostPerKwh = breakdown.p1_consumption > 0 ? p1Cost / breakdown.p1_consumption : 0;
    const p2CostPerKwh = breakdown.p2_consumption > 0 ? p2Cost / breakdown.p2_consumption : 0;
    const p3CostPerKwh = breakdown.p3_consumption > 0 ? p3Cost / breakdown.p3_consumption : 0;
    
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
              <strong>P1 Peak</strong><br>
              ${breakdown.p1_consumption.toFixed(2)} kWh<br>
              ${breakdown.p1_percentage.toFixed(1)}%<br>
              ${p1Cost > 0 ? html`<span class="cost-per-kwh">€${p1CostPerKwh.toFixed(3)}/kWh</span>` : ''}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${maxConsumption > 0 ? (breakdown.p2_consumption / maxConsumption) * 100 : 0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P2 Flat</strong><br>
              ${breakdown.p2_consumption.toFixed(2)} kWh<br>
              ${breakdown.p2_percentage.toFixed(1)}%<br>
              ${p2Cost > 0 ? html`<span class="cost-per-kwh">€${p2CostPerKwh.toFixed(3)}/kWh</span>` : ''}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${maxConsumption > 0 ? (breakdown.p3_consumption / maxConsumption) * 100 : 0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P3 Valley</strong><br>
              ${breakdown.p3_consumption.toFixed(2)} kWh<br>
              ${breakdown.p3_percentage.toFixed(1)}%<br>
              ${p3Cost > 0 ? html`<span class="cost-per-kwh">€${p3CostPerKwh.toFixed(3)}/kWh</span>` : ''}
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
      view: "consumption",
      default_period: "week",
      chart_type: "line",
      tariff_entry_ids: [],
      show_cost_on_chart: false,
      show_navigation: true,
      show_period_distribution: false,
      show_moving_average: false,
      moving_average_days: 7,
      heat_calendar_period: "month",
      show_week_comparison: false,
      week_comparison_count: 2,
      show_cost_trend: false,
      cost_moving_average_days: 30,
      show_tariff_chart: true,
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
  const VERSION = '0.5.13';
  const isRegistered = !!customElements.get('octopus-consumption-card');
  
  // Branding header (keep styled for visual impact)
  console.groupCollapsed(
    '%c⚡ Octopus Energy España',
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
