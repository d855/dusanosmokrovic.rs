# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — preview production build locally

## Architecture

Astro 6 static site with Tailwind CSS 4 (via `@tailwindcss/vite` plugin). TypeScript in strict mode.

- `src/pages/` — file-based routing (`.astro` files become routes)
- `src/layouts/` — page shell components (Layout.astro wraps all pages)
- `src/components/` — reusable Astro components
- `src/assets/` — images/SVGs processed by Astro's asset pipeline
- `public/` — static files served as-is (favicons)

Node >=22.12.0 required.
