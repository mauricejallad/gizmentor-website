import Section from '../components/ui/Section';
import PillarGrid from '../components/ui/PillarGrid';
import CapabilityGrid from '../components/ui/CapabilityGrid';
import FounderCard from '../components/ui/FounderCard';
import CtaBand from '../components/ui/CtaBand';
import { company } from '../config/site';

export default function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="a-title">
        <div className="container">
          <p className="eyebrow reveal">About GizMentor</p>
          <h1 id="a-title" className="display display-md reveal reveal-delay-1">We start with the problem. Then we build what solves it.</h1>
          <p className="hero-lead reveal reveal-delay-2">
            {company.legalName} is a UAE-based technology and e-commerce company. We identify real consumer problems and build technology,
            AI-powered platforms and consumer products to solve them.
          </p>
        </div>
      </section>

      <Section eyebrow="What we do" title="Four areas, one purpose.">
        <ul className="card-grid card-grid-4">
          <li className="card reveal"><h3>E-commerce</h3><p>Selling and enabling commerce online.</p></li>
          <li className="card reveal reveal-delay-1"><h3>Digital products</h3><p>Technology-driven platforms such as Easelect.</p></li>
          <li className="card reveal reveal-delay-2"><h3>Consumer technology</h3><p>Physical products such as MagFusion.</p></li>
          <li className="card reveal reveal-delay-3"><h3>Telecom equipment trading</h3><p>Wireless telecommunications equipment.</p></li>
        </ul>
      </Section>

      <Section eyebrow="How we work" title="Build. Launch. Scale.">
        <PillarGrid />
      </Section>

      <Section eyebrow="Capabilities" title="Everything a product needs to reach the market.">
        <CapabilityGrid />
      </Section>

      <Section><FounderCard /></Section>

      <CtaBand
        title="Work with GizMentor."
        primary={{ to: '/contact', label: 'Get in touch' }}
        secondary={{ to: '/ventures', label: 'See our ventures' }}
      />
    </>
  );
}
