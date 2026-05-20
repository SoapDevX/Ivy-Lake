import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'
import { attractions } from '@/data/attractions'

export function SacredCitySection() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="label-caps text-gold mb-4">Location & Attractions</p>
            <GoldDivider className="mb-6" />
            <h2 className="heading-section text-forest text-4xl md:text-5xl mb-6">
              Gateway to<br />the Sacred City
            </h2>
            <p className="body-lead text-muted mb-8">
              Anuradhapura is one of the world's greatest ancient cities — 2,500 years of Buddhist civilisation preserved in stone, lotus, and light. The Ivy Lake puts you at its heart.
            </p>
            <div className="space-y-5 mb-10">
              {attractions.slice(0, 4).map((a, i) => (
                <FadeIn key={a.id} delay={i * 80} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-white border border-gold/30 flex items-center justify-center text-lg">{a.icon}</div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-serif text-forest text-base">{a.name}</h4>
                      <span className="label-caps text-gold/80 text-[9px]">{a.distance}</span>
                    </div>
                    <p className="text-xs font-sans text-muted mt-1 leading-relaxed">{a.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <Button variant="outline" href="/experiences">All Experiences</Button>
          </FadeIn>

          <FadeIn delay={200} className="relative h-[600px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=900&q=85"
              alt="Anuradhapura sacred city"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest/80 to-transparent">
              <p className="font-serif text-ivory text-xl">Anuradhapura</p>
              <p className="label-caps text-gold/80 text-[10px] mt-1">UNESCO World Heritage Site · Est. 4th century BC</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
