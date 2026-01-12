/**
 * Test helpers for Octopus Energy España Consumption Card tests
 */

import { html, TemplateResult } from 'lit';

/**
 * Mock Home Assistant object for testing
 */
export function createMockHass(overrides: Partial<any> = {}): any {
  const mockCallService = overrides.callService || (async (domain: string, service: string, serviceData?: Record<string, any>) => {
    // Default mock implementation - can be overridden
    return { success: true, ...overrides.callServiceResponse };
  });
  
  return {
    states: overrides.states || {},
    callService: mockCallService,
    ...overrides,
  };
}

/**
 * Mock configuration for testing
 */
export function createMockConfig(overrides: Partial<any> = {}): any {
  return {
    type: 'custom:octopus-consumption-card',
    entity: 'sensor.octopus_energy_es_test_entry_daily_consumption',
    title: 'Test Card',
    show_comparison: true,
    default_period: 'week',
    chart_type: 'line',
    show_tariff_comparison: false,
    tariff_entry_ids: [],
    show_navigation: true,
    ...overrides,
  };
}

/**
 * Mock consumption data for testing
 */
export function createMockConsumptionData(): any[] {
  return [
    {
      start_time: '2026-01-01T00:00:00Z',
      end_time: '2026-01-01T01:00:00Z',
      consumption: 1.5,
      cost: 0.15,
    },
    {
      start_time: '2026-01-01T01:00:00Z',
      end_time: '2026-01-01T02:00:00Z',
      consumption: 2.0,
      cost: 0.20,
    },
  ];
}

/**
 * Mock comparison result for testing
 */
export function createMockComparisonResult(): any {
  return {
    tariffs: [
      {
        entry_id: 'entry_1',
        name: 'Test Tariff 1',
        total_cost: 50.0,
        energy_cost: 40.0,
        power_cost: 5.0,
        management_fee: 3.0,
        taxes: 2.0,
        period_breakdown: {
          p1_consumption: 10.0,
          p2_consumption: 15.0,
          p3_consumption: 5.0,
          p1_percentage: 33.3,
          p2_percentage: 50.0,
          p3_percentage: 16.7,
        },
      },
      {
        entry_id: 'entry_2',
        name: 'Test Tariff 2',
        total_cost: 45.0,
        energy_cost: 35.0,
        power_cost: 5.0,
        management_fee: 3.0,
        taxes: 2.0,
        period_breakdown: {
          p1_consumption: 8.0,
          p2_consumption: 12.0,
          p3_consumption: 10.0,
          p1_percentage: 26.7,
          p2_percentage: 40.0,
          p3_percentage: 33.3,
        },
      },
    ],
    best_tariff: {
      entry_id: 'entry_2',
      name: 'Test Tariff 2',
    },
    savings: {
      amount: 5.0,
      percentage: 10.0,
    },
  };
}

/**
 * Wait for element to update (for Lit components)
 */
export async function waitForUpdate(element: any): Promise<void> {
  await element.updateComplete;
  // Small delay to ensure render is complete
  await new Promise(resolve => setTimeout(resolve, 0));
}

/**
 * Wait for async data loading to complete
 */
export async function waitForDataLoad(element: any, timeout: number = 500): Promise<void> {
  // Wait for initial render
  await waitForUpdate(element);
  
  // If shadowRoot doesn't exist, create it manually and trigger render
  if (!element.shadowRoot && element.isConnected) {
    // Create shadowRoot manually
    const shadowRoot = element.attachShadow({ mode: 'open' });
    // Set renderRoot so Lit knows about it
    (element as any).renderRoot = shadowRoot;
    // Enable updating
    if (typeof (element as any).enableUpdating === 'function') {
      (element as any).enableUpdating(true);
    }
    // Set isUpdatePending to false to allow updates
    (element as any).isUpdatePending = false;
    
    // Try to find render method through prototype chain
    let renderMethod: any = null;
    let proto = Object.getPrototypeOf(element);
    while (proto && proto !== Object.prototype) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, 'render');
      if (descriptor && typeof descriptor.value === 'function') {
        renderMethod = descriptor.value;
        break;
      }
      proto = Object.getPrototypeOf(proto);
    }
    
    // Call render directly and manually add to shadowRoot
    if (renderMethod) {
      try {
        const renderResult = renderMethod.call(element);
        if (renderResult && shadowRoot) {
          const { render } = await import('lit');
          render(renderResult, shadowRoot);
        }
      } catch (e) {
        // Ignore render errors
      }
    }
    await waitForUpdate(element);
  }
  
  // Wait for async operations
  await new Promise(resolve => setTimeout(resolve, timeout));
  
  // Wait for updates after async operations
  await waitForUpdate(element);
  
  // Additional wait to ensure shadow DOM is ready
  await new Promise(resolve => setTimeout(resolve, 100));
}

/**
 * Wait for element to be in a stable state (not loading)
 */
export async function waitForStableState(element: any, maxAttempts: number = 20): Promise<void> {
  // Wait for shadowRoot to be created
  for (let i = 0; i < maxAttempts; i++) {
    await waitForUpdate(element);
    if (element.shadowRoot) {
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  
  // Wait for loading to complete and component to be in stable state
  for (let i = 0; i < maxAttempts; i++) {
    await waitForUpdate(element);
    if (element.shadowRoot) {
      const loading = element.shadowRoot.querySelector('.loading');
      const errorMessage = element.shadowRoot.querySelector('.error-message');
      const cardHeader = element.shadowRoot.querySelector('.card-header');
      
      // Component is stable if it's not loading (either error or content is shown)
      if (!loading && (errorMessage || cardHeader)) {
        break;
      }
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

/**
 * Get private property from element (for testing)
 * Uses more aggressive type casting to access private properties
 */
export function getPrivateProperty<T>(element: any, property: string): T {
  // Access through bracket notation with any type
  const obj = element as { [key: string]: any };
  return obj[property] as T;
}
