import { useLocale } from '../../i18n/useLocale';

/**
 * Reusable metrics band. Renders nothing when `metrics` is empty, so no
 * placeholder numbers ever reach production. Populate from config/site.js:
 *   { value: '12', label: { en: 'Retail partners', ar: 'شركاء التجزئة' }, note: { en: 'As of Q4 2026', ar: '…' } }
 */
export default function MetricGrid({ metrics = [], caption }) {
  const { locale } = useLocale();
  if (!metrics.length) return null;
  return (
    <section className="section section-tight">
      <div className="container">
        <figure className="metrics reveal">
          <dl className="metrics-grid">
            {metrics.map((m) => (
              <div key={m.label.en} className="metric">
                <dt className="metric-label">{m.label[locale]}</dt>
                <dd className="metric-value">{m.value}</dd>
                {m.note && <dd className="metric-note">{m.note[locale]}</dd>}
              </div>
            ))}
          </dl>
          {caption && <figcaption className="metrics-caption">{caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
