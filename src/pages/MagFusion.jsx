import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import { StatusList } from '../components/ui/StatusBadge';
import { ventures } from '../config/site';
import { magfusion } from '../content/magfusion';
import heroImg from '../assets/magfusion/magfusion-hero.webp';
import inHandImg from '../assets/magfusion/magfusion-in-hand.webp';
import lifestyleImg from '../assets/magfusion/magfusion-lifestyle.webp';
import thinImg from '../assets/magfusion/magfusion-thin.webp';
import magneticImg from '../assets/magfusion/magfusion-magnetic.webp';
import wiredImg from '../assets/magfusion/magfusion-wired.webp';

const highlightImages = {
  thin: { src: thinImg, w: 819, h: 1024, alt: 'MagFusion Air shown beside playing cards to illustrate its thin profile' },
  magnetic: { src: magneticImg, w: 800, h: 800, alt: 'Illustration of the MagFusion Air magnetic charging ring' },
  wired: { src: wiredImg, w: 1024, h: 768, alt: 'MagFusion Air charging a smartphone' },
};

export default function MagFusion() {
  const specs = magfusion.specs.filter((s) => s.value);
  return (
    <div className="page-product">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link><ChevronRight size={14} aria-hidden="true" /></li>
            <li><Link to="/ventures">Portfolio</Link><ChevronRight size={14} aria-hidden="true" /></li>
            <li aria-current="page">MagFusion</li>
          </ol>
        </nav>
      </div>

      <section className="product-hero" aria-labelledby="mf-title">
        <div className="container feature-grid">
          <div>
            <p className="eyebrow reveal">MagFusion · A GizMentor product</p>
            <h1 id="mf-title" className="display display-md reveal reveal-delay-1">{magfusion.name}</h1>
            <p className="product-tagline reveal reveal-delay-1">{magfusion.tagline}</p>
            <p className="hero-lead reveal reveal-delay-2">{magfusion.summary}</p>
            <StatusList items={ventures.magfusion.status} />
            <div className="btn-row reveal reveal-delay-3">
              <Button to="/contact?type=magfusion&product=magfusion-air">Enquire to buy</Button>
              <Button to="/contact?type=retail" variant="secondary">Retail &amp; wholesale</Button>
            </div>
          </div>
          <div className="product-hero-media reveal reveal-delay-2">
            <img src={heroImg} alt="MagFusion Air magnetic power bank" width="1024" height="576" fetchPriority="high" />
          </div>
        </div>
      </section>

      <Section eyebrow="The refinement" width="narrow">
        <p className="statement reveal">{magfusion.story}</p>
      </Section>

      <section className="highlights" aria-label="Product highlights">
        <div className="container">
          {magfusion.highlights.map((h, i) => {
            const img = highlightImages[h.key];
            return (
              <article key={h.key} className={`highlight ${i % 2 ? 'is-reversed' : ''}`}>
                <div className="highlight-media reveal">
                  <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" />
                </div>
                <div className="highlight-copy reveal reveal-delay-1">
                  <h2 className="h2">{h.title}</h2>
                  <p className="section-lead">{h.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="gallery" aria-label="MagFusion Air in use">
        <div className="container gallery-grid">
          <img className="reveal" src={lifestyleImg} alt="MagFusion Air on a table in an airport lounge" width="1248" height="832" loading="lazy" />
          <img className="reveal reveal-delay-1" src={inHandImg} alt="Person on a call with MagFusion Air attached to their phone" width="1000" height="1001" loading="lazy" />
        </div>
      </section>

      <Section eyebrow="Specifications" title="Technical details." width="narrow" id="specs">
        <dl className="specs reveal">
          {specs.map((s) => (
            <div key={s.label} className="spec"><dt>{s.label}</dt><dd>{s.value}</dd></div>
          ))}
        </dl>
      </Section>

      <Section eyebrow="How it was made" title="Select. Test. Refine.">
        <ol className="pillars">
          {magfusion.method.map((m, i) => (
            <li key={m.title} className={`pillar reveal reveal-delay-${i + 1}`}>
              <span className="pillar-index" aria-hidden="true">0{i + 1}</span>
              <h3 className="pillar-title">{m.title}</h3>
              <p>{m.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Compliance" title="Registered for the UAE market." width="narrow">
        <p className="section-lead reveal">{ventures.magfusion.regulatory.statement}</p>
        <p className="disclaimer reveal">
          Product registration confirms the device’s type approval for the UAE market. It is not an endorsement of the product or of GizMentor.
        </p>
      </Section>

      <CtaBand
        title="Get MagFusion Air."
        body="For individual orders, retail stocking or wholesale enquiries, contact our team."
        primary={{ to: '/contact?type=magfusion&product=magfusion-air', label: 'Enquire about MagFusion Air' }}
        secondary={{ to: '/returns', label: 'Returns policy' }}
      />
    </div>
  );
}
