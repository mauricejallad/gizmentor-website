import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import { localizePath, stripLocale } from '../../i18n/locales';
import useTheme, { setTheme } from '../../hooks/useTheme';

/** Link to the current page in the other language, keeping the query string and hash. */
export function LanguageSwitch({ className = '' }) {
  const { t } = useLocale();
  const { pathname, search, hash } = useLocation();
  const { label, lang, aria } = t.common.language;
  return (
    <Link
      to={localizePath(lang, stripLocale(pathname)) + search + hash}
      className={`tool-link ${className}`.trim()}
      lang={lang}
      hrefLang={lang}
      aria-label={aria}
    >
      {label}
    </Link>
  );
}

/** Both icons are rendered; CSS shows the one for the active theme, so there is no flash before hydration. */
export function ThemeToggle() {
  const { t } = useLocale();
  const theme = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className="tool-button theme-toggle"
      aria-label={next === 'dark' ? t.common.theme.toDark : t.common.theme.toLight}
      onClick={() => setTheme(next)}
    >
      <Moon size={18} strokeWidth={1.7} aria-hidden="true" className="theme-icon-moon" />
      <Sun size={18} strokeWidth={1.7} aria-hidden="true" className="theme-icon-sun" />
    </button>
  );
}
