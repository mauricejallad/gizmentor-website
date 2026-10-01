import { useSyncExternalStore } from 'react';

/**
 * Light / dark theme. The inline script in index.html sets <html data-theme> before first paint
 * (stored choice, else the system setting); this hook reads and changes it afterwards.
 * Until the visitor picks a theme, it keeps following the system setting.
 */
const STORAGE_KEY = 'theme';
const THEME_COLORS = { light: '#ffffff', dark: '#0e1015' };
const listeners = new Set();

function read() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function apply(theme) {
  const root = document.documentElement;
  // Switch every colour at once rather than letting each element's transition fade at its own speed.
  root.classList.add('theme-switching');
  root.dataset.theme = theme;
  document.head.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  listeners.forEach((l) => l());
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
}

function storedChoice() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(listener) {
  listeners.add(listener);
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemChange = (e) => {
    if (!storedChoice()) apply(e.matches ? 'dark' : 'light');
  };
  mq.addEventListener('change', onSystemChange);
  return () => {
    listeners.delete(listener);
    mq.removeEventListener('change', onSystemChange);
  };
}

export function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage blocked (private mode): the choice still applies for this page view.
  }
  apply(theme);
}

/** 'light' | 'dark'. Prerendered markup assumes light; the client value takes over right after hydration. */
export default function useTheme() {
  return useSyncExternalStore(subscribe, read, () => 'light');
}
