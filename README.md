# Indori Sarafa — Authentic Indori Street Food

A production-ready, SEO-optimized React website for **Indori Sarafa**, an authentic Indori street-food restaurant in Hinjawadi, Pune (Since 2019).

> "स्वाद इंदौर की गलियों से"

---

## Features

- Modern restaurant landing page with cinematic hero, parallax & micro-animations
- Full menu with category filters, search, popular filter and an animated modal
- Masonry gallery with lightbox + pinch-to-zoom
- Two-branch directory with Google Maps deep-links and call buttons
- Contact form (no backend) with toast feedback + embedded Google Map
- Privacy Policy, Terms & Conditions, beautiful 404 page
- Full SEO: per-page meta tags, OG/Twitter cards, canonical URLs, JSON-LD (Restaurant, Menu, LocalBusiness, Breadcrumb, Organization)
- Lazy-loaded routes & images, preloaded hero, responsive at 320 → 1920+

## Tech Stack

- **React 19** + React Router DOM v7
- **TailwindCSS** + custom CSS variables for the Indori brand palette
- **Framer Motion** for animations
- **React Helmet Async** for SEO
- **React Icons**
- **yet-another-react-lightbox** for gallery lightbox + zoom
- **Sonner** for toasts
- No backend — all data lives in `src/data/*.js`

## Brand Palette

| Token     | HEX       |
|-----------|-----------|
| Primary (brown) | `#5C2C06` |
| Secondary (red) | `#A52A2A` |
| Accent (gold)   | `#D4AF37` |
| Background      | `#FFF8F2` |
| Dark            | `#222222` |
| Text            | `#444444` |

Fonts: **Playfair Display** (display), **Poppins** (body), **Tiro Devanagari Hindi** (Hindi script).

## Folder Structure

```
frontend/
├── public/
│   ├── images/{logo,hero,dishes,menu,gallery,branches}
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   ├── browserconfig.xml
│   └── index.html
└── src/
    ├── App.js                  # Router + lazy routes
    ├── index.js                # HelmetProvider + root
    ├── index.css               # Brand tokens + utilities
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Layout.jsx
    │   ├── Logo.jsx
    │   ├── SEO.jsx
    │   ├── MenuModal.jsx
    │   ├── ScrollToTop.jsx
    │   └── FloatingSpices.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Menu.jsx
    │   ├── Gallery.jsx
    │   ├── Branches.jsx
    │   ├── Contact.jsx
    │   ├── Legal.jsx          # Privacy + Terms
    │   └── NotFound.jsx
    └── data/
        ├── menu.js
        ├── branches.js
        ├── gallery.js
        ├── reviews.js
        └── site.js
```

## Customization

### Replace Logo
Drop your SVG/PNG into `public/images/logo/logo.svg` (and optional `logo-dark.svg`). Both are referenced by `<Logo />` in `src/components/Logo.jsx`.

### Replace Hero Image
Replace `public/images/hero/hero.jpg`. It is preloaded in `index.html` for best LCP.

### Add or Edit Menu Items
Edit `src/data/menu.js`. Each item has:

```js
{
  id: "unique-slug",
  name: "Dish Name",
  category: "Breakfast | Street Food | Chat | Sweets | Beverages | Namkeen",
  description: "...",
  price: 60,
  image: "/images/dishes/dish-x.png",
  popular: true,
  veg: true,
}
```

### Change Branch Info
Edit `src/data/branches.js` (address, Google Maps URL, phone, image).

### Update Phone / Hours / Hindi Tagline
Edit `src/data/site.js`.

## SEO Features

- Unique title, description, keywords, canonical and OG/Twitter tags per page (`src/components/SEO.jsx`)
- JSON-LD: Restaurant, Organization, Menu, LocalBusiness (per branch), ImageGallery, AboutPage, BreadcrumbList
- `robots.txt` + `sitemap.xml` ready for Google Search Console
- `manifest.webmanifest` + `browserconfig.xml` for PWA / Microsoft tiles

## Performance Features

- Route-based code splitting via `React.lazy` + `Suspense`
- `loading="lazy"` on every non-hero image
- Hero image preloaded via `<link rel="preload">`
- Google Fonts preconnected
- CSS-only animations for spices + steam (cheap GPU-accelerated)

## Deploy on Vercel

1. Push this project to a GitHub repo.
2. On [vercel.com](https://vercel.com), **Add New → Project**, import the repo.
3. Framework preset: **Create React App** (auto-detected). Output dir: `build`.
4. Click **Deploy**.

For a clean URL → page mapping (e.g. `/menu`, `/about`), add a `vercel.json` at the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Build Locally

```bash
yarn install
yarn build      # production build in /build
yarn start      # dev server on http://localhost:3000
```

## Credits

Designed & developed by **YG Web Studio** — [ygwebstudio.vercel.app](https://ygwebstudio.vercel.app).