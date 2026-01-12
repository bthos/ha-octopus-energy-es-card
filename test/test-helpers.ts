/**
 * Test helpers for Octopus Energy España Consumption Card tests
 */

import { html, TemplateResult } from 'lit';

/**
 * Mock Home Assistant object for testing
 */
export function createMockHass(overrides: Partial<any> = {}): any {
  return {
    states: {},
    callService: async (domain: string, service: string, serviceData?: Record<string, any>) => {
      // Default mock implementation - can be overridden
      return { success: true, ...overrides.callServiceResponse };
    },
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
  await waitForUpdate(element);
  await new Promise(resolve => setTimeout(resolve, timeout));
  await waitForUpdate(element);
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
