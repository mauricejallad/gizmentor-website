import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import PillarGrid from '../components/ui/PillarGrid';
import CapabilityGrid from '../components/ui/CapabilityGrid';
import CtaBand from '../components/ui/CtaBand';
import { useLocale } from '../i18n/useLocale';
import { company } from '../config/site';

export default function About() {
  const { t } = useLocale();
  const a = t.about;
  const { address } = t.common;
  return (
    <>
      <PageHero id="about-title" eyebrow={a.hero.eyebrow} title={a.hero.title} lead={a.hero.lead} />

      <Section eyebrow={a.whatWeDo.eyebrow} title={a.whatWeDo.title}>
        <ul className="card-grid card-grid-4">
          {a.whatWeDo.items.map((item, i) => (
            <li key={item.title} className={`card reveal reveal-delay-${(i % 3) + 1}`}><h3>{item.title}</h3><p>{item.body}</p></li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow={a.model.eyebrow} title={a.model.title}>
        <PillarGrid />
      </Section>

      <Section eyebrow={a.capabilities.eyebrow} title={a.capabilities.title}>
        <CapabilityGrid />
      </Section>

      <Section layout="split" eyebrow={a.facts.eyebrow} title={a.facts.title}>
        <dl className="facts reveal">
          <div><dt>{a.facts.entity}</dt><dd className="latin">{company.legalName}</dd></div>
          <div><dt>{a.facts.headquarters}</dt><dd>{address.line1}, {address.line2}, {address.city}</dd></div>
          <div><dt>{a.facts.licensed}</dt><dd>{t.common.licensedActivities.join(' · ')}</dd></div>
          <div><dt>{a.facts.trademark}</dt><dd>{t.common.trademark}</dd></div>
        </dl>
      </Section>

      <CtaBand
        title={a.cta.title}
        primary={{ to: '/contact', label: a.cta.primary }}
        secondary={{ to: '/ventures', label: a.cta.secondary }}
      />
    </>
  );
}
