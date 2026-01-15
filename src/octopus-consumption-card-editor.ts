/**
 * Octopus Energy España Consumption Card Editor
 * 
 * Visual editor component for configuring the consumption card
 */

import { LitElement, html, css, PropertyValues, TemplateResult } from "lit";

// Disable Lit dev mode warnings (only available in dev builds)
// This will be tree-shaken out in production builds
if (typeof LitElement !== 'undefined' && (LitElement as any).disableWarning) {
  (LitElement as any).disableWarning('change-in-update');
}
import { property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig } from "./types";
import { localize, computeLabel, computeHelper } from "./localization";

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
    show_comparison: true,
    default_period: "week",
    chart_type: "line",
    show_tariff_comparison: false,
    tariff_entry_ids: [],
    show_cost_on_chart: false,
    show_navigation: true,
  };

  private _language: string = "en";

  static styles = css`
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

    .error {
      color: var(--error-color);
      font-size: 12px;
      margin-top: 4px;
    }
  `;

  setConfig(config: OctopusConsumptionCardConfig): void {
    // Only update if config actually changed to prevent unnecessary updates
    const configStr = JSON.stringify(this._config);
    const newConfigStr = JSON.stringify(config);
    if (configStr !== newConfigStr) {
      this._config = { ...config };
    }
  }

  protected willUpdate(changedProperties: PropertyValues): void {
    // Sync config before update to prevent update cycle
    if (changedProperties.has("config") && this.config) {
      const configStr = JSON.stringify(this._config);
      const newConfigStr = JSON.stringify(this.config);
      if (configStr !== newConfigStr) {
        this._config = { ...this.config };
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
      const configStr = JSON.stringify(this._config);
      const newConfigStr = JSON.stringify(this.config);
      if (configStr !== newConfigStr) {
        this._config = { ...this.config };
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
    
    // Handle conditional fields
    if (newConfig.show_tariff_comparison === false) {
      newConfig.show_cost_on_chart = false;
      newConfig.selected_tariff_for_cost = undefined;
      newConfig.tariff_entry_ids = undefined;
    }

    if (newConfig.show_cost_on_chart === false) {
      newConfig.selected_tariff_for_cost = undefined;
    }

    this._config = newConfig;
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
    const schema: any[] = [
      {
        name: "source_entry_id",
        required: true,
        selector: {
          config_entry: {
            integration: "octopus_energy_es",
          },
        },
      },
      {
        name: "show_comparison",
        selector: {
          boolean: {},
        },
      },
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
        name: "show_tariff_comparison",
        selector: {
          boolean: {},
        },
      },
    ];

    // Add tariff comparison section if enabled
    if (this._config.show_tariff_comparison) {
      schema.push({
        name: "tariff_entry_ids",
        selector: {
          config_entry: {
            integration: "octopus_energy_es",
            multiple: true,
          },
        },
      });

      schema.push({
        name: "show_cost_on_chart",
        selector: {
          boolean: {},
        },
      });

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
    }

    // Optional sensor override
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

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div class="card-config">Loading...</div>`;
    }

    const schema = this._buildSchema();

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
