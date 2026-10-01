import { Languages } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';

/**
 * Wrapper for the legal pages. They are published in English only; on the Arabic site the page
 * gets an Arabic title and a notice, and the English text keeps lang="en" / dir="ltr".
 */
export default function LegalPage({ kind, children }) {
  const { t } = useLocale();
  const legal = t.legal;
  return (
    <div className="page-terms container container-narrow">
      {legal && (
        <header className="legal-notice">
          {/* Not a heading: the English document's <h1> stays the page's single h1. */}
          <p className="legal-notice-title">{legal.titles[kind]}</p>
          <p><Languages size={16} aria-hidden="true" />{legal.notice}</p>
        </header>
      )}
      <div lang="en" dir="ltr">{children}</div>
    </div>
  );
}
