import { Languages } from 'lucide-react';
import BrandMark from '../brand/BrandMark';
import { useLocale } from '../../i18n/useLocale';

/**
 * Wrapper for the legal pages: a slate band with a display word, then the document on white.
 * The documents are published in English only; on the Arabic site the band carries an Arabic
 * title and a notice, and the English text keeps lang="en" / dir="ltr".
 */
export default function LegalPage({ kind, children }) {
  const { t } = useLocale();
  const legal = t.legal;
  return (
    <>
      <div className="legal-hero">
        <BrandMark variant="outline" className="page-hero-mark" />
        <div className="container">
          <p className="hero-word" aria-hidden="true"><span>{t.common.footer.legal}</span></p>
          {legal && (
            <>
              {/* Not a heading: the English document's <h1> stays the page's single h1. */}
              <p className="legal-hero-title">{legal.titles[kind]}</p>
              <p className="legal-hero-notice"><Languages size={18} aria-hidden="true" />{legal.notice}</p>
            </>
          )}
        </div>
      </div>
      <div className="page-terms container container-narrow">
        <div lang="en" dir="ltr">{children}</div>
      </div>
    </>
  );
}
