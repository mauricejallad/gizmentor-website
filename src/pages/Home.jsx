import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import PillarGrid from '../components/ui/PillarGrid';
import CapabilityGrid from '../components/ui/CapabilityGrid';
import VentureCards from '../components/ui/VentureCards';
import LinkRows from '../components/ui/LinkRows';
import CtaBand from '../components/ui/CtaBand';
import ModelDiagram from '../components/home/ModelDiagram';
import NameEquation from '../components/home/NameEquation';
import { useLocale } from '../i18n/useLocale';

export default function Home() {
  const { t } = useLocale();
  const h = t.home;
  return (
    <>
      {/* 1 — Hero: statement, then the operating-model diagram */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="badge reveal"><span className="badge-dot" aria-hidden="true" />{h.hero.badge}</p>
              <h1 id="hero-title" className="display reveal reveal-delay-1">{h.hero.title}</h1>
            </div>
            <div>
              <p className="hero-lead reveal reveal-delay-2">{h.hero.lead}</p>
              <div className="btn-row reveal reveal-delay-3">
                <Button to="/contact?type=partnership">{h.hero.primary}</Button>
                <Button to="#model" variant="secondary" icon={false}>{h.hero.secondary}</Button>
              </div>
            </div>
          </div>
          <ModelDiagram />
        </div>
      </section>

      {/* 2 — Who we are: philosophy and the name */}
      <Section layout="split" eyebrow={h.philosophy.eyebrow} title={h.philosophy.title} lead={h.philosophy.body}>
        <NameEquation />
        <div className="btn-row"><Button to="/about" variant="secondary">{h.philosophy.more}</Button></div>
      </Section>

      {/* 3 — Ventures */}
      <Section eyebrow={h.ventures.eyebrow} title={h.ventures.title}>
        <VentureCards />
      </Section>

      {/* 4 — Partnerships: the primary audience */}
      <Section tone="muted" layout="split" eyebrow={h.partners.eyebrow} title={h.partners.title} lead={h.partners.lead}>
        <LinkRows rows={h.partners.rows} />
      </Section>

      {/* 5 — Operating model */}
      <Section id="model" eyebrow={h.model.eyebrow} title={h.model.title} lead={h.model.lead}>
        <PillarGrid />
      </Section>

      {/* 6 — Capabilities */}
      <Section eyebrow={h.capabilities.eyebrow} title={h.capabilities.title} lead={h.capabilities.lead}>
        <CapabilityGrid />
      </Section>

      {/* 7 — Close */}
      <CtaBand
        title={h.cta.title}
        body={h.cta.body}
        primary={{ to: '/contact?type=investor', label: h.cta.primary }}
        secondary={{ to: '/investors', label: h.cta.secondary }}
      />
    </>
  );
}
