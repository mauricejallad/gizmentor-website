import { useEffect, useRef } from 'react';

/**
 * A number that counts up when it scrolls into view. The final value is what gets prerendered,
 * so search engines and no-JS visitors see it; the count only runs for numbers below the fold,
 * and writes straight to the text node so React does not re-render every frame.
 * `value` is a string such as '08' — leading zeros are kept while counting.
 */
export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const target = parseInt(value, 10);
    if (!el || Number.isNaN(target)) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight) return undefined;
    const pad = (n) => String(n).padStart(value.length, '0');
    el.textContent = pad(0);
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 1400);
        el.textContent = pad(Math.round((1 - Math.pow(1 - p, 4)) * target));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); el.textContent = value; };
  }, [value]);

  return <span ref={ref} className={className}>{value}</span>;
}
