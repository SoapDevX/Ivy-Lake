import type { Metadata } from 'next'
import Image from 'next/image'
import { rooms } from '@/data/rooms'
import { RoomCard } from '@/components/ui/RoomCard'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta(
  'Rooms & Suites',
  'Discover our lake view, garden, heritage, and twin rooms at The Ivy Lake boutique hotel in Anuradhapura.',
  '/images/og/rooms.jpg'
)

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80" alt="Rooms at The Ivy Lake" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="label-caps text-gold mb-3">Accommodations</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Rooms & Suites</h1>
        </div>
      </section>

      {/* Rooms grid */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <GoldDivider className="mb-5" />
            <p className="body-lead text-muted max-w-xl">
              Every room at The Ivy Lake is a carefully considered retreat — combining local craftsmanship, natural materials, and the quiet that only ancient places carry.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <FadeIn key={room.id} delay={i * 100}>
                <RoomCard room={room} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
