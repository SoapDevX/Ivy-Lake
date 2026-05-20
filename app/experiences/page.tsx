import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { attractions } from '@/data/attractions'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta(
  'Experiences & Attractions',
  'Discover the sacred city of Anuradhapura, Wilpattu wildlife, and cultural experiences near The Ivy Lake.'
)

export default function ExperiencesPage() {
  const categories = ['heritage', 'nature', 'wildlife']
  const categoryLabels: Record<string, string> = { heritage: 'Cultural Heritage', nature: 'Nature & Lakes', wildlife: 'Wildlife' }

  return (
    <>
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1600&q=80" alt="Anuradhapura experiences" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="label-caps text-gold mb-3">Discover</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Experiences</h1>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map(cat => {
            const items = attractions.filter(a => a.category === cat)
            return (
              <div key={cat} className="mb-16">
                <FadeIn className="mb-8">
                  <GoldDivider className="mb-4" />
                  <h2 className="heading-section text-forest text-3xl">{categoryLabels[cat]}</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((a, i) => (
                    <FadeIn key={a.id} delay={i * 100} className="bg-white p-6 border border-charcoal/8 flex gap-5">
                      <div className="w-12 h-12 bg-ivory border border-gold/25 flex items-center justify-center text-2xl flex-shrink-0">{a.icon}</div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-2">
                          <h3 className="font-serif text-forest text-xl">{a.name}</h3>
                          <span className="label-caps text-gold text-[9px]">{a.distance} · {a.duration}</span>
                        </div>
                        <p className="text-sm font-sans text-muted leading-relaxed">{a.description}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <BookingCTA />
    </>
  )
}
