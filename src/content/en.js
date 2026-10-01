/**
 * English copy for every page. src/content/ar.js mirrors this file key for key;
 * when you add or change a key here, change it there too.
 * Facts that do not change with language (URLs, names, numbers) live in src/config/site.js.
 */

const en = {
  common: {
    skipToContent: 'Skip to content',
    homeAria: 'GizMentor — home',
    primaryNav: 'Primary',
    mobileNav: 'Mobile',
    nav: { home: 'Home', about: 'About', ventures: 'Ventures', easelect: 'Easelect', magfusion: 'MagFusion', investors: 'Investors' },
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: { label: 'العربية', lang: 'ar', aria: 'View this page in Arabic' },
    theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
    opensNewTab: '(opens in a new tab)',
    statusAria: 'Status',
    status: { webLive: 'Web platform live', mobileSoon: 'Mobile app launching soon', onEnquiry: 'Available on enquiry' },
    address: {
      line1: 'IFZA Business Park',
      line2: 'Dubai Silicon Oasis',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    descriptor: 'Technology & e-commerce company',
    licensedActivities: ['E-commerce', 'Goods wholesaling', 'Wireless telecommunications equipment trading'],
    trademark: 'The GizMentor name and logo are registered trademarks in the United Arab Emirates.',
    tdra: 'MagFusion Air is registered with the UAE Telecommunications and Digital Government Regulatory Authority (TDRA).',
    pillars: [
      { key: 'build', title: 'Build', body: 'We create technology-driven platforms and products that address clearly identifiable consumer problems.' },
      { key: 'launch', title: 'Launch', body: 'We take concepts from research and UX through technology and product development, and into the market.' },
      { key: 'scale', title: 'Scale', body: 'We build commercially viable products designed to scale across markets, partnerships and digital ecosystems.' },
    ],
    capabilities: [
      { icon: 'Compass', title: 'Product strategy', body: 'Start from a real, recurring customer problem and a clear commercial path.' },
      { icon: 'PenTool', title: 'Experience design', body: 'Research-led journeys built around how people actually decide and buy.' },
      { icon: 'Sparkles', title: 'Applied AI', body: 'AI that does useful work, such as research, comparison and reasoning.' },
      { icon: 'Cpu', title: 'Technology', body: 'Lean, modern platforms engineered to ship quickly and extend easily.' },
      { icon: 'ShoppingBag', title: 'Commerce', body: 'Licensed for e-commerce and trading, with hands-on retail experience.' },
      { icon: 'Rocket', title: 'Execution', body: 'From concept to a regulated product in market. We finish what we start.' },
    ],
    ventureCards: {
      easelect: {
        kind: 'AI platform',
        desc: 'An AI shopping research agent. Shoppers describe the need; Easelect weighs specs, expert reviews and real-world feedback, then recommends what to buy, and why.',
        facts: [
          { label: 'Web platform', value: 'Live' },
          { label: 'Mobile app', value: 'Launching soon' },
        ],
        cta: 'Explore Easelect',
      },
      magfusion: {
        kind: 'Consumer technology',
        desc: 'An ultra-thin magnetic power bank, designed and brought to market by GizMentor.',
        facts: [
          { label: 'Regulatory', value: 'TDRA registered' },
          { label: 'Availability', value: 'On enquiry' },
        ],
        cta: 'View MagFusion',
        imageAlt: 'MagFusion Air magnetic power bank attached to the back of a phone',
      },
    },
    footer: {
      tagline: 'Building technology that makes everyday decisions smarter.',
      company: 'Company',
      portfolio: 'Portfolio',
      legal: 'Legal',
      terms: 'Terms',
      privacy: 'Privacy',
      returns: 'Returns',
      rights: 'All rights reserved.',
    },
  },

  home: {
    hero: {
      badge: 'GizMentor FZCO · Dubai, UAE',
      title: 'The company behind smarter everyday decisions.',
      lead: 'We combine product strategy, design, applied AI and commerce in one team, then turn them into ventures that scale through partnership.',
      primary: 'Partner with us',
      secondary: 'How we work',
    },
    diagram: {
      label: 'How GizMentor works',
      capabilities: 'Capabilities',
      capabilityItems: ['Product strategy', 'Experience design', 'Applied AI', 'Technology', 'Commerce & trading licence'],
      ventures: 'Ventures',
      easelect: { desc: 'AI shopping research platform', status: 'Live' },
      magfusion: { desc: 'Ultra-thin magnetic power bank', status: 'On enquiry' },
      next: 'Next venture, built with partners',
      caption: 'Shared capabilities feed one operating model, which produces each venture.',
    },
    ventures: { eyebrow: 'Ventures', title: 'Two ventures in market. Built to the same standard.' },
    model: { eyebrow: 'How we work', title: 'One model, from first insight to scale.', lead: 'Every GizMentor venture moves through the same disciplined path.' },
    partners: {
      eyebrow: 'Partnerships',
      title: 'Scale comes from the right partners.',
      lead: 'Tell us what you want to build or bring to market, and we will find the right way to work together.',
      rows: [
        { type: 'partnership', icon: 'Blocks', title: 'Strategic & technology partners', body: 'Telecoms, technology companies and brands that want to build with us.' },
        { type: 'retail', icon: 'Store', title: 'Retail & affiliate partners', body: 'Retailers and networks that want to carry our products or connect with Easelect.' },
        { type: 'investor', icon: 'ChartColumn', title: 'Investors', body: 'The company, its ventures, and where we are taking them next.' },
      ],
    },
    capabilities: {
      eyebrow: 'Why GizMentor',
      title: 'Strategy, design, AI and commerce, under one roof.',
      lead: 'The capabilities needed to take a product from idea to market usually sit across separate companies. We combine them.',
    },
    cta: {
      title: 'Building the next generation of intelligent commerce.',
      body: 'We work with investors, strategic and technology partners, and retail and affiliate partners.',
      primary: 'Talk to GizMentor',
      secondary: 'Investor overview',
    },
  },

  about: {
    hero: {
      eyebrow: 'About GizMentor',
      title: 'We start with the problem. Then we build what solves it.',
      lead: 'GizMentor FZCO is a UAE-based technology and e-commerce company. We identify real consumer problems and build technology, AI-powered platforms and consumer products to solve them.',
    },
    whatWeDo: {
      eyebrow: 'What we do',
      title: 'Four areas, one purpose.',
      items: [
        { title: 'E-commerce', body: 'Selling and enabling commerce online.' },
        { title: 'Digital products', body: 'Technology-driven platforms such as Easelect.' },
        { title: 'Consumer technology', body: 'Physical products such as MagFusion.' },
        { title: 'Telecom equipment trading', body: 'Wireless telecommunications equipment.' },
      ],
    },
    model: { eyebrow: 'How we work', title: 'Build. Launch. Scale.' },
    capabilities: { eyebrow: 'Capabilities', title: 'Everything a product needs to reach the market.' },
    facts: {
      eyebrow: 'Company',
      title: 'A licensed, registered UAE company.',
      entity: 'Entity',
      headquarters: 'Headquarters',
      licensed: 'Licensed activities',
      trademark: 'Trademark',
    },
    cta: { title: 'Work with GizMentor.', primary: 'Get in touch', secondary: 'See our ventures' },
  },

  ventures: {
    hero: {
      eyebrow: 'Ventures',
      title: 'A portfolio of technology ventures, not a catalogue.',
      lead: 'GizMentor is the parent company and innovation platform behind each venture, digital platforms and physical products alike.',
    },
    portfolio: { eyebrow: 'Current portfolio', title: 'Two ventures. One operating model.' },
    criteria: {
      eyebrow: 'How we choose',
      title: 'What makes a GizMentor venture.',
      items: [
        { title: 'A real, recurring problem', body: 'Something people experience often enough that solving it changes behaviour.' },
        { title: 'A clear path to revenue', body: 'Commerce, partnerships or direct sales. The business model is designed in from day one.' },
        { title: 'Room to scale', body: 'Products that can extend across categories, markets and digital ecosystems.' },
      ],
    },
    model: { eyebrow: 'How we build', title: 'Build. Launch. Scale.' },
    cta: {
      title: 'Partner on a venture.',
      body: 'We collaborate with technology partners, retailers and investors at every stage.',
      primary: 'Talk to GizMentor',
    },
  },

  easelect: {
    hero: {
      eyebrow: 'Easelect · A GizMentor venture',
      title: 'Easelect.',
      tagline: 'AI. Built for shopping.',
      lead: 'An AI shopping research and decision platform that helps people move from a shopping need to a confident purchase decision.',
      primary: 'Visit Easelect',
      secondary: 'Partner with Easelect',
    },
    screens: {
      caption: 'Screens from the Easelect app',
      home: 'Easelect app home screen asking what you are shopping for, with suggested searches',
      question: 'Easelect asking a follow-up question about the style of headphones the shopper wants',
      product: 'Easelect product detail showing the recommended headphones, rating, price and delivery',
      prices: 'Easelect price comparison listing retailers by lowest total price including delivery',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Online shopping has an information problem, not a choice problem.',
      items: [
        { title: 'Too many options', body: 'Every category offers dozens of near-identical products with different names and claims.' },
        { title: 'Scattered information', body: 'Specs, expert tests, video reviews and owner discussions live in different places.' },
        { title: 'Low-confidence decisions', body: 'Shoppers spend hours researching and still are not sure they chose well.' },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'A research agent that works for the shopper.',
      statement: 'Easelect listens to what you need, researches the market the way an expert would, and recommends the right product,',
      muted: ' with the evidence, the alternatives and the prices to back it up.',
    },
    journey: {
      eyebrow: 'User journey',
      title: 'From need to decision in one conversation.',
      stages: [
        { title: 'Ask naturally', items: ['Explain what you need in your own words'] },
        { title: 'Understand intent', items: ['Translate the need into relevant product requirements'] },
        { title: 'Research & compare', items: ['Research suitable products', 'Analyse specifications and expert information', 'Compare real-world feedback', 'Evaluate alternatives'] },
        { title: 'Decide with confidence', items: ['Check prices and availability', 'Select the product that fits your needs', 'Continue to participating retailers'] },
      ],
    },
    platform: {
      eyebrow: 'Platform',
      title: 'Built for web and mobile.',
      web: { title: 'Web platform', body: 'Available now at easelect.ai. Research any product from the browser.' },
      mobile: { title: 'Mobile app', body: 'A native app bringing Easelect research into the moment of purchase, wherever it happens.' },
    },
    technology: {
      eyebrow: 'Technology',
      title: 'Agentic AI, applied to one job: better buying decisions.',
      items: [
        { icon: 'BrainCircuit', title: 'Intent understanding', body: 'Turns a plain-language need into concrete product requirements.' },
        { icon: 'FileSearch', title: 'Multi-source research', body: 'Reads specifications, expert reviews, YouTube and Reddit discussions.' },
        { icon: 'Scale', title: 'Evidence-based comparison', body: 'Weighs alternatives against the requirements that matter to the user.' },
        { icon: 'BadgeCheck', title: 'Explainable recommendations', body: 'Every pick comes with the reasons and evidence behind it.' },
        { icon: 'Store', title: 'Price & availability', body: 'Checks where to buy and continues the journey to participating retailers.' },
        { icon: 'Layers', title: 'Platform-ready', body: 'One intelligence layer serving web, mobile and partner channels.' },
      ],
    },
    market: {
      eyebrow: 'Market opportunity',
      title: 'Commerce intelligence, at the point of decision.',
      lead: 'Product discovery is moving from search results and marketplaces to conversation. Easelect is positioned at the moment a shopper decides, the most valuable point in the commerce journey.',
      points: [
        { strong: 'Consumers', text: 'faster, more confident decisions.' },
        { strong: 'Retailers', text: 'high-intent customers who already know what they want.' },
        { strong: 'Brands & partners', text: 'a new, evidence-led channel to reach buyers.' },
        { strong: 'Markets', text: 'a model designed to extend across categories, languages and regions.' },
      ],
    },
    cta: {
      title: 'Try Easelect, or build with us.',
      body: 'Shoppers can start on the web today. Retailers, affiliate networks and technology partners: let’s talk.',
      primary: 'Visit Easelect',
      secondary: 'Partnership enquiry',
    },
  },

  magfusion: {
    breadcrumbPortfolio: 'Portfolio',
    breadcrumbAria: 'Breadcrumb',
    hero: {
      eyebrow: 'MagFusion · A GizMentor product',
      tagline: 'Magnetic alignment, redefined.',
      summary: 'An ultra-thin magnetic power bank for MagSafe-compatible iPhones, slim enough to stay on your phone all day.',
      primary: 'Enquire to buy',
      secondary: 'Retail & wholesale',
      imageAlt: 'Two MagFusion Air magnetic power banks on a lit display',
    },
    story: {
      eyebrow: 'The refinement',
      text: 'Most magnetic power banks trade build quality for convenience: bulky, plastic-heavy and loose on the phone. We broke the category down, kept what works and refined the weak points: a slimmer profile, a confident magnetic hold and a product that feels permanent in the hand.',
    },
    highlightsAria: 'Product highlights',
    highlights: [
      { key: 'thin', title: 'Ultra-thin by design', desc: 'A card-slim profile that stays attached without turning your phone into a brick.', alt: 'MagFusion Air shown beside playing cards to illustrate its thin profile' },
      { key: 'magnetic', title: 'Magnetic alignment', desc: 'Snaps into place on MagSafe-compatible iPhones for a secure, centred hold.', alt: 'Illustration of the MagFusion Air magnetic charging ring' },
      { key: 'wired', title: 'Everyday power', desc: '5000mAh of capacity for top-ups through the day, wherever you are.', alt: 'MagFusion Air charging a smartphone' },
    ],
    galleryAria: 'MagFusion Air in use',
    gallery: {
      lifestyle: 'MagFusion Air on a table in an airport lounge',
      inHand: 'Person on a call with MagFusion Air attached to their phone',
    },
    specs: {
      eyebrow: 'Specifications',
      title: 'Technical details.',
      // Rows with value `null` are hidden. Fill them in only from the verified spec sheet.
      items: [
        { label: 'Capacity', value: '5000mAh' },
        { label: 'Attachment', value: 'Magnetic, MagSafe-compatible' },
        { label: 'Compatibility', value: 'MagSafe-compatible iPhone models (iPhone 12 and later)' },
        { label: 'Profile', value: 'Ultra-thin' },
        { label: 'Wireless output', value: null },
        { label: 'Wired input / output', value: null },
        { label: 'Weight', value: null },
        { label: 'Dimensions', value: null },
        { label: 'Finish', value: null },
        { label: 'Regulatory', value: 'Registered with the UAE TDRA' },
      ],
    },
    method: {
      eyebrow: 'How it was made',
      title: 'Select. Test. Refine.',
      items: [
        { title: 'Select', body: 'We source practical, high-utility products whose design or build quality falls short.' },
        { title: 'Test', body: 'We stress-test the mechanics, evaluate the materials and find where the design fails.' },
        { title: 'Refine', body: 'We upgrade what matters and re-engineer the weak points into a better product.' },
      ],
    },
    compliance: {
      eyebrow: 'Compliance',
      title: 'Registered for the UAE market.',
      regNo: 'Registration no.',
      disclaimer: 'Product registration confirms the device’s type approval for the UAE market. It is not an endorsement of the product or of GizMentor.',
    },
    cta: {
      title: 'Get MagFusion Air.',
      body: 'For individual orders, retail stocking or wholesale enquiries, contact our team.',
      primary: 'Enquire about MagFusion Air',
      secondary: 'Returns policy',
    },
  },

  investors: {
    hero: {
      eyebrow: 'Investors & partners',
      title: 'A UAE technology company building a portfolio of scalable ventures.',
      lead: 'An overview of who we are, what we have built, what we are building now, and why it can scale.',
      tocAria: 'On this page',
    },
    toc: {
      overview: 'Company overview',
      vision: 'Vision',
      problem: 'Market problem',
      strategy: 'Portfolio strategy',
      easelect: 'Easelect opportunity',
      capability: 'Product & technology',
      execution: 'Existing execution',
      foundation: 'Company foundation',
      growth: 'Growth strategy',
      contact: 'Contact',
    },
    metricsCaption: 'Figures are reported as of the date shown.',
    overview: {
      lead: 'GizMentor is a Dubai-based technology and e-commerce company. We identify real consumer problems and build technology, AI-powered platforms and consumer products to solve them.',
      facts: [
        { dt: 'Entity', dd: 'GizMentor FZCO' },
        { dt: 'Location', dd: 'Dubai Silicon Oasis, Dubai, UAE' },
        { dt: 'Operating areas', dd: 'E-commerce · Digital products · Consumer technology · Telecom equipment trading' },
        { dt: 'Portfolio', dd: 'Easelect (AI platform) · MagFusion (consumer product)' },
      ],
    },
    vision: { statement: 'Technology that makes everyday decisions smarter,', muted: ' starting with how people decide what to buy.' },
    problem: {
      title: 'Buying decisions are harder than they should be.',
      p1: 'Consumers face abundant choice but fragmented information: specifications, expert reviews, video content and owner feedback are spread across many sources. The result is time-consuming research and low-confidence decisions.',
      p2: 'Retailers, meanwhile, compete for shoppers who arrive uncertain. A trusted layer that resolves that uncertainty creates value on both sides of the transaction.',
    },
    strategy: { title: 'Build. Launch. Scale.', lead: 'A repeatable model for turning identified problems into commercial products, digital and physical.' },
    easelect: {
      title: 'Our primary scalable venture.',
      lead: 'Easelect is an AI shopping research and decision platform. It turns a natural-language need into requirements, researches and compares products across expert and real-world sources, and recommends with evidence, prices and availability.',
      points: [
        { strong: 'Position', text: 'at the decision point of the commerce journey.' },
        { strong: 'Model', text: 'one intelligence layer for web, mobile and partner channels.' },
        { strong: 'Commerce link', text: 'continues the journey to participating retailers.' },
        { strong: 'Scalability', text: 'category-, language- and market-agnostic by design.' },
      ],
      primary: 'Easelect in detail',
      secondary: 'Visit easelect.ai',
    },
    capability: {
      title: 'In-house across the full product lifecycle.',
      items: [
        { title: 'Product & UX', body: 'Research-led product strategy and experience design for consumer journeys.' },
        { title: 'AI & platforms', body: 'Agentic AI research workflows and modern web and mobile platforms.' },
        { title: 'Physical products', body: 'Sourcing, product refinement, regulatory registration and commercialisation.' },
      ],
    },
    execution: {
      title: 'We have already taken a product to market.',
      body: 'An ultra-thin magnetic power bank, developed and commercialised by GizMentor and registered with the UAE TDRA, demonstrating our ability to bring a physical consumer technology product into a regulated market.',
      cta: 'View MagFusion',
      imageAlt: 'MagFusion Air power bank',
    },
    foundation: {
      title: 'A licensed, registered UAE company.',
      licence: { title: 'Incorporation & licence', body: 'GizMentor FZCO is incorporated in Dubai. Licensed activities include:', number: 'Licence no.' },
      trademark: { title: 'Trademark', number: 'Reg. no.' },
      product: { title: 'Product registration', number: 'Reg. no.' },
      disclaimer: 'Licences and registrations relate to permitted business activities and product type approval. They do not constitute an endorsement of GizMentor by any authority, nor any approval of an investment.',
    },
    growth: {
      title: 'Where we are going next.',
      items: [
        { title: 'Launch Easelect mobile', body: 'Extend the live web platform to a native mobile app.' },
        { title: 'Grow commerce partnerships', body: 'Connect Easelect recommendations to participating retailers and affiliate networks.' },
        { title: 'Expand categories & markets', body: 'Scale the research model across product categories, languages and regions.' },
        { title: 'Grow the product portfolio', body: 'Apply the same build-launch-scale model to new consumer technology products.' },
      ],
    },
    cta: {
      title: 'Let’s talk about what we are building.',
      body: 'For investment, strategic partnership or commercial collaboration, get in touch with the GizMentor team.',
      primary: 'Investor enquiry',
      secondary: 'Partnership enquiry',
    },
    disclaimer: 'This page is provided for general information only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any securities, and should not be relied on for any investment decision. See also our',
    disclaimerLink: 'Terms of Use',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Talk to GizMentor.',
    lead: 'Investors, partners, retailers and customers: tell us what you have in mind and the right person will respond.',
    emailLabel: 'Email',
    addressLabel: 'Address',
    fields: {
      name: 'Name',
      email: 'Email',
      organisation: 'Organisation',
      optional: '(optional)',
      type: 'Enquiry type',
      message: 'Message',
    },
    types: {
      investor: 'Investor relations',
      partnership: 'Strategic / technology partnership',
      retail: 'Retail & affiliate partnership',
      easelect: 'Easelect',
      magfusion: 'MagFusion: sales & wholesale',
      support: 'Product support',
      press: 'Press & media',
      general: 'General enquiry',
    },
    submit: 'Send enquiry',
    noteBefore: 'Submitting opens your email app with the message ready to send.',
    noteAfter: (email) => `Your email app should now open with your message. If it didn’t, write to us at ${email}.`,
    mail: {
      subject: (type, name) => `${type} enquiry from ${name}`,
      name: 'Name',
      email: 'Email',
      organisation: 'Organisation',
      type: 'Enquiry type',
      product: 'Product',
      message: 'Message',
    },
  },

  notFound: {
    eyebrow: '404',
    title: 'This page doesn’t exist.',
    lead: 'It may have moved as part of our new website.',
    home: 'Go to homepage',
    ventures: 'Our ventures',
  },

  // English is the governing language of the legal pages; no notice is shown on them in English.
  legal: null,

  meta: {
    '/': {
      title: 'GizMentor — The company behind smarter everyday decisions',
      description: 'GizMentor FZCO is a UAE technology and e-commerce company building AI platforms and consumer technology products, including Easelect and MagFusion, and scaling them through partnership.',
    },
    '/about': {
      title: 'About GizMentor — Technology & e-commerce company, Dubai',
      description: 'GizMentor identifies real consumer problems and builds technology, AI-powered platforms and consumer products to solve them. Build, launch, scale.',
    },
    '/ventures': {
      title: 'Ventures — The GizMentor portfolio',
      description: 'GizMentor builds a portfolio of technology ventures: Easelect, an AI shopping research platform, and MagFusion, a consumer technology product line.',
    },
    '/easelect': {
      title: 'Easelect — AI. Built for shopping. | A GizMentor venture',
      description: 'Easelect is an AI shopping research and decision platform that turns a shopping need into a confident purchase decision, with evidence and prices. Operated by GizMentor FZCO.',
    },
    '/products/magfusion': {
      title: 'MagFusion Air — Ultra-thin magnetic power bank | GizMentor',
      description: 'MagFusion Air is an ultra-thin 5000mAh magnetic power bank for MagSafe-compatible iPhones, developed and commercialised by GizMentor and registered with the UAE TDRA.',
    },
    '/investors': {
      title: 'Investors & Partners — GizMentor',
      description: 'An overview of GizMentor FZCO for prospective investors and strategic partners: vision, portfolio strategy, the Easelect opportunity and company foundation.',
    },
    '/contact': {
      title: 'Contact GizMentor — Investors, partners & enquiries',
      description: 'Talk to GizMentor about investment, partnerships, retail, Easelect or MagFusion.',
    },
    '/terms': { title: 'Terms of Use — GizMentor', description: 'Terms of Use for the GizMentor FZCO website.' },
    '/privacy': { title: 'Privacy Policy — GizMentor', description: 'How GizMentor FZCO collects, uses and protects information.' },
    '/returns': { title: 'Returns Policy — GizMentor', description: 'Returns policy for products purchased from GizMentor FZCO.' },
    '/404': { title: 'Page not found — GizMentor', description: 'The page you are looking for does not exist.' },
  },
};

export default en;
