'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with ken burns */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1800&q=85"
          alt="The Ivy Lake — Nuwara Wewa, Anuradhapura"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in delay-100">
          <GoldDivider />
        </div>
        <p className="label-caps text-gold mb-6 opacity-0 animate-fade-up delay-200">
          Boutique Hotel · Anuradhapura · Sri Lanka
        </p>
        <h1 className="heading-display text-ivory text-5xl md:text-7xl lg:text-8xl mb-8 opacity-0 animate-fade-up delay-300">
          A Sanctuary<br />by the Sacred Lake
        </h1>
        <p className="body-lead text-ivory/75 max-w-xl mx-auto mb-10 opacity-0 animate-fade-up delay-400">
          Where ancient heritage meets quiet luxury. Nestled beside Nuwara Wewa, steps from one of the world's oldest civilisations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-500">
          <Button variant="gold" size="lg" href="/rooms">Explore Rooms</Button>
          <Button variant="ghost" size="lg" href="/booking">Book Your Stay</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600">
        <span className="label-caps text-ivory/40 text-[9px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  )
}
