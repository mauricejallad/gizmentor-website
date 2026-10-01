import { useMemo } from 'react';
import { LOCALES, localizePath } from './locales';
import { LocaleContext } from './useLocale';

export function LocaleProvider({ locale, children }) {
  const value = useMemo(() => {
    const l = LOCALES[locale];
    return {
      locale,
      dir: l.dir,
      t: l.content,
      /** Localise an internal path for the current locale. */
      to: (path) => localizePath(locale, path),
    };
  }, [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
