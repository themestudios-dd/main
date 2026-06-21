import { contactPagePath, contactThankYouPath } from './contactRoute'
import { publicOffers } from './offerCatalog'
import type { PolicyPage } from './policyData'
import type { ServiceLandingPage } from './serviceData'
import { homeFaqItems } from './siteContent'
import {
  baseUrl,
  businessName,
  facebookPageUrl,
  instagramProfileUrl,
  locationLabel,
  locationStatement,
  siteName,
  supportEmail,
  whatsappBaseUrl,
  whatsappDisplayNumber,
} from './siteConfig'

export type DocumentMeta = {
  canonicalPath: string
  description: string
  keywords?: string
  robots?: string
  schema?: Array<Record<string, unknown>>
  title: string
}

export function toAbsoluteUrl(pathname: string) {
  if (!pathname || pathname === '/') {
    return baseUrl
  }

  return `${baseUrl}${pathname}`
}

export function createHomeDocumentMeta(): DocumentMeta {
  return {
    canonicalPath: '/',
    title: `${siteName} | Posters, Reels, Branding & Monthly Creatives for Small Businesses`,
    description:
      'ThemeStudios is a digital design studio for small businesses, creating posters, reels, branding kits, ad creatives, business profile assets, and monthly social media systems for local brands.',
    keywords:
      'ThemeStudios, poster design, reel design, branding kit, ad creative support, social media creatives, graphic design Madurai, remote design studio, monthly design packages, small business design studio',
    schema: [createProfessionalServiceSchema(), createFaqSchema()],
  }
}

export function createContactDocumentMeta(isThankYou = false): DocumentMeta {
  if (isThankYou) {
    return {
      canonicalPath: contactThankYouPath,
      title: `Query Submitted | ${businessName}`,
      description:
        'Thank you for contacting ThemeStudios. Your query has been submitted successfully and our team will connect with you through email or WhatsApp soon.',
      keywords:
        'ThemeStudios thank you, query submitted, contact confirmation, design quote confirmation',
      robots: 'noindex, nofollow',
      schema: [createContactPageSchema(contactThankYouPath, 'ThemeStudios query submitted')],
    }
  }

  return {
    canonicalPath: contactPagePath,
    title: `Contact ThemeStudios | Request a Design Quote`,
    description:
      'Contact ThemeStudios through a dedicated quote request page with WhatsApp support, grouped service selection, and a direct form for posters, reels, branding, ads support, and monthly creative enquiries.',
    keywords:
      'ThemeStudios contact us, request design quote, WhatsApp design studio, branding enquiry, monthly creative enquiry, contact ThemeStudios Madurai',
    schema: [createContactPageSchema(contactPagePath, 'Contact ThemeStudios')],
  }
}

export function createPolicyDocumentMeta(page: PolicyPage): DocumentMeta {
  return {
    canonicalPath: page.path,
    description: page.description,
    keywords: page.keywords,
    title: `${page.title} | ThemeStudios Digital Designers`,
  }
}

export function createServiceDocumentMeta(page: ServiceLandingPage): DocumentMeta {
  return {
    canonicalPath: page.canonicalPath,
    description: page.description,
    keywords: page.keywords,
    title: page.title,
    schema: [createServiceSchema(page), createBreadcrumbSchema(page), createServiceFaqSchema(page)],
  }
}

export function updateDocumentMeta(meta: DocumentMeta) {
  if (typeof document === 'undefined') {
    return
  }

  document.title = meta.title

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', meta.description)
  }

  const keywords = document.querySelector('meta[name="keywords"]')
  if (keywords) {
    keywords.setAttribute('content', meta.keywords ?? '')
  }

  const robots = document.querySelector('meta[name="robots"]')
  if (robots) {
    robots.setAttribute('content', meta.robots ?? 'index, follow')
  }

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', toAbsoluteUrl(meta.canonicalPath))
  }

  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', toAbsoluteUrl(meta.canonicalPath))
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', meta.title)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', meta.description)
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', meta.title)
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', meta.description)
  }

  const schemaElement = document.getElementById('route-schema')
  if (schemaElement) {
    schemaElement.textContent = JSON.stringify(meta.schema ?? [])
  }
}

export function createProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    legalName: businessName,
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    image: `${baseUrl}/assets/branding/ts-facebook-banner.webp`,
    description:
      'ThemeStudios is a remote digital design studio creating posters, reels, branding visuals, ad creatives, and monthly social media systems for small businesses.',
    slogan: locationStatement,
    priceRange: '\u20b9349 - \u20b929,999',
    email: supportEmail,
    telephone: whatsappDisplayNumber,
    areaServed: ['Madurai', 'Tamil Nadu', 'India'],
    serviceType: [
      'Poster design service',
      'Reel creative service',
      'Festival poster design',
      'Branding and logo design',
      'Ad creative support',
      'Business profile design',
      'Monthly social media design',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: supportEmail,
        telephone: whatsappDisplayNumber,
        areaServed: ['Tamil Nadu', 'India'],
        availableLanguage: ['English', 'Tamil'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ThemeStudios 2026 service catalog',
      itemListElement: publicOffers.map((offer) => createOfferCatalogItem(offer.name, offer.price)),
    },
    sameAs: [
      instagramProfileUrl,
      ...(facebookPageUrl ? [facebookPageUrl] : []),
      whatsappBaseUrl,
    ],
  }
}

function createOfferCatalogItem(name: string, price: number) {
  return {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      price,
      priceCurrency: 'INR',
    },
  }
}

function createContactPageSchema(pathname: string, pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: pageName,
    url: toAbsoluteUrl(pathname),
    description:
      'Dedicated contact page for ThemeStudios design, branding, ads support, and monthly package enquiries with WhatsApp support and direct quote requests.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: siteName,
      legalName: businessName,
      email: supportEmail,
      telephone: whatsappDisplayNumber,
      areaServed: ['Madurai', 'Tamil Nadu', 'India'],
      sameAs: [
        instagramProfileUrl,
        ...(facebookPageUrl ? [facebookPageUrl] : []),
        whatsappBaseUrl,
      ],
    },
  }
}

export function createFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function createServiceSchema(page: ServiceLandingPage) {
  const numericPrice = page.ctaPrice.replace(/[^\d]/g, '')

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceName,
    serviceType: page.serviceName,
    provider: {
      '@type': 'ProfessionalService',
      name: siteName,
      areaServed: ['Madurai', 'Tamil Nadu', 'India'],
    },
    areaServed: ['Madurai', 'Tamil Nadu', 'India'],
    description: page.description,
    url: toAbsoluteUrl(page.canonicalPath),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: numericPrice,
      description: `${page.ctaPackageName} service enquiry. Typical public starting point: ${page.ctaPrice}.`,
      availability: 'https://schema.org/InStock',
    },
  }
}

function createServiceFaqSchema(page: ServiceLandingPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function createBreadcrumbSchema(page: ServiceLandingPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: siteName,
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.serviceName,
        item: toAbsoluteUrl(page.canonicalPath),
      },
    ],
  }
}

export const baseRouteSchemaScript = JSON.stringify(
  [createProfessionalServiceSchema(), createFaqSchema()],
  null,
  2
)

export const baseSocialDescription = `${businessName} | ${locationLabel}`
