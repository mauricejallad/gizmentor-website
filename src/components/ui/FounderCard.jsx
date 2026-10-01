import { founder } from '../../config/site';
import { founderBio } from '../../content/corporate';

export default function FounderCard({ compact = false }) {
  const initials = founder.name.split(' ').map((n) => n[0]).join('');
  return (
    <article className={`founder reveal ${compact ? 'is-compact' : ''}`}>
      <div className="founder-portrait" aria-hidden={!founder.photo}>
        {founder.photo ? (
          <img src={founder.photo} alt={founder.name} width="320" height="400" loading="lazy" />
        ) : (
          <span className="founder-initials">{initials}</span>
        )}
      </div>
      <div className="founder-body">
        <p className="eyebrow">Leadership</p>
        <h3 className="founder-name">{founder.name}</h3>
        <p className="founder-title">{founder.title}</p>
        {founderBio.map((p) => <p key={p.slice(0, 20)} className="founder-text">{p}</p>)}
      </div>
    </article>
  );
}
