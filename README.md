# Dosimex website

Bilingual (FR/EN) brand site for [Dosimex](https://dosimex.fr), built with [Astro 5](https://astro.build) and deployed on Vercel as a static site.

The app lives in [`astro/`](astro/). Shared static assets (PDFs, images) live in [`public/`](public/), symlinked as `astro/public`.

## Getting started

```bash
cd astro
pnpm install
pnpm dev        # dev server
pnpm build      # production build → astro/dist
pnpm preview    # preview the production build
```

## Environment

Copy [`astro/.env.example`](astro/.env.example) to `astro/.env` and fill it in. The same
variables must be set in the Vercel project — `.env` is not committed.

| Variable | Purpose |
| --- | --- |
| `PUBLIC_EMAILJS_*` | Contact form delivery |
| `PUBLIC_POSTHOG_KEY` | Analytics project key. **Empty disables analytics entirely.** |
| `PUBLIC_POSTHOG_HOST` | Ingestion host (the managed reverse proxy) |
| `PUBLIC_POSTHOG_UI_HOST` | PostHog app host, so in-app links resolve behind the proxy |

Optional PostHog switches (person profiles, session replay, cookieless mode, debug,
capturing from `pnpm dev`) are documented inline in `.env.example`.

### Analytics

PostHog is **lazily loaded and only initialised once the visitor accepts the `analytics`
cookie category** — decline and not a single byte or request reaches the ingestion host.
Configuration lives in [`astro/src/lib/analytics.ts`](astro/src/lib/analytics.ts); the
custom event layer (CTAs, PDF downloads, nav, section views) is in
[`astro/src/scripts/tracking.ts`](astro/src/scripts/tracking.ts). Pageviews, autocapture,
rageclicks, dead clicks, heatmaps, web vitals and unhandled exceptions are handled by
PostHog itself.

When `PUBLIC_POSTHOG_HOST` points at a proxy, that host must also be allowed in the
`connect-src` directive of the CSP in [`vercel.json`](vercel.json).

See [`CLAUDE.md`](CLAUDE.md) for architecture notes and design directives.
