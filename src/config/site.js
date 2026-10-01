/**
 * Single source of truth for corporate facts that do not change with language.
 * All wording (in English and Arabic) lives in src/content/en.js and src/content/ar.js.
 *
 * RULE: only put verified, publishable facts here. Anything set to `null`
 * is intentionally hidden by the UI until a confirmed value is supplied.
 */

export const SITE_URL = 'https://gizmentor.com';

export const company = {
  name: 'GizMentor',
  legalName: 'GizMentor FZCO',
  founded: null, // e.g. '2024' — hidden until confirmed
  countryCode: 'AE',
  email: 'info@gizmentor.com',
  // Registration numbers are optional; leave null to show statements only.
  tradeLicenceNumber: null,
  trademarkRegistrationNumber: null,
  social: {
    linkedin: null,
    instagram: null,
  },
};

export const founder = {
  name: 'Maurice Jallad',
  initials: 'MJ',
  photo: null, // import an image and assign here to replace the monogram
};

export const ventures = {
  easelect: {
    name: 'Easelect',
    url: 'https://www.easelect.ai',
    path: '/easelect',
    // Status keys map to labels in content.common.status.
    status: [
      { key: 'webLive', tone: 'live' },
      { key: 'mobileSoon', tone: 'soon' },
    ],
  },
  magfusion: {
    name: 'MagFusion Air',
    family: 'MagFusion',
    path: '/products/magfusion',
    status: [{ key: 'onEnquiry', tone: 'live' }],
    tdraRegistrationNumber: null,
  },
};

/**
 * Investor metrics. Leave the array empty to hide the metrics band entirely.
 * Add only verified figures, with the label in both languages, e.g.
 *   { value: '12', label: { en: 'Retail partners', ar: 'شركاء التجزئة' }, note: { en: 'As of Q4 2026', ar: 'حتى الربع الرابع 2026' } }
 */
export const investorMetrics = [];

/** Primary navigation. Labels live in content.common.nav under the same key. */
export const nav = [
  { key: 'about', to: '/about' },
  { key: 'ventures', to: '/ventures' },
  { key: 'easelect', to: '/easelect' },
  { key: 'magfusion', to: '/products/magfusion' },
  { key: 'investors', to: '/investors' },
];

/** Contact form enquiry types. Labels live in content.contact.types under the same value. */
export const inquiryTypes = ['investor', 'partnership', 'retail', 'easelect', 'magfusion', 'support', 'press', 'general'];
