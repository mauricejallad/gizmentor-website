import { useLocale } from '../../i18n/useLocale';

export default function JourneySteps() {
  const { t } = useLocale();
  return (
    <ol className="journey">
      {t.easelect.journey.stages.map((s, i) => (
        <li key={s.title} className={`journey-stage reveal reveal-delay-${(i % 3) + 1}`}>
          <span className="journey-index" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
        </li>
      ))}
    </ol>
  );
}
