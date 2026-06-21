export type Offer = {
  billing: string
  category: string
  name: string
  offerType: string
  price: number
  priceNotes?: string
  summary: string
  vertical: string
}

export type FeaturedOfferCard = {
  audience: string
  delivery: string
  highlights: string[]
  name: string
  note?: string
  posterLabel: string
  posterTagline: string
  posterTitle: string
  price: string
  summary: string
  themeClass: string
}

export type OfferCategoryCard = {
  badge: string
  name: string
  priceBand: string
  summary: string
}

export type IndustryOfferCard = {
  examples: string[]
  name: string
  priceBand: string
  summary: string
}

export type ContactOfferGroup = {
  label: string
  offers: Offer[]
}

const rawOfferRows = `
Basic Poster Design|Individual Service|Universal/All|One-time|399|Posters|Simple business or service poster.|
Standard Business Poster|Individual Service|Universal/All|One-time|699|Posters|Professional social media poster with CTA.|
Premium Campaign Poster|Individual Service|Universal/All|One-time|1499|Posters|High-impact branding or campaign poster.|
Festival / Occasion Poster|Individual Service|Universal/All|One-time|499|Posters|Seasonal or greeting creative.|
Offer / Sale Poster|Individual Service|Universal/All|One-time|599|Posters|Promotional offer or discount poster.|
Instagram / Facebook Post|Individual Service|Universal/All|One-time|499|Social Media|Single square social media post.|
Story / WhatsApp Status Design|Individual Service|Universal/All|One-time|349|Social Media|Vertical story or WhatsApp status creative.|
Carousel Post Design|Individual Service|Universal/All|One-time|1499|Social Media|Carousel design up to 5 slides.|
Reel Cover / Thumbnail|Individual Service|Universal/All|One-time|499|Reels|Attractive reel cover image.|
Extra Carousel Slide|Add-on|Universal/All|Add-on|250|Social Media|Additional slide beyond the base carousel scope.|
Basic Reel Creation|Individual Service|Universal/All|One-time|999|Reels|Poster-to-reel or simple promo reel.|
Standard Business Reel|Individual Service|Universal/All|One-time|1999|Reels|Animated business reel with text, transitions and CTA.|
Premium Reel Ad Creative|Individual Service|Universal/All|One-time|3499|Reels|Ad-style reel with stronger motion graphics.|
Festival / Offer Reel|Individual Service|Universal/All|One-time|1499|Reels|Festival, launch or offer reel.|
Basic Logo Design|Individual Service|Universal/All|One-time|2999|Branding|1 logo direction and 2 concepts.|
Business Logo Design|Individual Service|Universal/All|One-time|6999|Branding|3 concepts and 3 revisions.|
Logo Branding Kit|One-time Package|Universal/All|One-time|12999|Branding|Logo, colors, font direction and basic identity.|
Visiting Card Design|Individual Service|Universal/All|One-time|999|Stationery|Print-ready business card design.|
Letterhead Design|Individual Service|Universal/All|One-time|999|Stationery|Professional letterhead design.|
Stationery Kit|One-time Package|Universal/All|One-time|3999|Stationery|Visiting card, letterhead, envelope style and invoice header style.|
Facebook Page Banner / Cover|Individual Service|Universal/All|One-time|999|Social Media|Professional page cover design.|
WhatsApp Catalog Image|Individual Service|Universal/All|One-time|499|Social Media|Single catalog product or service creative.|
Google Business Profile Creative|Individual Service|Universal/All|One-time|699|Business Profile|Google Business post or banner creative.|
Business Intro Poster|Individual Service|Universal/All|One-time|999|Business Profile|One-page business profile poster.|
Website Banner / Hero Image|Individual Service|Universal/All|One-time|1499|Website|Landing page hero or website banner image.|
Company Profile / Portfolio PDF|One-time Package|Universal/All|One-time|4999|Business Profile|Company profile or portfolio PDF up to 6 pages.|
Ad Poster Creative|Individual Service|Universal/All|One-time|999|Ads Support|Single Meta or Instagram ad poster.|
Ad Reel Creative|Individual Service|Universal/All|One-time|2499|Ads Support|Short ad reel creative.|
Campaign Creative Set|One-time Package|Universal/All|One-time|3999|Ads Support|3 ad posters or 2 posts plus 1 reel cover.|
Meta Ads Setup|Individual Service|Universal/All|Setup Fee|2999|Ads Support|Audience, placement and budget structure setup.|Ad spend is separate.
Monthly Meta Ads Management|Individual Service|Universal/All|Management Fee|4999|Ads Support|Monthly Meta ads management fee only.|Ad spend is separate.
Google Ads Basic Setup|Individual Service|Universal/All|Setup Fee|5999|Ads Support|Basic Google Ads setup support.|Ad spend is separate.
Monthly Starter Pack|Monthly Package|Universal/All|Monthly|4999|Monthly Support|8 posters, 2 stories and basic captions.|
Monthly Social Growth Pack|Monthly Package|Universal/All|Monthly|9999|Monthly Support|12 posters, 4 stories, 2 reel covers, captions and content calendar.|
Monthly Creative Pro Pack|Monthly Package|Universal/All|Monthly|14999|Monthly Support|16 posters, 4 stories, 4 reel covers, 2 carousels and 2 ad creatives.|
Monthly Ads Creative Pack|Monthly Package|Universal/All|Monthly|11999|Monthly Support|8 ad creatives, 4 reel or ad covers, testing variations and CTA copy support.|
Full Creative Support Pack|Monthly Package|Universal/All|Monthly|24999|Monthly Support|20+ creatives, reels or covers, carousels, campaign creatives and monthly planning.|
Clinic Starter Creative Pack|Monthly Package|Clinic/Healthcare|Monthly|6999|Monthly Support|6 posters, 2 stories, 1 doctor or service intro poster, 1 awareness or festival poster and basic captions.|
Clinic Trust Builder Pack|Monthly Package|Clinic/Healthcare|Monthly|12999|Monthly Support|10 posters, 2 carousels, 2 reel covers, profile or banner creative and caption plus hashtag support.|
Clinic Growth Creative Pack|Monthly Package|Clinic/Healthcare|Monthly|19999|Monthly Support|12 to 16 posters, 4 reel covers, 2 ad creatives, 2 awareness carousels and Google Business creative.|
Healthcare Branding Kit|One-time Package|Clinic/Healthcare|One-time|14999|Branding|Logo, colors, visiting card, letterhead or prescription pad style, social profile image and 5 launch posters.|
Startup Basic Launch Pack|One-time Package|Startup|One-time|9999|Branding|Basic logo concept, 5 launch posters, 2 story designs, WhatsApp profile creative and business intro poster.|
Startup Brand Identity Pack|One-time Package|Startup|One-time|18999|Branding|Logo, color palette, font style, visiting card, letterhead, 8 social creatives and profile or banner creative.|
Startup Premium Launch Pack|One-time Package|Startup|One-time|29999|Branding|Branding kit, 12 launch creatives, 3 carousels, 3 reel covers, business profile PDF and ad creative set.|
Startup Monthly Growth Pack|Monthly Package|Startup|Monthly|14999|Monthly Support|12 posts, 4 reel covers, 4 stories, captions, content calendar and 2 ad creatives.|
Food Business Starter Pack|Monthly Package|Restaurant/Food|Monthly|6999|Monthly Support|6 food promo posters, 2 offer posters, 2 story designs and menu highlight creative.|
Restaurant Social Pack|Monthly Package|Restaurant/Food|Monthly|12999|Monthly Support|12 posts, 4 stories, 2 reel covers, festival or offer creatives and captions.|
Restaurant Campaign Pack|Monthly Package|Restaurant/Food|Monthly|14999|Monthly Support|8 campaign posters, 2 carousels, 3 reel covers, 2 ad creatives and WhatsApp menu or catalog creative.|
Menu & Branding Pack|One-time Package|Restaurant/Food|One-time|16999|Branding|Logo refinement, menu card design, visiting card, 5 social posts and profile banner.|
Beauty Starter Pack|Monthly Package|Salon/Beauty|Monthly|6999|Monthly Support|6 service posters, 2 offer posters, 2 stories and profile banner.|
Beauty Brand Pack|Monthly Package|Salon/Beauty|Monthly|12999|Monthly Support|10 posters, 2 carousels, 3 reel covers, festival, bridal or service creatives and caption support.|
Bridal Campaign Pack|Monthly Package|Salon/Beauty|Monthly|14999|Monthly Support|8 premium posters, 3 reel covers, 2 carousels, offer poster and WhatsApp enquiry creative.|
Salon Branding Kit|One-time Package|Salon/Beauty|One-time|16999|Branding|Logo, color palette, price list design, visiting card, profile banner and 5 launch posts.|
Construction Starter Pack|Monthly Package|Real Estate/Construction|Monthly|7999|Monthly Support|6 service posters, 2 before and after style posters, 2 stories and profile banner.|
Real Estate Listing Pack|Monthly Package|Real Estate/Construction|Monthly|12999|Monthly Support|8 property posters, 2 carousels, 2 reel covers and enquiry CTA creatives.|
Interior / Texture Painting Pack|Monthly Package|Real Estate/Construction|Monthly|14999|Monthly Support|10 service posters, 3 before and after creatives, 2 engineer or architect pitch posters and 2 reel covers.|
Local Shop Starter Pack|Monthly Package|Retail/Local Shop|Monthly|4999|Monthly Support|6 offer posters, 2 festival posters, 2 stories and WhatsApp status creative.|
Retail Monthly Pack|Monthly Package|Retail/Local Shop|Monthly|9999|Monthly Support|12 posters, 4 stories, 2 carousels, offer or festival creatives and captions.|
Education Starter Pack|Monthly Package|Education/Training|Monthly|6999|Monthly Support|6 admission posters, 2 stories, 1 course poster and 1 profile banner.|
Admission Campaign Pack|Monthly Package|Education/Training|Monthly|12999|Monthly Support|10 posters, 2 carousels, 3 reel covers, 2 ad creatives and WhatsApp enquiry poster.|
Monthly Education Growth Pack|Monthly Package|Education/Training|Monthly|12999|Monthly Support|12 posts, 4 stories, 4 reel covers, captions and monthly content calendar.|
`.trim()

function parseOfferRows(rawRows: string) {
  return rawRows.split('\n').map((row) => {
    const [name, offerType, vertical, billing, priceText, category, summary, priceNotes = ''] =
      row.split('|')

    return {
      billing,
      category,
      name,
      offerType,
      price: Number(priceText),
      ...(priceNotes ? { priceNotes } : {}),
      summary,
      vertical,
    } satisfies Offer
  })
}

export const activeOffers = parseOfferRows(rawOfferRows)
export const publicOffers = activeOffers.filter((offer) => offer.name !== 'Extra Carousel Slide')

const inrFormatter = new Intl.NumberFormat('en-IN')

export function formatInr(amount: number) {
  return `\u20b9${inrFormatter.format(amount)}`
}

export function formatOfferPrice(offer: Pick<Offer, 'billing' | 'price'>) {
  const base = formatInr(offer.price)

  switch (offer.billing) {
    case 'Monthly':
    case 'Management Fee':
      return `${base} / month`
    case 'Setup Fee':
      return `${base} setup`
    case 'Add-on':
      return `${base} add-on`
    default:
      return base
  }
}

export function getOfferByName(name: string) {
  const offer = activeOffers.find((entry) => entry.name === name)

  if (!offer) {
    throw new Error(`Offer not found: ${name}`)
  }

  return offer
}

function sortByPrice(offers: Offer[]) {
  return [...offers].sort((left, right) => left.price - right.price || left.name.localeCompare(right.name))
}

export const publicOfferCount = publicOffers.length
export const startingServicePrice = formatOfferPrice(getOfferByName('Story / WhatsApp Status Design'))
export const oneTimeServiceRange = `${formatInr(349)} to ${formatInr(
  getOfferByName('Startup Premium Launch Pack').price
)}`
export const monthlyServiceRange = `${formatOfferPrice(
  getOfferByName('Monthly Starter Pack')
)} to ${formatOfferPrice(getOfferByName('Full Creative Support Pack'))}`

export const featuredOfferCards: FeaturedOfferCard[] = [
  {
    audience: 'Fast everyday business promotion',
    delivery: '24-hour design lane',
    highlights: [
      'Simple business or service poster',
      'Built for fast offer, notice, or sales updates',
      'Best starting point for quick-turn promotion',
    ],
    name: 'Basic Poster Design',
    posterLabel: 'Quick start poster support',
    posterTagline: 'Clean layouts. Fast delivery.',
    posterTitle: 'BASIC\nPOSTER\nDESIGN',
    price: formatOfferPrice(getOfferByName('Basic Poster Design')),
    summary:
      'A clear entry-point service for shops, clinics, salons, food brands, and service businesses that need a practical poster without waiting on a large campaign process.',
    themeClass: 'theme-start',
  },
  {
    audience: 'Short-form motion and promo reels',
    delivery: 'Motion-led creative support',
    highlights: [
      'Animated reel with text, transitions and CTA',
      'Useful for launch, offer, and awareness campaigns',
      'Fits businesses moving from static posts into motion',
    ],
    name: 'Standard Business Reel',
    posterLabel: 'Motion-first campaign support',
    posterTagline: 'More movement. Stronger attention.',
    posterTitle: 'STANDARD\nBUSINESS\nREEL',
    price: formatOfferPrice(getOfferByName('Standard Business Reel')),
    summary:
      'A stronger reel format for businesses that need more attention than a static poster can generate, while still keeping the creative practical and sales-focused.',
    themeClass: 'theme-motion',
  },
  {
    audience: 'Launches, identity refreshes, and brand systems',
    delivery: 'One-time branding kit',
    highlights: [
      'Logo, colors, and font direction',
      'Built for businesses formalizing their identity',
      'Stronger starting point than ordering isolated assets one by one',
    ],
    name: 'Logo Branding Kit',
    posterLabel: 'Identity system package',
    posterTagline: 'Logo, palette, and brand direction.',
    posterTitle: 'LOGO\nBRANDING\nKIT',
    price: formatOfferPrice(getOfferByName('Logo Branding Kit')),
    summary:
      'A one-time identity package for brands that want more than just a logo file and need the core visual system to support social, profile, and launch design work.',
    themeClass: 'theme-brand',
  },
  {
    audience: 'Paid social campaigns and ad-ready support',
    delivery: 'Cross-post ad support',
    highlights: [
      '3 ad posters or 2 posts plus 1 reel cover',
      'Useful for paid social testing and offer pushes',
      'Pairs well with Meta setup or monthly ads support',
    ],
    name: 'Campaign Creative Set',
    posterLabel: 'Ads creative starter set',
    posterTagline: 'Campaign-ready assets for paid reach.',
    posterTitle: 'CAMPAIGN\nCREATIVE\nSET',
    price: formatOfferPrice(getOfferByName('Campaign Creative Set')),
    summary:
      'A practical pack for businesses that want a coordinated set of creatives for Meta or Instagram campaigns without committing to a full monthly retainer first.',
    themeClass: 'theme-ads',
  },
  {
    audience: 'Recurring social visibility through the month',
    delivery: 'Monthly content system',
    highlights: [
      '12 posters, 4 stories, 2 reel covers, captions and content calendar',
      'Best for businesses posting every week',
      'Balances content volume with manageable monthly scope',
    ],
    name: 'Monthly Social Growth Pack',
    posterLabel: 'Most-used monthly growth lane',
    posterTagline: 'Steady content. Better monthly visibility.',
    posterTitle: 'MONTHLY\nSOCIAL\nGROWTH',
    price: formatOfferPrice(getOfferByName('Monthly Social Growth Pack')),
    summary:
      'A dependable monthly system for businesses that need stronger content rhythm than a starter plan, without jumping straight to a full creative retainer.',
    themeClass: 'theme-monthly',
  },
  {
    audience: 'Brands needing multi-format monthly support',
    delivery: 'High-coverage monthly retainer',
    highlights: [
      '20+ creatives across posters, reels, covers and carousels',
      'Built for campaign-heavy months and active offer calendars',
      'Good fit when multiple services need one coordinated system',
    ],
    name: 'Full Creative Support Pack',
    posterLabel: 'Broadest monthly support layer',
    posterTagline: 'High-output support across formats.',
    posterTitle: 'FULL\nCREATIVE\nSUPPORT',
    price: formatOfferPrice(getOfferByName('Full Creative Support Pack')),
    summary:
      'The highest-coverage monthly plan for businesses that need campaign continuity, multiple content formats, and one coordinated creative workflow across the month.',
    themeClass: 'theme-full-support',
  },
]

export const offerCategoryCards: OfferCategoryCard[] = [
  {
    badge: '5 core services',
    name: 'Posters & offer creatives',
    priceBand: `${formatInr(399)} to ${formatInr(1499)}`,
    summary:
      'Business posters, sale creatives, premium campaign posters, and seasonal or occasion-led visuals for everyday promotion.',
  },
  {
    badge: '6 active services',
    name: 'Social posts, stories & catalog visuals',
    priceBand: `${formatInr(349)} to ${formatInr(1499)}`,
    summary:
      'Single posts, WhatsApp status creatives, carousels, cover banners, and catalog-style visuals for social-first businesses.',
  },
  {
    badge: '5 reel services',
    name: 'Reels, covers & motion promos',
    priceBand: `${formatInr(499)} to ${formatInr(3499)}`,
    summary:
      'Reel covers, animated business reels, festival reels, and stronger ad-style motion creatives for campaigns that need more attention.',
  },
  {
    badge: '12 branding offers',
    name: 'Brand identity, stationery & launch kits',
    priceBand: `${formatInr(999)} to ${formatInr(29999)}`,
    summary:
      'Logo design, stationery, industry-specific branding kits, startup launch packs, and packaged identity support for growing brands.',
  },
  {
    badge: '10 support offers',
    name: 'Ads, profile support & website visuals',
    priceBand: `${formatInr(699)} to ${formatInr(5999)}`,
    summary:
      'Google Business creatives, profile PDFs, website hero banners, ad posters, reel ads, and setup support for paid promotion.',
  },
  {
    badge: '23 monthly packs',
    name: 'Monthly social and campaign systems',
    priceBand: monthlyServiceRange,
    summary:
      'Recurring support packs across universal, clinic, restaurant, startup, salon, education, retail, and construction categories.',
  },
]

export const industryOfferCards: IndustryOfferCard[] = [
  {
    examples: ['Food Business Starter Pack', 'Restaurant Social Pack', 'Menu & Branding Pack'],
    name: 'Restaurant & food brands',
    priceBand: `${formatInr(6999)} to ${formatInr(16999)}`,
    summary:
      'Food promo posters, offer pushes, reel covers, menu-led branding, and monthly social systems for cafes, takeaways, and dine-in brands.',
  },
  {
    examples: ['Beauty Starter Pack', 'Beauty Brand Pack', 'Salon Branding Kit'],
    name: 'Salon & beauty brands',
    priceBand: `${formatInr(6999)} to ${formatInr(16999)}`,
    summary:
      'Service promotion, bridal or festive pushes, reel covers, offer creatives, and packaged branding for salons and beauty studios.',
  },
  {
    examples: ['Clinic Starter Creative Pack', 'Clinic Growth Creative Pack', 'Healthcare Branding Kit'],
    name: 'Clinics & healthcare',
    priceBand: `${formatInr(6999)} to ${formatInr(19999)}`,
    summary:
      'Trust-building posters, doctor or service intro creatives, awareness content, ad support, and healthcare-focused branding kits.',
  },
  {
    examples: ['Local Shop Starter Pack', 'Retail Monthly Pack'],
    name: 'Retail & local shops',
    priceBand: `${formatInr(4999)} to ${formatInr(9999)}`,
    summary:
      'Offer posters, festival pushes, stories, WhatsApp status creatives, and monthly visibility systems for local stores and boutiques.',
  },
  {
    examples: ['Education Starter Pack', 'Admission Campaign Pack', 'Monthly Education Growth Pack'],
    name: 'Education & training',
    priceBand: `${formatInr(6999)} to ${formatInr(12999)}`,
    summary:
      'Admission posters, course creatives, enquiry pushes, reel covers, and monthly content support for institutes and training centres.',
  },
  {
    examples: ['Construction Starter Pack', 'Real Estate Listing Pack', 'Interior / Texture Painting Pack'],
    name: 'Real estate & construction',
    priceBand: `${formatInr(7999)} to ${formatInr(14999)}`,
    summary:
      'Property posters, before-and-after content, service introductions, reel covers, and construction-focused monthly promotion support.',
  },
  {
    examples: ['Startup Basic Launch Pack', 'Startup Brand Identity Pack', 'Startup Premium Launch Pack'],
    name: 'Startups & launch brands',
    priceBand: `${formatInr(9999)} to ${formatInr(29999)}`,
    summary:
      'Launch kits, brand identity packs, social creatives, story support, and startup-oriented monthly growth systems for early-stage brands.',
  },
]

export const contactOfferGroups: ContactOfferGroup[] = [
  {
    label: 'Universal design services',
    offers: sortByPrice(
      publicOffers.filter(
        (offer) =>
          offer.vertical === 'Universal/All' &&
          offer.category !== 'Ads Support' &&
          offer.category !== 'Monthly Support'
      )
    ),
  },
  {
    label: 'Ads support',
    offers: sortByPrice(
      publicOffers.filter(
        (offer) => offer.vertical === 'Universal/All' && offer.category === 'Ads Support'
      )
    ),
  },
  {
    label: 'Monthly support packs',
    offers: sortByPrice(
      publicOffers.filter(
        (offer) => offer.vertical === 'Universal/All' && offer.category === 'Monthly Support'
      )
    ),
  },
  {
    label: 'Clinic / healthcare packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Clinic/Healthcare')),
  },
  {
    label: 'Startup packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Startup')),
  },
  {
    label: 'Restaurant / food packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Restaurant/Food')),
  },
  {
    label: 'Salon / beauty packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Salon/Beauty')),
  },
  {
    label: 'Real estate / construction packs',
    offers: sortByPrice(
      publicOffers.filter((offer) => offer.vertical === 'Real Estate/Construction')
    ),
  },
  {
    label: 'Retail / local shop packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Retail/Local Shop')),
  },
  {
    label: 'Education / training packs',
    offers: sortByPrice(publicOffers.filter((offer) => offer.vertical === 'Education/Training')),
  },
]
