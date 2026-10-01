import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeta } from '../config/seo';

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps <title>, description, canonical and OG tags in sync on client-side navigation. */
export default function SeoSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = getMeta(pathname);
    document.title = m.title;
    setMeta('meta[name="description"]', 'content', m.description);
    setMeta('link[rel="canonical"]', 'href', m.canonical);
    setMeta('meta[property="og:title"]', 'content', m.title);
    setMeta('meta[property="og:description"]', 'content', m.description);
    setMeta('meta[property="og:url"]', 'content', m.canonical);
    setMeta('meta[property="og:image"]', 'content', m.ogImage);
  }, [pathname]);
  return null;
}
