# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dosimex is a Next.js 15 website (Pages Router) for a radiation dosimetry software company. Multilingual (French/English) with typed translation interfaces, static site generation, and responsive design.

## Commands

```bash
pnpm dev              # Dev server on localhost:3000
pnpm build            # Production build (outputs to build/)
pnpm test:run         # Run tests once (NEVER use `pnpm test` - it hangs in watch mode)
pnpm test:coverage    # Tests with coverage report
pnpm lint:fix         # ESLint with auto-fix
pnpm lint:check       # ESLint strict mode (0 warnings, used in CI)
pnpm check-types      # TypeScript type checking
```

Uses **pnpm** (not npm/yarn).

## Quality Rules

- **NEVER use `any` type.** ESLint has `no-explicit-any` as `warn` but treat it as error. Use specific types, `unknown` with type guards, or generics.
- **NEVER use `pnpm test`** - it starts Vitest in watch mode and will hang forever. Always use `pnpm test:run`.
- **CI fails on**: any test failure, any lint warning (`--max-warnings 0`), any TypeScript error.
- After making changes, run: `pnpm test:run && pnpm lint:fix && pnpm lint:check && pnpm check-types`

## Architecture

### Translation System (`src/lang/`)

- `interface.ts` defines `ILang` with page-keyed sections: `Home`, `Software`, `About`, `Books`, `Manuals`, `Product`, `Training`, `Videos`, `ContactForm`, `Footer`, `Navbar`, `altText`
- `fr.ts` and `en.ts` export `const text: ILang` with all translations
- `debug.ts` for debug locale
- **Hook**: `useText(pageName: keyof ILang)` (in `src/Hooks/useText.ts`) detects locale from Next.js router and returns the page's translations
- i18n config: locales `['fr', 'en-US', 'debug']`, default `fr`

### Hooks (`src/Hooks/`)

- **`useText(page)`** - Returns localized content for a page. Slices locale to 2 chars (`en-US` -> `en`).
- **`useIsMobile`** - Exports `useIsMobile(stylesFn)`, `useMobile()`, `useTablet()`, `useDeviceType()`. Mobile < 768px. Uses resize listener, 10ms timeout for SSR safety.
- **`useContactFormValidation`** - Form state management with validators, EmailJS integration, react-toastify notifications.

Note: Despite CLAUDE.md previously mentioning HOCs (`withText`, `withIsMobile`), these do not exist. Components use hooks directly.

### Pages (`src/pages/`)

Next.js Pages Router with: `index.tsx`, `About.tsx`, `Books.tsx`, `Contact.tsx`, `Manuals.tsx`, `Product.tsx`, `Software.tsx`, `Training.tsx`, `Videos.tsx`. Layout wrapper in `_app.tsx` (Navbar, Footer, ErrorBoundary, ToastContainer).

### Components (`src/Components/`)

18 components including: `Navbar`, `Footer`, `Button`, `ErrorBoundary`, `ContactForm`, `Input`, `HeroBannerCarousel`, `PartnersCarousel`, `LanguageSwitch`, `SideBar`, `ItemNavbar`, `CardHome`, `OpinionHome`, `References`, `SquareGrid`, `ScrollButton`, `Book`.

### Styling

- **CSS Variables** in `src/styles/globals.css`: `--main` (#FF2532), `--dark` (#0B0D17), `--light` (#F3F4FA), `--flash` (#FFC03D), fonts `--lato`/`--nunito`
- **Styling constants** in `src/types/styling.ts`: `BREAKPOINTS` (mobile: 1024, tablet: 1440, desktop: 1920), `STYLE_CONSTANTS` (colors, fonts, transitions, shadows, spacing)
- **Inline CSS-in-JS** with typed `CSS.Properties` from `csstype`. Components export `styles` objects.
- **Tailwind CSS** v4 is available (configured via PostCSS)
- **styled-components** with SSR support enabled in `next.config.js`

### Testing

- **Framework**: Vitest + React Testing Library + jsdom
- **Test locations**: `src/Components/__tests__/`, `src/Hooks/__tests__/`, `src/utils/__tests__/`, `src/__tests__/`
- **Setup** (`src/test/setup.ts`) mocks: Next.js router (push/replace/back as `vi.fn()`), Next.js Link (renders as `<a>`), react-device-detect
- **Patterns**: snapshot tests with `container.firstChild`, behavior tests with screen queries, `renderHook()` for hooks, `vi.mock()` for modules

### Key Dependencies

- Next.js 15.5.2, React 18.3.1, TypeScript 5.8.3
- Icons: FontAwesome + MDI
- Forms: react-phone-number-input, @emailjs/browser
- UI: react-multi-carousel, react-parallax-tilt, react-burger-menu
- Flags: country-flag-icons (for language switch)

### Build Config Notes

- Output directory: `build/` (not default `.next/`)
- `typescript.ignoreBuildErrors: true` in next.config.js (temporary)
- Path alias: `@/*` -> `./src/*`
- Test files excluded from webpack build via ignore-loader

### Known Technical Debt

- ~120 existing lint warnings
- Legacy `any` types in `src/types/jsx.d.ts` (module declarations with eslint-disable)
- Fix `any` warnings when modifying affected files
