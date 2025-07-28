# Testing Setup with Vitest

This project now includes a comprehensive testing setup using Vitest, which is a fast and modern testing framework for React applications.

## 🚀 Test Scripts

- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:watch` - Run tests in watch mode (same as `pnpm test`)
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm test:ui` - Run tests with Vitest UI

## 📁 Test Structure

Tests are located alongside the source files in `__tests__` directories:

```
src/
├── Components/
│   ├── __tests__/
│   │   ├── Button.test.tsx
│   │   └── Input.test.tsx
├── Hooks/
│   ├── __tests__/
│   │   ├── useIsMobile.test.ts
│   │   └── useText.test.ts
├── utils/
│   ├── __tests__/
│   │   └── parseStringLink.test.ts
└── test/
    ├── __tests__/
    │   └── setup.test.ts
    └── setup.ts
```

## 🛠️ Testing Tools

- **Vitest** - Test runner and assertion library
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers for DOM assertions
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/react-hooks** - Hook testing utilities
- **jsdom** - DOM environment for tests

## 🧪 What's Tested

### Components

- **Button**: Rendering, props, accessibility, Next.js Link integration
- **Input**: User interactions, validation, form behavior, styling

### Hooks

- **useIsMobile**: Device detection and responsive styling
- **useText**: Internationalization utilities (basic structure testing)

### Utilities

- **parseStringLink**: Markdown link parsing functionality

## 📝 Test Examples

### Component Testing

```typescript
import { render, screen } from '@testing-library/react'
import Button from '../Button'

it('should render with correct text', () => {
  render(<Button name="Test Button" route="test" />)
  expect(screen.getByRole('button')).toHaveTextContent('Test Button')
})
```

### Hook Testing

```typescript
import { renderHook } from '@testing-library/react-hooks'
import { useMobile } from '../useIsMobile'

it('should return mobile state', () => {
	const { result } = renderHook(() => useMobile())
	expect(typeof result.current === 'boolean' || result.current === null).toBe(true)
})
```

### Utility Testing

```typescript
import { parseStringLink } from '../parseStringLink'

it('should parse markdown links', () => {
	const input = 'Check [Google](https://google.com)'
	const result = parseStringLink(input)
	expect(result).toContain('[Google](https://google.com)')
})
```

## 🎯 Mock Setup

The test setup includes mocks for:

- Next.js router (`useRouter`)
- Next.js Link component
- react-device-detect library

These mocks are configured in `src/test/setup.ts` and are automatically applied to all tests.

## 📊 Coverage

Run `pnpm test:coverage` to generate a coverage report showing which parts of your codebase are covered by tests.

## 🔧 Configuration

Test configuration is in:

- `vitest.config.ts` - Main Vitest configuration
- `src/test/setup.ts` - Test setup and global mocks

## 🚨 Known Issues

- Some CSS-in-JS styles may not be perfectly tested due to JSDOM limitations
- Complex Next.js routing behavior is mocked for simplicity
- The Input component shows a warning about missing React keys (this is a component implementation detail, not a test issue)

## 🎨 Best Practices

1. **Test behavior, not implementation** - Focus on what the user sees and does
2. **Use descriptive test names** - Make it clear what each test is verifying
3. **Group related tests** - Use `describe` blocks to organize tests logically
4. **Mock external dependencies** - Keep tests isolated and fast
5. **Test edge cases** - Include tests for error states and boundary conditions

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [React Testing Best Practices](https://kentcdodds.com/blog/react-testing-library-guide)
