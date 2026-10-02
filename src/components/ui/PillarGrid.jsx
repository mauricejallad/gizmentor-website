import { useLocale } from '../../i18n/useLocale';

/** Grey cards ending in a large red index. Defaults to the Build / Launch / Scale pillars; pass `items` to reuse. */
export default function PillarGrid({ items }) {
  const { t } = useLocale();
  const list = items || t.common.pillars;
  return (
    <ol className="index-cards">
      {list.map((p, i) => (
        <li key={p.key || p.title} className={`index-card reveal reveal-delay-${(i % 3) + 1}`}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <span className="index-card-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        </li>
      ))}
    </ol>
  );
}
