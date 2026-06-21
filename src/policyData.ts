export type PolicyLink = {
  href: string
  label: string
}

export type PolicySection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

export type PolicyPage = {
  aliases: string[]
  description: string
  keywords: string
  meta: string[]
  path: string
  sections: PolicySection[]
  title: string
}

export const policyLinks: PolicyLink[] = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const policyPages: Record<string, PolicyPage> = {
  '/refund-policy': {
    aliases: ['/Refund_policy'],
    path: '/refund-policy',
    title: 'Refund Policy',
    description:
      'This policy explains how ThemeStudios handles cancellation, refunds, duplicate payments, revision disputes, and monthly pack adjustments for custom digital design services.',
    keywords:
      'ThemeStudios refund policy, ThemeStudios cancellation policy, design refund policy, payment policy',
    meta: [
      'Last updated: June 11, 2026',
      'Applies to website, WhatsApp, Instagram, email and approved payment links',
    ],
    sections: [
      {
        id: 'scope',
        title: '1. Scope of this policy',
        paragraphs: [
          'This policy applies to payments made to ThemeStudios Digital Designers for poster design, festival creatives, branding posters, social media creatives, and monthly design packs.',
          'Because our work is custom digital service work, refund decisions depend on the project stage, confirmed scope, and the amount of work already completed.',
        ],
      },
      {
        id: 'booking',
        title: '2. Advance payment and booking confirmation',
        paragraphs: [
          'Most orders are confirmed only after full advance payment is received. Once payment is received, design time is reserved and production may begin immediately based on the agreed delivery window.',
        ],
        bullets: [
          'Payment confirms the selected package, scope, and revision limit.',
          'Project timelines start only after payment, brief content, and required assets are received.',
          'Client delays in sending text, logos, photos, or approvals may delay delivery but do not cancel the booking.',
        ],
      },
      {
        id: 'before-start',
        title: '3. Cancellation before work starts',
        paragraphs: [
          'If you request cancellation before any design work has started, ThemeStudios may approve a refund after deducting any non-recoverable gateway charges, taxes, or payment processing fees already applied to the transaction.',
        ],
      },
      {
        id: 'after-start',
        title: '4. Cancellation after work starts',
        paragraphs: [
          'Once design work has started, payments are generally non-refundable because production time has already been allocated specifically for your business.',
        ],
        bullets: [
          'No refund is normally available after concept planning, draft creation, content arrangement, or revision work has started.',
          'A change of mind, delayed response, or a request to stop midway does not automatically create refund eligibility.',
          'If ThemeStudios cannot continue a project for internal reasons before meaningful work is delivered, we may offer a fair partial refund or full refund at our discretion.',
        ],
      },
      {
        id: 'revisions',
        title: '5. Revisions and dissatisfaction',
        paragraphs: [
          'Buyer dissatisfaction is first handled through the revision limit included in the chosen package. A refund is not automatically issued because a client later wants a new concept, major redesign, or a different direction from the original approved brief.',
        ],
        bullets: [
          'Minor revisions remain the primary correction path for text edits, spelling fixes, price changes, and similar small updates.',
          'Fresh concepts, full redesigns, or repeated changes beyond package limits are treated as new paid work.',
        ],
      },
      {
        id: 'monthly-packs',
        title: '6. Monthly packs and unused deliverables',
        paragraphs: [
          'Monthly packs reserve recurring creative capacity for a defined service period. Once a monthly pack starts, its payment is generally non-refundable.',
        ],
        bullets: [
          'Unused poster counts or deliverables do not automatically roll over unless we confirm that in writing.',
          'Delays caused by missing content or client approval do not automatically extend the pack period.',
          'If ThemeStudios cannot continue a monthly service for internal reasons, we may offer a proportional credit or refund for the undelivered balance.',
        ],
      },
      {
        id: 'duplicate',
        title: '7. Duplicate or excess payments',
        paragraphs: [
          'If you accidentally make a duplicate payment or pay more than the confirmed amount for the same order, please contact us with the payment reference. After verification, the excess amount may be refunded or adjusted against the same order.',
        ],
      },
      {
        id: 'processing',
        title: '8. Refund processing timeline',
        paragraphs: [
          'Approved refunds are usually initiated within 5 to 10 business days from confirmation. The final settlement time depends on the bank, card issuer, UPI app, or payment partner involved in the transaction.',
        ],
      },
      {
        id: 'contact',
        title: '9. How to request support',
        paragraphs: [
          'For cancellation, refund review, or payment support, contact ThemeStudios with your name, order details, and payment reference so we can verify the request quickly.',
        ],
        bullets: [
          'Email: support@themestudios.in',
          'Phone / WhatsApp: +91 89032 05676',
          'Business base: Madurai - Remote office',
        ],
      },
    ],
  },
  '/privacy-policy': {
    aliases: ['/privacy_policy'],
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'This policy explains how ThemeStudios collects, uses, stores, protects, and shares information received through the website and business communication channels.',
    keywords:
      'ThemeStudios privacy policy, ThemeStudios data policy, design business privacy policy',
    meta: [
      'Last updated: June 11, 2026',
      'Applies to visitors, enquiries, clients and payment-related communication',
    ],
    sections: [
      {
        id: 'overview',
        title: '1. Overview',
        paragraphs: [
          'ThemeStudios Digital Designers operates remotely from Madurai, Tamil Nadu, India and provides digital design services for businesses. We collect only the information reasonably needed to respond to enquiries, manage orders, receive payment, deliver creative work, and maintain business records.',
        ],
      },
      {
        id: 'collection',
        title: '2. Information we collect',
        paragraphs: [
          'Depending on how you contact us or place an order, we may collect business and contact information, project briefing details, approval messages, payment references, and basic technical data generated by the website or hosting tools.',
        ],
        bullets: [
          'Name, phone number, email address, business name and social profile details',
          'Project brief information such as logos, text content, photos, colour choices, platform requirements and deadlines',
          'Order history, revision requests, delivery messages and support communication',
          'Payment references, transaction IDs and billing-related records',
          'Basic website usage information such as IP address, browser type, device information, referral data, conversion events or server logs when collected by hosting, security, or advertising measurement tools',
        ],
      },
      {
        id: 'usage',
        title: '3. How we use information',
        paragraphs: [
          'We use collected information to reply to enquiries, confirm service scope, create and deliver design work, issue payment requests, provide support, maintain records, and improve the reliability of our website and service workflow.',
        ],
        bullets: [
          'To confirm the right package or project scope',
          'To create, revise and deliver custom design files',
          'To send updates, invoices, payment confirmations and support replies',
          'To maintain records for accounting, compliance and dispute handling',
          'To measure quote requests and campaign performance when advertising measurement tags are enabled',
          'To improve website security, performance and business operations',
        ],
      },
      {
        id: 'sharing',
        title: '4. When we share information',
        paragraphs: [
          'ThemeStudios does not sell personal information to outside marketers. We may share limited information only when necessary to operate the business or comply with legal obligations.',
        ],
        bullets: [
          'Hosting providers, cloud storage services and email tools',
          'Communication platforms such as WhatsApp or Instagram when you choose to contact us through them',
          'Banks, UPI apps, gateways or payment partners used to process or verify transactions',
          'Advertising and measurement platforms such as Google Ads or Meta when tracking tags are enabled on the website',
          'Professional advisers or authorities where disclosure is legally required or necessary to protect our rights',
        ],
      },
      {
        id: 'payments',
        title: '5. Payments and third-party services',
        paragraphs: [
          'Payments may be processed through approved third-party services, including UPI apps and payment partners such as PhonePe where applicable. Those platforms run their own systems and privacy controls. ThemeStudios receives only the transaction information needed to confirm payment, reconcile accounts, and support refund or dispute review.',
        ],
      },
      {
        id: 'security',
        title: '6. Security and retention',
        paragraphs: [
          'We use reasonable administrative and technical steps to protect data against unauthorized access, misuse or accidental loss. No internet-based system can be guaranteed to be completely secure, so you share information with us at your own reasonable discretion.',
          'We retain information only for as long as needed for service delivery, internal records, compliance, tax, payment verification, dispute handling, or legitimate business operations.',
        ],
      },
      {
        id: 'rights',
        title: '7. Your rights and choices',
        paragraphs: [
          'You may contact us to request reasonable access, correction, or deletion of the information you have shared with us, subject to applicable law and operational record-keeping requirements.',
        ],
        bullets: [
          'You may ask us to update inaccurate contact or project information.',
          'You may request deletion of records that are no longer needed for an active order or legal purpose.',
          'If you do not provide the information required for an order, we may be unable to provide that service.',
        ],
      },
      {
        id: 'children',
        title: "8. Children's privacy",
        paragraphs: [
          'Our services are intended for business owners, managers, and adults acting on behalf of a business or organization. We do not knowingly collect personal information from children.',
        ],
      },
      {
        id: 'updates',
        title: '9. Policy updates and contact',
        paragraphs: [
          'We may update this Privacy Policy from time to time to reflect legal, operational, or service changes. The latest version will always be published at this page.',
        ],
        bullets: [
          'Email: support@themestudios.in',
          'Phone / WhatsApp: +91 89032 05676',
          'Business base: Madurai - Remote office',
        ],
      },
    ],
  },
  '/terms-and-conditions': {
    aliases: ['/t&c'],
    path: '/terms-and-conditions',
    title: 'Terms & Conditions',
    description:
      'These terms govern the use of themestudios.in and the design services offered by ThemeStudios Digital Designers, including design orders, payments, revisions, delivery and client responsibilities.',
    keywords:
      'ThemeStudios terms and conditions, ThemeStudios legal, design service terms, refund policy, privacy policy',
    meta: [
      'Last updated: June 11, 2026',
      'Applies to website use, enquiries, custom design orders and approved payments',
    ],
    sections: [
      {
        id: 'acceptance',
        title: '1. Acceptance of terms',
        paragraphs: [
          'By accessing this website, sending an enquiry, placing an order, making a payment, or communicating with ThemeStudios through WhatsApp, email, Instagram, or any approved channel, you agree to these Terms & Conditions along with our Privacy Policy and Refund Policy.',
          'If you do not agree with these terms, please do not use the website or purchase our services.',
        ],
      },
      {
        id: 'services',
        title: '2. Services and order scope',
        paragraphs: [
          'ThemeStudios Digital Designers is an independent remote digital design service based in Madurai, Tamil Nadu, India. We provide custom poster design, festival creatives, branding-style posters, social media creatives, and monthly recurring design packs.',
          'Each order is treated as a custom digital service. Deliverables, file formats, revision limits, and timelines depend on the package or scope confirmed at the time of order.',
        ],
      },
      {
        id: 'client',
        title: '3. Client responsibilities',
        paragraphs: [
          'You agree to provide complete and accurate briefing details before work starts. You remain responsible for the legality, accuracy, and usage rights of any content, logos, photos, trademarks, or third-party materials that you provide to us.',
        ],
        bullets: [
          'Business name, offer details, contact information and delivery expectations',
          'Logos, product images, text content, brand colours and platform requirements',
          'Only materials that you own or are authorized to use',
        ],
      },
      {
        id: 'payments',
        title: '4. Pricing, payment and revisions',
        paragraphs: [
          'Unless expressly agreed otherwise in writing, 100% advance payment is required before production starts. Quoted prices apply only to the confirmed scope.',
        ],
        bullets: [
          'Additional concepts, extra sizes, urgent work, editable source files or major redesigns are billed separately.',
          'Each package includes only the stated number of revisions.',
          'A minor revision means a small update such as spelling fixes, price changes, short text edits or alignment corrections.',
          'A new design direction or full redesign is treated as extra paid work.',
        ],
      },
      {
        id: 'delivery',
        title: '5. Turnaround and delivery',
        paragraphs: [
          'Delivery timelines begin after we receive confirmed payment, the full brief, and the required creative materials. Timelines shown on the website are indicative and may change based on workload, briefing quality, revision requests, or client delays in approval.',
        ],
        bullets: [
          'Standard final delivery is usually provided as JPG, PNG or another format agreed in advance.',
          'Editable source files are not included unless separately quoted and paid for.',
          'Delay caused by missing content or late approvals may shift the delivery window.',
        ],
      },
      {
        id: 'ip',
        title: '6. Intellectual property and portfolio use',
        paragraphs: [
          'After full payment, you may use the final approved deliverable for your own business promotion in the intended scope. ThemeStudios retains ownership of its working files, unreleased concepts, creative process and pre-existing design methods unless otherwise agreed in writing.',
        ],
        bullets: [
          'Completed work may be shown in our portfolio or social media unless you request confidentiality before final delivery.',
          'We do not transfer rights to unlicensed fonts, stock assets or other third-party materials beyond the rights granted by their original owners.',
        ],
      },
      {
        id: 'conduct',
        title: '7. Acceptable use and content rules',
        paragraphs: [
          'You agree not to use our website or services for unlawful, deceptive, abusive, infringing, or harmful content.',
        ],
        bullets: [
          'We may refuse content that infringes copyright, trademark, privacy or publicity rights.',
          'We may refuse scam-related, misleading, hateful, explicit or illegal promotional content.',
          'We may pause or cancel service if misuse, harassment, chargeback abuse or threatening conduct occurs.',
        ],
      },
      {
        id: 'third-party',
        title: '8. Third-party platforms and payments',
        paragraphs: [
          'ThemeStudios may use third-party communication and payment tools, including WhatsApp, Instagram, email providers, hosting services, cloud storage, and approved payment partners such as PhonePe where applicable.',
          "Your use of those services may also be governed by the third party's own terms and privacy practices.",
        ],
      },
      {
        id: 'liability',
        title: '9. Disclaimer and limitation of liability',
        paragraphs: [
          'We aim to provide high-quality creative services, but we do not guarantee specific commercial results such as sales, reach, engagement, enquiries or follower growth. Design performance depends on factors outside our control.',
        ],
        bullets: [
          'The website and services are provided on an as-available basis.',
          'ThemeStudios is not liable for indirect, incidental, special or consequential losses to the maximum extent permitted by law.',
          'Our total liability for any specific order will not exceed the amount actually paid to us for that order.',
        ],
      },
      {
        id: 'law',
        title: '10. Governing law and contact',
        paragraphs: [
          'These terms are governed by the laws of India. Any dispute relating to these terms or our services will be subject to the courts having jurisdiction in Madurai, Tamil Nadu.',
        ],
        bullets: [
          'Email: support@themestudios.in',
          'Phone / WhatsApp: +91 89032 05676',
          'Business base: Madurai - Remote office',
        ],
      },
    ],
  },
}

function normalizePolicyPath(pathname: string) {
  try {
    const decodedPath = decodeURIComponent(pathname)
    return decodedPath.replace(/\/+$/, '') || '/'
  } catch {
    return pathname.replace(/\/+$/, '') || '/'
  }
}

const policyPageList = Object.values(policyPages)

export function getPolicyPage(pathname: string) {
  const normalizedPath = normalizePolicyPath(pathname)
  return (
    policyPages[normalizedPath] ??
    policyPageList.find((page) => page.aliases.includes(normalizedPath)) ??
    null
  )
}

export function getPolicyPages() {
  return policyPageList
}
