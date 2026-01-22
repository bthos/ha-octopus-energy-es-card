/**
 * Octopus Energy España Consumption Card Editor
 * 
 * Visual editor component for configuring the consumption card
 */

import { LitElement, html, PropertyValues, TemplateResult, nothing } from "lit";

// Disable Lit dev mode warnings (only available in dev builds)
// This will be tree-shaken out in production builds
if (typeof LitElement !== 'undefined' && (LitElement as any).disableWarning) {
  (LitElement as any).disableWarning('change-in-update');
}
import { property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig } from "./types";
import { localize, computeLabel, computeHelper } from "./localization";
import { editorStyles } from "./styles";

// Home Assistant types
interface HomeAssistant {
  states: Record<string, any>;
  callService: (domain: string, service: string, serviceData?: Record<string, any>) => Promise<any>;
  [key: string]: any;
}

interface LovelaceCardEditor extends HTMLElement {
  setConfig(config: OctopusConsumptionCardConfig): void;
  config?: OctopusConsumptionCardConfig;
  hass?: HomeAssistant;
}

export class OctopusConsumptionCardEditor extends LitElement implements LovelaceCardEditor {
  // Disable Lit dev mode warnings for this class
  static enabledWarnings: ('migration' | 'change-in-update')[] = [];

  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public config?: OctopusConsumptionCardConfig;

  @state() private _config: OctopusConsumptionCardConfig = {
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
  };

  private _language: string = "en";

  static styles = editorStyles;

  /**
   * Apply default values to match card behavior
   * Only applies defaults for undefined values
   */
  private _applyDefaults(config: OctopusConsumptionCardConfig): OctopusConsumptionCardConfig {
    return {
      type: config.type || "custom:octopus-consumption-card",
      source_entry_id: config.source_entry_id || "",
      view: config.view || "consumption",
      default_period: config.default_period || "week",
      chart_type: config.chart_type || "line",
      tariff_entry_ids: config.tariff_entry_ids || [],
      show_cost_on_chart: config.show_cost_on_chart !== undefined ? config.show_cost_on_chart : false,
      show_navigation: config.show_navigation !== undefined ? config.show_navigation : true,
      show_period_distribution: config.show_period_distribution !== undefined ? config.show_period_distribution : false,
      show_moving_average: config.show_moving_average !== undefined ? config.show_moving_average : false,
      moving_average_days: config.moving_average_days || 7,
      // Only set heat_calendar_period if view is heat-calendar, and ensure it's valid
      heat_calendar_period: (config.view === "heat-calendar" && config.heat_calendar_period && 
                             (config.heat_calendar_period === "month" || config.heat_calendar_period === "year"))
        ? config.heat_calendar_period
        : (config.view === "heat-calendar" ? "month" : config.heat_calendar_period),
      
      week_comparison_count: config.week_comparison_count || 2,
      show_cost_trend: config.show_cost_trend !== undefined ? config.show_cost_trend : false,
      cost_moving_average_days: config.cost_moving_average_days || 30,
      show_tariff_chart: config.show_tariff_chart !== undefined ? config.show_tariff_chart : true,
      selected_tariff_for_cost: config.selected_tariff_for_cost,
      consumption_sensor: config.consumption_sensor,
    };
  }

  setConfig(config: OctopusConsumptionCardConfig): void {
    // Apply defaults to match card behavior
    const configWithDefaults = this._applyDefaults(config);
    
    // Only update if config actually changed to prevent unnecessary updates
    const configStr = JSON.stringify(this._config);
    const newConfigStr = JSON.stringify(configWithDefaults);
    if (configStr !== newConfigStr) {
      this._config = configWithDefaults;
    }
  }

  protected willUpdate(changedProperties: PropertyValues): void {
    // Sync config before update to prevent update cycle
    if (changedProperties.has("config") && this.config) {
      // Apply defaults to match card behavior
      const configWithDefaults = this._applyDefaults(this.config);
      const configStr = JSON.stringify(this._config);
      const newConfigStr = JSON.stringify(configWithDefaults);
      if (configStr !== newConfigStr) {
        this._config = configWithDefaults;
      }
    }
    // Update language if hass changed
    if (changedProperties.has("hass") && this.hass) {
      const newLanguage = this.hass.language || "en";
      if (this._language !== newLanguage) {
        this._language = newLanguage;
      }
    }
  }

  protected firstUpdated(): void {
    // Initial sync if config was provided before first render
    if (this.config) {
      // Apply defaults to match card behavior
      const configWithDefaults = this._applyDefaults(this.config);
      const configStr = JSON.stringify(this._config);
      const newConfigStr = JSON.stringify(configWithDefaults);
      if (configStr !== newConfigStr) {
        this._config = configWithDefaults;
      }
    }
    if (this.hass) {
      this._language = this.hass.language || "en";
    }
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
      return;
    }

    const newConfig = ev.detail.value;
    
    // Ensure view is always set (default to "consumption" if not specified)
    if (!newConfig.view) {
      newConfig.view = "consumption";
    }
    
    // Handle view change - rebuild schema if view changed
    const viewChanged = this._config.view !== newConfig.view;
    
    // Set default values for view-specific fields when switching views
    if (viewChanged) {
      if (newConfig.view === "heat-calendar") {
        // Always set heat_calendar_period to "month" if not set or if it's an invalid value
        if (!newConfig.heat_calendar_period || 
            (newConfig.heat_calendar_period !== "month" && newConfig.heat_calendar_period !== "year")) {
          newConfig.heat_calendar_period = "month";
        }
      }
    }
    
    // Handle conditional fields
    if (newConfig.show_cost_on_chart === false) {
      newConfig.selected_tariff_for_cost = undefined;
    }

    this._config = newConfig;
    
    // Request update if view changed to rebuild schema
    if (viewChanged) {
      this.requestUpdate();
    }
    
    this._fireConfigChanged();
  }



  private _fireConfigChanged(): void {
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }


  private _buildSchema(): any[] {
    const view = this._config.view;
    const schema: any[] = [
      {
        name: "view",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "consumption", label: localize("editor.view_consumption", this._language) },
              { value: "heat-calendar", label: localize("editor.view_heat_calendar", this._language) },
              { value: "week-analysis", label: localize("editor.view_week_analysis", this._language) },
              { value: "tariff-comparison", label: localize("editor.view_tariff_comparison", this._language) },
            ],
          },
        },
      },
      {
        name: "source_entry_id",
        required: true,
        selector: {
          config_entry: {
            integration: "octopus_energy_es",
          },
        },
      },
    ];

    // Add view-specific options
    if (view === "consumption") {
      schema.push(
        {
          name: "default_period",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "day", label: localize("editor.period_day", this._language) },
                { value: "week", label: localize("editor.period_week", this._language) },
                { value: "month", label: localize("editor.period_month", this._language) },
              ],
            },
          },
        },
        {
          name: "chart_type",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "line", label: localize("editor.chart_type_line", this._language) },
                { value: "bar", label: localize("editor.chart_type_bar", this._language) },
                { value: "stacked-area", label: localize("editor.chart_type_stacked_area", this._language) },
              ],
            },
          },
        },
        {
          name: "show_navigation",
          selector: {
            boolean: {},
          },
        },
        {
          name: "show_period_distribution",
          selector: {
            boolean: {},
          },
        },
        {
          name: "show_moving_average",
          selector: {
            boolean: {},
          },
        }
      );

      // Add moving average days if enabled
      if (this._config.show_moving_average) {
        schema.push({
          name: "moving_average_days",
          selector: {
            number: {
              min: 2,
              max: 30,
              mode: "box",
            },
          },
        });
      }

      schema.push(
        {
          name: "show_cost_on_chart",
          selector: {
            boolean: {},
          },
        }
      );

      if (this._config.show_cost_on_chart) {
        schema.push({
          name: "selected_tariff_for_cost",
          selector: {
            config_entry: {
              integration: "octopus_energy_es",
            },
          },
        });
      }

      // Add cost trend options
      schema.push({
        name: "show_cost_trend",
        selector: {
          boolean: {},
        },
      });

      if (this._config.show_cost_trend) {
        schema.push({
          name: "cost_moving_average_days",
          selector: {
            number: {
              min: 2,
              max: 90,
              mode: "box",
            },
          },
        });
      }
    } else if (view === "heat-calendar") {
      schema.push(
        {
          name: "heat_calendar_period",
          default: this._config.heat_calendar_period || "month",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "month", label: localize("editor.heat_calendar_period_month", this._language) },
                { value: "year", label: localize("editor.heat_calendar_period_year", this._language) },
              ],
            },
          },
        },
        {
          name: "show_navigation",
          selector: {
            boolean: {},
          },
        }
      );
    } else if (view === "week-analysis") {
      schema.push(
        {
          name: "week_comparison_count",
          selector: {
            number: {
              min: 2,
              max: 8,
              mode: "box",
            },
          },
        },
        {
          name: "show_navigation",
          selector: {
            boolean: {},
          },
        }
      );
    } else if (view === "tariff-comparison") {
      // tariff_entry_ids is handled by custom UI, not in schema
      schema.push({
        name: "show_tariff_chart",
        selector: {
          boolean: {},
        },
      });
    }

    // Optional sensor override (available for all views)
    schema.push({
      name: "consumption_sensor",
      selector: {
        entity: {
          domain: "sensor",
        },
      },
    });

    return schema;
  }

  private _computeLabel = (schema: any): string => {
    return computeLabel(schema, this._language);
  };

  private _computeHelper = (schema: any): string => {
    return computeHelper(schema, this._language);
  };

  private _handleTariffSelection(index: number, ev: CustomEvent): void {
    const selectedEntryId = ev.detail.value;
    const currentTariffIds = this._config.tariff_entry_ids || [];
    
    // Update the array at the specific index
    const newTariffIds = [...currentTariffIds];
    
    // Ensure array is long enough
    while (newTariffIds.length <= index) {
      newTariffIds.push("");
    }
    
    let updatedTariffIds: string[];
    if (selectedEntryId) {
      // Check if this entry ID is already used in another position
      const existingIndex = newTariffIds.findIndex((id, i) => i !== index && id === selectedEntryId);
      if (existingIndex !== -1) {
        // Clear the existing position
        newTariffIds[existingIndex] = "";
      }
      
      newTariffIds[index] = selectedEntryId;
      // Remove empty entries and duplicates, but keep order
      updatedTariffIds = newTariffIds.filter((id, i, arr) => {
        return id && arr.indexOf(id) === i;
      });
    } else {
      // Remove the entry at this index
      newTariffIds.splice(index, 1);
      updatedTariffIds = newTariffIds.filter(id => id);
    }
    
    // Create a new config object instead of mutating the existing one
    this._config = {
      ...this._config,
      tariff_entry_ids: updatedTariffIds
    };
    
    this.requestUpdate();
    this._fireConfigChanged();
  }

  private _removeTariff(index: number): void {
    const currentTariffIds = this._config.tariff_entry_ids || [];
    if (index >= currentTariffIds.length) {
      return;
    }
    
    const newTariffIds = [...currentTariffIds];
    newTariffIds.splice(index, 1);
    const updatedTariffIds = newTariffIds.filter(id => id);
    
    // Create a new config object instead of mutating the existing one
    this._config = {
      ...this._config,
      tariff_entry_ids: updatedTariffIds
    };
    
    this.requestUpdate();
    this._fireConfigChanged();
  }

  private _renderTariffDropdowns(): TemplateResult {
    const tariffIds = this._config.tariff_entry_ids || [];
    // Always show at least one empty dropdown
    // If there are selected tariffs, show one more empty dropdown for adding another
    const dropdownCount = tariffIds.length > 0 ? tariffIds.length + 1 : 1;

    return html`
      <div class="form-group">
        <label>${localize("editor.tariff_entry_ids_label", this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({ length: dropdownCount }, (_, index) => {
            const currentValue = tariffIds[index] || "";
            
            return html`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{ config_entry: { integration: "octopus_energy_es" } }}
                  .value=${currentValue}
                  .label=${index === 0 
                    ? localize("editor.tariff_entry_ids_helper", this._language)
                    : nothing}
                  @value-changed=${(ev: CustomEvent) => this._handleTariffSelection(index, ev)}
                ></ha-selector>
                ${currentValue ? html`
                  <ha-icon-button
                    .label=${"Remove"}
                    @click=${() => this._removeTariff(index)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                ` : nothing}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div class="card-config">Loading...</div>`;
    }

    const schema = this._buildSchema();
    const view = this._config.view;

    return html`
      <div class="card-config">
        <!-- Main Configuration Form -->
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${schema}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
        
        ${view === "tariff-comparison" ? this._renderTariffDropdowns() : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "octopus-consumption-card-editor": OctopusConsumptionCardEditor;
  }
}

// Explicitly register the editor custom element for Home Assistant
// This ensures the element is available even if decorators don't work properly
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  if (!customElements.get('octopus-consumption-card-editor')) {
    customElements.define('octopus-consumption-card-editor', OctopusConsumptionCardEditor);
  }
}
