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

See [`CLAUDE.md`](CLAUDE.md) for architecture notes and design directives.
