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

This repo is set up for static deployment to Hostinger shared hosting with PHP contact handling.

Why this path:

- The site build output is static HTML/CSS/JS
- The contact form depends on `public/api/contact.php`
- That PHP endpoint fits shared hosting / Apache deployment better than Hostinger Node.js app hosting

The GitHub Actions workflow is:

- `.github/workflows/deploy-hostinger.yml`

It builds the site and deploys the contents of `dist/` to Hostinger over FTPS whenever `main` changes.

### Required GitHub repository secrets

Add these in GitHub:

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`

Optional but recommended:

- `MAILJET_FROM_EMAIL`
- `MAILJET_FROM_NAME`
- `CONTACT_TO_EMAIL`
- `CONTACT_TO_NAME`
- `VITE_FACEBOOK_PAGE_URL`
- `VITE_META_PIXEL_ID`
- `VITE_ENABLE_META_PIXEL`

The workflow assumes the Hostinger web root is `/public_html/`.

If your site uses a different target directory, update:

- `.github/workflows/deploy-hostinger.yml`

### One-time setup still required outside the repo

Before automatic deployment can work, complete these two dashboard steps:

1. In GitHub, open the repository Actions secrets page and add the required secret names listed above.
2. In Hostinger hPanel, open the website dashboard for `themestudios.in`, then go to `Files -> FTP Accounts` and copy the FTP host, FTP username, and reset or create the FTP password you want GitHub Actions to use.

Suggested mapping:

- `HOSTINGER_FTP_SERVER` -> Hostinger FTP host or FTP IP
- `HOSTINGER_FTP_USERNAME` -> Hostinger FTP username
- `HOSTINGER_FTP_PASSWORD` -> Hostinger FTP password

Once those secrets are saved, every push to `main` will trigger a fresh build and deployment.

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
