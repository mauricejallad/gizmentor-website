import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SeoSync from '../SeoSync';
import ScrollToTop from '../ScrollToTop';
import useScrollReveal from '../../hooks/useScrollReveal';
import { LocaleProvider } from '../../i18n/LocaleContext';
import { LOCALES } from '../../i18n/locales';

export default function Layout({ locale }) {
  const { pathname } = useLocation();
  useScrollReveal(pathname);
  return (
    <LocaleProvider locale={locale}>
      <div className="site" lang={locale} dir={LOCALES[locale].dir}>
        <a href="#main" className="skip-link">{LOCALES[locale].content.common.skipToContent}</a>
        <ScrollToTop />
        <SeoSync />
        <Header />
        <main id="main" className="site-main" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
