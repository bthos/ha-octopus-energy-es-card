# Tests

This directory contains unit tests for the Octopus Energy España Consumption Card.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

- `octopus-consumption-card.test.ts` - Tests for the main card component
- `types.test.ts` - Tests for TypeScript type definitions
- `test-helpers.ts` - Helper functions and mocks for testing

## Test Coverage Goals

- **Current Target**: 80%+ code coverage
- **Focus Areas**:
  - Component initialization
  - Error handling
  - Data loading
  - Tariff comparison
  - Period navigation
  - Configuration validation

## Writing New Tests

When adding new features, ensure you:

1. Write tests for the new functionality
2. Test error cases
3. Test edge cases
4. Update test helpers if needed
5. Maintain or improve coverage percentage

## Test Framework

- **@web/test-runner** - Modern test runner for web components
- **@open-wc/testing** - Testing utilities for Lit components
- **Playwright** - Browser automation (via web-test-runner)
