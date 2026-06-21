import { formatOfferPrice, getOfferByName } from './offerCatalog'

export type ServiceLandingPage = {
  audience: string[]
  canonicalPath: string
  ctaPackageName: string
  ctaPrice: string
  description: string
  faqItems: Array<{ answer: string; question: string }>
  intro: string
  keywords: string
  links: Array<{ href: string; label: string }>
  serviceName: string
  title: string
  valuePoints: string[]
  whoItsFor: string
}

const servicePages: ServiceLandingPage[] = [
  {
    canonicalPath: '/poster-design-service',
    title: 'Poster Design Service | ThemeStudios Digital Designers',
    description:
      'Poster design service for promotions, sale creatives, launches, menus, seasonal campaigns, and day-to-day brand visibility across WhatsApp, Instagram, and Facebook.',
    keywords:
      'poster design service, small business poster design, whatsapp poster design, promotional poster design, social media poster design',
    serviceName: 'Poster Design Service',
    intro:
      'ThemeStudios builds clear, mobile-first promotional posters for businesses that need offers, launches, service updates, menus, and everyday visibility without clutter.',
    whoItsFor:
      'This service works best for restaurants, shops, clinics, boutiques, tuition centres, and local service businesses that want faster poster turnarounds with better visual structure.',
    audience: [
      'Daily offer campaigns',
      'Restaurant and cafe promotions',
      'Retail product highlights',
      'Service announcements and notices',
    ],
    valuePoints: [
      'Structured layouts built for fast mobile scanning',
      'Public pricing now covers basic, standard, offer, festival, and premium poster routes',
      'Clear CTA path into WhatsApp ordering and approval flow',
    ],
    ctaPackageName: 'Standard Business Poster',
    ctaPrice: formatOfferPrice(getOfferByName('Standard Business Poster')),
    faqItems: [
      {
        question: 'What type of posters can I request?',
        answer:
          'You can request sales posters, service announcements, menu promotions, business intro posters, launch creatives, and regular day-to-day business posts.',
      },
      {
        question: 'Is this better than the basic poster package?',
        answer:
          'Yes, when your creative needs a more polished layout, clearer hierarchy, or better presentation than a quick basic design service.',
      },
      {
        question: 'How do I start this service?',
        answer:
          'Send your brief on WhatsApp with your offer text, logo, images, and deadline. ThemeStudios will confirm whether this route fits before payment is requested.',
      },
    ],
    links: [
      { href: '/festival-poster-design', label: 'Festival poster design' },
      { href: '/branding-poster-design', label: 'Branding poster design' },
      { href: '/monthly-social-media-design', label: 'Monthly social media design' },
      { href: '/#packages', label: 'View package portfolio' },
    ],
  },
  {
    canonicalPath: '/festival-poster-design',
    title: 'Festival Poster Design | ThemeStudios Digital Designers',
    description:
      'Festival poster design for wishes, seasonal campaigns, celebration days, and local business promotions that need timely festive visibility.',
    keywords:
      'festival poster design, festive creative design, diwali poster design, pongal poster design, seasonal promotion design',
    serviceName: 'Festival Poster Design',
    intro:
      'ThemeStudios creates festive business creatives for seasonal greetings, special-day offers, and celebration campaigns that need to feel timely, polished, and brand-safe.',
    whoItsFor:
      'This service fits brands that promote around Pongal, Diwali, New Year, opening anniversaries, local events, and celebration-led offer calendars.',
    audience: [
      'Seasonal wishes for local businesses',
      'Festival offer campaigns',
      'Special-day sales creatives',
      'Celebration posts for WhatsApp and Instagram',
    ],
    valuePoints: [
      'Designed for time-sensitive festive campaign windows',
      'Built to include logo, contact, and promotional details cleanly',
      'Useful for both one-off wishes and recurring festival calendars',
    ],
    ctaPackageName: 'Festival / Occasion Poster',
    ctaPrice: formatOfferPrice(getOfferByName('Festival / Occasion Poster')),
    faqItems: [
      {
        question: 'Do you design only greeting posters?',
        answer:
          'No. This route covers festive wishes, seasonal offers, event-day promotions, and celebration-led business creatives.',
      },
      {
        question: 'Can my logo and contact details be included?',
        answer:
          'Yes. Festival creatives are designed to include your logo, contact details, and essential promotional information cleanly.',
      },
      {
        question: 'How early should I place festival requests?',
        answer:
          'Earlier is better. Sending your brief in advance gives more room for planning, approvals, and cleaner delivery before the festival rush.',
      },
    ],
    links: [
      { href: '/poster-design-service', label: 'Poster design service' },
      { href: '/monthly-social-media-design', label: 'Monthly social media design' },
      { href: '/#packages', label: 'See package portfolio' },
    ],
  },
  {
    canonicalPath: '/monthly-social-media-design',
    title: 'Monthly Social Media Design | ThemeStudios Digital Designers',
    description:
      'Monthly social media design support for businesses that need recurring posters, stories, reel covers, seasonal creatives, and dependable brand visibility across the month.',
    keywords:
      'monthly social media design, monthly creative package, recurring design support, monthly poster package, social media design service',
    serviceName: 'Monthly Social Media Design',
    intro:
      'ThemeStudios offers recurring monthly creative support for businesses that want a steadier content rhythm than ordering one poster at a time.',
    whoItsFor:
      'This route is best for brands that promote every week, need campaign consistency, and want monthly planning support across WhatsApp, Instagram, and Facebook.',
    audience: [
      'Brands with weekly promotions',
      'Restaurants and retail stores with offer calendars',
      'Salons, clinics, and local service businesses',
      'Businesses that want recurring content support',
    ],
    valuePoints: [
      'Built around recurring monthly package delivery across multiple business sizes',
      'Supports posters, stories, reel covers, festival creatives, and campaign continuity',
      'Cleaner workflow than repeating single-poster orders each week',
    ],
    ctaPackageName: 'Monthly Starter Pack',
    ctaPrice: formatOfferPrice(getOfferByName('Monthly Starter Pack')),
    faqItems: [
      {
        question: 'What is included in monthly creative support?',
        answer:
          'Monthly support is built for recurring posters, stories, reel covers, seasonal creatives, captions, and campaign visibility across the month.',
      },
      {
        question: 'Is this better than ordering one poster at a time?',
        answer:
          'Yes, for businesses that promote every week. It creates a steadier workflow and keeps your content system more consistent.',
      },
      {
        question: 'How does monthly ordering begin?',
        answer:
          'Start on WhatsApp, share your business details and campaign needs, and ThemeStudios will confirm the right monthly package, scope, timeline, and vertical fit.',
      },
    ],
    links: [
      { href: '/poster-design-service', label: 'Poster design service' },
      { href: '/branding-poster-design', label: 'Branding poster design' },
      { href: '/#packages', label: 'Compare monthly packages' },
    ],
  },
  {
    canonicalPath: '/branding-poster-design',
    title: 'Branding Poster Design | ThemeStudios Digital Designers',
    description:
      'Premium branding poster design for launches, premium campaigns, stronger art direction, and polished promotional visuals for growing brands.',
    keywords:
      'branding poster design, premium poster design, launch campaign design, promotional branding creative, premium business poster',
    serviceName: 'Branding Poster Design',
    intro:
      'ThemeStudios creates higher-finish branding posters for launches, premium offers, and campaigns where the visual needs stronger hierarchy, art direction, and polish.',
    whoItsFor:
      'This route is ideal for premium campaigns, launch promotions, flagship services, and brands that want a stronger visual identity in their marketing creatives.',
    audience: [
      'Launch and announcement campaigns',
      'Premium service promotions',
      'Brand-first marketing visuals',
      'Polished ad and social media creatives',
    ],
    valuePoints: [
      'Built for higher polish and clearer brand-led composition',
      'Useful when a standard day-to-day poster is not enough',
      'Fits launch campaigns, premium positioning work, and brand-forward announcements',
    ],
    ctaPackageName: 'Premium Campaign Poster',
    ctaPrice: formatOfferPrice(getOfferByName('Premium Campaign Poster')),
    faqItems: [
      {
        question: 'When should I choose a branding poster route?',
        answer:
          'Choose it when the campaign needs stronger visual identity, more polish, and a higher-finish presentation than a regular promotion post.',
      },
      {
        question: 'Is this suitable for launches and announcements?',
        answer:
          'Yes. This route is built for launches, premium offers, flagship promotions, and brand-first campaigns.',
      },
      {
        question: 'How do revisions work here?',
        answer:
          'The premium route includes the revision count listed in the package, with extra directions or full redesigns handled as separate paid work.',
      },
    ],
    links: [
      { href: '/poster-design-service', label: 'Poster design service' },
      { href: '/monthly-social-media-design', label: 'Monthly social media design' },
      { href: '/#packages', label: 'Review premium package options' },
    ],
  },
  {
    canonicalPath: '/madurai-graphic-design-studio',
    title: 'Madurai Graphic Design Studio | ThemeStudios Digital Designers',
    description:
      'Remote graphic design studio based in Madurai, serving small businesses across Tamil Nadu with posters, reels, branding visuals, ads support, and monthly creative systems.',
    keywords:
      'Madurai graphic design studio, remote design studio Madurai, small business graphic design Tamil Nadu, poster design Madurai',
    serviceName: 'Madurai Graphic Design Studio',
    intro:
      'ThemeStudios is a remote design studio based in Madurai, built for small businesses that need practical promotional visuals and dependable creative support.',
    whoItsFor:
      'This page is for business owners looking for a Madurai-based remote design partner for sales posters, festival creatives, reels, identity kits, ad support, and monthly content systems.',
    audience: [
      'Businesses in Madurai and across Tamil Nadu',
      'Brands that need WhatsApp-first ordering',
      'Local businesses seeking recurring creative support',
      'Owners who want direct designer communication without agency overhead',
    ],
    valuePoints: [
      'Remote-first workflow with WhatsApp-led briefing',
      'Public catalog now spans quick creatives, branding, ads support, and monthly visibility',
      'Business-friendly support for practical local promotion',
    ],
    ctaPackageName: 'Monthly Starter Pack',
    ctaPrice: formatOfferPrice(getOfferByName('Monthly Starter Pack')),
    faqItems: [
      {
        question: 'Do you work only with businesses in Madurai?',
        answer:
          'No. ThemeStudios is remote-based in Madurai and supports small businesses across Tamil Nadu and beyond.',
      },
      {
        question: 'How does a remote design studio workflow work?',
        answer:
          'The studio uses WhatsApp-first briefing, package confirmation, remote review, and digital delivery so you do not need an in-person office visit.',
      },
      {
        question: 'What is the best starting package for recurring support?',
        answer:
          'Monthly Starter Pack is the usual entry point for businesses that need regular promotion without committing to a larger campaign system first.',
      },
    ],
    links: [
      { href: '/poster-design-service', label: 'Poster design service' },
      { href: '/festival-poster-design', label: 'Festival poster design' },
      { href: '/contact-us', label: 'Start your project' },
    ],
  },
]

function normalizePath(pathname: string) {
  try {
    const decodedPath = decodeURIComponent(pathname)
    return decodedPath.replace(/\/+$/, '') || '/'
  } catch {
    return pathname.replace(/\/+$/, '') || '/'
  }
}

export function getServiceLandingPage(pathname: string) {
  const normalizedPath = normalizePath(pathname)
  return servicePages.find((page) => page.canonicalPath === normalizedPath) ?? null
}

export function getServiceLandingPages() {
  return servicePages
}
