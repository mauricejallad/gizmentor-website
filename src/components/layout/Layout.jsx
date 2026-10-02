import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoSync from '../SeoSync';
import ScrollToTop from '../ScrollToTop';
import IntroCurtain from '../motion/IntroCurtain';
import useScrollReveal from '../../hooks/useScrollReveal';
import { LocaleProvider } from '../../i18n/LocaleContext';
import { LOCALES } from '../../i18n/locales';

export default function Layout({ locale }) {
  const { pathname, key } = useLocation();
  useScrollReveal(pathname);
  // The first page comes prerendered and must not animate (its location key is 'default');
  // later client navigations remount <main> and play a short entrance.
  const navigated = key !== 'default';
  return (
    <LocaleProvider locale={locale}>
      <div className="site" id="top" lang={locale} dir={LOCALES[locale].dir}>
        <IntroCurtain />
        <a href="#main" className="skip-link">{LOCALES[locale].content.common.skipToContent}</a>
        <ScrollToTop />
        <SeoSync />
        <Header />
        <main id="main" key={pathname} className={`site-main ${navigated ? 'page-enter' : ''}`.trim()} tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
