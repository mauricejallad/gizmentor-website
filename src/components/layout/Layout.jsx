import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoSync from '../SeoSync';
import ScrollToTop from '../ScrollToTop';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Layout() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <SeoSync />
      <Header />
      <main id="main" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
