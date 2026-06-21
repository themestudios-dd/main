# ThemeStudios Website

This repository is now the source of truth for `themestudios.in`.

It contains:

- The React + Vite marketing site
- The 2026 service and pricing catalog
- The PHP contact endpoint used on Hostinger
- A GitHub Actions workflow for build + Hostinger deployment

## Stack

- React 19
- TypeScript
- Vite 8
- Plain CSS
- PHP contact endpoint in `public/api/contact.php`
- Mailjet for contact form delivery

## Local commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Where to update services, packages, and pricing

The current public catalog is centralized in:

- `src/offerCatalog.ts`

That file drives:

- Home page featured offers
- Category and industry pricing bands
- Contact page grouped service selector
- SEO offer catalog schema
- Starting price and range messaging across the site

If prices or service names change, update `src/offerCatalog.ts` first.

## Build behavior

`npm run build` does all of the following:

1. Type-checks the app
2. Builds the Vite site into `dist/`
3. Prerenders the public routes
4. Copies Mailjet server config into `dist/.env` when secrets are available

The Mailjet packaging step now works in three modes:

- If Mailjet keys are present in `process.env`, they are used
- Otherwise `.env` or `.env.local` is read if present
- If no Mailjet config exists, the build still succeeds and skips `dist/.env`

That makes local development easier and allows GitHub Actions to inject secrets at build time without committing them.

## Environment variables

Use `.env.example` as the template.

Frontend variables:

```env
VITE_FACEBOOK_PAGE_URL=
VITE_META_PIXEL_ID=
VITE_ENABLE_META_PIXEL=false
```

Server-side Mailjet variables:

```env
MAILJET_API_KEY=
MAILJET_API_SECRET=
MAILJET_FROM_EMAIL=support@themestudios.in
MAILJET_FROM_NAME=ThemeStudios Website
CONTACT_TO_EMAIL=support@themestudios.in
CONTACT_TO_NAME=ThemeStudios Support
```

## Hostinger deployment

This repo is set up for Hostinger shared hosting with PHP contact handling.

Why this path:

- The site build output is static HTML/CSS/JS
- The contact form depends on `public/api/contact.php`
- That PHP endpoint fits shared hosting / Apache deployment better than Hostinger Node.js app hosting

### Important branch rule

Do not point Hostinger Git deployment at `main`.

- `main` is the source branch
- `deploy` is the production branch

Hostinger Git deployment should use:

- Branch: `deploy`
- Root directory: `public_html`

The GitHub Actions workflow is:

- `.github/workflows/deploy-hostinger.yml`

It builds the site from `main` and force-pushes the production-ready `dist/` output into the `deploy` branch whenever `main` changes.

### Required GitHub repository secrets

Only add these if you want build-time values to be available in GitHub Actions:

- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`
- `MAILJET_FROM_EMAIL`
- `MAILJET_FROM_NAME`
- `CONTACT_TO_EMAIL`
- `CONTACT_TO_NAME`
- `VITE_FACEBOOK_PAGE_URL`
- `VITE_META_PIXEL_ID`
- `VITE_ENABLE_META_PIXEL`

The workflow intentionally removes `dist/.env` before publishing the `deploy` branch so secrets are not committed into Git history.

### One-time Hostinger setup

Create a server-side `.env` file manually in:

- `public_html/.env`

Use the same Mailjet values from your local `.env` file there. The live PHP endpoint reads that file directly on Hostinger.

After that:

1. Keep Hostinger Git auto-deployment enabled
2. Switch the deployed branch from `main` to `deploy`
3. Keep the root directory as `public_html`
4. Redeploy once

From then on, every push to `main` will rebuild the site and refresh the `deploy` branch automatically.

## Important deployment note

The current contact form backend is PHP-based.

If you later move this website into Hostinger's Node.js Web App product, the contact endpoint should be rewritten from PHP to a Node/serverless handler first. The current repo is prepared for shared hosting style deployment, not PHP-free Node app hosting.

## Key paths

- App shell: `src/App.tsx`
- Home/contact styling: `src/App.css`
- Catalog data: `src/offerCatalog.ts`
- Contact route page: `src/contactRoutePage.tsx`
- SEO/schema: `src/seo.ts`
- PHP contact handler: `public/api/contact.php`
- Build env packaging: `scripts/copy-server-env.mjs`
- Hostinger deploy workflow: `.github/workflows/deploy-hostinger.yml`
