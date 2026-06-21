import { googleAdsRequestQuoteSendTo, isMetaPixelEnabled, metaPixelId } from './siteConfig'

type PixelFunction = ((command: string, ...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  loaded?: boolean
  push?: (...args: unknown[]) => number
  queue?: unknown[]
  version?: string
}

type GoogleTagFunction = (command: string, ...args: unknown[]) => void

declare global {
  interface Window {
    _fbq?: PixelFunction
    dataLayer?: unknown[]
    fbq?: PixelFunction
    gtag?: GoogleTagFunction
  }
}

let isPixelInitialized = false

function getPixel() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.fbq ?? null
}

export function trackRequestQuoteConversion() {
  if (typeof window === 'undefined') {
    return
  }

  const gtag =
    window.gtag ??
    ((command: string, ...args: unknown[]) => {
      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push([command, ...args])
    })

  gtag('event', 'conversion', { send_to: googleAdsRequestQuoteSendTo })
}

export function initMetaPixel() {
  if (!isMetaPixelEnabled || typeof window === 'undefined' || isPixelInitialized) {
    return
  }

  const pixelScript = document.createElement('script')
  pixelScript.async = true
  pixelScript.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(pixelScript)

  const pixel = ((...args: unknown[]) => {
    if (pixel.callMethod) {
      pixel.callMethod(...args)
      return
    }

    pixel.queue?.push(args)
  }) as PixelFunction

  pixel.queue = []
  pixel.loaded = true
  pixel.version = '2.0'

  window.fbq = pixel
  window._fbq = pixel

  pixel('init', metaPixelId)
  isPixelInitialized = true
}

export function trackPageView() {
  const pixel = getPixel()

  if (pixel) {
    pixel('track', 'PageView')
  }
}

export function trackWhatsAppClick(source: string) {
  const pixel = getPixel()

  if (pixel) {
    pixel('trackCustom', 'WhatsAppClick', { source })
  }
}

export function trackPackageInquiry(packageName: string) {
  const pixel = getPixel()

  if (pixel) {
    pixel('trackCustom', 'PackageInquiryClick', { packageName })
  }
}

export function trackEmailClick(source: string) {
  const pixel = getPixel()

  if (pixel) {
    pixel('trackCustom', 'EmailClick', { source })
  }
}
