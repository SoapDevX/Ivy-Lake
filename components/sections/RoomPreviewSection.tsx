'use client'
import { rooms } from '@/data/rooms'
import { RoomCard } from '@/components/ui/RoomCard'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'

export function RoomPreviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="label-caps text-gold mb-4">Accommodations</p>
            <GoldDivider className="mb-5" />
            <h2 className="heading-section text-forest text-4xl md:text-5xl">Rooms & Suites</h2>
          </div>
          <Button variant="outline" href="/rooms">View All Rooms</Button>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.filter(r => r.featured).map((room, i) => (
            <FadeIn key={room.id} delay={i * 120}>
              <RoomCard room={room} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
