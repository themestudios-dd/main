import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const imageEntries = [
  'public/assets/branding/hero-frame.png',
  'public/assets/catalogue/package-growth-pack.png',
  'public/assets/catalogue/package-starter-pack.png',
  'public/assets/catalogue/package-premium-branding.png',
  'public/assets/catalogue/package-standard-business.png',
  'public/assets/catalogue/package-festival-poster.png',
  'public/assets/catalogue/package-basic-poster.png',
  'public/assets/catalogue/story-offer-campaigns.png',
  'public/assets/catalogue/story-festival-calendars.png',
  'public/assets/catalogue/story-monthly-systems.png',
  'public/assets/portfolio/business-portfolio-2026.png',
  'public/assets/portfolio/about-core-services.png',
  'public/assets/portfolio/posters-social-pricing.png',
  'public/assets/portfolio/reels-branding-pricing.png',
  'public/assets/portfolio/business-profile-ad-pricing.png',
  'public/assets/portfolio/universal-monthly-packages.png',
  'public/assets/portfolio/clinic-startup-packages.png',
  'public/assets/portfolio/restaurant-salon-packages.png',
  'public/assets/portfolio/construction-retail-packages.png',
  'public/assets/portfolio/education-packages-contact.png',
]

for (const sourceFile of imageEntries) {
  const absoluteSource = path.resolve(sourceFile)
  const targetFile = absoluteSource.replace(/\.png$/i, '.webp')
  const image = sharp(absoluteSource)
  const metadata = await image.metadata()
  const quality = metadata.height && metadata.height > metadata.width ? 80 : 78

  await fs.mkdir(path.dirname(targetFile), { recursive: true })
  await image.webp({ effort: 6, quality }).toFile(targetFile)
  console.log(`Optimized ${sourceFile} -> ${path.relative(process.cwd(), targetFile)}`)
}
