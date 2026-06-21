import { useEffect, useState } from 'react'

import { getContactRoute } from './contactRoute'
import { ContactRoutePage } from './contactRoutePage'
import { getPolicyPage, policyLinks } from './policyData'
import { PolicyRoutePage } from './policyRoutes'
import {
  contactOfferGroups,
  featuredOfferCards,
  formatOfferPrice,
  industryOfferCards,
  monthlyServiceRange,
  offerCategoryCards,
  publicOfferCount,
  startingServicePrice,
  oneTimeServiceRange,
} from './offerCatalog'
import { createHomeDocumentMeta, updateDocumentMeta } from './seo'
import { getServiceLandingPage } from './serviceData'
import { ServiceRoutePage } from './serviceRoutePage'
import {
  creativeTrustBullets,
  homeFaqItems,
  orderFlowSteps,
  trustNotes,
} from './siteContent'
import {
  locationStatement,
  supportEmail,
  whatsappBaseUrl,
  whatsappDisplayNumber,
} from './siteConfig'
import {
  initMetaPixel,
  trackEmailClick,
  trackPackageInquiry,
  trackPageView,
  trackWhatsAppClick,
} from './tracking'

type StoryCard = {
  alt: string
  category: string
  image: string
  summary: string
  title: string
}

type IconProps = {
  className?: string
}

const heroStartingPrice = `Services from ${startingServicePrice}`
const contactFormActionPath = '/api/contact.php'
const packageRail = featuredOfferCards
const contactCatalogSummary =
  `${publicOfferCount} active services and packs across posters, reels, branding, ads support, and monthly systems.`
const heroPortfolioBoard = '/assets/portfolio/business-portfolio-2026.webp'
const coreServicesBoard = '/assets/portfolio/about-core-services.webp'

const whatsappIntro = [
  'Hi ThemeStudios, I need the right service or package for my business.',
  '',
  'Business name:',
  'Business type:',
  'Required service or package:',
  'What should the creative support help with?',
].join('\n')

const whatsappBrief = [
  'Hi ThemeStudios, I want to start a design order.',
  '',
  'Business name:',
  'Logo available:',
  'Offer details or poster text:',
  'Contact number:',
  'Product or service photo:',
  'Language (Tamil / English / Both):',
  'Platform (WhatsApp / Instagram / Facebook):',
  'Preferred style:',
  'Delivery time:',
].join('\n')

const whatsappIntroLink = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappIntro)}`
const whatsappBriefLink = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappBrief)}`

const studioMetrics = [
  { label: 'Active services and packs', value: `${publicOfferCount}+ offers` },
  { label: 'One-time design range', value: oneTimeServiceRange },
  { label: 'Monthly support range', value: monthlyServiceRange },
]

const heroSignals = [
  'Posters, reels, branding, ads support and monthly systems in one studio',
  `${publicOfferCount}+ active services and packs across universal and industry-specific lanes`,
  'WhatsApp-first briefing for faster order starts',
  'Original layouts built for practical small-business promotion',
]

const industryCards = industryOfferCards.map((item) => ({
  name: item.name,
  text: `${item.summary} Typical range: ${item.priceBand}.`,
}))

const storyCards: StoryCard[] = [
  {
    alt: 'ThemeStudios clinic, healthcare and startup business packages board',
    category: 'Clinic + startup packs',
    image: '/assets/portfolio/clinic-startup-packages.webp',
    title: 'Clinic, healthcare, and startup packages now use the real portfolio board',
    summary:
      'This board now represents the live clinic, healthcare, and startup lane, including trust-building monthly packs, healthcare branding, launch packs, and startup growth support.',
  },
  {
    alt: 'ThemeStudios restaurant, food and salon beauty packages board',
    category: 'Food + beauty packs',
    image: '/assets/portfolio/restaurant-salon-packages.webp',
    title: 'Restaurant, food, salon, and beauty packages now match the actual offer boards',
    summary:
      'The website now shows the correct package board for food businesses, restaurants, salons, beauty studios, bridal campaigns, and menu or branding support.',
  },
  {
    alt: 'ThemeStudios real estate, construction and retail local shop packages board',
    category: 'Construction + retail packs',
    image: '/assets/portfolio/construction-retail-packages.webp',
    title: 'Construction, real estate, retail, and local shop packs now include the missing live services',
    summary:
      'Builder Branding Pack, Festival Sales Pack, and WhatsApp Catalog Pack were added into the live catalog so the real estate and retail boards now match the website data.',
  },
  {
    alt: 'ThemeStudios education and training packages board with final notes and contact details',
    category: 'Education packs',
    image: '/assets/portfolio/education-packages-contact.webp',
    title: 'Education and training packages now include the live institute branding lane',
    summary:
      'The education board is now reflected on the site with starter, campaign, institute branding, and monthly education growth options aligned to the latest pricing.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Send the brief',
    text: 'Share the business name, logo, offer details, product images, preferred language, platform and deadline through WhatsApp.',
  },
  {
    step: '02',
    title: 'Match the right service lane',
    text: 'ThemeStudios confirms whether a one-time creative, branding kit, ads support item, monthly plan, or industry pack fits the work best.',
  },
  {
    step: '03',
    title: 'Build the creative',
    text: 'We shape the visual hierarchy for mobile-first promotion with the right mix of offer copy, branding cues, motion, and campaign structure.',
  },
  {
    step: '04',
    title: 'Revise and deliver',
    text: 'Minor revisions are handled within the confirmed scope before final JPG, PNG, PDF, or campaign-ready delivery.',
  },
]

function createPackageLink(packageName: string) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(
    `Hi ThemeStudios, I want the ${packageName} service or package. Please share the next steps.`
  )}`
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M18 6H8.5M18 6V15.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7L9 18L4 13"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MessageIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11.5C20 6.806 16.194 3 11.5 3C6.806 3 3 6.806 3 11.5C3 13.233 3.521 14.844 4.414 16.185L3.5 20.5L7.815 19.586C9.156 20.479 10.767 21 12.5 21C17.194 21 21 17.194 21 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6.5H20V17.5H4V6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlusIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App({ pathname }: { pathname?: string }) {
  const currentYear = new Date().getFullYear()
  const currentPath = pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
  const contactRoute = getContactRoute(currentPath)
  const policyPage = getPolicyPage(currentPath)
  const servicePage = getServiceLandingPage(currentPath)
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleWhatsAppClick = (source: string) => () => {
    trackWhatsAppClick(source)
  }

  const handlePackageClick = (packageName: string) => () => {
    trackPackageInquiry(packageName)
  }

  const handleEmailClick = (source: string) => () => {
    trackEmailClick(source)
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    initMetaPixel()
    trackPageView()
  }, [])

  useEffect(() => {
    if (!contactRoute && !policyPage && !servicePage) {
      updateDocumentMeta(createHomeDocumentMeta())
    }
  }, [contactRoute, policyPage, servicePage])

  if (policyPage) {
    return (
      <PolicyRoutePage
        currentYear={currentYear}
        page={policyPage}
        whatsappHref={whatsappIntroLink}
      />
    )
  }

  if (contactRoute) {
    return (
      <ContactRoutePage
        currentYear={currentYear}
        route={contactRoute}
        whatsappHref={whatsappBriefLink}
      />
    )
  }

  if (servicePage) {
    return (
      <ServiceRoutePage
        currentYear={currentYear}
        packageHref={createPackageLink(servicePage.ctaPackageName)}
        page={servicePage}
        whatsappHref={whatsappBriefLink}
      />
    )
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="ThemeStudios home">
          <img
            className="brand-logo"
            src="/assets/branding/ts-logo-light.webp"
            alt="ThemeStudios logo"
            width="56"
            height="56"
          />
          <div>
            <p className="brand-name">ThemeStudios</p>
            <p className="brand-tagline">Digital Designers</p>
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">Workflow</a>
          <a href="/contact-us">Contact</a>
        </nav>

        <a
          className="button button-primary nav-cta"
          href={whatsappBriefLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick('header-start')}
        >
          Start on WhatsApp
        </a>
      </header>

      <main id="main-content">
        <section className="hero-section full-bleed" id="top">
          <div className="section-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">ThemeStudios Digital Designers</p>
              <h1 className="hero-title">
                Posters, reels, branding, ads, and monthly creative systems for businesses that
                need to stay visible every day
              </h1>
              <p className="hero-description">
                ThemeStudios now supports one-time creatives, brand identity work, ads support,
                business profile design, and industry-specific monthly packs for restaurants,
                salons, clinics, retail stores, startups, education brands, and service
                businesses.
              </p>

              <div className="hero-actions">
                <a className="button button-light" href="#packages">
                  Explore service catalog
                </a>
                <a
                  className="button button-ghost-light"
                  href={whatsappIntroLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick('hero-package-advice')}
                >
                  Ask for the right package
                </a>
              </div>

              <ul className="hero-signal-list">
                {heroSignals.map((entry) => (
                  <li key={entry}>
                    <CheckIcon className="list-icon" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-panel">
                <span className="visual-chip visual-chip-top">{heroStartingPrice}</span>
                <div className="hero-visual-frame">
                  <picture>
                    <source srcSet={heroPortfolioBoard} type="image/webp" />
                    <img
                      className="hero-visual-image"
                      src={heroPortfolioBoard.replace('.webp', '.png')}
                      alt="ThemeStudios business portfolio 2026 pricing and services board"
                      width="1181"
                      height="1772"
                      fetchPriority="high"
                    />
                  </picture>
                </div>
                <div className="visual-chip-stack">
                  <article className="visual-note">
                    <strong>One-time services</strong>
                    <p>{oneTimeServiceRange}</p>
                  </article>
                  <article className="visual-note">
                    <strong>Monthly systems</strong>
                    <p>{monthlyServiceRange}</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-section" id="services">
          <div className="section-shell">
            <div className="section-intro intro-section-intro">
              <p className="eyebrow">Original creative support</p>
              <h2 className="section-title">
                One studio, multiple service lanes, and a clearer 2026 pricing ladder
              </h2>
            </div>

            <div className="intro-copy-grid">
              <p className="section-copy">
                ThemeStudios helps business owners choose the format that matches how they
                actually market now: posters, stories, reels, branding kits, ad creatives,
                business profile support, or recurring monthly systems.
              </p>
              <p className="section-copy">
                That means less confusion at the buying stage, cleaner scope confirmation, and
                faster quoting once the brief is approved.
              </p>
            </div>

            <div className="metric-row">
              {studioMetrics.map((metric) => (
                <article className="metric-pill" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="section-shell">
            <div className="poster-feature-layout">
              <div className="poster-feature-copy">
                <p className="eyebrow">About and core services</p>
                <h2 className="section-title">
                  The website visuals now follow the actual 2026 portfolio boards
                </h2>
                <p className="section-copy">
                  The core services board is now part of the homepage so visitors see the real
                  ThemeStudios service lanes: posters, social creatives, reels, branding, ad
                  support, business profile work, and website visuals.
                </p>
                <p className="section-copy">
                  Missing packs from the attached portfolio were also added to the live catalog,
                  including Builder Branding Pack, Festival Sales Pack, WhatsApp Catalog Pack, and
                  Institute Branding Pack.
                </p>
              </div>

              <div className="poster-feature-media">
                <div className="poster-feature-frame">
                  <picture>
                    <source srcSet={coreServicesBoard} type="image/webp" />
                    <img
                      className="poster-feature-image"
                      src={coreServicesBoard.replace('.webp', '.png')}
                      alt="ThemeStudios about and core services board"
                      loading="lazy"
                      width="1181"
                      height="1772"
                      sizes="(max-width: 860px) 100vw, 38vw"
                    />
                  </picture>
                </div>
              </div>
            </div>

            <div className="industry-grid">
              {offerCategoryCards.map((item) => (
                <article className="industry-proof-card" key={item.name}>
                  <p className="solution-audience">{item.badge}</p>
                  <p className="industry-proof-name">{item.name}</p>
                  <p>
                    <strong>{item.priceBand}</strong>
                  </p>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section solutions-section" id="packages">
          <div className="section-shell">
            <div className="section-intro">
              <p className="eyebrow">Pricing boards</p>
              <h2 className="section-title">
                The main service cards now use the real pricing pages instead of placeholder art
              </h2>
              <p className="section-copy">
                These boards now match the attached portfolio exactly: individual design pricing,
                reels and branding, profile and ads support, and the universal monthly package
                ladder.
              </p>
              <a
                className="text-link"
                href={whatsappIntroLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick('package-advice-sidebar')}
              >
                Get package advice
                <ArrowIcon className="button-icon" />
              </a>
            </div>

            <div className="solutions-rail">
              {packageRail.map((item) => (
                <article className="solution-card" key={item.name}>
                  <div className="solution-media">
                    <picture>
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image.replace('.webp', '.png')}
                        alt={item.imageAlt}
                        loading="lazy"
                        width="1181"
                        height="1772"
                        sizes="(max-width: 860px) 100vw, 22vw"
                      />
                    </picture>
                  </div>

                  <div className="solution-copy">
                    <div className="solution-head">
                      <p className="solution-audience">{item.audience}</p>
                      <span className="solution-delivery">{item.delivery}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="solution-price">{item.price}</p>
                    {item.note ? <p className="solution-note">{item.note}</p> : null}
                    <p className="solution-summary">{item.summary}</p>
                    <ul className="solution-list">
                      {item.highlights.map((entry) => (
                        <li key={entry}>
                          <CheckIcon className="list-icon" />
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={createPackageLink(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handlePackageClick(item.name)}
                    >
                      Ask about {item.name}
                      <ArrowIcon className="button-icon" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="section-shell">
            <div className="section-intro section-intro-centered">
              <p className="eyebrow">Industry packs</p>
              <h2 className="section-title">
                Industry-specific monthly packs and branding kits are now part of the public ladder
              </h2>
            </div>

            <div className="industry-grid">
              {industryCards.map((item) => (
                <article className="industry-proof-card" key={item.name}>
                  <span className="industry-proof-icon" aria-hidden="true">
                    <CheckIcon className="industry-proof-icon-mark" />
                  </span>
                  <p className="industry-proof-name">{item.name}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band full-bleed">
          <div className="section-shell feature-band-shell">
            <div className="feature-band-card">
              <p className="eyebrow">Monthly and industry planning</p>
              <h2 className="section-title">
                Need a monthly system or vertical-specific pack instead of one creative?
              </h2>
              <p className="section-copy">
                The catalog now includes universal monthly plans plus vertical packs for clinic,
                startup, restaurant, salon, retail, education, and construction businesses that
                need more than one isolated design request.
              </p>
              <a
                className="button button-light"
                href={createPackageLink('Monthly Social Growth Pack')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePackageClick('Monthly Social Growth Pack')}
              >
                Ask about monthly packs
              </a>
            </div>
          </div>
        </section>

        <section className="section stories-section">
          <div className="section-shell">
            <div className="section-intro">
              <p className="eyebrow">Industry boards</p>
              <h2 className="section-title">
                Industry package pages now use the correct attached poster designs
              </h2>
              <p className="section-copy">
                The homepage now shows the actual industry boards for healthcare, startup, food,
                salon, retail, construction, and education instead of unrelated sample graphics.
              </p>
            </div>

            <div className="story-grid">
              {storyCards.map((item) => (
                <article className="story-card" key={item.title}>
                  <div className="story-image-wrap">
                    <picture>
                      <source srcSet={item.image} type="image/webp" />
                      <img
                        src={item.image.replace('.webp', '.png')}
                        alt={item.alt}
                        loading="lazy"
                        width="1181"
                        height="1772"
                        sizes="(max-width: 860px) 100vw, 47vw"
                      />
                    </picture>
                  </div>
                  <div className="story-copy">
                    <span className="story-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <a
                      className="text-link"
                      href={whatsappBriefLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick(`story-${item.category}`)}
                    >
                      Start a brief
                      <ArrowIcon className="button-icon" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-shell">
            <div className="section-intro section-intro-centered">
              <p className="eyebrow">Workflow</p>
              <h2 className="section-title">Fast briefing, focused revisions, clean delivery</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((item) => (
                <article className="process-card" key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section order-flow-section">
          <div className="section-shell">
            <div className="section-intro section-intro-centered">
              <p className="eyebrow">How your order works</p>
              <h2 className="section-title">
                Clear package confirmation first, then payment, draft, and delivery
              </h2>
              <p className="section-copy">
                ThemeStudios keeps the ordering flow simple so small businesses know what happens
                before they pay and what happens next after the brief is shared.
              </p>
            </div>

            <div className="process-grid order-flow-grid">
              {orderFlowSteps.map((step, index) => (
                <article className="order-flow-item" key={step}>
                  <span className="order-flow-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>

            <div className="trust-note-band">
              {trustNotes.map((entry) => (
                <article className="trust-note-card" key={entry}>
                  <p>{entry}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <div className="section-shell">
            <div className="section-intro">
              <p className="eyebrow">Dedicated contact page</p>
              <h2 className="section-title">
                Need a cleaner quote flow for the full service catalog?
              </h2>
              <p className="section-copy">
                ThemeStudios now has a separate Contact Us page with grouped service selection,
                mobile-number-first enquiry, and a direct WhatsApp route for businesses comparing
                one-time work, branding kits, ad support, or monthly plans.
              </p>
            </div>

            <div className="contact-home-grid">
            <article className="contact-primary-card">
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="/contact-us"
                >
                  Open Contact Us page
                  <ArrowIcon className="button-icon" />
                </a>
                <a
                  className="button button-light"
                  href={whatsappBriefLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick('contact-primary')}
                >
                  Talk on WhatsApp
                  <MessageIcon className="button-icon" />
                </a>
                <a
                  className="button button-secondary"
                  href={`mailto:${supportEmail}`}
                  onClick={handleEmailClick('contact-primary')}
                >
                  Email the studio
                </a>
              </div>

              <div className="contact-trust-inline">
                {creativeTrustBullets.map((entry) => (
                  <span className="policy-route-pill" key={entry}>
                    {entry}
                  </span>
                ))}
              </div>
            </article>

              <form
                className="contact-home-form-card"
                method="POST"
                action={contactFormActionPath}
              >
                <input type="hidden" name="requestSource" value="Home page contact section" />
                <p className="contact-home-hidden-field">
                  <label>
                    Leave this field empty
                    <input name="company-name" autoComplete="off" tabIndex={-1} />
                  </label>
                </p>

                <p className="contact-home-form-eyebrow">Full catalog enquiry</p>
                <h3>Choose from the grouped 2026 service catalog or ask for a recommendation</h3>
                <p className="contact-home-form-copy">
                  Use the homepage form for a fast first enquiry, or open the dedicated page if you
                  want the full grouped quote request flow.
                </p>

                <div className="contact-home-form-grid">
                  <label className="contact-home-field">
                    <span>Your name</span>
                    <input
                      name="contactName"
                      type="text"
                      placeholder="Business owner name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="contact-home-field">
                    <span>Mobile number *</span>
                    <input
                      name="mobileNumber"
                      type="tel"
                      placeholder="+91"
                      inputMode="tel"
                      autoComplete="tel"
                      pattern="[0-9+\\-\\s]{10,}"
                      required
                    />
                  </label>

                  <label className="contact-home-field contact-home-field-full">
                    <span>Service or package (optional)</span>
                    <select name="selectedPackage" defaultValue="">
                      <option value="">Need the right recommendation</option>
                      {contactOfferGroups.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.offers.map((offer) => (
                            <option key={offer.name} value={offer.name}>
                              {`${offer.name} - ${formatOfferPrice(offer)}`}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </label>

                  <label className="contact-home-field contact-home-field-full">
                    <span>Your brief</span>
                    <textarea
                      name="projectMessage"
                      rows={5}
                      placeholder="Tell us about your requirement, business type, preferred format, offer details, and what the creative support should help with."
                    />
                  </label>
                </div>

                <p className="contact-home-form-copy">{contactCatalogSummary}</p>

                <button className="button button-primary" type="submit">
                  Send enquiry
                  <ArrowIcon className="button-icon" />
                </button>
              </form>

              <article className="contact-side-card">
                <h3>What the new page includes</h3>
                <ul className="contact-list">
                  {[
                    'Grouped selection for the full public service catalog',
                    'One-time, monthly, setup, and management price visibility',
                    'Industry-specific packs for seven business verticals',
                    'Mandatory mobile number for faster response',
                    'Free-form message area for your brief and business context',
                  ].map((item) => (
                    <li key={item}>
                      <CheckIcon className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="contact-side-card">
                <h3>Merchant identity</h3>
                <p>
                  <strong>ThemeStudios Digital Designers</strong>
                </p>
                <p>{locationStatement}</p>
                <ul className="contact-list">
                  <li>
                    <MessageIcon className="list-icon" />
                    <a href={whatsappIntroLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick('merchant-identity')}>
                      Official WhatsApp: {whatsappDisplayNumber}
                    </a>
                  </li>
                  <li>
                    <MailIcon className="list-icon" />
                    <a href={`mailto:${supportEmail}`} onClick={handleEmailClick('merchant-identity')}>
                      Support: {supportEmail}
                    </a>
                  </li>
                </ul>
              </article>

              <article className="contact-side-card">
                <h3>Before you submit</h3>
                <ul className="contact-list">
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>Choose the closest service only if you already know it.</span>
                  </li>
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>Mobile number stays mandatory for a reliable callback.</span>
                  </li>
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>Ads setup and ads management pricing do not include ad spend.</span>
                  </li>
                </ul>

                <div className="legal-link-row">
                  {policyLinks.map((link) => (
                    <a className="button button-secondary legal-link-button" href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="section-shell">
            <div className="section-intro">
              <p className="eyebrow">Frequently asked questions</p>
              <h2 className="section-title">Short answers before you start the brief</h2>
              <p className="section-copy">
                These are the common questions businesses ask before choosing from the new service,
                branding, ads, and monthly support ladder.
              </p>
            </div>

            <div className="faq-callout">
              <a
                className="button button-primary"
                href={whatsappIntroLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick('faq-whatsapp')}
              >
                Talk on WhatsApp
              </a>
            </div>

            <div className="faq-accordion">
              {homeFaqItems.map((item, index) => {
                const isOpen = activeFaqIndex === index

                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                    <button
                      aria-expanded={isOpen}
                      className="faq-trigger"
                      type="button"
                      onClick={() => {
                        setActiveFaqIndex(isOpen ? -1 : index)
                      }}
                    >
                      <h3>{item.question}</h3>
                      <span className="faq-icon" aria-hidden="true">
                        <PlusIcon className="button-icon" />
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer full-bleed">
        <div className="section-shell footer-shell">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <img
                src="/assets/branding/ts-logo-dark.webp"
                alt="ThemeStudios emblem"
                width="54"
                height="54"
              />
              <div>
                <p className="brand-name">ThemeStudios</p>
                <p className="brand-tagline">Poster Design, Branding & Monthly Creatives</p>
              </div>
            </div>
            <p className="footer-description">
              ThemeStudios builds everyday promotional design systems for small businesses with
              posters, reels, branding kits, ad creatives, and recurring monthly support.
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>
            <a
              href={whatsappIntroLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick('footer-whatsapp')}
            >
              WhatsApp
            </a>
            <a href={`mailto:${supportEmail}`} onClick={handleEmailClick('footer-email')}>
              {supportEmail}
            </a>
            <p>{locationStatement}</p>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Policies</p>
            {policyLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="section-shell footer-bottom">
          <p>{`\u00A9 ${currentYear} ThemeStudios | Madurai - Remote office`}</p>
          <p className="footer-links-inline">
            {policyLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
