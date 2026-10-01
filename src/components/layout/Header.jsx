import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../brand/Logo';
import { nav } from '../../config/site';

function Dropdown({ item }) {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const active = pathname.startsWith('/products');
  // Menu state is tied to the route it was opened on, so it closes on navigation.
  const [openAt, setOpenAt] = useState(null);
  const open = openAt === pathname;
  const setOpen = (v) => setOpenAt((cur) => ((typeof v === 'function' ? v(cur === pathname) : v) ? pathname : null));
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpenAt(null);
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpenAt(null);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [open]);

  return (
    <div
      className={`nav-dropdown ${open ? 'is-open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav-link nav-trigger ${active ? 'active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <div className="nav-menu" role="menu" hidden={!open}>
        {item.children.map((c) => (
          <Link key={c.to} to={c.to} className="nav-menu-item" role="menuitem">
            <span className="nav-menu-label">{c.label}</span>
            {c.note && <span className="nav-menu-note">{c.note}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <Dropdown key={item.label} item={item} />
            ) : (
              <NavLink key={item.to} to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <Link to="/contact" className="btn btn-primary btn-sm header-cta">Contact</Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!menuOpen}>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          {nav.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <span className="mobile-menu-group">{item.label}</span>
                  <ul className="mobile-submenu">
                    {item.children.map((c) => (
                      <li key={c.to}><NavLink to={c.to}>{c.label}</NavLink></li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink to={item.to}>{item.label}</NavLink>
              )}
            </li>
          ))}
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
