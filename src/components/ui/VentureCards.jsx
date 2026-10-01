import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import { ventures } from '../../config/site';
import magfusionImg from '../../assets/magfusion/magfusion-product.webp';
import { screens } from '../easelect/screens';

function Facts({ facts }) {
  return (
    <dl className="venture-facts">
      {facts.map((f) => (
        <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
      ))}
    </dl>
  );
}

/** The two portfolio ventures as equal cards with fact rows — used on Home and Ventures. */
export default function VentureCards() {
  const { t, to } = useLocale();
  const { easelect, magfusion } = t.common.ventureCards;
  return (
    <div className="ventures-grid">
      <article className="venture-card reveal" data-venture="easelect">
        <div className="venture-split">
          <div className="venture-body">
            <p className="venture-kind"><span className="venture-cue" aria-hidden="true" />{easelect.kind}</p>
            <h3 className="venture-name">{ventures.easelect.name}</h3>
            <p className="venture-desc">{easelect.desc}</p>
          </div>
          <div className="venture-media">
            <img src={screens.home.src} alt={t.easelect.screens.home} width={screens.home.w} height={screens.home.h} loading="lazy" />
          </div>
        </div>
        <Facts facts={easelect.facts} />
        <Link to={to(ventures.easelect.path)} className="venture-link">
          {easelect.cta}<ArrowRight size={16} aria-hidden="true" className="flip-rtl" />
        </Link>
      </article>

      <article className="venture-card reveal reveal-delay-1" data-venture="magfusion">
        <div className="venture-split">
          <div className="venture-body">
            <p className="venture-kind"><span className="venture-cue" aria-hidden="true" />{magfusion.kind}</p>
            <h3 className="venture-name">{ventures.magfusion.name}</h3>
            <p className="venture-desc">{magfusion.desc}</p>
          </div>
          <div className="venture-media">
            <img src={magfusionImg} alt={magfusion.imageAlt} width="819" height="1024" loading="lazy" />
          </div>
        </div>
        <Facts facts={magfusion.facts} />
        <Link to={to(ventures.magfusion.path)} className="venture-link">
          {magfusion.cta}<ArrowRight size={16} aria-hidden="true" className="flip-rtl" />
        </Link>
      </article>
    </div>
  );
}
