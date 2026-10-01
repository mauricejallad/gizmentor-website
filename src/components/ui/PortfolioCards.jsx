import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ventures } from '../../config/site';
import { StatusList } from './StatusBadge';
import EaselectMockup from '../easelect/EaselectMockup';
import magfusionImg from '../../assets/magfusion/magfusion-product.webp';

/** Two portfolio cards — Easelect deliberately larger. */
export default function PortfolioCards() {
  const { easelect, magfusion } = ventures;
  return (
    <div className="portfolio">
      <Link to="/easelect" className="portfolio-card portfolio-primary theme-easelect reveal">
        <div className="portfolio-copy">
          <p className="portfolio-kind">Primary venture · AI commerce platform</p>
          <h3 className="portfolio-name">{easelect.name}</h3>
          <p className="portfolio-desc">{easelect.oneLiner} From a shopping need to a confident purchase decision.</p>
          <StatusList items={easelect.status} />
          <span className="portfolio-link">Explore Easelect <ArrowRight size={16} aria-hidden="true" /></span>
        </div>
        <div className="portfolio-visual"><EaselectMockup className="is-small" /></div>
      </Link>

      <Link to={magfusion.path} className="portfolio-card portfolio-secondary reveal reveal-delay-1">
        <div className="portfolio-visual portfolio-visual-product">
          <img src={magfusionImg} alt="MagFusion Air magnetic power bank attached to a smartphone" width="819" height="1024" loading="lazy" />
        </div>
        <div className="portfolio-copy">
          <p className="portfolio-kind">Consumer technology product</p>
          <h3 className="portfolio-name">MagFusion</h3>
          <p className="portfolio-desc">{magfusion.oneLiner} Developed and commercialised by GizMentor.</p>
          <StatusList items={magfusion.status} />
          <span className="portfolio-link">View product <ArrowRight size={16} aria-hidden="true" /></span>
        </div>
      </Link>
    </div>
  );
}
