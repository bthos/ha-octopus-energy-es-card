/**
 * Octopus Energy España Consumption Card
 * 
 * A Lovelace card for displaying consumption graphs and tariff comparisons.
 */

import { LitElement, html, css, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig, ConsumptionDataPoint, ComparisonResult, FetchConsumptionResult, TariffComparisonResult } from "./types";
// Import editor to ensure it's included in the bundle
import "./octopus-consumption-card-editor";

// Home Assistant types
interface HomeAssistant {
  states: Record<string, any>;
  callService: (domain: string, service: string, serviceData?: Record<string, any>) => Promise<any>;
  [key: string]: any;
}

@customElement("octopus-consumption-card")
export class OctopusConsumptionCard extends LitElement {
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
      this._loadData();
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

    if (!this.config.entity) {
      this._error = "Entity is required. Please specify a consumption sensor entity.";
      this._loading = false;
      return;
    }

    if (!this.config.entity.startsWith("sensor.octopus_energy_es_")) {
      this._error = `Invalid entity format. Entity must be an Octopus Energy España sensor (e.g., sensor.octopus_energy_es_*). Got: ${this.config.entity}`;
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
   * Calls a Home Assistant service with timeout
   */
  private async _callServiceWithTimeout<T>(
    domain: string,
    service: string,
    serviceData?: Record<string, any>
  ): Promise<T> {
    const serviceCall = this.hass.callService(domain, service, serviceData);
    const timeout = this._createTimeoutPromise(this.SERVICE_TIMEOUT);
    
    return Promise.race([serviceCall, timeout]) as Promise<T>;
  }

  private async _loadData(): Promise<void> {
    if (!this.config.entity || !this.hass) {
      return;
    }

    this._loading = true;
    this._error = null;
    this._comparisonError = null;

    try {
      // Get entry_id from entity
      const entityState = this.hass.states[this.config.entity];
      if (!entityState) {
        throw new Error(`Entity ${this.config.entity} not found`);
      }

      // Extract entry_id from entity_id
      // Format: sensor.octopus_energy_es_<entry_id>_daily_consumption
      // Or: sensor.octopus_energy_es_<entry_id>_<sensor_type>
      let entryId: string | undefined;
      
      // Try to get entry_id from entity attributes first
      if (entityState.attributes && entityState.attributes.entry_id) {
        entryId = entityState.attributes.entry_id;
      } else {
        // Fallback: parse from entity_id
        const entityIdParts = this.config.entity.split("_");
        const octopusIndex = entityIdParts.indexOf("octopus");
        const energyIndex = entityIdParts.indexOf("energy");
        
        if (octopusIndex >= 0 && energyIndex === octopusIndex + 1) {
          // Extract everything between "energy" and the last two parts (sensor type)
          const startIndex = energyIndex + 2; // After "octopus_energy_es"
          const endIndex = entityIdParts.length - 2; // Before sensor type
          if (startIndex < endIndex) {
            entryId = entityIdParts.slice(startIndex, endIndex).join("_");
          }
        }
      }
      
      if (!entryId) {
        throw new Error(`Could not extract entry_id from entity ${this.config.entity}. Please check entity ID format.`);
      }

      // Calculate date range based on current period
      const { startDate, endDate } = this._getDateRange();

      // Fetch consumption data with timeout
      const consumptionResult = await this._callServiceWithTimeout<FetchConsumptionResult>(
        "octopus_energy_es",
        "fetch_consumption",
        {
          entry_id: entryId,
          start_date: startDate.toISOString().split("T")[0],
          end_date: endDate.toISOString().split("T")[0],
          granularity: this._currentPeriod === "day" ? "hourly" : this._currentPeriod === "week" ? "hourly" : "daily",
        }
      );

      if (!consumptionResult.success) {
        throw new Error(consumptionResult.error || "Failed to fetch consumption data");
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
            console.warn("Tariff comparison failed:", errorMsg);
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          this._comparisonError = `Tariff comparison error: ${errorMsg}`;
          console.warn("Tariff comparison error:", error);
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
      entity: "",
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

declare global {
  interface HTMLElementTagNameMap {
    "octopus-consumption-card": OctopusConsumptionCard;
  }
}

// Explicitly register the custom element for Home Assistant
// This ensures the element is available even if decorators don't work properly
// Register immediately when module loads (for IIFE bundles)
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  if (!customElements.get('octopus-consumption-card')) {
    customElements.define('octopus-consumption-card', OctopusConsumptionCard);
  }
}
