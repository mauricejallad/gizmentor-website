import { Link } from 'react-router-dom';
import Logo from '../brand/Logo';
import { company, ventures } from '../../config/site';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">Building technology that makes everyday decisions smarter.</p>
            <address className="footer-address">
              {company.legalName}<br />
              {company.address.line1}, {company.address.line2}<br />
              {company.address.city}, {company.address.country}<br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </address>
          </div>
          <div className="footer-cols">
            <nav aria-label="Company">
              <h2 className="footer-heading">Company</h2>
              <Link to="/about">About</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <nav aria-label="Portfolio">
              <h2 className="footer-heading">Portfolio</h2>
              <Link to="/ventures">Ventures</Link>
              <Link to="/easelect">Easelect</Link>
              <Link to={ventures.magfusion.path}>MagFusion</Link>
            </nav>
            <nav aria-label="Legal">
              <h2 className="footer-heading">Legal</h2>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/returns">Returns</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {company.legalName}. All rights reserved.</p>
          <p>{company.trademark.statement}</p>
        </div>
      </div>
    </footer>
  );
}
