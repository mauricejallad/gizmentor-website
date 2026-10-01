import { useEffect } from 'react';

/**
 * Adds `.visible` to `.reveal` elements as they enter the viewport.
 * Re-scans whenever `key` changes (pass the pathname). Content is only hidden
 * when JS is running (see `html.js` in styles), so prerendered HTML stays readable.
 */
export default function useScrollReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
