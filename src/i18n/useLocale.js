import { createContext, useContext } from 'react';

export const LocaleContext = createContext(null);

/** { locale, dir, t, to } — `t` is the content dictionary for the current locale. */
export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}
