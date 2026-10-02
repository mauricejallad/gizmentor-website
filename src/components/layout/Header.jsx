import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../brand/Logo';
import { LanguageSwitch, ThemeToggle } from './HeaderTools';
import { useLocale } from '../../i18n/useLocale';
import { company, nav } from '../../config/site';

/**
 * Sits over each page's dark hero. At the top of the page it is transparent and spread over two rows;
 * scrolling down hides it, scrolling back up brings it back as a single solid bar.
 */
export default function Header() {
  const { t, to } = useLocale();
  const { pathname } = useLocation();
  const [state, setState] = useState({ top: true, hidden: false });
  // Menu state is tied to the route it was opened on, so it closes on navigation.
  const [menuAt, setMenuAt] = useState(null);
  const menuOpen = menuAt === pathname;
  const toggleMenu = () => setMenuAt(menuOpen ? null : pathname);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const top = y < 24;
      const hidden = !top && y > 240 && y > last + 2;
      const shown = y < last - 2;
      setState((s) => {
        const next = { top, hidden: hidden ? true : shown ? false : s.hidden && !top };
        return next.top === s.top && next.hidden === s.hidden ? s : next;
      });
      last = y;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuAt(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const cls = [
    'site-header',
    state.top ? 'is-top' : 'is-pinned',
    state.hidden && !menuOpen ? 'is-hidden' : '',
    menuOpen ? 'is-menu-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <div className="container header-inner">
        <Logo />
        <nav className="site-nav" aria-label={t.common.primaryNav}>
          {nav.map((item) => (
            <NavLink key={item.key} to={to(item.to)} className="nav-link">
              {t.common.nav[item.key]}
            </NavLink>
          ))}
          <NavLink to={to('/contact')} className="nav-link">{t.common.contact}</NavLink>
        </nav>
        <div className="header-tools">
          <a href={`mailto:${company.email}`} className="tool-link header-email latin">{company.email}</a>
          <LanguageSwitch className="tool-pill" />
          <ThemeToggle />
          <button
            type="button"
            className="tool-button menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.common.menuClose : t.common.menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label={t.common.mobileNav} hidden={!menuOpen}>
        <ul className="container">
          <li><NavLink to={to('/')} end>{t.common.nav.home}</NavLink></li>
          {nav.map((item) => (
            <li key={item.key}><NavLink to={to(item.to)}>{t.common.nav[item.key]}</NavLink></li>
          ))}
          <li><NavLink to={to('/contact')}>{t.common.contact}</NavLink></li>
        </ul>
        <p className="container mobile-menu-email"><a href={`mailto:${company.email}`} className="latin">{company.email}</a></p>
      </nav>
    </header>
  );
}
