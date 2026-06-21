import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/App.tsx'
import { getContactRoute, getContactRoutes } from '../src/contactRoute.ts'
import { getPolicyPage, getPolicyPages } from '../src/policyData.ts'
import {
  createContactDocumentMeta,
  createHomeDocumentMeta,
  createPolicyDocumentMeta,
  createServiceDocumentMeta,
  type DocumentMeta,
  toAbsoluteUrl,
} from '../src/seo.ts'
import { getServiceLandingPage, getServiceLandingPages } from '../src/serviceData.ts'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const templatePath = path.join(distDir, 'index.html')

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function replaceOrThrow(html: string, pattern: RegExp, replacement: string, label: string) {
  if (!pattern.test(html)) {
    throw new Error(`Could not update ${label} during prerender.`)
  }

  return html.replace(pattern, replacement)
}

function replaceMetaContent(
  html: string,
  attributeName: 'name' | 'property',
  attributeValue: string,
  content: string
) {
  const pattern = new RegExp(
    `(<meta\\b[^>]*${attributeName}="${escapeRegExp(attributeValue)}"[^>]*content=")([^"]*)("[\\s\\S]*?>)`,
    'i'
  )

  return replaceOrThrow(
    html,
    pattern,
    `$1${escapeHtml(content)}$3`,
    `meta ${attributeValue}`
  )
}

function replaceCanonical(html: string, href: string) {
  return replaceOrThrow(
    html,
    /(<link\b[^>]*rel="canonical"[^>]*href=")([^"]*)("[\s\S]*?>)/i,
    `$1${escapeHtml(href)}$3`,
    'canonical link'
  )
}

function replaceSchema(html: string, schema: string) {
  return replaceOrThrow(
    html,
    /(<script id="route-schema" type="application\/ld\+json">)([\s\S]*?)(<\/script>)/i,
    `$1\n${schema}\n$3`,
    'route schema'
  )
}

function getDocumentMetaForPath(pathname: string): DocumentMeta {
  const contactRoute = getContactRoute(pathname)
  if (contactRoute) {
    return createContactDocumentMeta(contactRoute.isThankYou)
  }

  const policyPage = getPolicyPage(pathname)
  if (policyPage) {
    return createPolicyDocumentMeta(policyPage)
  }

  const servicePage = getServiceLandingPage(pathname)
  if (servicePage) {
    return createServiceDocumentMeta(servicePage)
  }

  return createHomeDocumentMeta()
}

function renderRouteHtml(template: string, pathname: string) {
  const meta = getDocumentMetaForPath(pathname)
  const appHtml = renderToString(createElement(App, { pathname }))
  const canonicalUrl = toAbsoluteUrl(meta.canonicalPath)
  const schemaJson = JSON.stringify(meta.schema ?? [], null, 2)

  let html = replaceOrThrow(
    template,
    /<div id="root"><\/div>/i,
    `<div id="root">${appHtml}</div>`,
    'root markup'
  )

  html = replaceOrThrow(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`,
    'document title'
  )
  html = replaceMetaContent(html, 'name', 'description', meta.description)
  html = replaceMetaContent(html, 'name', 'keywords', meta.keywords ?? '')
  html = replaceMetaContent(html, 'name', 'robots', meta.robots ?? 'index, follow')
  html = replaceCanonical(html, canonicalUrl)
  html = replaceMetaContent(html, 'property', 'og:url', canonicalUrl)
  html = replaceMetaContent(html, 'property', 'og:title', meta.title)
  html = replaceMetaContent(html, 'property', 'og:description', meta.description)
  html = replaceMetaContent(html, 'name', 'twitter:title', meta.title)
  html = replaceMetaContent(html, 'name', 'twitter:description', meta.description)
  html = replaceSchema(html, schemaJson)

  return html
}

async function writeRouteFile(pathname: string, html: string) {
  if (pathname === '/') {
    await writeFile(path.join(distDir, 'index.html'), html, 'utf8')
    return
  }

  const normalizedPath = pathname.replace(/^\/+/, '')
  const routeDir = path.join(distDir, normalizedPath)
  await mkdir(routeDir, { recursive: true })
  await writeFile(path.join(routeDir, 'index.html'), html, 'utf8')
}

async function run() {
  const template = await readFile(templatePath, 'utf8')
  const routes = new Set<string>([
    '/',
    ...getContactRoutes(),
    ...getPolicyPages().flatMap((page) => [page.path, ...page.aliases]),
    ...getServiceLandingPages().map((page) => page.canonicalPath),
  ])

  for (const route of routes) {
    const html = renderRouteHtml(template, route)
    await writeRouteFile(route, html)
  }

  console.log(`Prerendered ${routes.size} static route(s) into dist.`)
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
