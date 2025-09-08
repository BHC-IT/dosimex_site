# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dosimex is a Next.js 13 website for a radiation dosimetry software company. The site is multilingual (French/English) with content management through TypeScript interfaces and displays software products, training, manuals, and company information.

## Essential Commands

### Development

- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Build production version (outputs to `build/`)
- `pnpm start` - Start production server

### Testing (⚠️ CRITICAL - NEVER USE `pnpm test`)

- **NEVER USE**: `pnpm test` - This starts Vitest in watch mode and will hang
- **ALWAYS USE**: `pnpm test:run` - Run tests once (this is what you must use)
- `pnpm test:coverage` - Generate coverage report
- `pnpm test:ui` - Open Vitest UI (manual use only)

### Code Quality (⚠️ MANDATORY - MUST RUN ALL)

- `pnpm check-types` - TypeScript type checking (MUST pass with zero errors)
- `pnpm lint:fix` - ESLint with auto-fix (run this first to fix issues)
- `pnpm lint:check` - ESLint check only (MUST pass with max 0 warnings for CI)

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

## 🚨 CRITICAL QUALITY ENFORCEMENT RULES

### ABSOLUTELY FORBIDDEN - CODE WILL BE REJECTED

1. **NO `any` TYPES**: NEVER use `any` type in TypeScript code

    - Use proper type definitions, interfaces, or generics
    - Use `unknown` if type is truly unknown and add type guards
    - ESLint rule `@typescript-eslint/no-explicit-any` is set to 'warn' but YOU MUST treat it as ERROR

2. **NO HANGING TESTS**: NEVER run `pnpm test` (it hangs in watch mode)

    - ALWAYS use `pnpm test:run` for one-time test execution

3. **NO UNVERIFIED CODE**: NEVER submit code without running ALL quality checks

### MANDATORY WORKFLOW - MUST FOLLOW EXACTLY

#### Step 1: Discover Available Commands (if not known)

```bash
# Check package.json for available scripts
cat package.json | grep -A 20 '"scripts"'
```

#### Step 2: Run Quality Checks BEFORE Making Changes

```bash
pnpm test:run      # Ensure all existing tests pass
pnpm lint:fix      # Fix any existing linting issues
pnpm check-types   # Verify no TypeScript errors exist
```

#### Step 3: Make Your Code Changes

- Write clean, typed TypeScript code
- NO `any` types allowed - use proper typing
- Follow existing code patterns and conventions
- Add appropriate error handling

#### Step 4: Verify Your Changes

```bash
pnpm test:run      # MUST pass all tests
pnpm lint:fix      # Auto-fix any style issues
pnpm lint:check    # MUST have 0 warnings (CI requirement)
pnpm check-types   # MUST have 0 TypeScript errors
```

#### Step 5: Fix Any Issues

- If tests fail: Fix the code or update tests appropriately
- If lint warnings exist: Fix them ALL (0 warnings required)
- If TypeScript errors exist: Fix them ALL (strict mode enforced)

### TYPE SAFETY REQUIREMENTS

#### Instead of `any`, use:

```typescript
// ❌ FORBIDDEN
const data: any = fetchData()
function process(input: any): any {}

// ✅ CORRECT - Use specific types
interface UserData {
	id: string
	name: string
	email: string
}
const data: UserData = fetchData()

// ✅ CORRECT - Use unknown with type guards
function processUnknown(input: unknown): string {
	if (typeof input === 'string') {
		return input.toUpperCase()
	}
	if (typeof input === 'number') {
		return input.toString()
	}
	throw new Error('Unsupported type')
}

// ✅ CORRECT - Use generics
function processGeneric<T>(input: T): T {
	return input
}

// ✅ CORRECT - Use union types
type ApiResponse = SuccessResponse | ErrorResponse
```

### ESLINT CONFIGURATION NOTES

Current ESLint has `@typescript-eslint/no-explicit-any` set to 'warn' but:

- **YOU MUST TREAT THIS AS AN ERROR**
- Fix ALL `any` type warnings immediately
- The codebase may have legacy `any` types - fix them when you encounter them

### COMMON ISSUES AND FIXES

1. **Import from React**: Not needed in React 17+

    ```typescript
    // ❌ Don't do this
    import React from 'react'

    // ✅ Just use JSX directly
    export function Component() { return <div>Hello</div> }
    ```

2. **Event Handler Types**:

    ```typescript
    // ❌ NEVER
    const handleClick = (e: any) => {}

    // ✅ CORRECT
    import { MouseEvent } from 'react'
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {}
    ```

3. **API Response Types**:

    ```typescript
    // ❌ NEVER
    const response: any = await fetch('/api/data')

    // ✅ CORRECT
    interface ApiResponse {
    	data: UserData[]
    	error?: string
    }
    const response: ApiResponse = await fetch('/api/data').then((r) => r.json())
    ```

### CI/CD REQUIREMENTS

The CI pipeline will FAIL if:

- ❌ Any test fails (`pnpm test:run`)
- ❌ Any lint warning exists (`pnpm lint:check --max-warnings 0`)
- ❌ Any TypeScript error exists (`pnpm check-types`)
- ❌ Any `any` type is introduced (treat warnings as errors)

### VERIFICATION CHECKLIST

Before considering ANY task complete, verify:

- [ ] `pnpm test:run` - All tests pass
- [ ] `pnpm lint:check` - 0 warnings
- [ ] `pnpm check-types` - 0 errors
- [ ] No `any` types in modified code
- [ ] All functions have proper TypeScript types
- [ ] All React components are properly typed

### WORKFLOW SUMMARY

1. **ALWAYS** run quality checks before starting
2. **NEVER** use `any` type - use proper TypeScript
3. **NEVER** use `pnpm test` - use `pnpm test:run`
4. **ALWAYS** verify with ALL quality commands after changes
5. **NEVER** consider work complete with warnings or errors

## Remember: Quality Over Speed

It's better to take time to write properly typed code than to introduce `any` types or skip tests. The codebase maintains high standards - respect and maintain them.

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
