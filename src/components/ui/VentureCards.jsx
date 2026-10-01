import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';
import magfusionImg from '../../assets/magfusion/magfusion-render.webp';
import easelectImg from '../../assets/easelect/easelect-in-hand.webp';

const media = {
  easelect: { src: easelectImg, w: 800, h: 1200 },
  magfusion: { src: magfusionImg, w: 1200, h: 1200 },
};

/** The two portfolio ventures as equal cards: image, description, fact rows, link. Used on Home and Ventures. */
export default function VentureCards() {
  const { t, to } = useLocale();
  return (
    <div className="ventures-grid">
      {['easelect', 'magfusion'].map((key, i) => {
        const c = t.common.ventureCards[key];
        const v = ventures[key];
        const m = media[key];
        return (
          <article key={key} className={`venture-card reveal ${i ? 'reveal-delay-1' : ''}`} data-venture={key}>
            <div className="venture-media">
              <img src={m.src} alt={c.imageAlt} width={m.w} height={m.h} loading="lazy" />
            </div>
            <div className="venture-body">
              <p className="venture-kind"><span className="venture-cue" aria-hidden="true" />{c.kind}</p>
              <h3 className="venture-name">{v.name}</h3>
              <p className="venture-desc">{c.desc}</p>
            </div>
            <dl className="venture-facts">
              {c.facts.map((f) => (
                <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
              ))}
            </dl>
            <Link to={to(v.path)} className="venture-link">
              {c.cta}<ArrowRight size={16} aria-hidden="true" className="flip-rtl" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
