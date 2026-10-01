import Section from '../components/ui/Section';
import PortfolioCards from '../components/ui/PortfolioCards';
import PillarGrid from '../components/ui/PillarGrid';
import CtaBand from '../components/ui/CtaBand';

const criteria = [
  { title: 'A real, recurring problem', body: 'Something people experience often enough that solving it changes behaviour.' },
  { title: 'A clear path to revenue', body: 'Commerce, partnerships or direct sales — the business model is designed in from day one.' },
  { title: 'Room to scale', body: 'Products that can extend across categories, markets and digital ecosystems.' },
];

export default function Ventures() {
  return (
    <>
      <section className="page-hero" aria-labelledby="v-title">
        <div className="container">
          <p className="eyebrow reveal">Ventures</p>
          <h1 id="v-title" className="display display-md reveal reveal-delay-1">A portfolio of technology ventures, not a catalogue.</h1>
          <p className="hero-lead reveal reveal-delay-2">
            GizMentor is the parent company and innovation platform behind each venture — digital platforms and physical products alike.
          </p>
        </div>
      </section>

      <Section eyebrow="Current portfolio" title="Two ventures. One operating model.">
        <PortfolioCards />
      </Section>

      <Section eyebrow="How we choose" title="What makes a GizMentor venture.">
        <ul className="card-grid card-grid-3">
          {criteria.map((c, i) => (
            <li key={c.title} className={`card reveal reveal-delay-${i + 1}`}><h3>{c.title}</h3><p>{c.body}</p></li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="How we build" title="Build → Launch → Scale.">
        <PillarGrid />
      </Section>

      <CtaBand
        title="Partner on a venture."
        body="We collaborate with technology partners, retailers and investors at every stage."
        primary={{ to: '/contact?type=partnership', label: 'Talk to GizMentor' }}
      />
    </>
  );
}
