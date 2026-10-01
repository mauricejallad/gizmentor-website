/**
 * Single source of truth for corporate facts.
 *
 * RULE: only put verified, publishable facts here. Anything set to `null`
 * is intentionally hidden by the UI until a confirmed value is supplied.
 */

export const SITE_URL = 'https://gizmentor.com';

export const company = {
  name: 'GizMentor',
  legalName: 'GizMentor FZCO',
  descriptor: 'Technology & e-commerce company',
  founded: null, // e.g. '2024' — hidden until confirmed
  address: {
    line1: 'IFZA Business Park',
    line2: 'Dubai Silicon Oasis',
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
  },
  email: 'info@gizmentor.com',
  licensedActivities: [
    'E-commerce',
    'Goods wholesaling',
    'Wireless telecommunications equipment trading',
  ],
  // Registration numbers are optional; leave null to show statements only.
  tradeLicenceNumber: null,
  trademark: {
    statement: 'The GizMentor name and logo are registered trademarks in the United Arab Emirates.',
    registrationNumber: null,
  },
  social: {
    linkedin: null,
    instagram: null,
  },
};

export const founder = {
  name: 'Maurice Jallad',
  title: 'Founder & General Manager',
  photo: null, // import an image and assign here to replace the monogram
};

export const ventures = {
  easelect: {
    name: 'Easelect',
    tagline: 'AI. Built for shopping.',
    oneLiner: 'AI-powered shopping research and decision platform.',
    url: 'https://www.easelect.ai',
    operatedBy: 'Easelect — a GizMentor venture',
    status: [
      { label: 'Web platform live', tone: 'live' },
      { label: 'Mobile app launching soon', tone: 'soon' },
    ],
  },
  magfusion: {
    name: 'MagFusion Air',
    family: 'MagFusion',
    oneLiner: 'Ultra-thin magnetic power bank.',
    path: '/products/magfusion',
    status: [{ label: 'Available on enquiry', tone: 'live' }],
    regulatory: {
      statement: 'MagFusion Air is registered with the UAE Telecommunications and Digital Government Regulatory Authority (TDRA).',
      registrationNumber: null,
    },
  },
};

/**
 * Investor metrics. Leave the array empty to hide the metrics band entirely.
 * Add only verified figures, e.g. { value: '—', label: 'Retail partners', note: 'As of Q4 2026' }.
 */
export const investorMetrics = [];

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Ventures', to: '/ventures' },
  { label: 'Easelect', to: '/easelect' },
  {
    label: 'Products',
    to: '/products/magfusion',
    children: [{ label: 'MagFusion', to: '/products/magfusion', note: 'Magnetic power bank' }],
  },
  { label: 'Investors', to: '/investors' },
];

export const inquiryTypes = [
  { value: 'investor', label: 'Investor relations' },
  { value: 'partnership', label: 'Strategic / technology partnership' },
  { value: 'retail', label: 'Retail & affiliate partnership' },
  { value: 'easelect', label: 'Easelect' },
  { value: 'magfusion', label: 'MagFusion — sales & wholesale' },
  { value: 'support', label: 'Product support' },
  { value: 'press', label: 'Press & media' },
  { value: 'general', label: 'General enquiry' },
];
