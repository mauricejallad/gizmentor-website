# GizMentor website

Corporate and investor site for GizMentor FZCO. Vite + React 19 + react-router, prerendered to static HTML at build time.

## Commands
- `npm run dev` — local dev server
- `npm run build` — client build → SSR build → `scripts/prerender.mjs` (writes `dist/<route>/index.html`, `404.html`, `sitemap.xml`, `robots.txt`)
- `npm run lint`

## Where to edit
| What | File |
|---|---|
| Company facts, licence/trademark/TDRA numbers, nav, Easelect status & URL, investor metrics | `src/config/site.js` |
| Page titles, descriptions, OG images, JSON-LD | `src/config/seo.js` |
| Pillars, capabilities, founder bio | `src/content/corporate.js` |
| MagFusion copy & specs (`null` = hidden) | `src/content/magfusion.js` |
| Design tokens (incl. Easelect palette placeholders) | `src/styles/index.css` → `:root` |

Adding a route: add it to `src/routes.jsx` **and** `routeMeta` in `src/config/seo.js` (that is what gets prerendered and listed in the sitemap).

## Redirects
`/products/magfusion-air` → `/products/magfusion` (301/308) and `/products` → `/products/magfusion` (temporary), in `vercel.json` and `public/_redirects`.
