import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_HOTEL_URL ?? 'https://theivylake.com'

export const defaultMeta: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'The Ivy Lake – Boutique Hotel in Anuradhapura, Sri Lanka',
    template: '%s | The Ivy Lake',
  },
  description:
    'A peaceful sanctuary beside Nuwara Wewa. Experience Sri Lankan hospitality, garden café dining, and sacred city proximity at The Ivy Lake boutique hotel.',
  keywords: [
    'hotel Anuradhapura', 'boutique hotel Sri Lanka', 'Nuwara Wewa hotel',
    'sacred city accommodation', 'The Ivy Lake', 'luxury hotel Anuradhapura',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'The Ivy Lake',
    images: [{ url: '/images/og/home.jpg', width: 1200, height: 630, alt: 'The Ivy Lake – Boutique Hotel' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export function pageMeta(title: string, description: string, ogImage = '/images/og/home.jpg'): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: ogImage, width: 1200, height: 630 }] },
  }
}
