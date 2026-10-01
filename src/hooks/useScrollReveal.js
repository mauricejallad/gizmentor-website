import { useEffect } from 'react';

/**
 * Fades `.reveal` elements in as they scroll into view. Re-scans whenever `key` changes (pass the pathname).
 *
 * Prerendered content is visible by default: hiding only starts once this hook runs and adds
 * `html.reveal-ready`, and anything already on screen at that moment is marked visible first,
 * so nothing above the fold ever waits for JavaScript.
 */
export default function useScrollReveal(key) {
  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal:not(.visible)')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduced) {
      els.forEach((el) => el.classList.add('visible'));
      return undefined;
    }
    const fold = window.innerHeight;
    const below = [];
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) el.classList.add('visible');
      else below.push(el);
    });
    document.documentElement.classList.add('reveal-ready');

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
    below.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
