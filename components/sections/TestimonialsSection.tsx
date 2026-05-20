import { testimonials } from '@/data/testimonials'
import { StarRating } from '@/components/ui/StarRating'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="label-caps text-gold mb-4">Guest Reviews</p>
          <GoldDivider className="justify-center mb-6" />
          <h2 className="heading-section text-forest text-4xl md:text-5xl">Stories from Our Guests</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 100} className="bg-white p-7 border border-charcoal/8">
              <StarRating rating={t.rating} />
              <p className="font-serif text-forest text-2xl my-1">"</p>
              <p className="text-sm font-sans text-muted leading-relaxed mb-6 line-clamp-5">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-charcoal/8">
                <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-serif text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-sans font-medium text-charcoal">{t.name}</p>
                  <p className="text-[10px] font-sans text-muted">{t.flag} {t.country} · {t.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
