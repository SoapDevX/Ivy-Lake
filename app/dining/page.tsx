import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { menuHighlights } from '@/data/dining'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta(
  'Dining & Garden Café',
  'Savour Sri Lankan cuisine and artisan coffee in our open-air garden café at The Ivy Lake, Anuradhapura.'
)

export default function DiningPage() {
  const categories = ['breakfast', 'mains', 'drinks', 'evening']
  return (
    <>
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&q=80" alt="Garden Café at The Ivy Lake" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="label-caps text-gold mb-3">Garden Café & Restaurant</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Dining</h1>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <GoldDivider className="justify-center mb-6" />
            <h2 className="heading-section text-forest text-4xl mb-4">The Garden Café</h2>
            <p className="body-lead text-muted max-w-xl mx-auto">Open-air dining under a canopy of frangipani and bougainvillea. Breakfast, lunch, evening snacks, and the best cold brew in Anuradhapura.</p>
          </FadeIn>

          {categories.map(cat => {
            const items = menuHighlights.filter(m => m.category === cat)
            if (!items.length) return null
            return (
              <FadeIn key={cat} className="mb-12">
                <p className="label-caps text-gold mb-6 border-b border-gold/20 pb-3">{cat}</p>
                <div className="space-y-0 divide-y divide-charcoal/8">
                  {items.map(item => (
                    <div key={item.name} className="flex items-start gap-4 py-5">
                      <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline gap-4">
                          <h3 className="font-serif text-forest text-xl">{item.name}</h3>
                          <span className="label-caps text-gold text-[10px] flex-shrink-0">{item.price}</span>
                        </div>
                        <p className="text-sm font-sans text-muted mt-1.5 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>
      <BookingCTA />
    </>
  )
}
