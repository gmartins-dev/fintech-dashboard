# Testing Documentation

This document outlines the testing strategy and setup for the Fintech Dashboard project.

## Testing Stack

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright

## Project Structure

```
src/
├── components/
│   └── __tests__/         # Component tests
│       ├── *.test.tsx     # Unit tests
│       └── *.integration.test.tsx
├── lib/
│   └── __tests__/         # Utility tests
├── test/                  # Test utilities
└── e2e/                   # E2E test specs
```

## Test Types

### Unit Tests (`*.test.tsx`)
- Component rendering tests
- Utility function tests
- Mock external dependencies
- Example: `Input.test.tsx`, `utils.test.ts`

### Integration Tests (`*.integration.test.tsx`)
- Component interaction tests
- Data flow tests
- Minimal mocking
- Example: `PortfolioDonut.integration.test.tsx`

### E2E Tests (`e2e/*.spec.ts`)
- Full user flow tests
- Real browser testing
- Example: `dashboard.spec.ts`, `auth.spec.ts`

## Running Tests

```bash
# Run all tests
npm test

# Watch mode development
npm run test:watch

# Run specific types
npm run test:unit
npm run test:integration
npm run test:e2e

# Coverage report
npm run test:coverage
```

## Test Setup

### Test Utilities
```typescript
// Example from src/test/test-utils.tsx
import { render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'

function render(ui: ReactElement) {
  return rtlRender(
    <div style={{ width: '800px', height: '600px' }}>
      {ui}
    </div>
  )
}

export * from '@testing-library/react'
export { render }
```

### Jest Configuration
```javascript
// From jest.config.js
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/__tests__/**/*.integration.test.[jt]s?(x)'
  ]
}
```

### Playwright Configuration
```typescript
// From playwright.config.ts
export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  }
})
```

## Best Practices

1. Follow AAA pattern (Arrange, Act, Assert)
2. Mock external dependencies appropriately
3. Use meaningful test descriptions
4. Test error states and edge cases
5. Keep tests focused and atomic

## Coverage Requirements

- Overall coverage: 80%
- Utility functions: 100%
- UI components: 90%
- Critical paths: E2E coverage

## Continuous Integration

Tests run on:
- Pull requests
- Main branch commits
- Release tags

### CI Pipeline
1. Setup environment
2. Install dependencies
3. Lint code
4. Run unit/integration tests
5. Run E2E tests
6. Generate coverage report

## Debugging

### Jest Tests
```bash
# Debug specific test
npm test -- path/to/test --debug

# Watch mode
npm run test:watch
```

### E2E Tests
```bash
# UI mode
npx playwright test --ui

# Debug mode
npx playwright test --debug
```
