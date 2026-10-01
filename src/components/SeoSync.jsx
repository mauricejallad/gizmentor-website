import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAlternates, getMeta } from '../config/seo';

function setAttr(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps <html lang/dir>, <title>, description, canonical, hreflang and OG tags in sync on client-side navigation. */
export default function SeoSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = getMeta(pathname);
    const root = document.documentElement;
    root.lang = m.lang;
    root.dir = m.dir;
    document.title = m.title;
    setAttr('meta[name="description"]', 'content', m.description);
    setAttr('link[rel="canonical"]', 'href', m.canonical);
    setAttr('meta[property="og:title"]', 'content', m.title);
    setAttr('meta[property="og:description"]', 'content', m.description);
    setAttr('meta[property="og:url"]', 'content', m.canonical);
    setAttr('meta[property="og:image"]', 'content', m.ogImage);
    setAttr('meta[property="og:locale"]', 'content', m.ogLocale);
    Object.entries(getAlternates(pathname)).forEach(([lang, href]) => {
      setAttr(`link[rel="alternate"][hreflang="${lang}"]`, 'href', href);
    });
  }, [pathname]);
  return null;
}
