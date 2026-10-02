/**
 * Locale plumbing shared by the app, the SEO config and the build-time prerender.
 * English lives at the root (/about), Arabic under /ar (/ar/about).
 */
import en from '../content/en.js';
import ar from '../content/ar.js';

export const LOCALES = {
  en: { code: 'en', dir: 'ltr', prefix: '', ogLocale: 'en_AE', content: en },
  ar: { code: 'ar', dir: 'rtl', prefix: '/ar', ogLocale: 'ar_AE', content: ar },
};

export const DEFAULT_LOCALE = 'en';

/** 'ar' for /ar and /ar/..., otherwise 'en'. */
export function localeFromPath(pathname) {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : DEFAULT_LOCALE;
}

/** The locale-neutral path: /ar/about → /about, /ar → /. */
export function stripLocale(pathname) {
  if (localeFromPath(pathname) !== 'ar') return pathname;
  return pathname.slice(3) || '/';
}

/** Prefix a locale-neutral path for a locale: ('ar', '/about') → /ar/about. Leaves query strings and hashes intact. */
export function localizePath(locale, path) {
  const { prefix } = LOCALES[locale];
  if (!prefix) return path;
  if (path === '/') return prefix;
  if (path.startsWith('/?') || path.startsWith('/#')) return prefix + path.slice(1);
  return prefix + path;
}
