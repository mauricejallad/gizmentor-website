import { useLocale } from '../../i18n/useLocale';

/** Numbered steps. Defaults to the Build / Launch / Scale pillars; pass `items` to reuse the layout. */
export default function PillarGrid({ items }) {
  const { t } = useLocale();
  const list = items || t.common.pillars;
  return (
    <ol className="pillars">
      {list.map((p, i) => (
        <li key={p.key || p.title} className={`pillar reveal reveal-delay-${i + 1}`}>
          <span className="pillar-index" aria-hidden="true">0{i + 1}</span>
          <h3 className="pillar-title">{p.title}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
