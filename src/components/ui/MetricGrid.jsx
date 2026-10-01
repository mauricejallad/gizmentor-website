/**
 * Reusable metrics band. Renders nothing when `metrics` is empty, so no
 * placeholder numbers ever reach production. Populate from config/site.js.
 *   metrics: [{ value: '12', label: 'Retail partners', note: 'As of Q4 2026' }]
 */
export default function MetricGrid({ metrics = [], caption }) {
  if (!metrics.length) return null;
  return (
    <figure className="metrics reveal">
      <dl className="metrics-grid">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <dt className="metric-label">{m.label}</dt>
            <dd className="metric-value">{m.value}</dd>
            {m.note && <dd className="metric-note">{m.note}</dd>}
          </div>
        ))}
      </dl>
      {caption && <figcaption className="metrics-caption">{caption}</figcaption>}
    </figure>
  );
}
