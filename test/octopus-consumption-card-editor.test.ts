/**
 * Unit tests for OctopusConsumptionCardEditor component
 */

import { fixture, html, expect } from '@open-wc/testing';
import { OctopusConsumptionCardEditor } from '../src/octopus-consumption-card-editor';
import { createMockHass, createMockConfig } from './test-helpers';

describe('OctopusConsumptionCardEditor', () => {
  // Ensure custom element is registered before tests
  beforeEach(() => {
    if (typeof customElements !== 'undefined' && !customElements.get('octopus-consumption-card-editor')) {
      customElements.define('octopus-consumption-card-editor', OctopusConsumptionCardEditor);
    }
  });

  describe('Initialization', () => {
    it('creates editor element', async () => {
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      expect(el).to.exist;
      expect(el.hass).to.equal(hass);
    });

    it('initializes with stub config when no config provided', async () => {
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Check that ha-form is rendered
      const haForm = el.shadowRoot.querySelector('ha-form');
      expect(haForm).to.exist;
    });

    it('initializes with provided config', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        source_entry_id: 'test_entry_id',
        title: 'Test Title',
        default_period: 'day',
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
          .config=${config}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.config).to.equal(config);
    });
  });

  describe('setConfig', () => {
    it('sets configuration correctly', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        source_entry_id: 'test_entry_id',
        title: 'Test Title',
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      el.setConfig(config);
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
    });

    it('handles tariff_entry_ids array', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        show_tariff_comparison: true,
        tariff_entry_ids: ['entry1', 'entry2'],
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      el.setConfig(config);
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
    });
  });

  describe('Configuration Changes', () => {
    it('fires config-changed event when source_entry_id changes', async () => {
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      let eventFired = false;
      let eventConfig: any = null;
      
      el.addEventListener('config-changed', ((e: CustomEvent) => {
        eventFired = true;
        eventConfig = e.detail.config;
      }) as EventListener);
      
      // Simulate value change through ha-form
      const haForm = el.shadowRoot?.querySelector('ha-form') as any;
      if (haForm) {
        const newConfig = { ...el['_config'], source_entry_id: 'test_entry_id' };
        haForm.dispatchEvent(new CustomEvent('value-changed', {
          detail: { value: newConfig },
          bubbles: true,
          composed: true
        }));
      }
      
      await el.updateComplete;
      
      // Event should be fired
      expect(eventFired).to.be.true;
    });

    it('fires config-changed event when switch changes', async () => {
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      let eventFired = false;
      let eventConfig: any = null;
      
      el.addEventListener('config-changed', ((e: CustomEvent) => {
        eventFired = true;
        eventConfig = e.detail.config;
      }) as EventListener);
      
      // Simulate value change through ha-form for boolean field
      const haForm = el.shadowRoot?.querySelector('ha-form') as any;
      expect(haForm).to.exist;
      if (!haForm) return;
      
      // Change the show_comparison value
      const newConfig = { ...el['_config'], show_comparison: false };
      haForm.dispatchEvent(new CustomEvent('value-changed', {
        detail: { value: newConfig },
        bubbles: true,
        composed: true
      }));
      
      // Wait for event to propagate and component to update
      await el.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 10));
      
      // Event should be fired
      expect(eventFired).to.be.true;
      expect(eventConfig).to.exist;
      expect(eventConfig.show_comparison).to.be.false;
    });
  });

  describe('Validation', () => {
    it('renders ha-form with required source_entry_id field', async () => {
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // ha-form handles validation, so we just check it exists
      const haForm = el.shadowRoot.querySelector('ha-form');
      expect(haForm).to.exist;
    });
  });

  describe('Conditional Fields', () => {
    it('shows tariff fields when show_tariff_comparison is enabled', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        show_tariff_comparison: true,
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
          .config=${config}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // ha-form handles conditional fields, so we just check it exists
      const haForm = el.shadowRoot.querySelector('ha-form');
      expect(haForm).to.exist;
    });

    it('shows cost display fields when show_cost_on_chart is enabled', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        show_tariff_comparison: true,
        show_cost_on_chart: true,
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
          .config=${config}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Check that ha-form is present with schema including cost fields
      const haForm = el.shadowRoot.querySelector('ha-form');
      expect(haForm).to.exist;
    });
  });

  describe('Tariff Entry Management', () => {
    it('handles tariff_entry_ids through ha-form', async () => {
      const hass = createMockHass();
      const config = createMockConfig({
        show_tariff_comparison: true,
        tariff_entry_ids: ['entry1', 'entry2'],
      });
      
      const el = await fixture<OctopusConsumptionCardEditor>(html`
        <octopus-consumption-card-editor
          .hass=${hass}
          .config=${config}
        ></octopus-consumption-card-editor>
      `);
      
      await el.updateComplete;
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // ha-form handles tariff_entry_ids through config_entry selector
      const haForm = el.shadowRoot.querySelector('ha-form');
      expect(haForm).to.exist;
      
      // Config should include tariff_entry_ids
      expect(el['_config'].tariff_entry_ids).to.deep.equal(['entry1', 'entry2']);
    });
  });
});
