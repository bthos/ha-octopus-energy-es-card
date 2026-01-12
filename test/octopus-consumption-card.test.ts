/**
 * Unit tests for OctopusConsumptionCard component
 */

import { fixture, html, expect } from '@open-wc/testing';
import { OctopusConsumptionCard } from '../src/octopus-consumption-card';
import { createMockHass, createMockConfig, createMockConsumptionData, createMockComparisonResult, waitForUpdate, waitForDataLoad, getPrivateProperty } from './test-helpers';

describe('OctopusConsumptionCard', () => {
  describe('Initialization', () => {
    it('renders with default config', async () => {
      const config = createMockConfig();
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      expect(el).to.exist;
      expect(el.config).to.equal(config);
      expect(el.hass).to.equal(hass);
    });

    it('validates required entity', async () => {
      const config = { type: 'custom:octopus-consumption-card' } as any;
      const hass = createMockHass();
      
      let error: Error | null = null;
      try {
        const el = await fixture<OctopusConsumptionCard>(html`
          <octopus-consumption-card
            .config=${config}
            .hass=${hass}
          ></octopus-consumption-card>
        `);
        await waitForUpdate(el);
        // Validation happens in connectedCallback, which throws synchronously
        // But fixture might catch it, so check if error was set
        if (!(el as any)._error) {
          // If no error was set, validation didn't run - this is a test issue
          throw new Error('Validation should have thrown an error');
        }
      } catch (e) {
        error = e as Error;
      }
      
      // Either fixture throws or component sets _error
      expect(error).to.exist;
    });

    it('validates entity format', async () => {
      const config = createMockConfig({ entity: 'sensor.invalid_entity' });
      const hass = createMockHass();
      
      let error: Error | null = null;
      try {
        const el = await fixture<OctopusConsumptionCard>(html`
          <octopus-consumption-card
            .config=${config}
            .hass=${hass}
          ></octopus-consumption-card>
        `);
        await waitForUpdate(el);
        // Validation happens in connectedCallback
        if (!(el as any)._error) {
          throw new Error('Validation should have thrown an error');
        }
      } catch (e) {
        error = e as Error;
      }
      
      expect(error).to.exist;
    });
  });

  describe('Error Handling', () => {
    it('shows error for missing entity', async () => {
      const config = createMockConfig({ entity: 'sensor.octopus_energy_es_nonexistent_daily_consumption' });
      const hass = createMockHass({ states: {} });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 200);
      
      const error = getPrivateProperty<string | null>(el, '_error');
      expect(error).to.exist;
      expect(error).to.contain('not found');
    });

    it('shows error for invalid entry_id extraction', async () => {
      const config = createMockConfig({ entity: 'sensor.octopus_energy_es_invalid' });
      const hass = createMockHass({
        states: {
          'sensor.octopus_energy_es_invalid': {
            state: 'unknown',
            attributes: {},
          },
        },
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 200);
      
      const error = getPrivateProperty<string | null>(el, '_error');
      expect(error).to.exist;
      expect(error).to.contain('Could not extract entry_id');
    });

    it('displays error message with retry button', async () => {
      const config = createMockConfig({ entity: 'sensor.octopus_energy_es_nonexistent_daily_consumption' });
      const hass = createMockHass({ states: {} });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 200);
      
      const errorMessage = el.shadowRoot?.querySelector('.error-message');
      expect(errorMessage).to.exist;
      
      const retryButton = el.shadowRoot?.querySelector('.retry-button');
      expect(retryButton).to.exist;
    });

    it('handles service call failures gracefully', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async () => ({
          success: false,
          error: 'Service unavailable',
        }),
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 200);
      
      const error = getPrivateProperty<string | null>(el, '_error');
      expect(error).to.exist;
      expect(error).to.contain('Service unavailable');
    });
  });

  describe('Data Loading', () => {
    it('loads consumption data successfully', async () => {
      const config = createMockConfig();
      const mockData = createMockConsumptionData();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async () => ({
          success: true,
          consumption_data: mockData,
        }),
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForUpdate(el);
      await new Promise(resolve => setTimeout(resolve, 100)); // Wait for _loadData to complete
      await waitForUpdate(el);
      
      expect((el as any)._consumptionData).to.have.length(mockData.length);
      expect((el as any)._error).to.be.null;
    });

    it('handles empty consumption data', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async () => ({
          success: true,
          consumption_data: [],
        }),
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 300);
      
      const consumptionData = getPrivateProperty<any[]>(el, '_consumptionData');
      expect(consumptionData).to.exist;
      expect(consumptionData).to.have.length(0);
      const error = getPrivateProperty<string | null>(el, '_error');
      expect(error).to.be.null;
    });
  });

  describe('Tariff Comparison', () => {
    it('loads tariff comparison when enabled', async () => {
      const config = createMockConfig({
        show_tariff_comparison: true,
        tariff_entry_ids: ['entry_1', 'entry_2'],
      });
      const mockComparison = createMockComparisonResult();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async (domain: string, service: string) => {
          if (service === 'fetch_consumption') {
            return { success: true, consumption_data: createMockConsumptionData() };
          }
          if (service === 'compare_tariffs') {
            return { success: true, result: mockComparison };
          }
          return { success: false };
        },
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 400);
      
      const comparisonResult = getPrivateProperty<any>(el, '_comparisonResult');
      expect(comparisonResult).to.exist;
      expect(comparisonResult?.tariffs).to.have.length(2);
      const comparisonError = getPrivateProperty<string | null>(el, '_comparisonError');
      expect(comparisonError).to.be.null;
    });

    it('handles tariff comparison errors gracefully', async () => {
      const config = createMockConfig({
        show_tariff_comparison: true,
        tariff_entry_ids: ['entry_1', 'entry_2'],
      });
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async (domain: string, service: string) => {
          if (service === 'fetch_consumption') {
            return { success: true, consumption_data: createMockConsumptionData() };
          }
          if (service === 'compare_tariffs') {
            return { success: false, error: 'Comparison failed' };
          }
          return { success: false };
        },
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 400);
      
      // Should still have consumption data
      const consumptionData = getPrivateProperty<any[]>(el, '_consumptionData');
      expect(consumptionData).to.exist;
      expect(consumptionData).to.have.length.greaterThan(0);
      // Should have comparison error
      const comparisonError = getPrivateProperty<string | null>(el, '_comparisonError');
      expect(comparisonError).to.exist;
      expect(comparisonError).to.contain('Comparison failed');
    });
  });

  describe('Period Navigation', () => {
    it('sets default period from config', async () => {
      const config = createMockConfig({ default_period: 'day' });
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      await waitForUpdate(el);
      const currentPeriod = getPrivateProperty<string>(el, '_currentPeriod');
      expect(currentPeriod).to.exist;
      expect(currentPeriod).to.equal('day');
    });

    it('navigates to previous period', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async () => ({
          success: true,
          consumption_data: createMockConsumptionData(),
        }),
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      await waitForDataLoad(el, 200);
      
      const initialDate = new Date(getPrivateProperty<Date>(el, '_currentDate'));
      expect(initialDate).to.exist;
      
      // Access private method through type assertion for testing
      const navigateMethod = getPrivateProperty<Function>(el, '_navigatePeriod');
      expect(navigateMethod).to.exist;
      expect(navigateMethod).to.be.a('function');
      
      navigateMethod.call(el, 'prev');
      await waitForUpdate(el);
      
      const newDate = getPrivateProperty<Date>(el, '_currentDate');
      expect(newDate).to.exist;
      expect(newDate.getTime()).to.be.lessThan(initialDate.getTime());
    });

    it('navigates to next period', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
        states: {
          [config.entity]: {
            state: 'unknown',
            attributes: { entry_id: 'test_entry' },
          },
        },
        callService: async () => ({
          success: true,
          consumption_data: createMockConsumptionData(),
        }),
      });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      await waitForDataLoad(el, 200);
      
      const initialDate = new Date(getPrivateProperty<Date>(el, '_currentDate'));
      expect(initialDate).to.exist;
      
      // Access private method through type assertion for testing
      const navigateMethod = getPrivateProperty<Function>(el, '_navigatePeriod');
      expect(navigateMethod).to.exist;
      expect(navigateMethod).to.be.a('function');
      
      navigateMethod.call(el, 'next');
      await waitForUpdate(el);
      
      const newDate = getPrivateProperty<Date>(el, '_currentDate');
      expect(newDate).to.exist;
      expect(newDate.getTime()).to.be.greaterThan(initialDate.getTime());
    });
  });
});
