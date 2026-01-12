/**
 * Test helpers for Octopus Energy España Consumption Card tests
 */
/**
 * Mock Home Assistant object for testing
 */
export declare function createMockHass(overrides?: Partial<any>): any;
/**
 * Mock configuration for testing
 */
export declare function createMockConfig(overrides?: Partial<any>): any;
/**
 * Mock consumption data for testing
 */
export declare function createMockConsumptionData(): any[];
/**
 * Mock comparison result for testing
 */
export declare function createMockComparisonResult(): any;
/**
 * Wait for element to update (for Lit components)
 */
export declare function waitForUpdate(element: any): Promise<void>;
/**
 * Wait for async data loading to complete
 */
export declare function waitForDataLoad(element: any, timeout?: number): Promise<void>;
/**
 * Wait for element to be in a stable state (not loading)
 */
export declare function waitForStableState(element: any, maxAttempts?: number): Promise<void>;
/**
 * Get private property from element (for testing)
 * Uses more aggressive type casting to access private properties
 */
export declare function getPrivateProperty<T>(element: any, property: string): T;
//# sourceMappingURL=test-helpers.d.ts.map