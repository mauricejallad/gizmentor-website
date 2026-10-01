import { SITE_URL, company, ventures } from './site.js';

export const DEFAULT_OG_IMAGE = '/og/gizmentor-og.png';

/** Per-route metadata. Used by the build-time prerender and by the client on navigation. */
export const routeMeta = {
  '/': {
    title: 'GizMentor — Building technology that makes everyday decisions smarter',
    description:
      'GizMentor FZCO is a UAE-based technology and e-commerce company building AI-powered platforms and consumer technology products, including Easelect and MagFusion.',
  },
  '/about': {
    title: 'About GizMentor — Technology & e-commerce company, Dubai',
    description:
      'GizMentor identifies real consumer problems and builds technology, AI-powered platforms and consumer products to solve them. Build, launch, scale.',
  },
  '/ventures': {
    title: 'Ventures — The GizMentor portfolio',
    description:
      'GizMentor builds a portfolio of technology ventures: Easelect, an AI shopping research platform, and MagFusion, a consumer technology product line.',
  },
  '/easelect': {
    title: 'Easelect — AI. Built for shopping. | A GizMentor venture',
    description:
      'Easelect is an AI shopping research and decision platform that turns a shopping need into a confident purchase decision, with evidence and prices. Operated by GizMentor FZCO.',
    ogImage: '/og/easelect-og.png',
  },
  '/products/magfusion': {
    title: 'MagFusion Air — Ultra-thin magnetic power bank | GizMentor',
    description:
      'MagFusion Air is an ultra-thin 5000mAh magnetic power bank for MagSafe-compatible iPhones, developed and commercialised by GizMentor and registered with the UAE TDRA.',
    ogImage: '/og/magfusion-og.png',
  },
  '/investors': {
    title: 'Investors & Partners — GizMentor',
    description:
      'An overview of GizMentor FZCO for prospective investors and strategic partners: vision, portfolio strategy, the Easelect opportunity and company foundation.',
  },
  '/contact': {
    title: 'Contact GizMentor — Investors, partners & enquiries',
    description: 'Talk to GizMentor about investment, partnerships, retail, Easelect or MagFusion.',
  },
  '/terms': { title: 'Terms of Use — GizMentor', description: 'Terms of Use for the GizMentor FZCO website.' },
  '/privacy': { title: 'Privacy Policy — GizMentor', description: 'How GizMentor FZCO collects, uses and protects information.' },
  '/returns': { title: 'Returns Policy — GizMentor', description: 'Returns policy for products purchased from GizMentor FZCO.' },
  '/404': { title: 'Page not found — GizMentor', description: 'The page you are looking for does not exist.', noindex: true },
};

/** Routes emitted to sitemap.xml and prerendered (404 is prerendered separately). */
export const indexableRoutes = Object.keys(routeMeta).filter((r) => !routeMeta[r].noindex);

export function getMeta(pathname) {
  const meta = routeMeta[pathname] || routeMeta['/404'];
  const canonical = SITE_URL + (pathname === '/' ? '/' : pathname);
  return { ...meta, canonical, ogImage: SITE_URL + (meta.ogImage || DEFAULT_OG_IMAGE) };
}

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: company.legalName,
  alternateName: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/og/gizmentor-logo.png`,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: company.address.countryCode,
  },
  founder: { '@type': 'Person', name: 'Maurice Jallad', jobTitle: 'Founder & General Manager' },
};

/** JSON-LD graph for a given route. */
export function getStructuredData(pathname) {
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: company.name, publisher: { '@id': organization['@id'] } },
  ];
  if (pathname === '/products/magfusion') {
    graph.push({
      '@type': 'Product',
      name: ventures.magfusion.name,
      brand: { '@type': 'Brand', name: 'MagFusion' },
      manufacturer: { '@id': organization['@id'] },
      description: routeMeta[pathname].description,
      image: `${SITE_URL}/og/magfusion-og.png`,
      category: 'Power banks',
    });
  }
  if (pathname === '/easelect') {
    graph.push({
      '@type': 'WebApplication',
      name: ventures.easelect.name,
      url: ventures.easelect.url,
      applicationCategory: 'ShoppingApplication',
      operatingSystem: 'Web',
      publisher: { '@id': organization['@id'] },
      description: routeMeta[pathname].description,
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
