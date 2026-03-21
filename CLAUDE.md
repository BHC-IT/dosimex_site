# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dosimex is an Astro 5 website for a radiation dosimetry software company. Bilingual (French/English), statically generated, with React islands for interactive components. The Astro app lives in the `astro/` directory.

**The legacy Next.js app at the repository root is DEPRECATED. Do not modify, maintain, or reference it.**

## Commands

All commands must be run from the `astro/` directory.

```bash
pnpm dev              # Dev server
pnpm build            # Production build (outputs to dist/)
pnpm preview          # Preview production build locally
```

Uses **pnpm** (not npm/yarn).

## Quality Rules

- **NEVER use `any` type.** Use specific types, `unknown` with type guards, or generics.
- TypeScript strict mode is enabled (extends `astro/tsconfigs/strict`).

## Architecture

### i18n / Translation System (`src/i18n/`)

- `fr.ts` and `en.ts` export full translation objects with page-keyed sections (seo, navbar, footer, home, software, product, contact, about, training, books, manuals, videos, altText)
- `utils.ts` provides helpers:
  - `getTranslations(locale)` - Returns the full translation object for a locale
  - `getLocaleFromUrl(url)` - Extracts locale from pathname (`/en/...` -> `'en'`, else `'fr'`)
  - `getAlternateUrl(pathname)` - Flips between locale versions of a path
  - `getLocalePaths()` - Returns static paths for `[...locale]` routes
  - `localePath(locale, path)` - Prefixes path with `/en/` for English
  - `getCanonicalUrl(site, pathname)` - Builds absolute canonical URLs
- Routing: French is default (no prefix), English uses `/en/` prefix
- Astro i18n config: `locales: ['fr', 'en']`, `defaultLocale: 'fr'`, `prefixDefaultLocale: false`

### Pages (`src/pages/[...locale]/`)

Catch-all `[...locale]` route pattern. Each page calls `getLocalePaths()` for static path generation.

Pages: `index.astro`, `about.astro`, `software.astro`, `product.astro`, `training.astro`, `manuals.astro`, `books.astro`, `videos.astro`, `contact.astro`

### Layout (`src/layouts/Layout.astro`)

Master layout wrapping all pages. Includes Navbar, Footer, BaseHead (SEO meta), CookieConsent, global fonts/styles, dark mode init script, and PostHog tracking.

Props: `title`, `description`, `ogImage?`, `robots?`, `jsonLd?`

### Components (`src/components/`)

Mix of `.astro` (static) and `.tsx` (React island) components:

- **Astro components**: `BaseHead.astro` (SEO), `Navbar.astro`, `Footer.astro`, `CookieConsent.astro`, `ThemeToggle.astro`, `VideoEmbed.astro`
- **React islands** (hydrated with `client:idle`): `MobileMenu.tsx`, `ContactForm.tsx`

Only 2 interactive React components — the rest is static HTML.

### Data (`src/data/`)

- `videos.ts` - YouTube video IDs by category, partner logos, book images, manual PDFs
- `schemas.ts` - JSON-LD structured data (Organization, WebSite schemas)

### Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **CSS variables** defined in `@theme` block in `src/styles/global.css`
- Colors: `--color-primary` (#DB2132), `--color-accent` (#FFC03D), `--color-background`, `--color-foreground`, etc.
- **Dark mode**: `.dark` class on `<html>`, toggled by ThemeToggle, persisted in localStorage
- **Fonts**: Lato (headings, `--font-lato`) + Nunito (body, `--font-nunito`) via `@fontsource`
- Components use **inline Tailwind classes** primarily, with occasional scoped `<style>` blocks

### SEO

- Canonical URLs + hreflang alternates in `BaseHead.astro`
- JSON-LD structured data (Organization, WebSite, SoftwareApplication, FAQ)
- OpenGraph + Twitter Card meta tags
- Per-page meta descriptions from translations
- Auto-generated sitemap via `@astrojs/sitemap`
- Critical CSS inlining via `astro-critters`

### Analytics & GDPR

- **PostHog** tracking with custom events (CTA clicks, PDF downloads, form engagement, section views, nav clicks, language switches)
- Event tracking setup in `src/scripts/tracking.ts`
- **Cookie consent** via `vanilla-cookieconsent` — analytics cookies only set on user acceptance

### Contact Form

- EmailJS integration (`@emailjs/browser`) — env vars in `.env` (PUBLIC_EMAILJS_*)
- Phone validation via `react-phone-number-input`
- Toast notifications via `react-toastify`
- PostHog form engagement tracking

### Key Dependencies

- Astro 5.7, React 18.3, TypeScript 5.8
- Tailwind CSS v4, @tailwindcss/vite
- @astrojs/react, @astrojs/sitemap, astro-critters
- Icons: lucide-react
- Forms: @emailjs/browser, react-phone-number-input, react-toastify
- Analytics: PostHog (loaded via script), vanilla-cookieconsent
- Images: sharp (optimization)

### Build Config

- Site URL: `https://dosimex.fr`
- Output: `dist/` (static HTML)
- Path alias: `@/*` -> `./src/*`
- `public/` is a symlink to `../public` (shared assets with legacy app)
- No testing framework installed yet
