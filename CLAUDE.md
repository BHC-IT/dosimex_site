# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dosimex is an Astro 5 website for a radiation dosimetry software company. Bilingual (French/English), statically generated, with React islands for interactive components. The Astro app lives in the `astro/` directory.

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

## Voice & UI — Design Directives

This is the **brand site for Dosimex**, not a utility. Dosismart (the web app) is deliberately simple and stays that way — its dashboard is good as it is; do not "brand" it. **This site has more creative liberty.** It must feel like *more than a website*: the public face of a 30-year radiation-protection house that now ships modern software.

> **Precedence:** This section is the source of truth for voice and UI. `design-recommendations.md` (2026-03-20) remains useful for its *philosophy* (precision over polish, warmth in a cold market, density where it matters / air where it counts) and its copy audit — but its specific color values are **SUPERSEDED** by the **Dosimex 2026 palette** below (see *Color & tokens*): the Dosismart blue `#3D61FF` primary + the Dosimex logo red `#FF2532` as a sparing accent, on a soft blue-tinted light background / deep-blue dark background. `market-research-website-design.md` is background competitive context.

### Identity: "Instrument-grade calm"

Scientific authority delivered with modern-SaaS space and quiet confidence. The competitor field (DOSIsoft, IBA, PTW, Voximetry…) is a wall of clinical navy and stock photos. We stand apart with a **bold palette** (deep royal blue + red, not the market's washed-out clinical blue) and **the craft**: generous space, precise typography, and *live product previews instead of screenshots*.

Two explicit references, and what to take from each:

- **proton.me** — the primary model for the **home page**. Take: generous whitespace and a calm section rhythm (breathe → inform → breathe); large confident headlines; soft, sparingly-used gradient/glow backdrops; and — most important — **product UI shown as clean, rebuilt components floating in device/browser chrome on a gradient**, never raw screenshots. Restraint. Air. One idea per section.
- **orano.group** — the model for **gravitas and scale**. Take: institutional confidence, strong typographic hierarchy, full-bleed confident sections, and trust conveyed through real references (ASN, CEA, Orano, Framatome) and 30-year provenance. Authority without coldness.

The blend: **Orano's authority, Proton's air, and the Dosimex blue-and-red palette.**

### Personality guardrails (from the philosophy doc, still binding)

- **Dosimex IS:** expert, precise, transparent, human, proven, accessible.
- **Dosimex IS NOT:** corporate, playful, flashy, cheap, academic, bureaucratic.
- Voice = a senior colleague who explains clearly. Not a salesperson who oversimplifies, not a professor who overcomplicates.

### Copy rules (learned the hard way)

- **Tight and confident. Cut anything the UI already states.** If two buttons already say "Subscribe" and "Request a quote," do not add a paragraph narrating them.
- Match the page's existing rhythm — most on-page helper copy here is **one or two short sentences**. Mirror it.
- Never restate context the user can already see (e.g. don't write "now that you've seen the prices" directly under the prices).
- Prefer **subtraction**. When editing this site, switch out of "product-spec / document" mode into **editorial mode**: the win is usually what you remove.
- Lead with value, offer the low-pressure alternative second. No hard sell — the audience is expert RP professionals.

### Color & tokens (Dosimex 2026 palette)

Defined in `src/styles/global.css` as semantic tokens. **Always use the tokens** (`text-primary`, `bg-muted`, `border-border`, `text-muted-foreground`…), never raw hex — so light/dark and future tweaks stay centralized.

- **Dosismart blue `hsl(229 100% 62%)` (`#3D61FF`)** → `primary` (brand, CTAs, links, active accents); same blue as the Dosismart app, so `primary-foreground` is **white**. `primary-700` `hsl(229 84% 52%)` for hovers. Same blue in dark mode. This is the base — the palette mirrors the app (`dosismart/app/src/global.css`).
- **Logo red `#FF2532`** (`hsl(356 100% 57%)`, sampled from the Dosimex logo) → `brandred` / `destructive`, used **sparingly, only where coherent** (the hero "new" pulse dot, the warm second stop of `.text-gradient`, error states). Not a section/background colour. Dark mode lifts it to `#FF3B47`.
- **Dark blue `hsl(229 41% 4%)`** → the **dark-mode `background`** base.
- `foreground` is near-black blue ink in light; light `background` is **near-white with a whisper of cool tint** (`hsl(229 24% 98%)`, not pure white) so white `card` panels still pop; `muted` / `border` are light cool blue-greys.
- Every new section must work in **both modes** — use `dark:` variants / semantic tokens, never a hard-coded hex.
- The only literal colors allowed are the status dots (green/orange/blue) and radiation-zone colors, and **only** inside product previews.

### Typography, space, motion

- Headings: **Inter Variable**, `font-semibold`, tight tracking (`-0.02em`). Body: system stack. Keep the type scale calm; let size + weight carry hierarchy.
- **Space is a feature.** Proton-level breathing room: sections at `py-16 md:py-28`+, hero even airier, `max-w-7xl` gutters, one clear idea per section. Density is reserved for tool/spec/manual pages where the audience wants data.
- Backdrops: soft `bg-primary/5`–`/10` blur glows and the `.bg-dots` / `.bg-grid` masks already in `global.css`. **Sparingly** — a well-placed glow, not a light show.
- Motion: subtle only — `transition-all duration-200`, gentle hover lift (`hover:-translate-y-1`), `hover:shadow-lg`. No bounce, no parallax spectacle.

### Visuals: NO screenshots — build live previews

**Do not use raw screenshots of the app or the desktop suite as marketing imagery.** They date instantly, look low-fidelity, and can't adapt when the dashboard changes. Instead:

- **Rebuild Dosismart UI as static preview components** in `src/components/previews/`, reusing the app's real classes/idioms (see `dosismart/app/src/components/atoms/ui/*` and `features/calculation/components/result-cards.tsx`). Card = `rounded-lg border bg-card shadow-sm`; result value = `text-2xl font-bold text-primary`; status dot = `w-2 h-2 rounded-full bg-green-500`; badge = `rounded-full border px-2.5 py-0.5 text-xs font-semibold`.
- Frame them in **browser/window chrome** on a gradient/glow backdrop (the Proton pattern) so they read as "a glimpse of the product," not a flat picture.
- Keep them **prop-driven and adaptable** (dummy but realistic values via props/slots) so that when the real dashboard evolves, the preview is a small edit, not a re-screenshot.
- The desktop Dosimex Suite modules (Excel) may still use imagery where a live rebuild is impractical — but prefer framed, cleaned-up treatments over bare screenshots.

### Do / Don't

- ✅ Use the semantic tokens (blue primary, red accent, warm neutrals). ✅ Give the site room to breathe. ✅ Show product via rebuilt previews. ✅ Keep copy tight. ✅ Test light + dark.
- ❌ No hard-coded hex (use tokens). ❌ No raw screenshots as hero visuals. ❌ No copy that narrates the UI. ❌ Don't restyle or complicate the Dosismart app itself (keep it on its own palette).

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
- `astro/public` is a symlink to the repo-root `../public` (shared static assets)
- No testing framework installed yet
