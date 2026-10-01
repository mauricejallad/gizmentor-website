import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../brand/Logo';
import { LanguageSwitch, ThemeToggle } from './HeaderTools';
import { useLocale } from '../../i18n/useLocale';
import { nav } from '../../config/site';

export default function Header() {
  const { t, to } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Menu state is tied to the route it was opened on, so it closes on navigation.
  const [menuAt, setMenuAt] = useState(null);
  const menuOpen = menuAt === pathname;
  const toggleMenu = () => setMenuAt(menuOpen ? null : pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuAt(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="site-nav" aria-label={t.common.primaryNav}>
          {nav.map((item) => (
            <NavLink key={item.key} to={to(item.to)} className="nav-link">
              {t.common.nav[item.key]}
            </NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <LanguageSwitch />
          <ThemeToggle />
          <NavLink to={to('/contact')} className="btn btn-primary btn-sm header-cta">{t.common.contact}</NavLink>
          <button
            type="button"
            className="tool-button menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.common.menuClose : t.common.menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label={t.common.mobileNav} hidden={!menuOpen}>
        <ul>
          <li><NavLink to={to('/')} end>{t.common.nav.home}</NavLink></li>
          {nav.map((item) => (
            <li key={item.key}><NavLink to={to(item.to)}>{t.common.nav[item.key]}</NavLink></li>
          ))}
          <li><NavLink to={to('/contact')}>{t.common.contact}</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
