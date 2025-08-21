# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dosimex is a Next.js 13 website for a radiation dosimetry software company. The site is multilingual (French/English) with content management through TypeScript interfaces and displays software products, training, manuals, and company information.

## Essential Commands

### Development
- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Build production version (outputs to `build/`)
- `pnpm start` - Start production server

### Testing
- `pnpm test` - Run Vitest tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:coverage` - Generate coverage report
- `pnpm test:ui` - Open Vitest UI

### Code Quality
- `pnpm check-types` - TypeScript type checking (no emit)
- `pnpm lint` - ESLint with auto-fix
- `pnpm lint:check` - ESLint check only (max 0 warnings for CI)

## Architecture

### Multi-language System
- **Language files**: `src/lang/{fr,en,debug}.ts` with typed interfaces
- **Translation hook**: `useText(pageName)` returns localized content
- **HOC pattern**: `withText(Component, 'PageName')` for component translations
- **Next.js i18n**: Configured for `fr` (default), `en-US`, `debug` locales

### Styling Architecture  
- **CSS Variables**: Defined in `globals.css` with brand colors (`--main`, `--dark`, etc.)
- **Styled Components**: TypeScript interfaces for component styles
- **CSS-in-JS**: Inline styles with typed `CSS.Properties`
- **Responsive**: Uses viewport units (vw, vh) and conditional rendering

### Component Structure
- **Layout**: `_app.tsx` with Navbar/Footer wrapper, toast notifications
- **Navigation**: Navbar with responsive design, SideBar for mobile
- **HOCs**: `withText`, `withIsMobile` for cross-cutting concerns
- **Hooks**: `useText`, `useIsMobile` for reusable logic

### State Management
- **Router-based**: Uses Next.js router for locale/route state
- **Local State**: React useState for component-specific state
- **No Global Store**: Simple prop passing and context-free architecture

## Development Notes

### Package Management
Uses pnpm (not npm/yarn). Lock file is `pnpm-lock.yaml`.

### Build Configuration
- **Output Directory**: `build/` (configured in `next.config.js`)
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Static Export**: Configured for static site generation

### Testing Setup
- **Framework**: Vitest with jsdom environment  
- **Coverage**: v8 provider with exclusions for build/config files
- **Test Files**: `__tests__/` directories and `*.test.{ts,tsx}` files

## MANDATORY DEVELOPMENT WORKFLOW

### Before Making ANY Code Changes
Claude MUST ALWAYS follow this workflow when working on this codebase:

1. **Run Quality Checks First**:
   ```bash
   pnpm run test:run      # Run all tests and ensure they pass
   pnpm run lint          # Fix any linting issues
   pnpm run check-types   # Ensure no TypeScript errors
   ```

2. **Add Tests Before Modifying Logic**:
   - If modifying component internal logic, CREATE meaningful tests first
   - Use snapshot testing for UI components to catch visual regressions
   - Test component behavior, not just rendering
   - Example test structure:
   ```typescript
   // Component behavior tests
   describe('ComponentName', () => {
     it('should render correctly', () => {
       const { container } = render(<ComponentName />)
       expect(container).toMatchSnapshot()
     })
     
     it('should handle user interactions', () => {
       // Test actual functionality
     })
   })
   ```

3. **After Making Changes**:
   ```bash
   pnpm run test:run      # Verify all tests still pass
   pnpm run lint          # Fix any new linting issues
   pnpm run check-types   # Ensure no new TypeScript errors
   ```

### Code Quality Standards
- **Zero TypeScript Errors**: `pnpm run check-types` must pass with no errors
- **Zero Lint Warnings**: `pnpm run lint` must pass with no warnings in CI mode
- **All Tests Pass**: `pnpm run test:run` must pass completely
- **Meaningful Tests**: Every component modification requires corresponding tests

### Testing Requirements
- **Snapshot Tests**: Required for all UI components to catch visual regressions
- **Behavior Tests**: Test user interactions, state changes, and side effects
- **Integration Tests**: Test component interactions with hooks and external dependencies
- **Coverage**: Maintain minimum 70% test coverage for modified files

### Error Handling
- If any quality check fails, Claude must fix the issue before proceeding
- If tests break due to intentional changes, update tests accordingly
- Always provide clear commit messages explaining what was tested and why

### Lint Warning Management
**Current State**: The codebase has ~120 existing lint warnings that are technical debt.
**Strategy**: 
- **MUST FIX**: Any lint errors (red) - these break CI
- **FOCUS ON**: New warnings introduced by your changes
- **EXISTING WARNINGS**: Can be addressed incrementally as part of larger refactoring efforts
- **PRIORITY WARNINGS**: Fix `@typescript-eslint/no-explicit-any` warnings when modifying those files

### Test Snapshot Strategy
When adding snapshot tests:
```typescript
// Example snapshot test structure
describe('ComponentName Snapshots', () => {
  it('should match snapshot with default props', () => {
    const { container } = render(<ComponentName />)
    expect(container.firstChild).toMatchSnapshot()
  })
  
  it('should match snapshot with mobile view', () => {
    // Mock mobile detection
    const { container } = render(<ComponentName />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
```

### Pre-Modification Checklist
Before modifying any component:
1. ✅ Run `pnpm run test:run` - all tests must pass
2. ✅ Run `pnpm run check-types` - no TypeScript errors
3. ✅ Add snapshot test for current component state
4. ✅ Add behavior tests for functionality being modified
5. ✅ Make changes
6. ✅ Update tests if behavior changed intentionally
7. ✅ Run quality checks again and fix any new issues