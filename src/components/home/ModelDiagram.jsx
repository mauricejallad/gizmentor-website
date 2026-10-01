import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';

/**
 * Hero diagram: shared capabilities → GizMentor operating model → ventures.
 * Built from HTML so it reflows to a single column on small screens and mirrors in Arabic.
 */
export default function ModelDiagram() {
  const { t } = useLocale();
  const d = t.home.diagram;
  return (
    <figure className="diagram reveal reveal-delay-2" aria-labelledby="diagram-caption">
      <div className="diagram-grid">
        <div className="diagram-col">
          <p className="diagram-label">{d.capabilities}</p>
          <ul className="diagram-chips">
            {d.capabilityItems.map((c) => <li key={c} className="chip"><span className="chip-dot" aria-hidden="true" />{c}</li>)}
          </ul>
        </div>

        <div className="diagram-link diagram-link-in" aria-hidden="true"><span className="bracket" /><span className="wire" /></div>

        <div className="diagram-col diagram-core-col">
          <div className="diagram-core">
            <p className="diagram-core-head"><span className="latin">GizMentor</span><span className="core-dot" aria-hidden="true" /></p>
            <ol className="diagram-steps">
              {t.common.pillars.map((p, i) => (
                <li key={p.key}><span className="step-index">0{i + 1}</span><span>{p.title}</span></li>
              ))}
            </ol>
          </div>
        </div>

        <div className="diagram-link diagram-link-out" aria-hidden="true"><span className="wire" /><span className="bracket" /></div>

        <div className="diagram-col">
          <p className="diagram-label">{d.ventures}</p>
          <ul className="diagram-ventures">
            {['easelect', 'magfusion'].map((k) => (
              <li key={k} className="diagram-venture" data-venture={k}>
                <span className="diagram-venture-head">
                  <span className="diagram-venture-name">{ventures[k].name}</span>
                  <span className="status status-live status-plain"><span className="status-dot" aria-hidden="true" />{d[k].status}</span>
                </span>
                <span className="diagram-venture-desc">{d[k].desc}</span>
              </li>
            ))}
            <li className="diagram-venture is-next">{d.next}</li>
          </ul>
        </div>
      </div>
      <figcaption id="diagram-caption" className="diagram-caption"><strong>{d.label}.</strong> {d.caption}</figcaption>
    </figure>
  );
}
