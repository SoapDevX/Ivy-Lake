import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { FadeIn } from '@/components/animations/FadeIn'
import { whatsappLink } from '@/lib/utils/whatsappLink'

export function BookingCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85"
        alt="Book a stay at The Ivy Lake"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="label-caps text-gold mb-4">Reserve Your Stay</p>
          <GoldDivider className="justify-center mb-7" />
          <h2 className="heading-display text-ivory text-5xl md:text-6xl mb-6">
            Begin Your<br />Anuradhapura Story
          </h2>
          <p className="body-lead text-ivory/70 mb-10 max-w-lg mx-auto">
            Direct bookings receive complimentary early check-in, a welcome drink, and personalised tour recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" href="/booking">Check Availability</Button>
            <Button variant="ghost" size="lg" href={whatsappLink('Hello! I would like to book a room at The Ivy Lake.')} external>WhatsApp Us</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
