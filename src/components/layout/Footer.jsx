import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Logo from '../brand/Logo';
import { useLocale } from '../../i18n/useLocale';
import { company, nav as navItems } from '../../config/site';

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
          </div>
          <nav className="footer-nav" aria-label={footer.company}>
            <Link to={to('/')}>{nav.home}</Link>
            {navItems.map((item) => <Link key={item.key} to={to(item.to)}>{nav[item.key]}</Link>)}
            <Link to={to('/contact')}>{t.common.contact}</Link>
          </nav>
          <address className="footer-address">
            <a href={`mailto:${company.email}`} className="footer-email latin">{company.email}</a>
            <span><span className="latin">{company.legalName}</span><br />
              {address.line1}<br />{address.line2}<br />{address.city}, {address.country}</span>
          </address>
          <a href="#top" className="footer-top-link" aria-label={t.common.toTop}>
            <ArrowUp size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} <span className="latin">{company.legalName}</span>. {footer.rights}</p>
          <nav className="footer-legal" aria-label={footer.legal}>
            <Link to={to('/terms')}>{footer.terms}</Link>
            <Link to={to('/privacy')}>{footer.privacy}</Link>
            <Link to={to('/returns')}>{footer.returns}</Link>
          </nav>
          <p>{footer.registered} <span className="latin">{company.registeredName}</span></p>
        </div>
        <p className="footer-trademark">{t.common.trademark}</p>
      </div>
    </footer>
  );
}
