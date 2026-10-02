import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import PillarGrid from '../components/ui/PillarGrid';
import CtaBand from '../components/ui/CtaBand';
import { StatusList } from '../components/ui/StatusBadge';
import { useLocale } from '../i18n/useLocale';
import { ventures } from '../config/site';
import heroImg from '../assets/magfusion/magfusion-hero.webp';
import inHandImg from '../assets/magfusion/magfusion-in-hand.webp';
import lifestyleImg from '../assets/magfusion/magfusion-lifestyle.webp';
import thinImg from '../assets/magfusion/magfusion-thin.webp';
import magneticImg from '../assets/magfusion/magfusion-magnetic.webp';
import wiredImg from '../assets/magfusion/magfusion-wired.webp';
import deskImg from '../assets/magfusion/magfusion-desk.webp';
import runningImg from '../assets/magfusion/magfusion-running.webp';

const highlightImages = {
  thin: { src: thinImg, w: 819, h: 1024 },
  magnetic: { src: magneticImg, w: 800, h: 800 },
  wired: { src: wiredImg, w: 1024, h: 768 },
};

export default function MagFusion() {
  const { t } = useLocale();
  const m = t.magfusion;
  const venture = ventures.magfusion;
  const specs = m.specs.items.filter((s) => s.value);
  return (
    <div data-venture="magfusion">
      <PageHero
        id="mf-title"
        word={venture.family}
        eyebrow={m.hero.eyebrow}
        title={<><span className="latin">{venture.name}</span>. {m.hero.tagline}</>}
        lead={m.hero.summary}
        next="story"
        actions={
          <>
            <Button to="/contact?type=magfusion&product=magfusion-air">{m.hero.primary}</Button>
            <Button to="/contact?type=retail" variant="secondary">{m.hero.secondary}</Button>
          </>
        }
        media={<div className="banner"><img src={heroImg} alt={m.hero.imageAlt} width="1024" height="576" fetchPriority="high" /></div>}
      >
        <StatusList items={venture.status} />
      </PageHero>

      <Section id="story" eyebrow={m.story.eyebrow}>
        <p className="statement reveal">{m.story.text}</p>
      </Section>

      <section className="section highlights" aria-label={m.highlightsAria}>
        <div className="container">
          {m.highlights.map((h, i) => {
            const img = highlightImages[h.key];
            return (
              <article key={h.key} className={`highlight ${i % 2 ? 'is-reversed' : ''}`}>
                <div className="media-frame reveal">
                  <img src={img.src} alt={h.alt} width={img.w} height={img.h} loading="lazy" />
                </div>
                <div className="highlight-copy reveal reveal-delay-1">
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="section-title">{h.title}</h2>
                  <p className="section-lead">{h.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-tight" aria-label={m.galleryAria}>
        <div className="container gallery-grid">
          <div className="media-frame reveal"><img src={lifestyleImg} alt={m.gallery.lifestyle} width="1248" height="832" loading="lazy" /></div>
          <div className="media-frame reveal reveal-delay-1"><img src={inHandImg} alt={m.gallery.inHand} width="1000" height="1001" loading="lazy" /></div>
          <div className="media-frame reveal"><img src={runningImg} alt={m.gallery.running} width="1170" height="780" loading="lazy" /></div>
          <div className="media-frame reveal reveal-delay-1"><img src={deskImg} alt={m.gallery.desk} width="1248" height="832" loading="lazy" /></div>
        </div>
      </section>

      <Section tone="muted" layout="split" eyebrow={m.specs.eyebrow} title={m.specs.title} id="specs">
        <dl className="facts reveal">
          {specs.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
        </dl>
      </Section>

      <Section tone="dark" eyebrow={m.method.eyebrow} title={m.method.title}>
        <PillarGrid items={m.method.items} />
      </Section>

      <Section tone="accent" layout="split" eyebrow={m.compliance.eyebrow} title={m.compliance.title}>
        <p className="section-lead reveal">{t.common.tdra}</p>
        {venture.tdraRegistrationNumber && <p className="fine">{m.compliance.regNo} <span className="latin">{venture.tdraRegistrationNumber}</span></p>}
        <p className="disclaimer reveal">{m.compliance.disclaimer}</p>
      </Section>

      <CtaBand
        title={m.cta.title}
        body={m.cta.body}
        primary={{ to: '/contact?type=magfusion&product=magfusion-air', label: m.cta.primary }}
        secondary={{ to: '/returns', label: m.cta.secondary }}
      />
    </div>
  );
}
