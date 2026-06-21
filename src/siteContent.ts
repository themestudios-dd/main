export type FaqItem = {
  answer: string
  question: string
}

export const orderFlowSteps = [
  'Share your brief on WhatsApp',
  'We confirm package, scope, price, and timeline',
  'Payment is requested only through official payment links or approved UPI details',
  'Draft is shared for review',
  'Final files are delivered after approval',
]

export const trustNotes = [
  'ThemeStudios never asks for card details in WhatsApp chat.',
  'Payments are requested only after package and scope confirmation.',
  'Official support happens through the listed WhatsApp number and support email.',
]

export const creativeTrustBullets = [
  'Original layouts',
  'Client-provided assets only',
  'Copyright-safe brief requirements',
]

export const homeFaqItems: FaqItem[] = [
  {
    question: 'How do I choose the right service or package?',
    answer:
      'Start on WhatsApp or use the website enquiry form, share your business type, goal, preferred format, and timeline, and ThemeStudios will suggest the right one-time service, monthly pack, or industry package before work starts.',
  },
  {
    question: 'What is the current price range?',
    answer:
      'Active public offers currently start from story and status design at Rs. 349, run through posters, reels, branding, and ads support, and go up to premium launch or full-support packs at the higher end.',
  },
  {
    question: 'Do you offer only posters?',
    answer:
      'No. ThemeStudios also handles social posts, stories, carousels, reel creatives, logo and branding kits, business profile PDFs, ad creatives, and monthly support systems.',
  },
  {
    question: 'Are monthly plans available for different industries?',
    answer:
      'Yes. There are monthly packs for universal business use as well as clinic, startup, restaurant, salon, education, retail, and real-estate categories.',
  },
  {
    question: 'How does ads support pricing work?',
    answer:
      'Creative and setup fees are quoted separately from ad spend. ThemeStudios can handle ad posters, ad reels, setup support, and monthly creative management, but the media budget itself is extra.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Revision counts depend on the selected service or package. Small changes are included inside the stated scope, while new directions or redesign-level changes are handled as extra work.',
  },
  {
    question: 'What assets should I provide with the first brief?',
    answer:
      'Share your business name, contact number, offer details, logo, photos or references, preferred language, target platform, and delivery deadline so the right scope can be confirmed quickly.',
  },
]
