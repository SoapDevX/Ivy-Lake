# The Ivy Lake — Website Redesign

Boutique hotel website for [The Ivy Lake](https://theivylake.com), Anuradhapura, Sri Lanka.

## Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, SSR, routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations (ready to integrate) |
| Lenis | Smooth scroll (ready to integrate) |
| `next/image` | Optimised images |
| `next/font` | Cormorant Garamond + DM Sans |

## Project Structure

```
ivy-lake/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar, Footer, StickyBar)
│   ├── page.tsx            # Homepage
│   ├── rooms/              # Rooms & Suites
│   ├── dining/             # Garden Café & Menu
│   ├── gallery/            # Photo Gallery
│   ├── experiences/        # Attractions & Activities
│   ├── contact/            # Contact & Enquiry
│   └── booking/            # Booking / Availability
├── components/
│   ├── animations/         # FadeIn, ParallaxImage, TextReveal
│   ├── booking/            # BookingWidget, WhatsAppBooking
│   ├── layout/             # Navbar, Footer, StickyBookingBar
│   ├── sections/           # All homepage & page sections
│   └── ui/                 # Button, Badge, RoomCard, StarRating etc.
├── data/                   # Typed content (rooms, dining, attractions, etc.)
├── lib/
│   ├── hooks/              # useScrollProgress, useInView, useBooking
│   ├── seo/                # Metadata, Hotel JSON-LD schema
│   ├── types/              # TypeScript interfaces
│   └── utils/              # cn(), formatCurrency(), whatsappLink()
├── public/                 # Static assets
└── styles/                 # tokens.css, typography.css, animations.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.local` and fill in:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=94XXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

## Design Tokens

Brand palette in `styles/tokens.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-forest` | `#18392B` | Primary brand, nav, CTAs |
| `--color-gold` | `#C8A96B` | Accent, labels, icons |
| `--color-ivory` | `#F7F4EE` | Page background |
| `--color-charcoal` | `#1D1D1D` | Body text |

Fonts: **Cormorant Garamond** (headings) + **DM Sans** (body).

## Booking Flow

Currently routes to WhatsApp for direct booking. To upgrade:
1. Swap `WhatsAppBooking` with a booking API (Cloudbeds, RMS, etc.) in `components/booking/`
2. No page or section code changes needed

## Adding Content

All content lives in `data/`. Edit typed arrays:
- `data/rooms.ts` — room listings
- `data/dining.ts` — menu items
- `data/attractions.ts` — nearby places
- `data/testimonials.ts` — guest reviews

Ready for Sanity / Contentful migration — just replace imports.

## SEO

- Hotel JSON-LD schema auto-injected in `app/layout.tsx`
- OpenGraph metadata per page via `lib/seo/meta.ts`
- Sitemap: add `app/sitemap.ts` when deploying

## Deployment

```bash
npm run build
# Deploy to Vercel, Netlify, or any Node.js host
```
