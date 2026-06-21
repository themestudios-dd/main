import { useEffect } from 'react'

import { policyLinks } from './policyData'
import { createServiceDocumentMeta, updateDocumentMeta } from './seo'
import type { ServiceLandingPage } from './serviceData'
import { trackPackageInquiry, trackWhatsAppClick } from './tracking'

type ServiceRoutePageProps = {
  currentYear: number
  packageHref: string
  page: ServiceLandingPage
  whatsappHref: string
}

export function ServiceRoutePage({
  currentYear,
  packageHref,
  page,
  whatsappHref,
}: ServiceRoutePageProps) {
  const handlePackageClick = () => {
    trackPackageInquiry(page.ctaPackageName)
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(`service-${page.canonicalPath}`)
  }

  useEffect(() => {
    updateDocumentMeta(createServiceDocumentMeta(page))
  }, [page])

  return (
    <div className="page-shell policy-route-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="/" aria-label="ThemeStudios home">
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
          <a href="/#services">Services</a>
          <a href="/#packages">Packages</a>
          <a href="/#process">Workflow</a>
          <a href="/contact-us">Contact</a>
        </nav>

        <a
          className="button button-primary nav-cta"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          Start on WhatsApp
        </a>
      </header>

      <main className="policy-route-main" id="main-content">
        <section className="policy-route-hero">
          <p className="eyebrow">Service landing page</p>
          <h1 className="policy-route-title">{page.serviceName}</h1>
          <p className="policy-route-description">{page.intro}</p>
          <div className="policy-route-meta">
            <span className="policy-route-pill">{page.ctaPackageName}</span>
            <span className="policy-route-pill">{page.ctaPrice}</span>
            <span className="policy-route-pill">Remote support from Madurai</span>
          </div>
          <div className="policy-route-actions">
            <a
              className="button button-primary"
              href={packageHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePackageClick}
            >
              Ask about {page.ctaPackageName}
            </a>
            <a
              className="button button-secondary"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              Start your brief on WhatsApp
            </a>
          </div>
        </section>

        <section className="policy-route-grid">
          <aside className="policy-route-card">
            <h2>Who It&apos;s For</h2>
            <p>{page.whoItsFor}</p>
            <ul className="policy-route-list">
              {page.audience.map((entry) => (
                <li key={entry}>
                  <span aria-hidden="true" className="policy-route-bullet" />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="policy-route-stack">
            <article className="policy-route-card">
              <h2>Why businesses choose this route</h2>
              <p>{page.description}</p>
              <ul className="policy-route-list">
                {page.valuePoints.map((entry) => (
                  <li key={entry}>
                    <span aria-hidden="true" className="policy-route-bullet" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="policy-route-card">
              <h2>Best package next step</h2>
              <p>
                If this service page matches your current promotion goal, the fastest next step is
                to ask about <strong>{page.ctaPackageName}</strong>.
              </p>
              <p>
                Typical entry point: <strong>{page.ctaPrice}</strong>
              </p>
              <div className="policy-route-actions">
                <a
                  className="button button-primary"
                  href={packageHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePackageClick}
                >
                  Ask for this package
                </a>
                <a className="button button-secondary" href="/#packages">
                  Compare all packages
                </a>
              </div>
            </article>

            <article className="policy-route-card">
              <h2>Related service links</h2>
              <ul className="policy-route-list">
                {page.links.map((link) => (
                  <li key={link.href}>
                    <span aria-hidden="true" className="policy-route-bullet" />
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="policy-route-card policy-route-support">
          <h2>Quick answers before you order</h2>
          <div className="faq-grid">
            {page.faqItems.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="policy-route-card policy-route-support">
          <h2>Need the right package?</h2>
          <p>
            Share your business name, goal, offer details, and preferred timeline on WhatsApp.
            ThemeStudios will confirm the right package before payment is requested.
          </p>
          <div className="policy-route-actions">
            <a
              className="button button-primary"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              Start on WhatsApp
            </a>
            {policyLinks.map((link) => (
              <a className="button button-secondary legal-link-button" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer full-bleed">
        <div className="section-shell footer-shell">
          <div className="footer-brand">
            <img
              src="/assets/branding/ts-logo-dark.webp"
              alt="ThemeStudios emblem"
              width="54"
              height="54"
            />
            <div>
              <p className="brand-name">ThemeStudios</p>
              <p className="brand-tagline">Digital Designers for Small Business Growth</p>
            </div>
          </div>

          <div className="footer-meta">
            <p>Service page for ThemeStudios | themestudios.in</p>
            <p>{`\u00A9 ${currentYear} ThemeStudios | Madurai - Remote office`}</p>
            <p className="footer-links">
              {policyLinks.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? ' | ' : ''}
                  <a href={link.href}>{link.label}</a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
