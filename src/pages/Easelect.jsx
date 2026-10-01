import { Globe, Smartphone } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import CapabilityGrid from '../components/ui/CapabilityGrid';
import CtaBand from '../components/ui/CtaBand';
import StatusBadge, { StatusList } from '../components/ui/StatusBadge';
import AppScreens from '../components/easelect/AppScreens';
import JourneySteps from '../components/easelect/JourneySteps';
import { useLocale } from '../i18n/useLocale';
import { ventures } from '../config/site';

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

      <Section eyebrow={e.problem.eyebrow} title={e.problem.title}>
        <ul className="card-grid card-grid-3">
          {e.problem.items.map((p, i) => (
            <li key={p.title} className={`card reveal reveal-delay-${i + 1}`}><h3>{p.title}</h3><p>{p.body}</p></li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow={e.solution.eyebrow} title={e.solution.title} width="narrow">
        <p className="statement reveal">{e.solution.statement}<span className="text-muted">{e.solution.muted}</span></p>
      </Section>

      <Section eyebrow={e.journey.eyebrow} title={e.journey.title}>
        <JourneySteps />
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

      <Section tone="muted" eyebrow={e.technology.eyebrow} title={e.technology.title}>
        <CapabilityGrid items={e.technology.items} />
      </Section>

      <Section layout="split" eyebrow={e.market.eyebrow} title={e.market.title} lead={e.market.lead}>
        <ul className="point-list reveal">
          {e.market.points.map((p) => <li key={p.strong}><strong>{p.strong}</strong><span>{p.text}</span></li>)}
        </ul>
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
