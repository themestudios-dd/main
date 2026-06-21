import { useEffect } from 'react'

import { type PolicyPage, policyLinks } from './policyData'
import { createPolicyDocumentMeta, updateDocumentMeta } from './seo'
import { trackEmailClick, trackWhatsAppClick } from './tracking'

type PolicyRoutePageProps = {
  currentYear: number
  page: PolicyPage
  whatsappHref: string
}

export function PolicyRoutePage({ currentYear, page, whatsappHref }: PolicyRoutePageProps) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick(`policy-${page.path}`)
  }

  const handleEmailClick = () => {
    trackEmailClick(`policy-${page.path}`)
  }

  useEffect(() => {
    updateDocumentMeta(createPolicyDocumentMeta(page))
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

        <nav className="site-nav" aria-label="Policy navigation">
          <a href="/">Home</a>
          {policyLinks.map((link) => (
            <a
              aria-current={link.href === page.path ? 'page' : undefined}
              className={link.href === page.path ? 'policy-route-link-active' : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-primary nav-cta"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          Contact on WhatsApp
        </a>
      </header>

      <main className="policy-route-main" id="main-content">
        <section className="policy-route-hero">
          <p className="eyebrow">ThemeStudios Legal</p>
          <h1 className="policy-route-title">{page.title}</h1>
          <p className="policy-route-description">{page.description}</p>
          <div className="policy-route-meta">
            {page.meta.map((entry) => (
              <span className="policy-route-pill" key={entry}>
                {entry}
              </span>
            ))}
          </div>
        </section>

        <section className="policy-route-grid">
          <aside className="policy-route-card">
            <h2>Quick Navigation</h2>
            <ul className="policy-route-toc">
              {page.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="policy-route-stack">
            {page.sections.map((section) => (
              <article className="policy-route-card" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="policy-route-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span aria-hidden="true" className="policy-route-bullet" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="policy-route-card policy-route-support">
          <h2>Policy Support</h2>
          <p>
            For policy questions, payment clarification, or grievance-related communication, contact
            ThemeStudios at{' '}
            <a href="mailto:support@themestudios.in" onClick={handleEmailClick}>
              support@themestudios.in
            </a>{' '}
            or on <a href="tel:+918903205676">+91 89032 05676</a>.
          </p>
          <div className="policy-route-actions">
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
            <p>Policy page for ThemeStudios | themestudios.in</p>
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
