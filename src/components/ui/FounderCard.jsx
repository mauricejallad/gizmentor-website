import { founder } from '../../config/site';
import { useLocale } from '../../i18n/useLocale';

export default function FounderCard() {
  const { t } = useLocale();
  const f = t.common.founder;
  return (
    <article className="founder reveal">
      <div className="founder-portrait">
        {founder.photo ? (
          <img src={founder.photo} alt={f.name} width="240" height="240" loading="lazy" />
        ) : (
          <span className="founder-initials latin" aria-hidden="true">{founder.initials}</span>
        )}
      </div>
      <div className="founder-id">
        <p className="eyebrow">{f.eyebrow}</p>
        <h2 className="founder-name">{f.name}</h2>
        <p className="founder-title">{f.title}</p>
      </div>
      <div className="founder-bio">
        {f.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </div>
    </article>
  );
}
