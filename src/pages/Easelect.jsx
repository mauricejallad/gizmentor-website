import { Globe, Smartphone, BrainCircuit, FileSearch, Scale, BadgeCheck, Store, Layers } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import EaselectMockup from '../components/easelect/EaselectMockup';
import JourneySteps from '../components/easelect/JourneySteps';
import { StatusList } from '../components/ui/StatusBadge';
import { ventures } from '../config/site';

const problems = [
  { title: 'Too many options', body: 'Every category offers dozens of near-identical products with different names and claims.' },
  { title: 'Scattered information', body: 'Specs, expert tests, video reviews and owner discussions live in different places.' },
  { title: 'Low-confidence decisions', body: 'Shoppers spend hours researching and still are not sure they chose well.' },
];

const technology = [
  { icon: BrainCircuit, title: 'Intent understanding', body: 'Turns a plain-language need into concrete product requirements.' },
  { icon: FileSearch, title: 'Multi-source research', body: 'Reads specifications, expert reviews, YouTube and Reddit discussions.' },
  { icon: Scale, title: 'Evidence-based comparison', body: 'Weighs alternatives against the requirements that matter to the user.' },
  { icon: BadgeCheck, title: 'Explainable recommendations', body: 'Every pick comes with the reasons and evidence behind it.' },
  { icon: Store, title: 'Price & availability', body: 'Checks where to buy and continues the journey to participating retailers.' },
  { icon: Layers, title: 'Platform-ready', body: 'One intelligence layer serving web, mobile and partner channels.' },
];

export default function Easelect() {
  const e = ventures.easelect;
  return (
    <div className="theme-easelect">
      {/* Hero */}
      <section className="hero hero-easelect" aria-labelledby="es-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container feature-grid">
          <div>
            <p className="eyebrow reveal">{e.operatedBy}</p>
            <h1 id="es-title" className="display reveal reveal-delay-1">
              Easelect.<br /><span className="es-gradient-text">{e.tagline}</span>
            </h1>
            <p className="hero-lead reveal reveal-delay-2">
              An AI shopping research and decision platform that helps people move from a shopping need to a confident purchase decision.
            </p>
            <StatusList items={e.status} />
            <div className="btn-row reveal reveal-delay-3">
              <Button href={e.url} variant="easelect">Visit Easelect</Button>
              <Button to="/contact?type=easelect" variant="secondary">Partner with Easelect</Button>
            </div>
          </div>
          <div className="feature-visual reveal reveal-delay-2"><EaselectMockup /></div>
        </div>
      </section>

      {/* Problem */}
      <Section eyebrow="The problem" title="Online shopping has an information problem, not a choice problem.">
        <ul className="card-grid card-grid-3">
          {problems.map((p, i) => (
            <li key={p.title} className={`card reveal reveal-delay-${i + 1}`}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Solution */}
      <Section eyebrow="The solution" title="A research agent that works for the shopper." width="narrow">
        <p className="statement reveal">
          Easelect listens to what you need, researches the market the way an expert would, and recommends the right product —
          <span className="text-muted"> with the evidence, the alternatives and the prices to back it up.</span>
        </p>
      </Section>

      {/* Journey */}
      <Section eyebrow="User journey" title="From need to decision in one conversation.">
        <JourneySteps />
      </Section>

      {/* Platform */}
      <Section eyebrow="Platform" title="Built for web and mobile.">
        <div className="card-grid card-grid-2">
          <article className="card card-platform reveal">
            <Globe size={24} aria-hidden="true" className="capability-icon" />
            <h3>Web platform</h3>
            <p>Available now at easelect.ai — research any product from the browser.</p>
            <StatusList items={[e.status[0]]} />
          </article>
          <article className="card card-platform reveal reveal-delay-1">
            <Smartphone size={24} aria-hidden="true" className="capability-icon" />
            <h3>Mobile app</h3>
            <p>A native app bringing Easelect research into the moment of purchase, wherever it happens.</p>
            <StatusList items={[e.status[1]]} />
          </article>
        </div>
      </Section>

      {/* Technology */}
      <Section eyebrow="Technology" title="Agentic AI, applied to one job: better buying decisions.">
        <ul className="capabilities">
          {technology.map(({ icon, title, body }, i) => {
            const Icon = icon;
            return (
            <li key={title} className={`capability reveal reveal-delay-${(i % 3) + 1}`}>
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" className="capability-icon" />
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
            );
          })}
        </ul>
      </Section>

      {/* Market opportunity — qualitative only */}
      <Section eyebrow="Market opportunity" title="Commerce intelligence, at the point of decision.">
        <div className="split">
          <p className="section-lead reveal">
            Product discovery is moving from search results and marketplaces to conversation. Easelect is positioned at the moment a
            shopper decides — the most valuable point in the commerce journey.
          </p>
          <ul className="check-list reveal reveal-delay-1">
            <li><strong>Consumers</strong> — faster, more confident decisions.</li>
            <li><strong>Retailers</strong> — high-intent customers who already know what they want.</li>
            <li><strong>Brands &amp; partners</strong> — a new, evidence-led channel to reach buyers.</li>
            <li><strong>Markets</strong> — a model designed to extend across categories, languages and regions.</li>
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Try Easelect, or build with us."
        body="Shoppers can start on the web today. Retailers, affiliate networks and technology partners — let’s talk."
        primary={{ href: e.url, label: 'Visit Easelect', variant: 'easelect' }}
        secondary={{ to: '/contact?type=easelect', label: 'Partnership enquiry' }}
      />
    </div>
  );
}
