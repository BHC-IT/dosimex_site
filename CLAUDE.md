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