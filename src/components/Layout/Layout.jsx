import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import gizmentorEmblem from '../../assets/gizmentor-emblem.png';

export default function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand-logo">
            <img
              src={gizmentorEmblem}
              alt=""
              className="header-emblem"
            />
            <span className="brand-name">GizMentor</span>
          </Link>
          <nav className="site-nav">
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-section">
            <span className="footer-brand">GizMentor</span>
            <p className="footer-tagline">Tested. Redesigned. Refined.</p>
          </div>
          <div className="footer-links-grid">
            <nav className="footer-nav">
              <span className="footer-heading">Shop</span>
              <Link to="/products">Products</Link>
            </nav>
            <nav className="footer-nav">
              <span className="footer-heading">Brand</span>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <nav className="footer-nav">
              <span className="footer-heading">Legal</span>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/returns">Returns</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GizMentor. All rights designed.</p>
        </div>
      </footer>
    </div>
  );
}
