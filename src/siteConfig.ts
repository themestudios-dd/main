type EnvLike = {
  VITE_ENABLE_META_PIXEL?: string
  VITE_FACEBOOK_PAGE_URL?: string
  VITE_META_PIXEL_ID?: string
}

const env = ((import.meta as ImportMeta & { env?: EnvLike }).env ?? {}) as EnvLike

export const siteName = 'ThemeStudios'
export const businessName = 'ThemeStudios Digital Designers'
export const businessTagline = 'Digital Designers'
export const baseUrl = 'https://themestudios.in'

export const supportEmail = 'support@themestudios.in'
export const whatsappNumber = '918903205676'
export const whatsappDisplayNumber = '+91 8903205676'
export const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`

export const instagramProfileUrl = 'https://www.instagram.com/themestudios.dd/'
export const facebookPageUrl = (env.VITE_FACEBOOK_PAGE_URL ?? '').trim()
export const googleAdsTagId = 'AW-18236138541'
export const googleAdsRequestQuoteSendTo = 'AW-18236138541/g7p1CKPen74cEK3I1fdD'

export const locationLabel = 'Madurai - Remote office'
export const locationStatement =
  'Remote design studio based in Madurai, serving small businesses across Tamil Nadu and beyond.'

export const metaPixelId = (env.VITE_META_PIXEL_ID ?? '').trim()
export const isMetaPixelEnabled =
  (env.VITE_ENABLE_META_PIXEL ?? '').toLowerCase() === 'true' && metaPixelId.length > 0

export const socialProfileLinks = [
  { label: 'Instagram', href: instagramProfileUrl },
  ...(facebookPageUrl ? [{ label: 'Facebook', href: facebookPageUrl }] : []),
  { label: 'WhatsApp', href: whatsappBaseUrl },
]
