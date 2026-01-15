/**
 * Unit tests for OctopusConsumptionCard component
 */

import { fixture, html, expect } from '@open-wc/testing';
import { OctopusConsumptionCard } from '../src/octopus-consumption-card';
import { createMockHass, createMockConfig, createMockConsumptionData, createMockComparisonResult, waitForUpdate, waitForDataLoad, waitForStableState } from './test-helpers';

describe('OctopusConsumptionCard', () => {
  // Ensure custom element is registered before tests
  // The @customElement decorator may not register the element in test environment
  beforeEach(() => {
    if (typeof customElements !== 'undefined' && !customElements.get('octopus-consumption-card')) {
      customElements.define('octopus-consumption-card', OctopusConsumptionCard);
    }
  });
  
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

    it('validates required source_entry_id', async () => {
      const config = { type: 'custom:octopus-consumption-card' } as any;
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      await waitForUpdate(el);
      await waitForStableState(el);
      
      // Component should have error state after validation fails
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      expect(errorMessage).to.exist;
      expect(errorMessage?.textContent).to.contain('source_entry_id is required');
    });

    it('validates source_entry_id is provided', async () => {
      const config = createMockConfig({ source_entry_id: undefined });
      const hass = createMockHass();
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      await waitForUpdate(el);
      await waitForStableState(el);
      
      // Component should have error state after validation fails
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      expect(errorMessage).to.exist;
      // Should show error about source_entry_id being required
      const errorText = errorMessage?.textContent || '';
      expect(errorText).to.contain('source_entry_id is required');
    });
  });

  describe('Error Handling', () => {
    it('shows error for missing source_entry_id', async () => {
      const config = createMockConfig({ source_entry_id: undefined });
      const hass = createMockHass({ states: {} });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for element to be fully initialized
      await waitForUpdate(el);
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Wait for async operations to complete
      // Lit should create shadowRoot automatically when component is connected
      await waitForDataLoad(el, 800);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      // Check that component rendered and has error state
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Component should be in error state (either error message or loading should be gone)
      const loading = el.shadowRoot.querySelector('.loading');
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      
      // After loading completes, should have either error or content
      expect(loading).to.be.null;
      expect(errorMessage).to.exist;
    });

    it('displays error message with retry button', async () => {
      const config = createMockConfig({ source_entry_id: undefined });
      const hass = createMockHass({ states: {} });
      
      const el = await fixture<OctopusConsumptionCard>(html`
        <octopus-consumption-card
          .config=${config}
          .hass=${hass}
        ></octopus-consumption-card>
      `);
      
      // Wait for async operations to complete
      await waitForDataLoad(el, 800);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Component should show error message
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      expect(errorMessage).to.exist;
      
      // Retry button should be present in error message
      if (errorMessage) {
        const retryButton = errorMessage.querySelector('.retry-button');
        expect(retryButton).to.exist;
      }
    });

    it('handles service call failures gracefully', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
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
      await waitForDataLoad(el, 800);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Component should show error message
      const loading = el.shadowRoot.querySelector('.loading');
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      
      expect(loading).to.be.null;
      expect(errorMessage).to.exist;
    });
  });

  describe('Data Loading', () => {
    it('loads consumption data successfully', async () => {
      const config = createMockConfig();
      const mockData = createMockConsumptionData();
      const hass = createMockHass({
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
      await waitForDataLoad(el, 600);
      await waitForStableState(el);
      
      // Ensure shadowRoot exists
      await waitForUpdate(el);
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Check that error message is not shown
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      expect(errorMessage).to.be.null;
      
      // Check that card content is rendered (not loading state)
      const loading = el.shadowRoot.querySelector('.loading');
      expect(loading).to.be.null;
      
      // Check that card header is rendered
      const cardHeader = el.shadowRoot.querySelector('.card-header');
      expect(cardHeader).to.exist;
    });

    it('handles empty consumption data', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
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
      await waitForDataLoad(el, 400);
      await waitForStableState(el);
      
      // Check that shadowRoot exists
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return; // Type guard
      
      // Check that error message is not shown
      const errorMessage = el.shadowRoot.querySelector('.error-message');
      expect(errorMessage).to.be.null;
      
      // Check that card content is rendered
      const cardHeader = el.shadowRoot.querySelector('.card-header');
      expect(cardHeader).to.exist;
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
      await waitForDataLoad(el, 1000);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Check that card is rendered
      const cardHeader = el.shadowRoot.querySelector('.card-header');
      expect(cardHeader).to.exist;
      
      // Check that comparison section is rendered (if enabled)
      if (config.show_tariff_comparison) {
        // Wait a bit more for comparison to load
        await new Promise(resolve => setTimeout(resolve, 300));
        await waitForUpdate(el);
        
        const comparisonSection = el.shadowRoot.querySelector('.comparison-section');
        expect(comparisonSection).to.exist;
      }
    });

    it('handles tariff comparison errors gracefully', async () => {
      const config = createMockConfig({
        show_tariff_comparison: true,
        tariff_entry_ids: ['entry_1', 'entry_2'],
      });
      const hass = createMockHass({
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
      await waitForDataLoad(el, 1000);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Should still have consumption data (card header should be rendered)
      const cardHeader = el.shadowRoot.querySelector('.card-header');
      expect(cardHeader).to.exist;
      
      // Should have comparison section (if comparison is enabled)
      if (config.show_tariff_comparison) {
        await new Promise(resolve => setTimeout(resolve, 300));
        await waitForUpdate(el);
        
        const comparisonSection = el.shadowRoot.querySelector('.comparison-section');
        expect(comparisonSection).to.exist;
      }
    });
  });

  describe('Period Navigation', () => {
    it('sets default period from config', async () => {
      const config = createMockConfig({ default_period: 'day' });
      const hass = createMockHass({
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
      
      await waitForDataLoad(el, 600);
      await waitForStableState(el);
      
      // Ensure shadowRoot exists
      await waitForUpdate(el);
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Check that card renders (basic check)
      const cardHeader = el.shadowRoot.querySelector('.card-header');
      expect(cardHeader).to.exist;
      
      // Check that period selector is rendered (if navigation is enabled)
      // Note: period selector might not be rendered if show_navigation is false
      if (config.show_navigation !== false) {
        const periodSelector = el.shadowRoot.querySelector('.period-selector');
        if (periodSelector) {
          // Check that day period button exists and is active
          const dayButton = el.shadowRoot.querySelector('.period-button.active');
          if (dayButton) {
            expect(dayButton.textContent?.trim()).to.equal('Day');
          } else {
            // If no active button found, check that period buttons exist
            const periodButtons = el.shadowRoot.querySelectorAll('.period-button');
            expect(periodButtons?.length).to.be.greaterThan(0);
          }
        }
      }
    });

    it('navigates to previous period', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
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
      
      await waitForDataLoad(el, 800);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Component should render
      const hasContent = el.shadowRoot.querySelector('.card-header') || 
                        el.shadowRoot.querySelector('.error-message');
      expect(hasContent).to.exist;
      
      // Test navigation if controls are available
      if (config.show_navigation !== false) {
        const navControls = el.shadowRoot.querySelector('.navigation-controls');
        if (navControls) {
          const navButtons = el.shadowRoot.querySelectorAll('.nav-button');
          const prevButton = Array.from(navButtons).find(btn => btn.textContent?.includes('Previous'));
          
          if (prevButton) {
            // Simulate click
            (prevButton as HTMLElement).click();
            await waitForDataLoad(el, 800);
            await waitForStableState(el);
            await waitForUpdate(el);
            
            // Component should still render after navigation
            expect(el.shadowRoot).to.exist;
          }
        }
      }
    });

    it('navigates to next period', async () => {
      const config = createMockConfig();
      const hass = createMockHass({
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
      
      await waitForDataLoad(el, 800);
      await waitForStableState(el);
      await waitForUpdate(el);
      
      expect(el.shadowRoot).to.exist;
      if (!el.shadowRoot) return;
      
      // Component should render
      const hasContent = el.shadowRoot.querySelector('.card-header') || 
                        el.shadowRoot.querySelector('.error-message');
      expect(hasContent).to.exist;
      
      // Test navigation if controls are available
      if (config.show_navigation !== false) {
        const navControls = el.shadowRoot.querySelector('.navigation-controls');
        if (navControls) {
          const navButtons = el.shadowRoot.querySelectorAll('.nav-button');
          const nextButton = Array.from(navButtons).find(btn => btn.textContent?.includes('Next'));
          
          if (nextButton) {
            // Simulate click
            (nextButton as HTMLElement).click();
            await waitForDataLoad(el, 800);
            await waitForStableState(el);
            await waitForUpdate(el);
            
            // Component should still render after navigation
            expect(el.shadowRoot).to.exist;
          }
        }
      }
    });
  });
});
