# Asset Setup Guide

The application requires image assets in the following structure:

```
public/
├── assets/
│   ├── branding/
│   │   ├── ts-logo-round.webp         (Logo - 56x56px minimum)
│   │   ├── ts-logo-square.webp        (Logo - 54x54px minimum)
│   │   └── ts-facebook-banner.webp    (Banner - 1024x512px)
│   └── catalogue/
│       ├── growth-pack-1499.webp      (1024x1024px)
│       ├── starter-pack-999.webp      (1024x1024px)
│       ├── premium-poster-599.webp    (1024x1024px)
│       ├── standard-poster-299.webp   (1024x1024px)
│       ├── basic-poster-149.webp      (1024x1024px)
│       └── festival-poster-199.webp   (1024x1024px)
├── favicon.png                         (32x32px or higher)
└── apple-touch-icon.png                (180x180px)
```

## Creating the Directories

Run these commands in your terminal:

```bash
# For Linux/macOS
mkdir -p public/assets/{branding,catalogue}

# For Windows (PowerShell)
New-Item -ItemType Directory -Path "public\assets\branding" -Force
New-Item -ItemType Directory -Path "public\assets\catalogue" -Force
```

## Image Requirements

All product/portfolio images should be:
- **Format**: WebP (for better compression, fallback to PNG/JPG)
- **Resolution**: 1024x1024px for product images, 1024x512px for banners
- **Optimization**: Compressed using tools like TinyPNG or ImageOptim
- **Aspect Ratio**: Square (1:1) for products, 2:1 for banners

## Placeholder Alternatives

While developing, you can use placeholder services:

```
https://via.placeholder.com/1024x1024?text=Product+Image
https://via.placeholder.com/1024x512?text=Banner
https://via.placeholder.com/32x32?text=Favicon
```

Update the image paths in `src/App.tsx` to use these during development.
