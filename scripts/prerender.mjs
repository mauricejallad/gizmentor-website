/**
 * Build-time prerender: writes dist/<route>/index.html for every indexable route in every language
 * (English at /, Arabic at /ar), dist/404.html, sitemap.xml with hreflang alternates, and robots.txt.
 * Runs after `vite build` + SSR build.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, getMeta, getAlternates, getStructuredData, indexableRoutes } = await import(path.join(root, 'dist-ssr/entry-server.js'));
const SITE_URL = 'https://gizmentor.com';

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function head(route, meta) {
  const ld = JSON.stringify(getStructuredData(route)).replace(/</g, '\\u003c');
  const alternates = Object.entries(getAlternates(route)).map(
    ([lang, href]) => `<link rel="alternate" hreflang="${lang}" href="${href}" />`,
  );
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${meta.canonical}" />`,
    ...alternates,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="GizMentor" />',
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:image" content="${meta.ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<script type="application/ld+json">${ld}</script>`,
  ].join('\n    ');
}

async function write(route, outFile, renderPath = route) {
  const meta = getMeta(route);
  const html = template
    .replace('<html lang="en" dir="ltr">', `<html lang="${meta.lang}" dir="${meta.dir}">`)
    .replace('<!--app-head-->', head(route, meta))
    .replace('<div id="root"></div>', `<div id="root" data-path="${esc(route)}">${render(renderPath)}</div>`);
  if (!html.includes(`lang="${meta.lang}" dir="${meta.dir}"`)) throw new Error('index.html <html> tag changed; update prerender.mjs');
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
  console.log('  prerendered', route.padEnd(24), '→', path.relative(dist, outFile));
}

for (const route of indexableRoutes) {
  await write(route, route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html'));
}
// Served by the host for any unknown path; the client re-renders it in the right language.
await write('/404', path.join(dist, '404.html'), '/__not-found__');

const today = new Date().toISOString().slice(0, 10);
const loc = (r) => `${SITE_URL}${r === '/' ? '/' : r}`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexableRoutes
  .map((r) => {
    const alts = Object.entries(getAlternates(r))
      .map(([lang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`)
      .join('');
    return `  <url>\n    <loc>${loc(r)}</loc>\n    <lastmod>${today}</lastmod>${alts}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`  ${indexableRoutes.length} pages · sitemap.xml + robots.txt written`);
