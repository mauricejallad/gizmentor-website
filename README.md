# GizMentor website

Corporate and investor site for GizMentor FZCO, in English and Arabic, with light and dark themes. Vite + React 19 + react-router, prerendered to static HTML at build time.

## Commands
- `npm run dev` — local dev server
- `npm run build` — client build → SSR build → `scripts/prerender.mjs` (writes `dist/<route>/index.html` for every page in both languages, `404.html`, `sitemap.xml` with hreflang alternates, `robots.txt`)
- `npm run lint`

## Where to edit
| What | File |
|---|---|
| All English copy, page titles and descriptions | `src/content/en.js` |
| All Arabic copy (mirrors `en.js` key for key) | `src/content/ar.js` |
| Company facts, licence/trademark/TDRA numbers, nav order, Easelect status & URL, investor metrics | `src/config/site.js` |
| OG images, JSON-LD, which routes are indexable | `src/config/seo.js` |
| Design tokens (light and dark) | `src/styles/index.css` → `:root` and `:root[data-theme='dark']` |

Values set to `null` (registration numbers, unverified MagFusion specs) are hidden until filled in.

## Languages
English lives at `/…`, Arabic at `/ar/…` (right-to-left). `src/i18n/locales.js` maps paths to locales; components get the current language's copy with `useLocale()` (`t` for copy, `to()` to localise a link). Brand names stay in Latin script in Arabic. The legal pages are English-only; on `/ar/…` they show an Arabic notice above the English text.

## Theme
`index.html` sets `<html data-theme>` before first paint from the visitor's stored choice, else their system setting. `src/hooks/useTheme.js` handles the header toggle and follows system changes until the visitor picks a theme.

## Adding a page
Add it to `src/routes.jsx`, to `routeSettings` in `src/config/seo.js` (that is what gets prerendered and listed in the sitemap), and its `meta` title/description to both `en.js` and `ar.js`.

## Redirects
`/products/magfusion-air` → `/products/magfusion` (permanent) and `/products` → `/products/magfusion` (temporary), plus the same under `/ar`, in `vercel.json` and `public/_redirects`.
