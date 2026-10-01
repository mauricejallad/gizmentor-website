import { Link } from 'react-router-dom';
import Logo from '../brand/Logo';
import { useLocale } from '../../i18n/useLocale';
import { company, ventures } from '../../config/site';

const year = new Date().getFullYear();

export default function Footer() {
  const { t, to } = useLocale();
  const { footer, nav, address } = t.common;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">{footer.tagline}</p>
            <address className="footer-address">
              <span className="latin">{company.legalName}</span><br />
              {address.line1}, {address.line2}<br />
              {address.city}, {address.country}<br />
              <a href={`mailto:${company.email}`} className="latin">{company.email}</a>
            </address>
          </div>
          <div className="footer-cols">
            <nav aria-label={footer.company}>
              <h2 className="footer-heading">{footer.company}</h2>
              <Link to={to('/about')}>{nav.about}</Link>
              <Link to={to('/investors')}>{nav.investors}</Link>
              <Link to={to('/contact')}>{t.common.contact}</Link>
            </nav>
            <nav aria-label={footer.portfolio}>
              <h2 className="footer-heading">{footer.portfolio}</h2>
              <Link to={to('/ventures')}>{nav.ventures}</Link>
              <Link to={to(ventures.easelect.path)}>{nav.easelect}</Link>
              <Link to={to(ventures.magfusion.path)}>{nav.magfusion}</Link>
            </nav>
            <nav aria-label={footer.legal}>
              <h2 className="footer-heading">{footer.legal}</h2>
              <Link to={to('/terms')}>{footer.terms}</Link>
              <Link to={to('/privacy')}>{footer.privacy}</Link>
              <Link to={to('/returns')}>{footer.returns}</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} <span className="latin">{company.legalName}</span>. {footer.rights}</p>
          <p>{t.common.trademark}</p>
        </div>
      </div>
    </footer>
  );
}
