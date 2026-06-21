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
  image: string
  imageAlt: string
  name: string
  note?: string
  price: string
  summary: string
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
Builder Branding Pack|Monthly Package|Real Estate/Construction|Monthly|24999|Monthly Support|Logo, company profile page, visiting card, 8 business creatives and service brochure design.|
Local Shop Starter Pack|Monthly Package|Retail/Local Shop|Monthly|4999|Monthly Support|6 offer posters, 2 festival posters, 2 stories and WhatsApp status creative.|
Retail Monthly Pack|Monthly Package|Retail/Local Shop|Monthly|9999|Monthly Support|12 posters, 4 stories, 2 carousels, offer or festival creatives and captions.|
Festival Sales Pack|Monthly Package|Retail/Local Shop|Monthly|7999|Monthly Support|8 offer posters, 4 stories, 2 carousels and 2 ad creatives.|
WhatsApp Catalog Pack|Monthly Package|Retail/Local Shop|Monthly|4999|Monthly Support|10 catalog images, catalog cover, offer banner and profile image.|
Education Starter Pack|Monthly Package|Education/Training|Monthly|6999|Monthly Support|6 admission posters, 2 stories, 1 course poster and 1 profile banner.|
Admission Campaign Pack|Monthly Package|Education/Training|Monthly|12999|Monthly Support|10 posters, 2 carousels, 3 reel covers, 2 ad creatives and WhatsApp enquiry poster.|
Institute Branding Pack|Monthly Package|Education/Training|Monthly|17999|Monthly Support|Logo, visiting card, certificate template, letterhead and 8 launch creatives.|
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
const postersOfferCount = publicOffers.filter((offer) => offer.category === 'Posters').length
const socialOfferCount = publicOffers.filter((offer) => offer.category === 'Social Media').length
const reelOfferCount = publicOffers.filter((offer) => offer.category === 'Reels').length
const brandingOfferCount = publicOffers.filter(
  (offer) => offer.category === 'Branding' || offer.category === 'Stationery'
).length
const supportOfferCount = publicOffers.filter((offer) =>
  ['Business Profile', 'Website', 'Ads Support'].includes(offer.category)
).length
const monthlyPackageCount = publicOffers.filter((offer) => offer.offerType === 'Monthly Package').length

export const featuredOfferCards: FeaturedOfferCard[] = [
  {
    audience: 'Individual pricing board',
    delivery: 'One-time design range',
    highlights: [
      'Basic, standard, premium, offer, festival, post, story and carousel pricing on one page',
      'Reel cover and thumbnail pricing included for fast social support',
      'Clear add-on pricing for extra carousel slides',
    ],
    image: '/assets/portfolio/posters-social-pricing.webp',
    imageAlt: 'ThemeStudios posters and social media creatives pricing board',
    name: 'Posters & social media creatives',
    note: `Extra carousel slide ${formatOfferPrice(getOfferByName('Extra Carousel Slide'))}`,
    price: `${formatInr(349)} to ${formatInr(1499)}`,
    summary:
      'The homepage now uses the actual 2026 posters and social creatives board instead of a generic mockup, so buyers can see the real entry-point pricing ladder immediately.',
  },
  {
    audience: 'Motion, branding and stationery',
    delivery: 'One-time pricing board',
    highlights: [
      'Business reels, premium reel ads and festival or offer reels',
      'Logo design, business logo design and branding kit pricing',
      'Visiting card, letterhead and stationery kit pricing in the same board',
    ],
    image: '/assets/portfolio/reels-branding-pricing.webp',
    imageAlt: 'ThemeStudios reels, branding and identity pricing board',
    name: 'Reels, branding & identity pricing',
    price: `${formatInr(999)} to ${formatInr(12999)}`,
    summary:
      'This board groups short-form video, logo work, and stationery into one relevant service page so the website reflects the real portfolio structure.',
  },
  {
    audience: 'Profiles, ads and campaign support',
    delivery: 'One-time and setup pricing board',
    highlights: [
      'Business profile posters, Google Business creatives, hero banners and portfolio PDF pricing',
      'Ad poster, ad reel and campaign creative set pricing',
      'Meta and Google Ads support shown with setup and management context',
    ],
    image: '/assets/portfolio/business-profile-ad-pricing.webp',
    imageAlt: 'ThemeStudios business profile, ad support and campaign pricing board',
    name: 'Business profile, ad support & campaign pricing',
    note: 'Ad spend stays separate from design and management fees.',
    price: `${formatInr(499)} to ${formatInr(5999)}`,
    summary:
      'The live site now shows the actual board covering business profile work, ad creatives, campaign support, and setup fees in one consistent service view.',
  },
  {
    audience: 'Recurring creative systems',
    delivery: 'Monthly pricing board',
    highlights: [
      'Starter, growth, pro, ads creative and full support monthly ladders',
      'Poster, story, reel cover, carousel and campaign mixes shown visually',
      'A better fit for brands that need recurring creative consistency',
    ],
    image: '/assets/portfolio/universal-monthly-packages.webp',
    imageAlt: 'ThemeStudios universal monthly packages pricing board',
    name: 'Universal monthly packages',
    price: monthlyServiceRange,
    summary:
      'This pricing board replaces the old generic monthly visual and shows the actual 2026 recurring package ladder from starter support to full monthly coverage.',
  },
]

export const offerCategoryCards: OfferCategoryCard[] = [
  {
    badge: `${postersOfferCount} core services`,
    name: 'Posters & offer creatives',
    priceBand: `${formatInr(399)} to ${formatInr(1499)}`,
    summary:
      'Business posters, sale creatives, premium campaign posters, and seasonal or occasion-led visuals for everyday promotion.',
  },
  {
    badge: `${socialOfferCount} active services`,
    name: 'Social posts, stories & catalog visuals',
    priceBand: `${formatInr(349)} to ${formatInr(1499)}`,
    summary:
      'Single posts, WhatsApp status creatives, carousels, cover banners, and catalog-style visuals for social-first businesses.',
  },
  {
    badge: `${reelOfferCount} reel services`,
    name: 'Reels, covers & motion promos',
    priceBand: `${formatInr(499)} to ${formatInr(3499)}`,
    summary:
      'Reel covers, animated business reels, festival reels, and stronger ad-style motion creatives for campaigns that need more attention.',
  },
  {
    badge: `${brandingOfferCount} branding offers`,
    name: 'Brand identity, stationery & launch kits',
    priceBand: `${formatInr(999)} to ${formatInr(29999)}`,
    summary:
      'Logo design, stationery, industry-specific branding kits, startup launch packs, and packaged identity support for growing brands.',
  },
  {
    badge: `${supportOfferCount} support offers`,
    name: 'Ads, profile support & website visuals',
    priceBand: `${formatInr(699)} to ${formatInr(5999)}`,
    summary:
      'Google Business creatives, profile PDFs, website hero banners, ad posters, reel ads, and setup support for paid promotion.',
  },
  {
    badge: `${monthlyPackageCount} monthly packs`,
    name: 'Monthly social and campaign systems',
    priceBand: monthlyServiceRange,
    summary:
      'Recurring support packs across universal, clinic, restaurant, startup, salon, education, retail, and construction categories, including builder, catalog, and institute-focused pack lanes.',
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
    examples: ['Local Shop Starter Pack', 'Festival Sales Pack', 'WhatsApp Catalog Pack'],
    name: 'Retail & local shops',
    priceBand: `${formatInr(4999)} to ${formatInr(9999)}`,
    summary:
      'Offer posters, festival pushes, stories, monthly retail promotion, and catalog-style creative systems for local stores and boutiques.',
  },
  {
    examples: ['Education Starter Pack', 'Institute Branding Pack', 'Monthly Education Growth Pack'],
    name: 'Education & training',
    priceBand: `${formatInr(6999)} to ${formatInr(17999)}`,
    summary:
      'Admission posters, course creatives, institute branding support, enquiry pushes, reel covers, and monthly content systems for training centres.',
  },
  {
    examples: ['Construction Starter Pack', 'Real Estate Listing Pack', 'Builder Branding Pack'],
    name: 'Real estate & construction',
    priceBand: `${formatInr(7999)} to ${formatInr(24999)}`,
    summary:
      'Property posters, before-and-after content, service introductions, builder branding, brochures, and construction-focused monthly promotion support.',
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
