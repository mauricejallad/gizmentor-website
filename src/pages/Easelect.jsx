import { Globe, Smartphone, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import StatusBadge, { StatusList } from '../components/ui/StatusBadge';
import AppScreens from '../components/easelect/AppScreens';
import JourneySteps from '../components/easelect/JourneySteps';
import { useLocale } from '../i18n/useLocale';
import { ventures } from '../config/site';
import challengeImg from '../assets/easelect/easelect-challenge.webp';
import electronicsImg from '../assets/easelect/category-electronics.webp';
import fashionImg from '../assets/easelect/category-fashion.webp';
import accessoriesImg from '../assets/easelect/category-accessories.webp';

const categoryImages = { electronics: electronicsImg, fashion: fashionImg, accessories: accessoriesImg };

export default function Easelect() {
  const { t } = useLocale();
  const e = t.easelect;
  const venture = ventures.easelect;
  const [web, mobile] = venture.status;
  return (
    <div data-venture="easelect">
      <section className="hero hero-split" aria-labelledby="es-title">
        <div className="container hero-media-grid">
          <div>
            <p className="badge reveal"><span className="badge-dot" aria-hidden="true" />{e.hero.eyebrow}</p>
            <h1 id="es-title" className="display reveal reveal-delay-1">
              <span className="latin">{e.hero.title}</span> <span className="text-muted">{e.hero.tagline}</span>
            </h1>
            <p className="hero-lead reveal reveal-delay-2">{e.hero.lead}</p>
            <StatusList items={venture.status} />
            <div className="btn-row reveal reveal-delay-3">
              <Button href={venture.url}>{e.hero.primary}</Button>
              <Button to="/contact?type=easelect" variant="secondary">{e.hero.secondary}</Button>
            </div>
          </div>
          <div className="reveal reveal-delay-2"><AppScreens /></div>
        </div>
      </section>

      {/* The customer's challenge */}
      <Section eyebrow={e.problem.eyebrow} title={e.problem.title}>
        <div className="split-media">
          <div className="media-frame media-light reveal"><img src={challengeImg} alt={e.problem.imageAlt} width="1536" height="1024" loading="lazy" /></div>
          <ul className="issue-list reveal reveal-delay-1">
            {e.problem.items.map((item) => (
              <li key={item}><span className="issue-icon" aria-hidden="true"><X size={14} strokeWidth={2} /></span>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Understanding before recommending */}
      <Section tone="muted" eyebrow={e.solution.eyebrow} width="narrow">
        <p className="statement reveal">{e.solution.statement}<span className="text-muted">{e.solution.muted}</span></p>
      </Section>

      {/* The six-step journey, with real app screens */}
      <Section eyebrow={e.journey.eyebrow} title={e.journey.title}>
        <JourneySteps />
        <p className="fine journey-note reveal">{e.journey.continuity}</p>
      </Section>

      {/* Intelligence engine */}
      <Section tone="muted" eyebrow={e.engine.eyebrow} title={e.engine.title} lead={e.engine.lead}>
        <ol className="engine">
          {e.engine.steps.map((s, i) => (
            <li key={s.title} className={`engine-step reveal reveal-delay-${(i % 3) + 1}`}>
              <span className="engine-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={e.platform.eyebrow} title={e.platform.title}>
        <div className="card-grid card-grid-2">
          <article className="card reveal">
            <span className="icon-tile" aria-hidden="true"><Globe size={20} strokeWidth={1.6} /></span>
            <h3>{e.platform.web.title}</h3>
            <p>{e.platform.web.body}</p>
            <StatusBadge label={t.common.status[web.key]} tone={web.tone} />
          </article>
          <article className="card reveal reveal-delay-1">
            <span className="icon-tile" aria-hidden="true"><Smartphone size={20} strokeWidth={1.6} /></span>
            <h3>{e.platform.mobile.title}</h3>
            <p>{e.platform.mobile.body}</p>
            <StatusBadge label={t.common.status[mobile.key]} tone={mobile.tone} />
          </article>
        </div>
      </Section>

      {/* Categories and markets */}
      <Section tone="muted" eyebrow={e.categories.eyebrow} title={e.categories.title} lead={e.categories.note}>
        <ul className="card-grid card-grid-3">
          {e.categories.items.map((c, i) => (
            <li key={c.title} className={`card card-media reveal reveal-delay-${i + 1}`}>
              <img src={categoryImages[c.key]} alt={c.imageAlt} width="800" height="800" loading="lazy" />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
        <dl className="markets reveal">
          <div className="market is-now">
            <dt>{e.categories.marketLabel}</dt>
            <dd className="market-name">{e.categories.market}</dd>
            <dd className="market-body">{e.categories.marketBody}</dd>
          </div>
          <div className="market">
            <dt>{e.categories.nextLabel}</dt>
            <dd className="market-name">{e.categories.next}</dd>
            <dd className="market-body">{e.categories.nextBody}</dd>
          </div>
        </dl>
      </Section>

      {/* Partnership value and business model */}
      <Section layout="split" eyebrow={e.partnership.eyebrow} title={e.partnership.title}>
        <dl className="facts facts-principles reveal">
          {e.partnership.items.map((p) => <div key={p.title}><dt>{p.title}</dt><dd>{p.body}</dd></div>)}
        </dl>
        <div className="note-panel reveal">
          <p className="note-panel-title">{e.partnership.modelTitle}</p>
          <p>{e.partnership.model}</p>
        </div>
      </Section>

      <CtaBand
        title={e.cta.title}
        body={e.cta.body}
        primary={{ href: venture.url, label: e.cta.primary }}
        secondary={{ to: '/contact?type=easelect', label: e.cta.secondary }}
      />
    </div>
  );
}
