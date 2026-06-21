import { useEffect, type FormEvent } from 'react'

import { contactFormName, contactPagePath, type ContactRouteState } from './contactRoute'
import {
  contactOfferGroups,
  formatOfferPrice,
  publicOfferCount,
} from './offerCatalog'
import { policyLinks } from './policyData'
import { createContactDocumentMeta, updateDocumentMeta } from './seo'
import { locationStatement, supportEmail, whatsappDisplayNumber } from './siteConfig'
import {
  trackEmailClick,
  trackPackageInquiry,
  trackRequestQuoteConversion,
  trackWhatsAppClick,
} from './tracking'

type ContactRoutePageProps = {
  currentYear: number
  route: ContactRouteState
  whatsappHref: string
}

const formChecklist = [
  'Mobile number is required so we can reply faster.',
  'Choose a service only if you already know the closest fit.',
  'Add your message, business type, goal, and preferred format in one note.',
]

const responseNotes = [
  'Clear service guidance before payment',
  'WhatsApp and email support from the same studio',
  'Ads setup and ads management are quoted separately from ad spend',
]

const successNotes = [
  'Your enquiry is now with the ThemeStudios team.',
  'You can continue on WhatsApp if you want to add photos, references, or offer text right away.',
  'A reply usually comes within one business day.',
]

const contactFormActionPath = '/api/contact.php'

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6.5H20V17.5H4V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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

function MessageIcon({ className }: { className?: string }) {
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

function CheckIcon({ className }: { className?: string }) {
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

export function ContactRoutePage({
  currentYear,
  route,
  whatsappHref,
}: ContactRoutePageProps) {
  const isThankYou = route.isThankYou
  const submissionStatus =
    !isThankYou && typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('status')
      : null

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(`contact-route-${route.canonicalPath}`)
  }

  const handleEmailClick = () => {
    trackEmailClick(`contact-route-${route.canonicalPath}`)
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const selectedPackage = formData.get('selectedPackage')

    if (typeof selectedPackage === 'string' && selectedPackage.length > 0) {
      trackPackageInquiry(selectedPackage)
    }
  }

  useEffect(() => {
    updateDocumentMeta(createContactDocumentMeta(isThankYou))

    if (isThankYou) {
      trackRequestQuoteConversion()
    }
  }, [isThankYou])

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
          <a href={contactPagePath} aria-current={isThankYou ? undefined : 'page'}>
            Contact
          </a>
        </nav>

        <a
          className="button button-primary nav-cta"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          Talk on WhatsApp
        </a>
      </header>

      <main className="contact-route-main" id="main-content">
        {isThankYou ? (
          <section className="contact-route-success-card">
            <div className="contact-route-success-layout">
              <div className="contact-route-success-copy">
                <span className="contact-route-success-seal" aria-hidden="true">
                  <CheckIcon className="contact-route-success-seal-icon" />
                </span>
                <p className="eyebrow">Query submitted</p>
                <h1 className="policy-route-title">
                  Your query has been submitted. Our team will be in touch with you soon.
                </h1>
                <p className="policy-route-description">
                  Thanks for reaching out to ThemeStudios. We have received your details and will
                  connect with you through WhatsApp or email after reviewing your requirement.
                </p>
                <div className="policy-route-meta">
                  <span className="policy-route-pill">Support team notified</span>
                  <span className="policy-route-pill">Usually replies within one business day</span>
                </div>
                <div className="policy-route-actions">
                  <a
                    className="button button-primary contact-route-success-whatsapp"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    Continue on WhatsApp
                  </a>
                  <a className="button button-secondary" href={contactPagePath}>
                    Send another query
                  </a>
                  <a className="button button-secondary" href="/#packages">
                    Review catalog
                  </a>
                </div>
              </div>

              <aside className="contact-route-success-panel">
                <h2>What happens next</h2>
                <ul className="contact-list contact-route-success-list">
                  {successNotes.map((entry) => (
                    <li key={entry}>
                      <CheckIcon className="list-icon" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>

                <div className="contact-route-success-contact">
                  <div className="contact-route-success-contact-item">
                    <MessageIcon className="button-icon" />
                    <span>{whatsappDisplayNumber}</span>
                  </div>
                  <div className="contact-route-success-contact-item">
                    <MailIcon className="button-icon" />
                    <span>{supportEmail}</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        ) : (
          <>
            <section className="contact-route-grid">
              <article className="contact-route-hero-card">
                <p className="eyebrow">Dedicated contact page</p>
                <h1 className="policy-route-title">
                  Contact ThemeStudios through one focused quote request page
                </h1>
                <p className="policy-route-description">
                  This page is built for businesses that want a clear contact route, a direct
                  WhatsApp option, and grouped selection across the current public service catalog
                  before the brief starts.
                </p>

                <div className="contact-route-hero-panel">
                  <div className="contact-route-channel">
                    <span className="contact-route-channel-icon">
                      <MessageIcon className="button-icon" />
                    </span>
                    <div>
                      <strong>WhatsApp support</strong>
                      <p>Use the instant route if you want live service guidance right away.</p>
                    </div>
                  </div>
                  <div className="contact-route-channel">
                    <span className="contact-route-channel-icon">
                      <MailIcon className="button-icon" />
                    </span>
                    <div>
                      <strong>Email record</strong>
                      <p>The form sends directly to support@themestudios.in for a structured follow-up.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-route-actions">
                  <a
                    className="button button-light"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                  >
                    Start on WhatsApp
                  </a>
                  <a
                    className="button button-ghost-light"
                    href={`mailto:${supportEmail}`}
                    onClick={handleEmailClick}
                  >
                    Email support
                  </a>
                </div>

                <ul className="contact-list contact-route-inline-list">
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>
                      <strong>Official mobile / WhatsApp:</strong> {whatsappDisplayNumber}
                    </span>
                  </li>
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>
                      <strong>Support email:</strong> {supportEmail}
                    </span>
                  </li>
                  <li>
                    <CheckIcon className="list-icon" />
                    <span>{locationStatement}</span>
                  </li>
                </ul>
              </article>

              <article className="contact-route-form-card">
                <div className="contact-route-form-copy">
                  <p className="eyebrow">Request a quote</p>
                  <h2>Choose a service if you know it, or ask for the right recommendation</h2>
                  <p>
                    The grouped catalog below covers {publicOfferCount}+ active public services and
                    packs. Mobile number is required so ThemeStudios can respond properly.
                  </p>
                </div>

                {submissionStatus === 'error' ? (
                  <p className="contact-route-form-status" role="alert">
                    Your request could not be sent right now. Please try again in a moment or use
                    WhatsApp for an immediate reply.
                  </p>
                ) : null}

                <form
                  className="contact-route-form"
                  name={contactFormName}
                  method="POST"
                  action={contactFormActionPath}
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="requestSource" value="Contact Us Page" />
                  <p className="contact-route-hidden-field">
                    <label>
                      Leave this field empty
                      <input name="company-name" autoComplete="off" tabIndex={-1} />
                    </label>
                  </p>

                  <div className="contact-route-field-grid">
                    <label className="contact-route-field">
                      <span>Contact name</span>
                      <input name="contactName" type="text" placeholder="Your name" autoComplete="name" />
                    </label>

                    <label className="contact-route-field">
                      <span>Business name</span>
                      <input
                        name="businessName"
                        type="text"
                        placeholder="Business or brand"
                        autoComplete="organization"
                      />
                    </label>

                    <label className="contact-route-field">
                      <span>Mobile number *</span>
                      <input
                        name="mobileNumber"
                        type="tel"
                        placeholder="+91 98765 43210"
                        inputMode="tel"
                        autoComplete="tel"
                        pattern="[0-9+\\-\\s]{10,}"
                        required
                      />
                    </label>

                    <label className="contact-route-field">
                      <span>Email address</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="name@business.com"
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <label className="contact-route-field">
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

                  <label className="contact-route-field">
                    <span>Message or brief</span>
                    <textarea
                      name="projectMessage"
                      rows={6}
                      placeholder="Tell us what you need, your business type, preferred format, goal, delivery timing, language, or anything useful for the first reply."
                    />
                  </label>

                  <div className="contact-route-submit-row">
                    <button className="button button-primary" type="submit">
                      Submit request
                    </button>
                    <p>
                      By sending this request, you agree that ThemeStudios may contact you about
                      your enquiry through email or WhatsApp.
                    </p>
                  </div>
                </form>
              </article>
            </section>

            <section className="contact-route-support-grid">
              <article className="policy-route-card">
                <h2>What to include</h2>
                <ul className="contact-list">
                  {formChecklist.map((entry) => (
                    <li key={entry}>
                      <CheckIcon className="list-icon" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="policy-route-card">
                <h2>What happens next</h2>
                <ul className="contact-list">
                  {responseNotes.map((entry) => (
                    <li key={entry}>
                      <CheckIcon className="list-icon" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="policy-route-card">
                <h2>Policies and identity</h2>
                <p>
                  ThemeStudios Digital Designers handles replies through the official WhatsApp
                  number and support email listed on the website.
                </p>
                <div className="legal-link-row">
                  {policyLinks.map((link) => (
                    <a className="button button-secondary legal-link-button" href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </section>
          </>
        )}
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
              <p className="brand-tagline">Dedicated contact route for service enquiries</p>
            </div>
          </div>

          <div className="footer-meta">
            <p>Contact page for ThemeStudios | themestudios.in</p>
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
