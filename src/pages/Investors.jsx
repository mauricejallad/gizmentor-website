import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import PillarGrid from '../components/ui/PillarGrid';
import MetricGrid from '../components/ui/MetricGrid';
import CtaBand from '../components/ui/CtaBand';
import Button from '../components/ui/Button';
import { StatusList } from '../components/ui/StatusBadge';
import { company, ventures, investorMetrics } from '../config/site';
import magfusionImg from '../assets/magfusion/magfusion-hero.webp';

const toc = [
  ['overview', 'Company overview'],
  ['vision', 'Vision'],
  ['problem', 'Market problem'],
  ['strategy', 'Portfolio strategy'],
  ['easelect', 'Easelect opportunity'],
  ['capability', 'Product & technology'],
  ['execution', 'Existing execution'],
  ['foundation', 'Company foundation'],
  ['growth', 'Growth strategy'],
  ['contact', 'Contact'],
];

const growth = [
  { title: 'Launch Easelect mobile', body: 'Extend the live web platform to a native mobile app.' },
  { title: 'Grow commerce partnerships', body: 'Connect Easelect recommendations to participating retailers and affiliate networks.' },
  { title: 'Expand categories & markets', body: 'Scale the research model across product categories, languages and regions.' },
  { title: 'Grow the product portfolio', body: 'Apply the same build-launch-scale model to new consumer technology products.' },
];

export default function Investors() {
  const { easelect, magfusion } = ventures;
  return (
    <>
      <section className="page-hero" aria-labelledby="inv-title">
        <div className="container">
          <p className="eyebrow reveal">Investors &amp; partners</p>
          <h1 id="inv-title" className="display display-md reveal reveal-delay-1">
            A UAE technology company building a portfolio of scalable ventures.
          </h1>
          <p className="hero-lead reveal reveal-delay-2">
            An overview of who we are, what we have built, what we are building now — and why it can scale.
          </p>
          <nav className="toc reveal reveal-delay-3" aria-label="On this page">
            <ol>
              {toc.map(([id, label], i) => (
                <li key={id}><a href={`#${id}`}><span>{String(i + 1).padStart(2, '0')}</span>{label}</a></li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <MetricGrid metrics={investorMetrics} caption="Figures are reported as of the date shown." />

      <Section id="overview" eyebrow="01 · Company overview" title={`${company.legalName}`}>
        <div className="split">
          <p className="section-lead reveal">
            GizMentor is a Dubai-based technology and e-commerce company. We identify real consumer problems and build technology,
            AI-powered platforms and consumer products to solve them.
          </p>
          <dl className="facts reveal reveal-delay-1">
            <div><dt>Entity</dt><dd>{company.legalName}</dd></div>
            <div><dt>Location</dt><dd>{company.address.line2}, {company.address.city}, UAE</dd></div>
            <div><dt>Operating areas</dt><dd>E-commerce · Digital products · Consumer technology · Telecom equipment trading</dd></div>
            <div><dt>Portfolio</dt><dd>Easelect (AI platform) · MagFusion (consumer product)</dd></div>
          </dl>
        </div>
      </Section>

      <Section id="vision" eyebrow="02 · Vision" width="narrow">
        <p className="statement reveal">Technology that makes everyday decisions smarter — <span className="text-muted">starting with how people decide what to buy.</span></p>
      </Section>

      <Section id="problem" eyebrow="03 · Market problem" title="Buying decisions are harder than they should be.">
        <div className="split">
          <p className="section-lead reveal">
            Consumers face abundant choice but fragmented information: specifications, expert reviews, video content and owner feedback
            are spread across many sources. The result is time-consuming research and low-confidence decisions.
          </p>
          <p className="section-lead reveal reveal-delay-1">
            Retailers, meanwhile, compete for shoppers who arrive uncertain. A trusted layer that resolves that uncertainty creates value
            on both sides of the transaction.
          </p>
        </div>
      </Section>

      <Section id="strategy" eyebrow="04 · Portfolio strategy" title="Build. Launch. Scale." lead="A repeatable model for turning identified problems into commercial products — digital and physical.">
        <PillarGrid />
      </Section>

      <Section id="easelect" eyebrow="05 · Easelect opportunity" title="Our primary scalable venture." tone="easelect" className="theme-easelect">
        <div className="split">
          <div className="reveal">
            <p className="section-lead">
              Easelect is an AI shopping research and decision platform. It turns a natural-language need into requirements, researches
              and compares products across expert and real-world sources, and recommends with evidence, prices and availability.
            </p>
            <StatusList items={easelect.status} />
          </div>
          <ul className="check-list reveal reveal-delay-1">
            <li><strong>Position:</strong> at the decision point of the commerce journey.</li>
            <li><strong>Model:</strong> one intelligence layer for web, mobile and partner channels.</li>
            <li><strong>Commerce link:</strong> continues the journey to participating retailers.</li>
            <li><strong>Scalability:</strong> category-, language- and market-agnostic by design.</li>
          </ul>
        </div>
        <div className="btn-row reveal">
          <Button to="/easelect" variant="easelect">Easelect in detail</Button>
          <Button href={easelect.url} variant="ghost">Visit easelect.ai</Button>
        </div>
      </Section>

      <Section id="capability" eyebrow="06 · Product & technology capability" title="In-house across the full product lifecycle.">
        <ul className="card-grid card-grid-3">
          <li className="card reveal"><h3>Product &amp; UX</h3><p>Research-led product strategy and experience design for consumer journeys.</p></li>
          <li className="card reveal reveal-delay-1"><h3>AI &amp; platforms</h3><p>Agentic AI research workflows and modern web and mobile platforms.</p></li>
          <li className="card reveal reveal-delay-2"><h3>Physical products</h3><p>Sourcing, product refinement, regulatory registration and commercialisation.</p></li>
        </ul>
      </Section>

      <Section id="execution" eyebrow="07 · Existing execution" title="We have already taken a product to market.">
        <div className="split split-media">
          <img className="media reveal" src={magfusionImg} alt="MagFusion Air power bank" width="1024" height="576" loading="lazy" />
          <div className="reveal reveal-delay-1">
            <h3 className="h3">MagFusion Air</h3>
            <p className="section-lead">
              An ultra-thin magnetic power bank, developed and commercialised by GizMentor and registered with the UAE TDRA —
              demonstrating our ability to bring a physical consumer technology product into a regulated market.
            </p>
            <StatusList items={magfusion.status} />
            <Button to={magfusion.path} variant="secondary">View MagFusion</Button>
          </div>
        </div>
      </Section>

      <Section id="foundation" eyebrow="08 · Regulatory & company foundation" title="A licensed, registered UAE company.">
        <ul className="card-grid card-grid-3">
          <li className="card reveal">
            <h3>Incorporation &amp; licence</h3>
            <p>{company.legalName} is incorporated in Dubai. Licensed activities include:</p>
            <ul className="mini-list">{company.licensedActivities.map((a) => <li key={a}>{a}</li>)}</ul>
            {company.tradeLicenceNumber && <p className="fine">Licence no. {company.tradeLicenceNumber}</p>}
          </li>
          <li className="card reveal reveal-delay-1">
            <h3>Trademark</h3>
            <p>{company.trademark.statement}</p>
            {company.trademark.registrationNumber && <p className="fine">Reg. no. {company.trademark.registrationNumber}</p>}
          </li>
          <li className="card reveal reveal-delay-2">
            <h3>Product registration</h3>
            <p>{magfusion.regulatory.statement}</p>
            {magfusion.regulatory.registrationNumber && <p className="fine">Reg. no. {magfusion.regulatory.registrationNumber}</p>}
          </li>
        </ul>
        <p className="disclaimer reveal">
          Licences and registrations relate to permitted business activities and product type approval. They do not constitute an
          endorsement of GizMentor by any authority, nor any approval of an investment.
        </p>
      </Section>

      <Section id="growth" eyebrow="09 · Growth strategy" title="Where we are going next.">
        <ol className="timeline">
          {growth.map((g, i) => (
            <li key={g.title} className={`timeline-item reveal reveal-delay-${(i % 3) + 1}`}>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div id="contact">
        <CtaBand
          title="Let’s talk about what we are building."
          body="For investment, strategic partnership or commercial collaboration, get in touch with the GizMentor team."
          primary={{ to: '/contact?type=investor', label: 'Investor enquiry' }}
          secondary={{ to: '/contact?type=partnership', label: 'Partnership enquiry' }}
        />
      </div>

      <div className="container">
        <p className="disclaimer">
          This page is provided for general information only. It does not constitute an offer to sell, or a solicitation of an offer
          to buy, any securities, and should not be relied on for any investment decision. See also our <Link to="/terms">Terms of Use</Link>.
        </p>
      </div>
    </>
  );
}
