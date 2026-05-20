import type { Metadata } from 'next'
import Image from 'next/image'
import { BookingWidget } from '@/components/booking/BookingWidget'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta('Book Your Stay', 'Reserve a room at The Ivy Lake boutique hotel in Anuradhapura. Direct bookings receive complimentary early check-in.')

export default function BookingPage() {
  return (
    <>
      <section className="relative h-64 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80" alt="Book a stay" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <p className="label-caps text-gold mb-2">Reserve Your Stay</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Book</h1>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            <FadeIn className="lg:col-span-3">
              <BookingWidget />
            </FadeIn>
            <FadeIn delay={150} className="lg:col-span-2">
              <GoldDivider className="mb-6" />
              <h3 className="font-serif text-forest text-2xl mb-5">Direct Booking Perks</h3>
              <ul className="space-y-4">
                {[
                  'Complimentary early check-in (subject to availability)',
                  'Welcome drink on arrival',
                  'Personalised tour recommendations from our team',
                  'Flexible cancellation policy',
                  'Best rate guaranteed',
                ].map((perk, i) => (
                  <li key={i} className="flex gap-3 text-sm font-sans text-charcoal">
                    <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-forest text-ivory">
                <p className="label-caps text-gold text-[9px] mb-2">Need help?</p>
                <p className="text-sm font-sans text-ivory/80 mb-4">Our team is available 24 hours. WhatsApp us for instant assistance.</p>
                <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="label-caps text-gold text-[10px] hover:underline">WhatsApp Us →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
