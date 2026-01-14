/**
 * Octopus Energy España Consumption Card Editor
 * 
 * Visual editor component for configuring the consumption card
 */

import { LitElement, html, css, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
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

@customElement("octopus-consumption-card-editor")
export class OctopusConsumptionCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public config?: OctopusConsumptionCardConfig;

  @state() private _config: OctopusConsumptionCardConfig = {
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

  @state() private _tariffEntryIds: string[] = [];
  @state() private _newTariffEntryId: string = "";
  @state() private _language: string = "en";

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
    this._config = { ...config };
    this._tariffEntryIds = config.tariff_entry_ids ? [...config.tariff_entry_ids] : [];
  }

  protected firstUpdated(): void {
    if (this.config) {
      this.setConfig(this.config);
    }
    if (this.hass) {
      this._language = this.hass.language || "en";
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("config") && this.config) {
      this.setConfig(this.config);
    }
    if (changedProperties.has("hass") && this.hass) {
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
    }

    if (newConfig.show_cost_on_chart === false) {
      newConfig.selected_tariff_for_cost = undefined;
    }

    this._config = newConfig;
    this._tariffEntryIds = newConfig.tariff_entry_ids || [];
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

  private _addTariffEntry(): void {
    if (!this._newTariffEntryId.trim()) {
      return;
    }

    const newIds = [...this._tariffEntryIds, this._newTariffEntryId.trim()];
    this._tariffEntryIds = newIds;
    this._config = {
      ...this._config,
      tariff_entry_ids: newIds,
    };
    this._newTariffEntryId = "";
    this._fireConfigChanged();
  }

  private _removeTariffEntry(index: number): void {
    const newIds = this._tariffEntryIds.filter((_, i) => i !== index);
    this._tariffEntryIds = newIds;
    this._config = {
      ...this._config,
      tariff_entry_ids: newIds,
    };
    this._fireConfigChanged();
  }

  private _validateEntity(entity: string): string | null {
    if (!entity) {
      return localize("editor.entity_required", this._language);
    }
    if (!entity.startsWith("sensor.octopus_energy_es_")) {
      return localize("editor.entity_invalid", this._language);
    }
    return null;
  }

  private _buildSchema(): any[] {
    const schema: any[] = [
      {
        name: "entity",
        required: true,
        selector: {
          entity: {
            domain: "sensor",
            integration: "octopus_energy_es",
          },
        },
      },
      {
        name: "title",
        selector: {
          text: {
            type: "text",
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

    // Add cost-related fields if tariff comparison is enabled
    if (this._config.show_tariff_comparison) {
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
            text: {
              type: "text",
            },
          },
        });
      }
    }

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

    const entityError = this._validateEntity(this._config.entity || "");
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

        ${entityError ? html`<div class="error" style="margin-top: -12px; margin-bottom: 16px;">${entityError}</div>` : ""}

        <!-- Tariff Entry Management (custom UI) -->
        ${this._config.show_tariff_comparison ? html`
          <div class="section">
            <div class="section-title">${localize("editor.tariff_entry_ids_label", this._language)}</div>
            <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
              ${localize("editor.tariff_entry_ids_helper", this._language)}
            </div>
            <div class="tariff-entry-list">
              ${this._tariffEntryIds.map((id, index) => html`
                <div class="tariff-entry-item">
                  <ha-textfield
                    .value=${id}
                    @input=${(ev: Event) => {
                      const target = ev.target as any;
                      const newIds = [...this._tariffEntryIds];
                      newIds[index] = target.value;
                      this._tariffEntryIds = newIds;
                      this._config = {
                        ...this._config,
                        tariff_entry_ids: newIds,
                      };
                      this._fireConfigChanged();
                    }}
                  ></ha-textfield>
                  <ha-icon-button
                    .label=${"Remove"}
                    @click=${() => this._removeTariffEntry(index)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                </div>
              `)}
            </div>
            <div class="add-tariff-entry">
              <ha-textfield
                .value=${this._newTariffEntryId}
                .label=${"New Tariff Entry ID"}
                @input=${(ev: Event) => {
                  this._newTariffEntryId = (ev.target as any).value;
                }}
                @keydown=${(ev: KeyboardEvent) => {
                  if (ev.key === "Enter") {
                    this._addTariffEntry();
                  }
                }}
              ></ha-textfield>
              <ha-icon-button
                .label=${"Add"}
                @click=${this._addTariffEntry}
              >
                <ha-icon icon="mdi:plus"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
        ` : ""}
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
