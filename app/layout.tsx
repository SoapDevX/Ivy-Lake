import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StickyBookingBar } from '@/components/layout/StickyBookingBar'
import { defaultMeta } from '@/lib/seo/meta'
import { hotelSchema } from '@/lib/seo/schema'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = defaultMeta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema()) }}
        />
      </head>
      <body>
        <Navbar />
        <StickyBookingBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
