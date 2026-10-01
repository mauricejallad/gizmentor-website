import { MessageSquareText, Scale, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import PillarGrid from '../components/ui/PillarGrid';
import CapabilityGrid from '../components/ui/CapabilityGrid';
import PortfolioCards from '../components/ui/PortfolioCards';
import FounderCard from '../components/ui/FounderCard';
import CtaBand from '../components/ui/CtaBand';
import EaselectMockup from '../components/easelect/EaselectMockup';
import { StatusList } from '../components/ui/StatusBadge';
import { company, ventures } from '../config/site';

export default function Home() {
  const { easelect } = ventures;
  return (
    <>
      {/* 1 — Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="eyebrow reveal">{company.legalName} · Dubai, UAE</p>
          <h1 id="hero-title" className="display reveal reveal-delay-1">
            Building technology that makes everyday decisions smarter.
          </h1>
          <p className="hero-lead reveal reveal-delay-2">
            GizMentor builds AI-powered digital platforms and consumer technology products — from the UAE, for markets that scale.
          </p>
          <div className="btn-row reveal reveal-delay-3">
            <Button to="/ventures">Explore our ventures</Button>
            <Button to="/easelect" variant="secondary">Discover Easelect</Button>
          </div>
        </div>
      </section>

      {/* 2 — Company introduction */}
      <Section className="intro" width="narrow">
        <p className="statement reveal">
          We are a technology and e-commerce company. We find problems people face every day,
          then build the platform or product that solves them — <span className="text-muted">and take it all the way to market.</span>
        </p>
      </Section>

      {/* 3 — Build → Launch → Scale */}
      <Section eyebrow="What we build" title="One model, from first insight to scale." lead="Every GizMentor venture moves through the same disciplined path.">
        <PillarGrid />
      </Section>

      {/* 4 — Featured venture: Easelect */}
      <section className="feature-easelect theme-easelect" aria-labelledby="feature-easelect-title">
        <div className="container feature-grid">
          <div className="feature-copy">
            <p className="eyebrow reveal">Featured venture</p>
            <h2 id="feature-easelect-title" className="section-title reveal reveal-delay-1">
              Easelect. <span className="es-gradient-text">{easelect.tagline}</span>
            </h2>
            <p className="section-lead reveal reveal-delay-2">
              Shopping online means too many options, scattered reviews and conflicting advice.
              Easelect is an AI research agent that does the work — and tells you what to buy, and why.
            </p>
            <ul className="feature-points reveal reveal-delay-2">
              <li><MessageSquareText size={20} aria-hidden="true" /><span><strong>Ask naturally.</strong> Describe the need, not the product.</span></li>
              <li><Scale size={20} aria-hidden="true" /><span><strong>Research &amp; compare.</strong> Specs, expert reviews and real-world feedback, weighed together.</span></li>
              <li><ShieldCheck size={20} aria-hidden="true" /><span><strong>Decide with evidence.</strong> A recommendation you can trust, with prices and alternatives.</span></li>
            </ul>
            <StatusList items={easelect.status} />
            <div className="btn-row reveal reveal-delay-3">
              <Button to="/easelect" variant="easelect">Explore Easelect</Button>
              <Button href={easelect.url} variant="ghost">Visit easelect.ai</Button>
            </div>
          </div>
          <div className="feature-visual reveal reveal-delay-2">
            <EaselectMockup />
          </div>
        </div>
      </section>

      {/* 5 — Portfolio */}
      <Section eyebrow="Portfolio" title="What we have built, and what we are building now.">
        <PortfolioCards />
      </Section>

      {/* 6 — Why GizMentor */}
      <Section eyebrow="Why GizMentor" title="Strategy, design, AI and commerce — under one roof." lead="The capabilities needed to take a product from idea to market usually sit across separate companies. We combine them.">
        <CapabilityGrid />
      </Section>

      {/* 7 — Leadership */}
      <Section>
        <FounderCard />
      </Section>

      {/* 8 — Investor / partnership CTA */}
      <CtaBand
        title="Building the next generation of intelligent commerce experiences."
        body="We work with investors, strategic and technology partners, and retail and affiliate partners."
        primary={{ to: '/contact?type=investor', label: 'Talk to GizMentor' }}
        secondary={{ to: '/investors', label: 'Investor overview' }}
      />
    </>
  );
}
