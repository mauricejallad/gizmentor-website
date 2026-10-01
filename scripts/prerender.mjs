/**
 * Build-time prerender: writes dist/<route>/index.html for every indexable route,
 * dist/404.html, sitemap.xml and robots.txt. Runs after `vite build` + SSR build.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, getMeta, getStructuredData, indexableRoutes } = await import(path.join(root, 'dist-ssr/entry-server.js'));
const SITE_URL = 'https://gizmentor.com';

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function head(route, meta) {
  const ld = JSON.stringify(getStructuredData(route)).replace(/</g, '\\u003c');
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${meta.canonical}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="GizMentor" />',
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

async function write(route, outFile) {
  const meta = getMeta(route === '/404' ? '/404' : route);
  const html = template
    .replace('<!--app-head-->', head(route, meta))
    .replace('<div id="root"></div>', `<div id="root">${render(route === '/404' ? '/__not-found__' : route)}</div>`);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
  console.log('  prerendered', route.padEnd(22), '→', path.relative(dist, outFile));
}

for (const route of indexableRoutes) {
  await write(route, route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html'));
}
await write('/404', path.join(dist, '404.html'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('  sitemap.xml + robots.txt written');
