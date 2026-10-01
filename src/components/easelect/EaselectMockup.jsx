import { Check, Search, Sparkles, Store } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';

/**
 * Illustrative Easelect conversation, built in HTML/CSS (no image weight).
 * Product names are deliberately generic — replace with real screenshots when available.
 */
export default function EaselectMockup({ className = '' }) {
  const { t } = useLocale();
  const m = t.easelect.mockup;
  return (
    <figure className={`es-mock ${className}`.trim()}>
      <div className="es-screen" aria-hidden="true">
        <div className="es-appbar">
          <span className="es-wordmark latin">easelect</span>
          <span className="es-appbar-pill">{m.pill}</span>
        </div>
        <div className="es-msg es-step" style={{ '--i': 0 }}>{m.message}</div>
        <div className="es-card es-step" style={{ '--i': 1 }}>
          <p className="es-card-label"><Sparkles size={13} /> {m.requirements}</p>
          <ul className="es-tags">{m.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
        <div className="es-card es-step" style={{ '--i': 2 }}>
          <p className="es-card-label"><Search size={13} /> {m.researching}</p>
          <ul className="es-sources">{m.sources.map((s) => <li key={s}><Check size={13} /> {s}</li>)}</ul>
        </div>
        <div className="es-card es-pick es-step" style={{ '--i': 3 }}>
          <p className="es-pick-badge">{m.badge}</p>
          <p className="es-pick-name">{m.pickName}</p>
          <p className="es-pick-why">{m.pickWhy}</p>
          <div className="es-pick-row">
            <span>{m.compared}</span>
            <span className="es-pick-cta"><Store size={13} /> {m.prices}</span>
          </div>
        </div>
      </div>
      <figcaption className="es-caption">{m.caption}</figcaption>
    </figure>
  );
}
