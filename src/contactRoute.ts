export const contactPagePath = '/contact-us'
export const contactThankYouPath = '/contact-us/thank-you'
export const contactFormName = 'theme-studios-contact-request'

export type ContactRouteState = {
  canonicalPath: string
  isThankYou: boolean
}

function normalizeContactPath(pathname: string) {
  try {
    const decodedPath = decodeURIComponent(pathname)
    return decodedPath.replace(/\/+$/, '') || '/'
  } catch {
    return pathname.replace(/\/+$/, '') || '/'
  }
}

export function getContactRoute(pathname: string): ContactRouteState | null {
  const normalizedPath = normalizeContactPath(pathname)

  if (normalizedPath === contactPagePath) {
    return {
      canonicalPath: contactPagePath,
      isThankYou: false,
    }
  }

  if (normalizedPath === contactThankYouPath) {
    return {
      canonicalPath: contactThankYouPath,
      isThankYou: true,
    }
  }

  return null
}

export function getContactRoutes() {
  return [contactPagePath, contactThankYouPath]
}
