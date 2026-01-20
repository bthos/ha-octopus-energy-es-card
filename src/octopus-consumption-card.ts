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
import { D3Chart } from "./charts";
import type { ChartData, StackedData, AnimationConfig, ChartConfig } from "./charts";
import { prepareChartData, calculatePoints, groupByWeeks, groupByMonths } from "./charts/chart-utils";
import { localize } from "./localization";

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

  // Card name for Home Assistant editor (displays as "{cardName} card configuration")
  static get cardName(): string {
    return "Octopus Energy España Consumption";
  }

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
  @state() private _showChartView: boolean = true; // true = chart, false = list
  @state() private _lastDataDate: string | null = null; // Last date with available data (YYYY-MM-DD)
  private _chartInstance: D3Chart | null = null;
  private _hasInitialData = false; // Track if we have loaded data at least once
  private _hasAttemptedLoad = false; // Track if we have attempted to load data during initialization
  
  // Event handler references for proper cleanup (Home Assistant best practice)
  private _chartEventHandlers: {
    swipe?: EventListener;
    navigate?: EventListener;
    resize?: EventListener;
  } = {};
  
  // Throttling for navigation
  private _lastNavigationTime: number = 0;
  private _navigationThrottleMs: number = 300; // Prevent rapid clicks
  private _isNavigating: boolean = false;

  // Constants
  private static readonly SERVICE_TIMEOUT = 10000;
  private static readonly SERVICE_DOMAIN = "octopus_energy_es";
  private static readonly SERVICE_FETCH_CONSUMPTION = "fetch_consumption";
  private static readonly SERVICE_COMPARE_TARIFFS = "compare_tariffs";
  private static readonly SERVICE_GET_LAST_DATA_DATE = "get_last_data_date";

  static styles = cardStyles;

  /**
   * Get computed color value from CSS variable
   * Used to dynamically retrieve CSS variable values for D3.js chart rendering
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
   * Home Assistant best practice: Throw error for invalid config to show error card
   */
  public setConfig(config: OctopusConsumptionCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    // Validate required fields (Home Assistant best practice: validate early)
    if (!config.source_entry_id) {
      throw new Error("Configuration incomplete. Please select your Octopus Energy tariff in the card editor.");
    }

    if (!config.view) {
      throw new Error("Configuration incomplete. Please select a view in the card editor.");
    }

    this.config = config;
    
    // Initialize state from config if available
    if (config.default_period) {
      this._currentPeriod = config.default_period;
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
    // Add extra size for heat-calendar year view to avoid double scroll
    let size = 1;
    if (this.config && this.config.show_navigation !== false) {
      size += 1;
    }
    const view = this.config.view;
    if (this.config && view === "tariff-comparison") {
      size += 1;
    }
    // Heat calendar year view needs more space
    if (this.config && view === "heat-calendar" && this.config.heat_calendar_period === "year") {
      size += 3; // Add extra height for year view
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
    
    // Add event listeners for chart navigation (swipe and keyboard)
    this._setupChartNavigationListeners();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    
    // Cleanup chart instance (Home Assistant best practice: clean up resources)
    if (this._chartInstance) {
      this._chartInstance.destroy();
      this._chartInstance = null;
    }
    
    // Remove event listeners to prevent memory leaks (Home Assistant best practice)
    const container = this.shadowRoot?.querySelector('#chart-container') as HTMLElement;
    if (container && this._chartEventHandlers) {
      if (this._chartEventHandlers.swipe) {
        container.removeEventListener('chart-swipe', this._chartEventHandlers.swipe);
      }
      if (this._chartEventHandlers.navigate) {
        container.removeEventListener('chart-navigate', this._chartEventHandlers.navigate);
      }
      if (this._chartEventHandlers.resize) {
        container.removeEventListener('chart-resize', this._chartEventHandlers.resize);
      }
      // Clear handlers
      this._chartEventHandlers = {};
    }
  }

  /**
   * Setup event listeners for chart navigation (swipe gestures and keyboard)
   * Home Assistant best practice: Store references for proper cleanup
   */
  private _setupChartNavigationListeners(): void {
    // Use requestAnimationFrame to ensure DOM is ready (Home Assistant best practice)
    requestAnimationFrame(() => {
      // Listen on the chart container (where D3Chart dispatches events)
      const container = this.shadowRoot?.querySelector('#chart-container') as HTMLElement;
      if (!container) return;

      // Store handlers for cleanup (Home Assistant best practice: track listeners)
      this._chartEventHandlers.swipe = ((e: CustomEvent) => {
        const { direction } = e.detail;
        if (direction === 'next') {
          this._navigatePeriod('next');
        } else if (direction === 'previous') {
          this._navigatePeriod('prev');
        }
      }) as EventListener;

      this._chartEventHandlers.navigate = ((e: CustomEvent) => {
        const { direction } = e.detail;
        switch (direction) {
          case 'next':
            this._navigatePeriod('next');
            break;
          case 'previous':
            this._navigatePeriod('prev');
            break;
          case 'first':
            // Navigate to earliest available date
            const earliestDate = new Date();
            earliestDate.setFullYear(earliestDate.getFullYear() - 1); // Go back 1 year
            this._currentDate = earliestDate;
            this._loadData();
            break;
          case 'last':
            // Navigate to latest available date (today)
            this._currentDate = new Date();
            this._loadData();
            break;
        }
      }) as EventListener;

      this._chartEventHandlers.resize = ((e: CustomEvent) => {
        const { width, height } = e.detail;
        if (this._chartInstance) {
          this._chartInstance.resize(width, height);
          // Re-render chart with new dimensions
          this._renderD3Chart();
        }
      }) as EventListener;

      // Add event listeners
      container.addEventListener('chart-swipe', this._chartEventHandlers.swipe);
      container.addEventListener('chart-navigate', this._chartEventHandlers.navigate);
      container.addEventListener('chart-resize', this._chartEventHandlers.resize);
    });
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    
    // Handle config changes (Home Assistant best practice: validate and react to config)
    if (changedProperties.has("config")) {
      const oldConfig = changedProperties.get("config") as OctopusConsumptionCardConfig | undefined;
      this._validateConfig();
      
      // Reset initial data flag if source entry ID changed (significant config change)
      if (oldConfig !== undefined && 
          oldConfig.source_entry_id !== this.config.source_entry_id) {
        this._hasInitialData = false;
        this._hasAttemptedLoad = false; // Allow reloading with new entry ID
      }
      
      // Update state to match config changes
      if (this.config.default_period && this._currentPeriod !== this.config.default_period) {
        this._currentPeriod = this.config.default_period;
      }
      
      // Only reload data if config actually changed (not just initial set)
      // Use strict equality check as per Home Assistant Frontend best practices
      if (oldConfig !== undefined && oldConfig !== this.config) {
        this._loadData();
      }
    }
    
    // Handle hass updates (Home Assistant best practice: use strict equality for state changes)
    // Prevent constant reloading when hass object is updated frequently by Home Assistant
    if (changedProperties.has("hass")) {
      const oldHass = changedProperties.get("hass") as HomeAssistant | undefined;
      // Only react if hass actually changed (strict equality check)
      if (oldHass !== undefined && oldHass !== this.hass) {
        // Hass object changed - but don't reload data unless we really need to
        // Home Assistant updates hass object frequently, so we should only reload
        // if we have no data AND haven't attempted to load yet
        // Skip if navigation is in progress or data is already loading
        if (this.hass && 
            !this._loading && 
            !this._isNavigating &&
            !this._error && 
            !this._hasAttemptedLoad &&
            this._consumptionData.length === 0 && 
            this.config?.source_entry_id) {
          this._hasAttemptedLoad = true;
          this._loadData();
        }
      } else if (oldHass === undefined && this.hass && 
                 !this._loading && 
                 !this._isNavigating &&
                 !this._error && 
                 !this._hasAttemptedLoad &&
                 this._consumptionData.length === 0 && 
                 this.config?.source_entry_id) {
        // Initial hass assignment - load data if we have config (only once)
        this._hasAttemptedLoad = true;
        this._loadData();
      }
    }
    
    // Handle period/date changes (internal state changes)
    // Skip if navigation is already in progress
    if ((changedProperties.has("_currentPeriod") || changedProperties.has("_currentDate")) &&
        !this._loading &&
        !this._isNavigating &&
        this.hass &&
        this.config?.source_entry_id &&
        !this._error) {
      // Check if this is a real change (not initial set)
      const oldPeriod = changedProperties.get("_currentPeriod");
      const oldDate = changedProperties.get("_currentDate");
      const periodChanged = changedProperties.has("_currentPeriod") && 
                           oldPeriod !== undefined && 
                           oldPeriod !== this._currentPeriod;
      const dateChanged = changedProperties.has("_currentDate") && 
                         oldDate !== undefined &&
                         oldDate.getTime() !== this._currentDate.getTime();
      
      // Only load if this is a real change and not triggered by navigation
      if ((periodChanged || dateChanged) && !this._isNavigating) {
        this._loadData();
      }
    }
    
    // Render D3 chart when data changes (separate concern from data loading)
    if (changedProperties.has("_consumptionData") || 
        changedProperties.has("_tariffCosts") ||
        (changedProperties.has("config") && this._consumptionData.length > 0)) {
      this._renderD3Chart();
    }
  }

  /**
   * Validates the card configuration
   * Home Assistant best practice: Set error state for display, don't throw in lifecycle methods
   */
  private _validateConfig(): void {
    if (!this.config) {
      this._error = "Card configuration is required";
      this._loading = false;
      return;
    }

    // Require source_entry_id (Home Assistant best practice: clear error messages when valid)
    if (!this.config.source_entry_id) {
      this._error = "Configuration incomplete. Please edit this card and select your Octopus Energy tariff.";
      this._loading = false;
      return;
    }

    // Clear error if config is valid (Home Assistant best practice: update state only when changed)
    if (this._error && this.config.source_entry_id) {
      this._error = null;
    }

    const view = this.config.view;
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
    // Special handling for get_last_data_date - it's optional and may not exist
    const isOptionalService = service === OctopusConsumptionCard.SERVICE_GET_LAST_DATA_DATE;
    
    if (error instanceof Error) {
      if (error.message.includes("timeout")) {
        const message = isOptionalService 
          ? `Service call timeout: ${domain}.${service} (this service is optional and may not be available)`
          : `Service call timeout: ${domain}.${service} took longer than ${OctopusConsumptionCard.SERVICE_TIMEOUT}ms`;
        return new Error(message);
      }
      if (error.message.includes("Service not found") || error.message.includes("not available") || error.message.includes("Unknown service")) {
        if (isOptionalService) {
          // For optional service, return a more informative error that won't break the app
          return new Error(`Service ${domain}.${service} is not available (this is normal if integration version doesn't support it yet)`);
        }
        return new Error(`Service ${domain}.${service} is not available. Please ensure the Octopus Energy España integration is installed and configured.`);
      }
      if ((error as any).code === 'service_validation_error') {
        return this._handleValidationError(error);
      }
      const message = isOptionalService && error.message.includes("not available")
        ? `Service ${domain}.${service} is not available (this is normal if integration version doesn't support it yet)`
        : `Service call failed: ${domain}.${service} - ${error.message}`;
      return new Error(message);
    }
    
    if (error && typeof error === 'object') {
      const errorObj = error as any;
      if (errorObj.code === 'service_validation_error') {
        return this._handleValidationError(errorObj);
      }
      const message = errorObj.message || errorObj.translation_key || 'Unknown service error';
      const finalMessage = isOptionalService && (message.includes("not found") || message.includes("not available"))
        ? `Service ${domain}.${service} is not available (this is normal if integration version doesn't support it yet)`
        : `Service call failed: ${domain}.${service} - ${message}`;
      return new Error(finalMessage);
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
      // Fetch last available data date first (non-blocking - if it fails, continue without it)
      try {
        await this._fetchLastDataDate(entryId);
      } catch (lastDataDateError) {
        // Non-critical error - log but don't block data loading
        const errorMsg = lastDataDateError instanceof Error ? lastDataDateError.message : String(lastDataDateError);
        Logger.warn('Failed to fetch last data date (continuing without it):', errorMsg);
        this._lastDataDate = null;
      }
      
      const { startDate, endDate } = this._getDateRange();
      this._validateDateRange(startDate, endDate);

      const dateRange = `${startDate.toISOString().split("T")[0]} → ${endDate.toISOString().split("T")[0]}`;
      // Log period info: use view-specific period for heat-calendar/tariff-comparison, otherwise use _currentPeriod
      const view = this.config.view;
      const logPeriod = (view === "heat-calendar" || view === "tariff-comparison" || view === "week-analysis")
        ? "daily"
        : this._currentPeriod;
      Logger.groupDataLoad(entryId, logPeriod, dateRange);

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
      // Fetch tariff comparison only if tariff-comparison view is active
      if (view === "tariff-comparison" && this.config.tariff_entry_ids?.length) {
        await this._fetchTariffComparison(entryId, startDate, endDate);
      } else {
        // Clear comparison result if not needed
        this._comparisonResult = null;
      }

      // Only calculate week comparison if week-analysis view is active
      if (view === "week-analysis") {
        this._weekComparisonData = this._calculateWeekComparison();
      } else {
        this._weekComparisonData = null;
      }

      Logger.groupEnd();
      
      // Mark that we have initial data loaded after successful load
      if (!this._hasInitialData) {
        this._hasInitialData = true;
      }
    } catch (error) {
      Logger.groupError("Error loading data");
      // Home Assistant best practice: Provide user-friendly error messages
      const errorMessage = error instanceof Error 
        ? error.message 
        : String(error);
      this._error = errorMessage || "Failed to load consumption data. Please try again.";
      Logger.error("Error loading data: ", this._extractErrorMessage(error));
      Logger.data("Error details", error);
      Logger.groupEnd();
      
      // Mark that we have initial data loaded
      if (!this._hasInitialData && this._consumptionData.length > 0) {
        this._hasInitialData = true;
      }
    } finally {
      // Home Assistant best practice: Always reset loading state
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
   * Fetches the last date with available data from the service
   */
  private async _fetchLastDataDate(entryId: string): Promise<void> {
    try {
      const result = await this._callServiceWithTimeout<{ success: boolean; last_data_date?: string; error?: string }>(
        OctopusConsumptionCard.SERVICE_DOMAIN,
        OctopusConsumptionCard.SERVICE_GET_LAST_DATA_DATE,
        {
          entry_id: entryId,
        }
      );

      if (result && result.success && result.last_data_date) {
        this._lastDataDate = result.last_data_date;
        Logger.info('Last data date:', this._lastDataDate);
      } else {
        // If service doesn't support this or returns error, set to null
        this._lastDataDate = null;
        if (result && result.error) {
          Logger.warn('Failed to fetch last data date:', result.error);
        } else {
          Logger.warn('Service get_last_data_date returned unsuccessful result or missing data');
        }
      }
    } catch (error) {
      // If service doesn't exist or fails, silently continue (non-critical)
      this._lastDataDate = null;
      const errorMsg = error instanceof Error ? error.message : String(error);
      
      // Check if it's a service not found error (common case)
      if (errorMsg.includes('not found') || errorMsg.includes('does not exist') || errorMsg.includes('Unknown service')) {
        Logger.info('Service get_last_data_date is not available (this is normal if integration version is older)');
      } else {
        Logger.warn('Could not fetch last data date:', errorMsg);
      }
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
    // Day: hourly consumption
    // Determine granularity based on view:
    // - heat-calendar: always daily (month or year view)
    // - tariff-comparison: always daily
    // - week-analysis: always daily
    // - consumption: hourly for day period, daily for week/month periods
    const view = this.config.view;
    const isHeatCalendar = view === "heat-calendar";
    const isTariffComparison = view === "tariff-comparison";
    const isWeekAnalysis = view === "week-analysis";
    
    const granularity = (isHeatCalendar || isTariffComparison || isWeekAnalysis)
      ? "daily" // These views always use daily consumption data
      : (this._currentPeriod === "day" ? "hourly" : "daily"); // Consumption view: hourly for day, daily for week/month
    
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
      // Tariff comparison always uses daily period for calculations
      const period = "daily";
      
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

  /**
   * Adjust end date to not exceed last available data date
   */
  private _adjustEndDateForLastDataDate(endDate: Date): Date {
    if (this._lastDataDate) {
      const lastDataDateObj = new Date(this._lastDataDate);
      lastDataDateObj.setHours(23, 59, 59, 999);
      // Use the earlier of the two dates
      return endDate > lastDataDateObj ? lastDataDateObj : endDate;
    }
    return endDate;
  }

  private _getDateRange(): { startDate: Date; endDate: Date } {
    const view = this.config.view;
    
    // Heat calendar views always use daily consumption data
    if (view === "heat-calendar") {
      const isHeatCalendarYear = this.config.heat_calendar_period === "year";
      
      if (isHeatCalendarYear) {
        // For year view, always fetch full year of data (January 1 - December 31)
        const selectedYear = this._currentDate.getFullYear();
        
        const startDate = new Date(selectedYear, 0, 1); // January 1st
        startDate.setHours(0, 0, 0, 0);
        
        let endDate = new Date(selectedYear, 11, 31); // December 31st
        endDate.setHours(23, 59, 59, 999);
        endDate = this._adjustEndDateForLastDataDate(endDate);
        
        return { startDate, endDate };
      } else {
        // For month view, always fetch full month of daily data (1st to last day of month)
        const selectedDate = new Date(this._currentDate);
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        
        const startDate = new Date(year, month, 1); // First day of month
        startDate.setHours(0, 0, 0, 0);
        
        let endDate = new Date(year, month + 1, 0); // Last day of month
        endDate.setHours(23, 59, 59, 999);
        endDate = this._adjustEndDateForLastDataDate(endDate);
        
        return { startDate, endDate };
      }
    }
    
    // Tariff comparison always uses daily consumption data (last 365 days)
    if (view === "tariff-comparison") {
      let endDate = new Date(this._currentDate);
      endDate.setHours(23, 59, 59, 999);
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - 364); // Last 365 days (daily data)
      startDate.setHours(0, 0, 0, 0);
      
      return { startDate, endDate };
    }
    
    // For week-analysis view, fetch enough daily data for all weeks being compared
    // Weeks are Monday to Sunday
    if (view === "week-analysis") {
      const comparisonCount = this.config.week_comparison_count || 2;
      
      // Find Sunday of the week containing _currentDate
      let endDate = new Date(this._currentDate);
      const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysToSunday: number;
      if (dayOfWeek === 0) {
        daysToSunday = 0; // Already Sunday
      } else {
        daysToSunday = 7 - dayOfWeek; // Days to get to Sunday
      }
      endDate.setDate(endDate.getDate() + daysToSunday);
      endDate.setHours(23, 59, 59, 999);
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      // Find Monday of the first week (comparisonCount weeks back from endDate)
      // Go back (comparisonCount - 1) full weeks, then find Monday of that week
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - ((comparisonCount - 1) * 7)); // Go back to Sunday of first week
      // Now find Monday of that week
      const firstWeekDayOfWeek = startDate.getDay();
      let daysToMonday: number;
      if (firstWeekDayOfWeek === 0) {
        daysToMonday = -6; // If Sunday, go back 6 days to get Monday
      } else {
        daysToMonday = -(firstWeekDayOfWeek - 1); // Otherwise, go back (dayOfWeek - 1) days
      }
      startDate.setDate(startDate.getDate() + daysToMonday);
      startDate.setHours(0, 0, 0, 0);
      
      // Ensure startDate doesn't exceed last available date
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
      
      return { startDate, endDate };
    }

    
    // Standard period-based date range (for consumption view only)
    let endDate = new Date(this._currentDate);
    endDate.setHours(23, 59, 59, 999);
    endDate = this._adjustEndDateForLastDataDate(endDate);
    
    const startDate = new Date(endDate);
    
    if (this._currentPeriod === "day") {
      // For day view, startDate should be the beginning of the same day as endDate
      // If endDate was adjusted to last available date, startDate will also be that day
      startDate.setHours(0, 0, 0, 0);
      // Ensure startDate doesn't exceed last available date (shouldn't happen, but double-check)
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
    } else if (this._currentPeriod === "week") {
      // Week view: Monday to Sunday
      // Find Monday of the week containing endDate (which is based on _currentDate)
      const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysToMonday: number;
      if (dayOfWeek === 0) {
        // If Sunday, go back 6 days to get Monday
        daysToMonday = -6;
      } else {
        // Otherwise, go back (dayOfWeek - 1) days to get Monday
        daysToMonday = -(dayOfWeek - 1);
      }
      
      // Set startDate to Monday of the week
      startDate.setDate(endDate.getDate() + daysToMonday);
      startDate.setHours(0, 0, 0, 0);
      
      // Set endDate to Sunday of the same week
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);
      
      // Adjust endDate if it exceeds last available data date
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      // If endDate was adjusted backward, ensure startDate doesn't exceed it
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          // If Monday is after last available date, move startDate to last available date
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
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
    // Use last available data date if available, otherwise use current date
    const maxDate = this._lastDataDate 
      ? new Date(this._lastDataDate)
      : new Date();
    maxDate.setHours(23, 59, 59, 999);
    
    const view = this.config.view;
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    // For week-analysis view, check if navigating by week would go into future
    const isWeekAnalysis = view === "week-analysis";
    if (isWeekAnalysis) {
      // Check if next week's Sunday would exceed maxDate
      const dayOfWeek = this._currentDate.getDay();
      let daysToSunday: number;
      if (dayOfWeek === 0) {
        daysToSunday = 0; // Already Sunday
      } else {
        daysToSunday = 7 - dayOfWeek; // Days to get to Sunday
      }
      
      const currentSunday = new Date(this._currentDate);
      currentSunday.setDate(this._currentDate.getDate() + daysToSunday);
      
      // Check next week's Sunday
      const nextWeekSunday = new Date(currentSunday);
      nextWeekSunday.setDate(currentSunday.getDate() + 7);
      nextWeekSunday.setHours(23, 59, 59, 999);
      
      return nextWeekSunday > maxDate;
    }
    
    if (isHeatCalendarYear) {
      const nextYear = this._currentDate.getFullYear() + 1;
      const maxYear = maxDate.getFullYear();
      return nextYear > maxYear;
    }
    
    const testDate = new Date(this._currentDate);
    if (this._currentPeriod === "day") {
      testDate.setDate(testDate.getDate() + 1);
      // For day view, directly check if the next day exceeds maxDate
      testDate.setHours(23, 59, 59, 999);
      return testDate > maxDate;
    } else if (this._currentPeriod === "week") {
      testDate.setDate(testDate.getDate() + 7);
    } else if (this._currentPeriod === "month") {
      testDate.setMonth(testDate.getMonth() + 1);
    }
    
    // Check if the end date of the next period would be in the future
    const { endDate } = this._getDateRangeForDate(testDate);
    return endDate > maxDate;
  }

  /**
   * Get date range for a specific date (used for future check)
   */
  private _getDateRangeForDate(date: Date): { startDate: Date; endDate: Date } {
    const view = this.config.view;
    
    // For week-analysis view, calculate date range based on week_comparison_count
    // Weeks are Monday to Sunday
    if (view === "week-analysis") {
      const comparisonCount = this.config.week_comparison_count || 2;
      
      // Find Sunday of the week containing date parameter
      let endDate = new Date(date);
      const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysToSunday: number;
      if (dayOfWeek === 0) {
        daysToSunday = 0; // Already Sunday
      } else {
        daysToSunday = 7 - dayOfWeek; // Days to get to Sunday
      }
      endDate.setDate(endDate.getDate() + daysToSunday);
      endDate.setHours(23, 59, 59, 999);
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      // Find Monday of the first week (comparisonCount weeks back from endDate)
      // Go back (comparisonCount - 1) full weeks, then find Monday of that week
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - ((comparisonCount - 1) * 7)); // Go back to Sunday of first week
      // Now find Monday of that week
      const firstWeekDayOfWeek = startDate.getDay();
      let daysToMonday: number;
      if (firstWeekDayOfWeek === 0) {
        daysToMonday = -6; // If Sunday, go back 6 days to get Monday
      } else {
        daysToMonday = -(firstWeekDayOfWeek - 1); // Otherwise, go back (dayOfWeek - 1) days
      }
      startDate.setDate(startDate.getDate() + daysToMonday);
      startDate.setHours(0, 0, 0, 0);
      
      // Ensure startDate doesn't exceed last available date
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
      
      return { startDate, endDate };
    }

    // Heat calendar views always use daily consumption data
    if (view === "heat-calendar") {
      const isHeatCalendarYear = this.config.heat_calendar_period === "year";
      
      if (isHeatCalendarYear) {
        // For year view, always fetch full year of data (January 1 - December 31)
        const selectedYear = date.getFullYear();
        
        const startDate = new Date(selectedYear, 0, 1); // January 1st
        startDate.setHours(0, 0, 0, 0);
        
        let endDate = new Date(selectedYear, 11, 31); // December 31st
        endDate.setHours(23, 59, 59, 999);
        endDate = this._adjustEndDateForLastDataDate(endDate);
        
        return { startDate, endDate };
      } else {
        // For month view, always fetch full month of daily data (1st to last day of month)
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const startDate = new Date(year, month, 1); // First day of month
        startDate.setHours(0, 0, 0, 0);
        
        let endDate = new Date(year, month + 1, 0); // Last day of month
        endDate.setHours(23, 59, 59, 999);
        endDate = this._adjustEndDateForLastDataDate(endDate);
        
        return { startDate, endDate };
      }
    }
    
    // Tariff comparison always uses daily consumption data (last 365 days)
    if (view === "tariff-comparison") {
      let endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - 364); // Last 365 days (daily data)
      startDate.setHours(0, 0, 0, 0);
      
      return { startDate, endDate };
    }
    
    // Standard period-based date range (for consumption view only)
    let endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    endDate = this._adjustEndDateForLastDataDate(endDate);
    
    const startDate = new Date(endDate);
    
    if (this._currentPeriod === "day") {
      // For day view, startDate should be the beginning of the same day as endDate
      // If endDate was adjusted to last available date, startDate will also be that day
      startDate.setHours(0, 0, 0, 0);
      // Ensure startDate doesn't exceed last available date (shouldn't happen, but double-check)
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
    } else if (this._currentPeriod === "week") {
      // Week view: Monday to Sunday
      // Find Monday of the week containing endDate (which is based on date parameter)
      const dayOfWeek = endDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysToMonday: number;
      if (dayOfWeek === 0) {
        // If Sunday, go back 6 days to get Monday
        daysToMonday = -6;
      } else {
        // Otherwise, go back (dayOfWeek - 1) days to get Monday
        daysToMonday = -(dayOfWeek - 1);
      }
      
      // Set startDate to Monday of the week
      startDate.setDate(endDate.getDate() + daysToMonday);
      startDate.setHours(0, 0, 0, 0);
      
      // Set endDate to Sunday of the same week
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);
      
      // Adjust endDate if it exceeds last available data date
      endDate = this._adjustEndDateForLastDataDate(endDate);
      
      // If endDate was adjusted backward, ensure startDate doesn't exceed it
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(0, 0, 0, 0);
        if (startDate > lastDataDateObj) {
          // If Monday is after last available date, move startDate to last available date
          startDate.setTime(lastDataDateObj.getTime());
        }
      }
    } else if (this._currentPeriod === "month") {
      startDate.setDate(startDate.getDate() - 29);
      startDate.setHours(0, 0, 0, 0);
    }
    
    return { startDate, endDate };
  }

  /**
   * Navigate to previous/next period
   * Prevents rapid clicks and page refresh by throttling and direct state updates
   */
  private _navigatePeriod(direction: "prev" | "next"): void {
    // Throttle navigation to prevent rapid clicks
    const now = Date.now();
    if (this._isNavigating || (now - this._lastNavigationTime < this._navigationThrottleMs)) {
      return;
    }
    
    // Prevent navigating to the future
    if (direction === "next" && this._wouldNavigateToFuture()) {
      return;
    }
    
    this._isNavigating = true;
    this._lastNavigationTime = now;
    
    const change = direction === "prev" ? -1 : 1;
    
    // Handle navigation based on view type
    const view = this.config.view;
    const isHeatCalendar = view === "heat-calendar";
    const isHeatCalendarYear = isHeatCalendar && this.config.heat_calendar_period === "year";
    const isHeatCalendarMonth = isHeatCalendar && this.config.heat_calendar_period === "month";
    const isWeekAnalysis = view === "week-analysis";
    const isTariffComparison = view === "tariff-comparison";
    
    if (isWeekAnalysis) {
      // Navigate by week for week analysis view (Monday to Sunday weeks)
      // Move to Sunday of current week, then add/subtract 7 days to get to next/previous week's Sunday
      const dayOfWeek = this._currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      let daysToSunday: number;
      if (dayOfWeek === 0) {
        daysToSunday = 0; // Already Sunday
      } else {
        daysToSunday = 7 - dayOfWeek; // Days to get to Sunday
      }
      
      // Move to Sunday of current week
      const currentSunday = new Date(this._currentDate);
      currentSunday.setDate(this._currentDate.getDate() + daysToSunday);
      
      // Navigate to next/previous week's Sunday
      currentSunday.setDate(currentSunday.getDate() + (change * 7));
      this._currentDate = currentSunday;
      
      // Ensure _currentDate doesn't exceed last available data date
      if (this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(23, 59, 59, 999);
        if (this._currentDate > lastDataDateObj) {
          this._currentDate = new Date(lastDataDateObj);
          // Ensure we're on Sunday of the week containing last available date
          const lastDayOfWeek = this._currentDate.getDay();
          if (lastDayOfWeek !== 0) {
            // Move to Sunday of this week
            const daysToSundayFromLast = 7 - lastDayOfWeek;
            this._currentDate.setDate(this._currentDate.getDate() + daysToSundayFromLast);
          }
        }
      }
    } else if (isHeatCalendarYear) {
      // Navigate by year for heat calendar year view
      this._currentDate.setFullYear(this._currentDate.getFullYear() + change);
      this._currentDate = new Date(this._currentDate);
    } else if (isHeatCalendarMonth) {
      // Navigate by month for heat calendar month view (independent of _currentPeriod)
      this._currentDate.setMonth(this._currentDate.getMonth() + change);
      this._currentDate = new Date(this._currentDate);
    } else if (isTariffComparison) {
      // Navigate by month for tariff comparison view (independent of _currentPeriod)
      this._currentDate.setMonth(this._currentDate.getMonth() + change);
      this._currentDate = new Date(this._currentDate);
    } else {
      // Update date based on current period (for consumption view only)
      if (this._currentPeriod === "day") {
        this._currentDate.setDate(this._currentDate.getDate() + change);
      } else if (this._currentPeriod === "week") {
        // For week view, navigate by full weeks (7 days)
        // _getDateRange() will automatically calculate Monday-Sunday for the week containing this date
        this._currentDate.setDate(this._currentDate.getDate() + (change * 7));
      } else if (this._currentPeriod === "month") {
        this._currentDate.setMonth(this._currentDate.getMonth() + change);
      }
      this._currentDate = new Date(this._currentDate);
      
      // For day view, ensure _currentDate doesn't exceed last available data date
      if (this._currentPeriod === "day" && this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(23, 59, 59, 999);
        // If current date exceeds last available date, clamp it to last available date
        if (this._currentDate > lastDataDateObj) {
          this._currentDate = new Date(lastDataDateObj);
          this._currentDate.setHours(0, 0, 0, 0);
        }
      }
      
      // For week view, ensure _currentDate doesn't exceed last available data date
      // Note: _getDateRange() will handle adjusting the week range, but we should still limit _currentDate
      if (this._currentPeriod === "week" && this._lastDataDate) {
        const lastDataDateObj = new Date(this._lastDataDate);
        lastDataDateObj.setHours(23, 59, 59, 999);
        // If current date exceeds last available date, clamp it to last available date
        if (this._currentDate > lastDataDateObj) {
          this._currentDate = new Date(lastDataDateObj);
        }
      }
    }
    
    // Load data asynchronously (fetch without page refresh)
    this._loadData().finally(() => {
      this._isNavigating = false;
    });
  }

  /**
   * Set period (day/week/month)
   * Prevents rapid clicks and ensures smooth updates
   */
  private _setPeriod(period: "day" | "week" | "month"): void {
    // Prevent redundant updates
    if (this._currentPeriod === period || this._isNavigating) {
      return;
    }
    
    // Throttle period changes
    const now = Date.now();
    if (now - this._lastNavigationTime < this._navigationThrottleMs) {
      return;
    }
    
    this._isNavigating = true;
    this._lastNavigationTime = now;
    
    // Update period directly (direct state update)
    this._currentPeriod = period;
    
    // Load data asynchronously without page refresh
    this._loadData().finally(() => {
      this._isNavigating = false;
    });
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
    const language = this.hass?.language || 'en';
    const calendarData = this._getHeatCalendarData();
    const period = this.config.heat_calendar_period || "month";
    const isYearView = period === "year";
    
    if (calendarData.length === 0) {
      return html`
        <div class="error-message">
          <div class="error-title">${localize("card.heat_calendar.unavailable", language)}</div>
          <div class="error-details">
            ${localize("card.heat_calendar.unavailable_details", language)}
          </div>
        </div>
      `;
    }

    // Group data by week and day
    const calendarMap = new Map<number, Map<number, HeatCalendarDay>>();
    // Week starts with Monday (0 = Monday, 6 = Sunday)
    const dayNames = [
      localize("card.day.mon", language),
      localize("card.day.tue", language),
      localize("card.day.wed", language),
      localize("card.day.thu", language),
      localize("card.day.fri", language),
      localize("card.day.sat", language),
      localize("card.day.sun", language)
    ];
    const monthNames = [
      localize("card.month.jan", language),
      localize("card.month.feb", language),
      localize("card.month.mar", language),
      localize("card.month.apr", language),
      localize("card.month.may", language),
      localize("card.month.jun", language),
      localize("card.month.jul", language),
      localize("card.month.aug", language),
      localize("card.month.sep", language),
      localize("card.month.oct", language),
      localize("card.month.nov", language),
      localize("card.month.dec", language)
    ];
    
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
        <div class="heat-calendar-info">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span>${localize("card.heat_calendar.intensity_info", language)}</span>
        </div>
      </div>
    `;
  }

  /**
   * Render week-over-week comparison
   */
  private _renderWeekComparison(): TemplateResult {
    const language = this.hass?.language || 'en';
    if (!this._weekComparisonData || this._weekComparisonData.weeks.length === 0) {
      return html`<div class="loading">${localize("card.week_comparison.no_data", language)}</div>`;
    }

    const { weeks, comparisons } = this._weekComparisonData;

    return html`
      <div class="week-comparison-section">
        <div class="week-comparison-grid">
          ${weeks.map((week, index) => {
            const comparison = comparisons.find(c => c.weekIndex === index);
            // Base week (index 0) is "Base Week", others are "Week -1", "Week -2", etc.
            const weekLabel = index === 0 
              ? localize("card.week_comparison.base_week", language)
              : `Week -${index}`;
            return html`
              <div class="week-card">
                <div class="week-card-header">
                  ${weekLabel}
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
    const period = this.config.heat_calendar_period || "month";
    let dailyBreakdown: Array<{ date: string; consumption: number; cost?: number }> = [];

    // Try to use tariff costs daily breakdown first
    if (this._tariffCosts && this.config.source_entry_id) {
      const tariffCost = this._tariffCosts[this.config.source_entry_id];
      if (tariffCost && tariffCost.daily_breakdown && tariffCost.daily_breakdown.length > 0) {
        dailyBreakdown = tariffCost.daily_breakdown;
      }
    }

    // Fallback to consumption data if daily breakdown is not available
    if (dailyBreakdown.length === 0 && this._consumptionData && this._consumptionData.length > 0) {
      // Group consumption data by day
      const dailyMap = new Map<string, { consumption: number; cost: number }>();
      
      for (const point of this._consumptionData) {
        // Use date field if available, otherwise extract from start_time
        const dateStr = point.date || (point.start_time ? point.start_time.split('T')[0] : null);
        if (!dateStr) continue;
        
        const consumption = point.consumption || point.value || 0;
        const existing = dailyMap.get(dateStr) || { consumption: 0, cost: 0 };
        dailyMap.set(dateStr, {
          consumption: existing.consumption + consumption,
          cost: existing.cost // Cost not available in consumption data
        });
      }
      
      // Convert map to array format
      dailyBreakdown = Array.from(dailyMap.entries()).map(([date, data]) => ({
        date,
        consumption: data.consumption,
        cost: data.cost
      })).sort((a, b) => a.date.localeCompare(b.date));
    }

    if (dailyBreakdown.length === 0) {
      return [];
    }
    
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
      // Convert to Monday-based week: 0 = Monday, 6 = Sunday
      const dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 1;
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-11
      
      let weekOfMonth: number | undefined;
      let weekOfYear: number | undefined;
      
      if (period === "year") {
        // Calculate week of year (ISO standard, 0-based)
        weekOfYear = this._getISOWeekOfYear(date);
      } else {
        // Calculate week of month (0-based, week starts with Monday)
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        // Convert to Monday-based: 0 = Monday, 6 = Sunday
        const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
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
        cost: day.cost || 0,
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
    const comparisonCount = this.config.week_comparison_count || 2;
    let dailyBreakdown: Array<{ date: string; consumption: number; cost: number; p1_consumption?: number; p2_consumption?: number; p3_consumption?: number }> = [];
    let tariffCost: any = null;

    // Try to use tariff costs daily breakdown first
    if (this._tariffCosts && this.config.source_entry_id) {
      tariffCost = this._tariffCosts[this.config.source_entry_id];
      if (tariffCost && tariffCost.daily_breakdown && tariffCost.daily_breakdown.length > 0) {
        dailyBreakdown = tariffCost.daily_breakdown;
      }
    }

    // Fallback to consumption data if daily breakdown is not available
    if (dailyBreakdown.length === 0 && this._consumptionData && this._consumptionData.length > 0) {
      // Group consumption data by day
      const dailyMap = new Map<string, { 
        consumption: number; 
        cost: number;
        p1_consumption: number;
        p2_consumption: number;
        p3_consumption: number;
      }>();
      
      for (const point of this._consumptionData) {
        // Use date field if available, otherwise extract from start_time
        const dateStr = point.date || (point.start_time ? point.start_time.split('T')[0] : null);
        if (!dateStr) continue;
        
        const consumption = point.consumption || point.value || 0;
        const existing = dailyMap.get(dateStr) || { 
          consumption: 0, 
          cost: 0,
          p1_consumption: 0,
          p2_consumption: 0,
          p3_consumption: 0
        };
        dailyMap.set(dateStr, {
          consumption: existing.consumption + consumption,
          cost: existing.cost, // Cost not available in consumption data
          p1_consumption: existing.p1_consumption + (point.p1_consumption || 0),
          p2_consumption: existing.p2_consumption + (point.p2_consumption || 0),
          p3_consumption: existing.p3_consumption + (point.p3_consumption || 0)
        });
      }
      
      // Convert map to array format
      dailyBreakdown = Array.from(dailyMap.entries()).map(([date, data]) => ({
        date,
        consumption: data.consumption,
        cost: data.cost,
        p1_consumption: data.p1_consumption,
        p2_consumption: data.p2_consumption,
        p3_consumption: data.p3_consumption
      })).sort((a, b) => a.date.localeCompare(b.date));
    }

    if (dailyBreakdown.length === 0) {
      return null;
    }

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
      week.cost += (day.cost || 0);
      
      // Use period breakdown data if available
      if (day.p1_consumption !== undefined && day.p2_consumption !== undefined && day.p3_consumption !== undefined) {
        // Use actual P1/P2/P3 data from consumption data
        week.periodBreakdown.p1_consumption += day.p1_consumption;
        week.periodBreakdown.p2_consumption += day.p2_consumption;
        week.periodBreakdown.p3_consumption += day.p3_consumption;
      } else if (tariffCost && tariffCost.period_breakdown) {
        // Estimate period breakdown from percentages if available
        const p1Pct = tariffCost.period_breakdown.p1_percentage / 100;
        const p2Pct = tariffCost.period_breakdown.p2_percentage / 100;
        const p3Pct = tariffCost.period_breakdown.p3_percentage / 100;
        week.periodBreakdown.p1_consumption += day.consumption * p1Pct;
        week.periodBreakdown.p2_consumption += day.consumption * p2Pct;
        week.periodBreakdown.p3_consumption += day.consumption * p3Pct;
      }
      // If no period breakdown available, leave at 0
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
    const language = this.hass?.language || 'en';
    
    // Show full loading screen only on initial load (when we don't have data yet)
    if (this._loading && !this._hasInitialData) {
      return html`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>${localize("card.loading", language)}</p>
        </div>
      `;
    }

    if (this._error) {
      const isConfigError = this._error.includes("Configuration incomplete") || this._error.includes("configuration is required");
      
      return html`
        <div class="error-message">
          <ha-icon icon="${isConfigError ? "mdi:cog-outline" : "mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${isConfigError ? localize("card.error.configuration_required", language) : localize("card.error.unable_to_load", language)}</div>
          <div class="error-details">${this._error}</div>
          ${isConfigError ? html`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              ${localize("card.error.config_help", language)}
            </div>
          ` : html`
            <button class="retry-button" @click=${this._loadData}>
              ${localize("card.button.retry", language)}
            </button>
          `}
        </div>
      `;
    }

    const view = this.config.view;

    return html`
      <div class="card-content-wrapper">
        ${this._loading && this._hasInitialData ? html`
          <div class="loading-overlay">
            <ha-circular-progress indeterminate style="--mdc-theme-primary: var(--primary-color);"></ha-circular-progress>
          </div>
        ` : ""}
        ${view === "consumption" ? this._renderConsumptionView() : ""}
        ${view === "heat-calendar" ? this._renderHeatCalendarView() : ""}
        ${view === "week-analysis" ? this._renderWeekAnalysisView() : ""}
        ${view === "tariff-comparison" ? this._renderTariffComparisonView() : ""}
      </div>
    `;
  }

  /**
   * Render consumption view (time-series charts)
   */
  private _renderConsumptionView(): TemplateResult {
    const language = this.hass?.language || 'en';
    
    // Calculate total consumption for summary
    const totalConsumption = this._consumptionData.reduce((sum, d) => 
      sum + (d.consumption || d.value || 0), 0
    );
    
    return html`
      ${this.config.show_navigation !== false ? html`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("prev");
            }}
          >
            ${localize("card.button.previous", language)}
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("next");
            }}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture() ? "opacity: 0.5; cursor: not-allowed;" : ""}
          >
            ${localize("card.button.next", language)}
          </button>
        </div>
      ` : ""}

      ${this._consumptionData.length > 0 ? html`
        <div class="consumption-summary-header">
          <div class="summary-header-top">
            <div class="summary-title-section">
              <ha-icon icon="mdi:lightning-bolt" class="summary-icon"></ha-icon>
              <h3 class="summary-title">${localize("card.title.electricity", language)}</h3>
            </div>
            <div class="summary-view-toggle">
              <ha-icon 
                icon="mdi:chart-line" 
                class="view-icon ${this._showChartView ? 'active' : ''}"
                @click=${(e: Event) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this._showChartView = true;
                }}
              ></ha-icon>
              <ha-icon 
                icon="mdi:view-list" 
                class="view-icon ${!this._showChartView ? 'active' : ''}"
                @click=${(e: Event) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this._showChartView = false;
                }}
              ></ha-icon>
            </div>
          </div>
          <div class="summary-date-range">${this._formatDateRange()}</div>
          <div class="summary-total-consumption">${totalConsumption.toLocaleString('es-ES', { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0 
          })} kWh</div>
        </div>
      ` : ""}

      ${this._showChartView ? html`
        <div class="chart-container">
          ${this._renderChart()}
        </div>
      ` : html`
        <div class="consumption-list-container">
          ${this._renderConsumptionList()}
        </div>
      `}
    `;
  }

  /**
   * Render consumption list view (table format)
   */
  private _renderConsumptionList(): TemplateResult {
    const language = this.hass?.language || 'en';
    
    if (this._loading) {
      return html`<div class="loading">${localize("card.loading", language)}</div>`;
    }

    if (!this._loading && !this._error && this._consumptionData.length === 0) {
      const dateRange = this._formatDateRange();
      return html`
        <div class="loading">
          <div>${localize("card.no_data", language)}</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${dateRange}
          </div>
        </div>
      `;
    }

    if (this._error) {
      return html`
        <div class="error-message">
          <div class="error-title">${localize("card.error.unable_to_load", language)}</div>
          <div class="error-details">${this._error}</div>
        </div>
      `;
    }

    // Format data for display
    const formattedData = this._consumptionData.map(point => {
      const date = new Date(point.start_time || point.date || '');
      const consumption = point.consumption || point.value || 0;
      const period = point.period || null;
      
      // Format date based on current period
      let dateStr = '';
      if (this._currentPeriod === 'day') {
        dateStr = date.toLocaleTimeString('es-ES', { 
          hour: '2-digit', 
          minute: '2-digit' 
        });
      } else if (this._currentPeriod === 'week') {
        dateStr = date.toLocaleDateString('es-ES', { 
          weekday: 'short',
          day: 'numeric',
          month: 'short'
        });
      } else {
        dateStr = date.toLocaleDateString('es-ES', { 
          day: 'numeric',
          month: 'short'
        });
      }

      return {
        date,
        dateStr,
        consumption,
        period,
        p1: point.p1_consumption,
        p2: point.p2_consumption,
        p3: point.p3_consumption
      };
    });

    // Check if we have period breakdown data
    const hasPeriodBreakdown = formattedData.some(d => d.p1 !== undefined || d.p2 !== undefined || d.p3 !== undefined);

    return html`
      <div class="consumption-list">
        <table class="consumption-table">
          <thead>
            <tr>
              <th>${this._currentPeriod === 'day' ? 'Time' : 'Date'}</th>
              ${hasPeriodBreakdown ? html`
                <th>P1</th>
                <th>P2</th>
                <th>P3</th>
              ` : ''}
              <th>Total (kWh)</th>
              ${hasPeriodBreakdown ? '' : html`
                <th>Period</th>
              `}
            </tr>
          </thead>
          <tbody>
            ${formattedData.map(item => html`
              <tr>
                <td>${item.dateStr}</td>
                ${hasPeriodBreakdown ? html`
                  <td>${item.p1 !== undefined ? item.p1.toFixed(2) : '-'}</td>
                  <td>${item.p2 !== undefined ? item.p2.toFixed(2) : '-'}</td>
                  <td>${item.p3 !== undefined ? item.p3.toFixed(2) : '-'}</td>
                ` : ''}
                <td class="consumption-value">${item.consumption.toFixed(2)}</td>
                ${hasPeriodBreakdown ? '' : html`
                  <td>${item.period || '-'}</td>
                `}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }

  /**
   * Render heat calendar view
   */
  private _renderHeatCalendarView(): TemplateResult {
    const language = this.hass?.language || 'en';
    return html`
      ${this.config.show_navigation !== false ? html`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("prev");
            }}
          >
            ${this.config.heat_calendar_period === "year" 
              ? `${localize("card.button.previous", language)} ${localize("editor.heat_calendar_period_year", language)}`
              : `${localize("card.button.previous", language)} ${localize("editor.heat_calendar_period_month", language)}`}
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("next");
            }}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture() ? "opacity: 0.5; cursor: not-allowed;" : ""}
          >
            ${this.config.heat_calendar_period === "year"
              ? `${localize("editor.heat_calendar_period_year", language)} ${localize("card.button.next", language)}`
              : `${localize("editor.heat_calendar_period_month", language)} ${localize("card.button.next", language)}`}
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
    const language = this.hass?.language || 'en';
    return html`
      ${this.config.show_navigation !== false ? html`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("prev");
            }}
          >
            ← Previous
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${(e: Event) => {
              e.preventDefault();
              e.stopPropagation();
              this._navigatePeriod("next");
            }}
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
    const language = this.hass?.language || 'en';
    return html`
      <div class="comparison-section">
        ${this._comparisonError ? html`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        ` : this._comparisonResult ? html`
          <div class="tariff-comparison-info">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            <span>${localize("card.tariff_comparison.info", language)}</span>
          </div>
          ${this._renderComparison()}
          ${this.config.show_tariff_chart !== false ? this._renderTariffComparisonChart() : ""}
        ` : html`
          <div class="loading">${localize("card.tariff_comparison.loading", language)}</div>
        `}
      </div>
    `;
  }

  /**
   * Format date for display (Spanish locale)
   */
  private _formatDate(date: Date, period?: 'day' | 'week' | 'month' | 'year'): string {
    const language = this.hass?.language || 'en';
    if (period === 'year') {
      // For year view, show month abbreviation using localized names
      const monthNames = [
        localize("card.month.jan", language),
        localize("card.month.feb", language),
        localize("card.month.mar", language),
        localize("card.month.apr", language),
        localize("card.month.may", language),
        localize("card.month.jun", language),
        localize("card.month.jul", language),
        localize("card.month.aug", language),
        localize("card.month.sep", language),
        localize("card.month.oct", language),
        localize("card.month.nov", language),
        localize("card.month.dec", language)
      ];
      return monthNames[date.getMonth()];
    }
    
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  /**
   * Format date range for display (Spanish locale)
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
    // Show loading indicator while fetching data
    const language = this.hass?.language || 'en';
    if (this._loading) {
      return html`<div class="loading">${localize("card.loading", language)}</div>`;
    }

    // Show "No consumption data" only if loading is complete, no error, and no data
    if (!this._loading && !this._error && this._consumptionData.length === 0) {
      const dateRange = this._formatDateRange();
      return html`
        <div class="loading">
          <div>${localize("card.no_data", language)}</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${dateRange}
          </div>
        </div>
      `;
    }

    // Return SVG container - actual rendering happens in _renderD3Chart
    return html`
      <div 
        id="chart-container"
        class="chart-svg-container">
      </div>
    `;
  }

  private async _renderD3Chart(): Promise<void> {
    const container = this.shadowRoot?.querySelector('#chart-container') as HTMLElement;
    // Only render if container exists, not loading, no error, and we have data
    if (!container || this._loading || this._error || this._consumptionData.length === 0) {
      return;
    }

    const chartType = this.config.chart_type || "line";
    const width = 800;
    const height = 300;
    
    // Prepare chart data with grouping based on period
    let values = this._consumptionData.map(d => d.consumption || d.value || 0);
    let timestamps = this._consumptionData.map(d => d.start_time || d.date || '');
    
    // Group data based on period type
    // Week: group daily data by weeks
    // Year (heat calendar): group daily data by months
    const view = this.config.view;
    const isHeatCalendarYear = view === "heat-calendar" && 
                               this.config.heat_calendar_period === "year";
    
    if (this._currentPeriod === "week" && values.length > 0) {
      // Group daily data by weeks
      const grouped = groupByWeeks(values, timestamps);
      values = grouped.values;
      timestamps = grouped.timestamps;
    } else if (isHeatCalendarYear && values.length > 0) {
      // Group daily data by months for year view
      const grouped = groupByMonths(values, timestamps);
      values = grouped.values;
      timestamps = grouped.timestamps;
    }
    
    // Prepare cost data if enabled (after grouping consumption data)
    let costData: ChartData | undefined;
    const costEnabled = !!(this.config.show_cost_on_chart && 
                        this.config.selected_tariff_for_cost && 
                        this._tariffCosts !== null);
    
    if (costEnabled && this._tariffCosts && this.config.selected_tariff_for_cost) {
      const tariffCost = this._tariffCosts[this.config.selected_tariff_for_cost];
      if (tariffCost) {
        // Use daily breakdown for week and month periods, hourly for day
        const breakdown = this._currentPeriod === "day" 
          ? tariffCost.hourly_breakdown 
          : tariffCost.daily_breakdown;
        
        if (breakdown && breakdown.length > 0) {
          let costValues = breakdown.map((item: { cost: number }) => item.cost);
          let costTimestamps = breakdown.map((item: { timestamp?: string; date?: string }) => 
            item.timestamp || item.date || ''
          );
          
          // Group cost data the same way as consumption data
          if (this._currentPeriod === "week" && costValues.length > 0) {
            const grouped = groupByWeeks(costValues, costTimestamps);
            costValues = grouped.values;
            costTimestamps = grouped.timestamps;
          } else if (isHeatCalendarYear && costValues.length > 0) {
            const grouped = groupByMonths(costValues, costTimestamps);
            costValues = grouped.values;
            costTimestamps = grouped.timestamps;
          }
          
          if (costValues.length === values.length) {
            const maxCost = Math.max(...costValues, 0.01);
            const minCost = Math.min(...costValues, 0);
            const tempConfig: ChartConfig = {
              width,
              height,
              padding: { top: 20, right: 60, bottom: 40, left: 60 },
              colors: {} as any
            };
            
            costData = {
              points: calculatePoints(costValues, tempConfig, minCost, maxCost, costTimestamps),
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

    // Get colors - matching Octopus Energy España style
    // Bar default color: purple/violet (#8B5CF6)
    // Bar hover color: bright pink (#ff69b4)
    const barDefaultColor = '#8B5CF6'; // Purple/violet like Octopus Energy España
    const barHoverColor = '#ff69b4'; // Bright pink for hover
    const primaryColor = this._getComputedColor('--primary-color', barDefaultColor);
    const colors = {
      text: this._getComputedColor('--secondary-text-color', '#b0b0b0'),
      accent: this._getComputedColor('--accent-color', '#ff9800'),
      primary: primaryColor, // Use purple for default bars
      hover: barHoverColor, // Bright pink for hover
      error: this._getComputedColor('--error-color', '#f44336'),
      warning: this._getComputedColor('--warning-color', '#ff9800'),
      success: this._getComputedColor('--success-color', '#4caf50'),
      info: this._getComputedColor('--info-color', '#2196f3'),
      background: this._getComputedColor('--card-background-color', '#fff'),
      grid: this._getComputedColor('--divider-color', 'rgba(255, 255, 255, 0.1)'), // Subtle grid lines
      axis: this._getComputedColor('--divider-color', 'rgba(255, 255, 255, 0.2)') // Slightly more visible axis
    };

    // Create or update chart instance
    if (!this._chartInstance) {
      // Clear container before creating new chart
      container.innerHTML = '';
      this._chartInstance = new D3Chart(container, {
        width,
        height,
        padding,
        colors,
        language: this.hass?.language || 'en'
      });
    } else {
      // Clear previous chart content and resize
      this._chartInstance.clear();
      this._chartInstance.resize(width, height);
    }

    // Animation config - disabled for instant display
    const animationConfig: AnimationConfig = {
      enabled: false
    };

    // Determine period type for X-axis formatting
    const periodType = isHeatCalendarYear ? 'year' : this._currentPeriod;
    
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
            animation: animationConfig,
            period: periodType,
            interactive: true // Enable tooltips
          });
          break;
        case 'bar':
          await this._chartInstance.renderBarChart(chartData, {
            showCostOverlay: !!(costEnabled && costData),
            costData,
            animation: animationConfig,
            period: periodType,
            interactive: true // Enable tooltips
          });
          break;
        case 'stacked-area':
          const stackedData = this._prepareStackedData();
          if (stackedData) {
            await this._chartInstance.renderStackedAreaChart(stackedData, {
              animation: animationConfig,
              period: periodType,
              interactive: true // Enable tooltips
            });
          } else {
            // Show error message in container
            const language = this.hass?.language || 'en';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `
              <div class="error-title">${localize("card.stacked_area.unavailable", language)}</div>
              <div class="error-details">
                ${localize("card.stacked_area.unavailable_details", language)}
              </div>
            `;
            if (container.firstChild) {
              container.replaceChild(errorDiv, container.firstChild);
            } else {
              container.appendChild(errorDiv);
            }
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
        name: 'Octopus Energy España Consumption',
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
  const VERSION = '0.6.10';
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
