/**
 * Octopus Energy España Consumption Card Editor
 * 
 * Visual editor component for configuring the consumption card
 */

import { LitElement, html, css, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { OctopusConsumptionCardConfig } from "./types";

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
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("config") && this.config) {
      this.setConfig(this.config);
    }
  }

  private _valueChanged(ev: Event): void {
    const target = ev.target as any;
    const value = target.value;
    const field = target.configValue as keyof OctopusConsumptionCardConfig;

    if (this._config[field] === value) {
      return;
    }

    const newConfig = {
      ...this._config,
      [field]: value,
    } as OctopusConsumptionCardConfig;

    this._config = newConfig;
    this._fireConfigChanged();
  }

  private _switchChanged(ev: Event): void {
    const target = ev.target as any;
    const checked = target.checked;
    const field = target.configValue as keyof OctopusConsumptionCardConfig;

    if (this._config[field] === checked) {
      return;
    }

    const newConfig = {
      ...this._config,
      [field]: checked,
    } as OctopusConsumptionCardConfig;

    // Handle conditional fields
    if (field === "show_tariff_comparison" && !checked) {
      newConfig.show_cost_on_chart = false;
      newConfig.selected_tariff_for_cost = undefined;
    }

    if (field === "show_cost_on_chart" && !checked) {
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
      return "Entity is required";
    }
    if (!entity.startsWith("sensor.octopus_energy_es_")) {
      return "Entity must be an Octopus Energy España sensor (sensor.octopus_energy_es_*)";
    }
    return null;
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html`<div class="card-config">Loading...</div>`;
    }

    const entityError = this._validateEntity(this._config.entity || "");

    return html`
      <div class="card-config">
        <!-- Basic Settings -->
        <div class="section">
          <div class="section-title">Basic Settings</div>
          
          <div class="form-group">
            <label>Entity *</label>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.entity || ""}
              .configValue=${"entity"}
              .includeDomains=${["sensor"]}
              .entityFilter=${(entity: any) => 
                entity.entity_id.startsWith("sensor.octopus_energy_es_")
              }
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
            ${entityError ? html`<div class="error">${entityError}</div>` : ""}
          </div>

          <div class="form-group">
            <label>Title</label>
            <ha-textfield
              .value=${this._config.title || ""}
              .configValue=${"title"}
              @input=${this._valueChanged}
              placeholder="Consumption"
            ></ha-textfield>
          </div>
        </div>

        <!-- Display Options -->
        <div class="section">
          <div class="section-title">Display Options</div>
          
          <div class="switch-row">
            <label>Show Comparison</label>
            <ha-switch
              .checked=${this._config.show_comparison !== false}
              .configValue=${"show_comparison"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>

          <div class="form-group">
            <label>Default Period</label>
            <ha-select
              .value=${this._config.default_period || "week"}
              .configValue=${"default_period"}
              @selected=${this._valueChanged}
            >
              <mwc-list-item value="day">Day</mwc-list-item>
              <mwc-list-item value="week">Week</mwc-list-item>
              <mwc-list-item value="month">Month</mwc-list-item>
            </ha-select>
          </div>

          <div class="form-group">
            <label>Chart Type</label>
            <ha-select
              .value=${this._config.chart_type || "line"}
              .configValue=${"chart_type"}
              @selected=${this._valueChanged}
            >
              <mwc-list-item value="line">Line</mwc-list-item>
              <mwc-list-item value="bar">Bar</mwc-list-item>
            </ha-select>
          </div>

          <div class="switch-row">
            <label>Show Navigation</label>
            <ha-switch
              .checked=${this._config.show_navigation !== false}
              .configValue=${"show_navigation"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        </div>

        <!-- Tariff Comparison -->
        <div class="section">
          <div class="section-title">Tariff Comparison</div>
          
          <div class="switch-row">
            <label>Show Tariff Comparison</label>
            <ha-switch
              .checked=${this._config.show_tariff_comparison === true}
              .configValue=${"show_tariff_comparison"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>

          ${this._config.show_tariff_comparison ? html`
            <div class="form-group">
              <label>Tariff Entry IDs</label>
              <div class="tariff-entry-list">
                ${this._tariffEntryIds.map((id, index) => html`
                  <div class="tariff-entry-item">
                    <ha-textfield
                      .value=${id}
                      .configValue=${`tariff_entry_ids.${index}`}
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

        <!-- Cost Display -->
        ${this._config.show_tariff_comparison ? html`
          <div class="section">
            <div class="section-title">Cost Display</div>
            
            <div class="switch-row">
              <label>Show Cost on Chart</label>
              <ha-switch
                .checked=${this._config.show_cost_on_chart === true}
                .configValue=${"show_cost_on_chart"}
                @change=${this._switchChanged}
              ></ha-switch>
            </div>

            ${this._config.show_cost_on_chart ? html`
              <div class="form-group">
                <label>Selected Tariff for Cost</label>
                <ha-textfield
                  .value=${this._config.selected_tariff_for_cost || ""}
                  .configValue=${"selected_tariff_for_cost"}
                  @input=${this._valueChanged}
                  placeholder="tariff_entry_id"
                ></ha-textfield>
              </div>
            ` : ""}
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
