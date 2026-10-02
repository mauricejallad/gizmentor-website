import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';
import magfusionLight from '../../assets/magfusion/magfusion-render.webp';
import magfusionDark from '../../assets/magfusion/magfusion-product.webp';
import easelectLight from '../../assets/easelect/easelect-web-light.webp';
import easelectDark from '../../assets/easelect/easelect-web-dark.webp';
import ThemedImage from './ThemedImage';
import CircleIcon from './CircleIcon';

const media = {
  easelect: { light: easelectLight, dark: easelectDark, w: 1400, h: 809 },
  magfusion: { light: magfusionLight, dark: magfusionDark, w: 1200, h: 1200 },
};

/** The two portfolio ventures as equal tiles: image, number, name, description, facts. Used on Home and Ventures. */
export default function VentureCards() {
  const { t, to } = useLocale();
  return (
    <div className="ventures-grid">
      {['easelect', 'magfusion'].map((key, i) => {
        const c = t.common.ventureCards[key];
        const v = ventures[key];
        const m = media[key];
        return (
          <Link key={key} to={to(v.path)} className={`venture-card reveal ${i ? 'reveal-delay-1' : ''}`} data-venture={key}>
            <span className="venture-media">
              <ThemedImage light={m.light} dark={m.dark} alt={c.imageAlt} width={m.w} height={m.h} />
            </span>
            <div className="venture-body">
              <p className="venture-top">
                <span className="venture-kind">{c.kind}</span>
                <span className="venture-num" aria-hidden="true">0{i + 1}</span>
              </p>
              <h3 className="venture-name latin">{v.name}</h3>
              <p className="venture-desc">{c.desc}</p>
              <dl className="venture-facts">
                {c.facts.map((f) => (
                  <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                ))}
              </dl>
              <span className="venture-link"><CircleIcon /><span>{c.cta}</span></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
