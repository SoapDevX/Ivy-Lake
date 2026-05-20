import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'
import { menuHighlights } from '@/data/dining'

export function DiningSection() {
  return (
    <section className="py-24 bg-forest text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeIn>
            <p className="label-caps text-gold mb-4">Garden Café & Dining</p>
            <GoldDivider className="mb-6" />
            <h2 className="heading-section text-ivory text-4xl md:text-5xl mb-6">
              Flavours of<br />Sri Lanka
            </h2>
            <p className="body-lead text-ivory/65 mb-8">
              Our open-air garden café is a destination in itself. From Sri Lankan breakfast hoppers to coconut cold brew at sunset — every dish is crafted with locally sourced ingredients and genuine love for the island's culinary heritage.
            </p>
            <div className="space-y-4 mb-10">
              {menuHighlights.slice(0, 3).map(item => (
                <div key={item.name} className="flex items-start gap-4 py-4 border-b border-ivory/10">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif text-ivory text-lg">{item.name}</h4>
                      <span className="label-caps text-gold text-[10px]">{item.price}</span>
                    </div>
                    <p className="text-sm text-ivory/55 font-sans mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" href="/dining">View Full Menu</Button>
          </FadeIn>

          {/* Image grid */}
          <FadeIn delay={200} className="grid grid-cols-2 gap-3">
            <div className="relative h-56 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80" alt="Garden café at The Ivy Lake" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
            </div>
            <div className="relative h-56 mt-8 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=80" alt="Sri Lankan breakfast" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
            </div>
            <div className="relative h-56 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Dining at The Ivy Lake" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
            </div>
            <div className="relative h-56 mt-8 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="Coffee at the garden café" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
