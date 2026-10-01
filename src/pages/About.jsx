import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import NameEquation from '../components/home/NameEquation';
import { useLocale } from '../i18n/useLocale';
import { company } from '../config/site';

export default function About() {
  const { t } = useLocale();
  const a = t.about;
  const { address } = t.common;
  return (
    <>
      <PageHero id="about-title" eyebrow={a.hero.eyebrow} title={a.hero.title} lead={a.hero.lead} />

      <Section layout="split" eyebrow={a.story.eyebrow} title={a.story.title}>
        {a.story.body.map((p) => <p key={p.slice(0, 24)} className="section-lead reveal">{p}</p>)}
        <NameEquation />
      </Section>

      <Section tone="muted" eyebrow={a.vision.eyebrow} title={a.vision.title}>
        <div className="card-grid card-grid-2">
          {a.vision.items.map((v, i) => (
            <article key={v.label} className={`card card-statement reveal reveal-delay-${i + 1}`}>
              <p className="eyebrow">{v.label}</p>
              <p className="card-statement-text">{v.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow={a.evolution.eyebrow} title={a.evolution.title}>
        <ol className="timeline timeline-labelled">
          {a.evolution.items.map((s, i) => (
            <li key={s.title} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
              <p className="timeline-label">{s.label}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted" layout="split" eyebrow={a.principles.eyebrow} title={a.principles.title}>
        <dl className="facts facts-principles reveal">
          {a.principles.items.map((p) => <div key={p.title}><dt>{p.title}</dt><dd>{p.body}</dd></div>)}
        </dl>
      </Section>

      <Section eyebrow={a.whatWeDo.eyebrow} title={a.whatWeDo.title}>
        <ul className="card-grid card-grid-4">
          {a.whatWeDo.items.map((item, i) => (
            <li key={item.title} className={`card reveal reveal-delay-${(i % 3) + 1}`}><h3>{item.title}</h3><p>{item.body}</p></li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" layout="split" eyebrow={a.facts.eyebrow} title={a.facts.title}>
        <dl className="facts reveal">
          <div><dt>{a.facts.displayName}</dt><dd className="latin">{company.legalName}</dd></div>
          <div><dt>{a.facts.legalEntity}</dt><dd className="latin">{company.registeredName}</dd></div>
          <div><dt>{a.facts.jurisdiction}</dt><dd>{t.common.jurisdiction}</dd></div>
          <div><dt>{a.facts.authority}</dt><dd>{t.common.issuingAuthority}</dd></div>
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
