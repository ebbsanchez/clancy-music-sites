# Clancy Music Sites

Foundation for Clancy Website Design's product: **distinctive, easy-to-edit websites for musicians.**

- **Live (production):** https://ebbsanchez.github.io/clancy-music-sites/
- **Stack:** [Astro](https://astro.build) · TypeScript (strict) · [Tailwind CSS v4](https://tailwindcss.com)
- **Hosting:** GitHub Pages, deployed by GitHub Actions on every push to `main`.

## Why this stack

| Decision                   | Reasoning                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Astro** over Next.js     | Musician sites are content-first and mostly static. Astro ships **zero JS by default** (fast, great Lighthouse/SEO), uses islands for the interactive bits (players, menus), and its content collections map cleanly onto the structured, AI-editable content we're building toward. |
| **Tailwind v4**            | Fast, consistent design system; utility classes keep components self-contained and reusable across artist templates.                                                                                                                                                                 |
| **GitHub Pages + Actions** | Gives `main` auto-deploy **and** per-PR preview URLs with **zero external accounts or billing** — fully reversible. If we later need SSR / server AI routes, moving to Vercel/Netlify is a small, additive change. _(Flagged to CEO as the future hosting decision.)_                |

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build to `./dist`         |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Astro + TypeScript type checking     |
| `npm run lint`    | ESLint + Prettier check              |
| `npm run format`  | Auto-format with Prettier            |

## Deploy pipeline

- **Production** — push/merge to `main` → `.github/workflows/deploy.yml` builds and publishes to the `gh-pages` branch.
- **Previews** — open a PR → `.github/workflows/preview.yml` deploys a live preview at `…/pr-preview/pr-<N>/` and comments the URL on the PR. Torn down when the PR closes.

Base path is injected at build time via `PUBLIC_BASE_PATH` so production and preview asset URLs both resolve correctly.

## Project structure

```
src/
  components/   Reusable UI (Equalizer, …) — the growing music component library
  layouts/      Page shells (Base: <head>, fonts, SEO)
  pages/        File-based routes
  styles/       global.css — Tailwind + Clancy design tokens
public/         Static assets (favicon, …)
```
