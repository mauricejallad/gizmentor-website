import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import VentureCards from '../components/ui/VentureCards';
import LinkRows from '../components/ui/LinkRows';
import CtaBand from '../components/ui/CtaBand';
import BigNumbers from '../components/ui/BigNumbers';
import CircleIcon from '../components/ui/CircleIcon';
import BrandMark from '../components/brand/BrandMark';
import CountUp from '../components/motion/CountUp';
import ModelDiagram from '../components/home/ModelDiagram';
import RisingBanners from '../components/home/RisingBanners';
import PrincipleSlider from '../components/home/PrincipleSlider';
import ApproachTabs from '../components/home/ApproachTabs';
import { useLocale } from '../i18n/useLocale';
import heroImg from '../assets/images/investors-facade.webp';
import gadgetsImg from '../assets/images/about-gadgets.webp';

export default function Home() {
  const { t, to } = useLocale();
  const h = t.home;
  return (
    <>
      {/* 1 — Hero: full-height slate, photo, the red mark, and the two ventures as rising tiles */}
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero-bg" aria-hidden="true">
          <img src={heroImg} alt="" width="1536" height="1024" fetchPriority="high" />
        </div>
        <div className="home-hero-mark-wrap" aria-hidden="true"><BrandMark className="home-hero-mark" /></div>
        <div className="container home-hero-inner">
          <div className="home-hero-copy">
            <p className="section-label hero-label">{h.hero.badge}</p>
            <h1 id="hero-title" className="hero-display">{h.hero.title}</h1>
            <p className="hero-lead">{h.hero.lead}</p>
          </div>
          <RisingBanners />
        </div>
        <a href="#overview" className="hero-next" aria-label={t.common.scrollDown}>
          <CircleIcon icon="down" className="circle-icon-lg" />
        </a>
      </section>

      {/* 2 — How GizMentor works: a headline figure, then the operating-model diagram */}
      <section className="section section-dark overview" id="overview" aria-labelledby="overview-title">
        <div className="container">
          <p className="section-label reveal">{h.diagram.label}</p>
          <div className="overview-grid">
            <div className="overview-figure reveal">
              <p className="overview-value"><CountUp value={h.overview.value} /></p>
              <p className="overview-caption">{h.overview.label}</p>
            </div>
            <div className="reveal reveal-delay-1">
              <h2 id="overview-title" className="overview-text">{h.overview.body}</h2>
              <div className="btn-row">
                <Link to={to('/contact?type=partnership')} className="btn btn-primary"><CircleIcon /><span>{h.hero.primary}</span></Link>
              </div>
            </div>
          </div>
          <ModelDiagram />
        </div>
      </section>

      {/* 3 — Philosophy: photo half with the name, red half with the statement */}
      <section className="split-panel" aria-labelledby="philosophy-title">
        <div className="split-panel-media">
          <img src={gadgetsImg} alt={t.about.hero.imageAlt} width="1536" height="1024" loading="lazy" />
          <div className="split-panel-name reveal" dir="ltr" lang="en">
            <span className="split-panel-name-eq">{h.name.gizmo} + {h.name.mentor}</span>
            <span className="split-panel-name-word">GizMentor</span>
          </div>
        </div>
        <div className="split-panel-copy section-accent">
          <p className="section-label reveal">{h.philosophy.eyebrow}</p>
          <div className="split-panel-quote reveal reveal-delay-1">
            <span className="quote-mark" aria-hidden="true">“</span>
            <div>
              <h2 id="philosophy-title" className="split-panel-title">{h.philosophy.title}</h2>
              <p>{h.philosophy.body}</p>
              <p className="split-panel-caption">{h.name.caption}</p>
              <Link to={to('/about')} className="text-link"><CircleIcon /><span>{h.philosophy.more}</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Easelect in numbers */}
      <Section eyebrow={h.numbers.eyebrow} className="numbers-section">
        <BigNumbers main={h.numbers.main} items={h.numbers.items} />
        <div className="btn-row numbers-cta reveal">
          <Link to={to('/easelect')} className="btn btn-secondary"><CircleIcon /><span>{t.common.ventureCards.easelect.cta}</span></Link>
        </div>
      </Section>

      {/* 5 — Ventures */}
      <Section tone="muted" eyebrow={h.ventures.eyebrow} title={h.ventures.title}>
        <VentureCards />
      </Section>

      {/* 6 — Recommendation principles */}
      <PrincipleSlider />

      {/* 7 — Approach: how we work, and the capabilities behind it */}
      <Section eyebrow={h.approach.eyebrow} title={h.model.title} lead={h.capabilities.lead}>
        <ApproachTabs />
      </Section>

      {/* 8 — Partnerships */}
      <Section tone="muted" eyebrow={h.partners.eyebrow} title={h.partners.title} lead={h.partners.lead}>
        <LinkRows rows={h.partners.rows} />
      </Section>

      {/* 9 — Close */}
      <CtaBand
        title={h.cta.title}
        body={h.cta.body}
        primary={{ to: '/contact?type=investor', label: h.cta.primary }}
        secondary={{ to: '/investors', label: h.cta.secondary }}
      />
    </>
  );
}
