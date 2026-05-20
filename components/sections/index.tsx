import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'
import { RoomCard } from '@/components/ui/RoomCard'
import { rooms } from '@/data/rooms'
import { testimonials } from '@/data/testimonials'
import { attractions } from '@/data/attractions'
import { whatsappLink } from '@/lib/utils/whatsappLink'

const featuredRooms = rooms.filter(r => r.featured)

/* ══════════════════════════════════
   Experience Section
   ══════════════════════════════════ */
export function ExperienceSection() {
  const experiences = [
    { icon: '🏛', title: 'Sacred City', desc: 'Ancient wonders within cycling distance' },
    { icon: '☕', title: 'Garden Café', desc: 'All-day dining under rain trees' },
    { icon: '🌊', title: 'Lake Views', desc: 'Nuwara Wewa at your doorstep' },
    { icon: '🌿', title: 'Cultural Immersion', desc: '2,300 years of living heritage' },
    { icon: '🌙', title: 'Slow Living', desc: 'Calm, unhurried, deeply restoring' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#F7F4EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="max-w-lg mb-16">
          <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
            The Ivy Lake Experience
          </p>
          <h2 className="font-serif text-[#18392B]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
            More than a place to stay
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#EDE8DE]">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.title} delay={i * 0.1} className="bg-[#F7F4EE] p-8 lg:p-10">
              <div className="text-3xl mb-5">{exp.icon}</div>
              <h3 className="font-serif text-[#18392B] text-xl mb-2">{exp.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{exp.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Room Preview Section
   ══════════════════════════════════ */
export function RoomPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
              Accommodations
            </p>
            <h2 className="font-serif text-[#18392B]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
              Rooms &amp; suites
            </h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#18392B] border-b border-[#18392B] pb-0.5 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors duration-300 self-start md:self-auto"
          >
            View all rooms
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRooms.map((room, i) => (
            <FadeIn key={room.id} delay={i * 0.1}>
              <RoomCard room={room} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Dining Section
   ══════════════════════════════════ */
export function DiningSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#18392B] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              Dining &amp; Café
            </p>
            <h2 className="font-serif text-[#F7F4EE] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
              Coffee, cuisine<br />
              &amp; the garden
            </h2>
            <div className="w-12 h-px bg-[#C8A96B] mb-6" />
            <p className="text-[#F7F4EE]/60 text-base leading-relaxed mb-8 max-w-md">
              Our garden terrace café has become its own destination — a place where single-origin Ceylon tea meets the rustle of rain trees and the warmth of unhurried mornings. Breakfast, light lunches, and lakeside dinners crafted from local produce.
            </p>
            <Link
              href="/dining"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#C8A96B] text-[#C8A96B] text-[11px] tracking-widest uppercase hover:bg-[#C8A96B] hover:text-[#18392B] transition-all duration-300"
            >
              Discover the menu
            </Link>
          </FadeIn>

          <FadeIn direction="right" className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
                alt="Garden café"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] mt-8 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
                alt="Sri Lankan breakfast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Sacred City Section
   ══════════════════════════════════ */
export function SacredCitySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F4EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
            Sacred City of Anuradhapura
          </p>
          <h2 className="font-serif text-[#18392B]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
            2,300 years of wonder<br />at your door
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.slice(0, 4).map((attr, i) => (
            <FadeIn key={attr.id} delay={i * 0.1}>
              <div className="group bg-white border border-[#EDE8DE] p-7 hover:border-[#C8A96B]/40 transition-all duration-500 hover:shadow-md">
                <div className="text-3xl mb-5">{attr.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] tracking-wider uppercase text-[#C8A96B]">{attr.distance}</span>
                  <span className="text-[#C8A96B]/40">·</span>
                  <span className="text-[10px] tracking-wider uppercase text-[#C8A96B]/60">{attr.duration}</span>
                </div>
                <h3 className="font-serif text-[#18392B] text-xl leading-tight mb-2">{attr.name}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3">{attr.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#18392B] border-b border-[#18392B] pb-0.5 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors duration-300"
          >
            View all experiences
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Gallery Preview Section
   ══════════════════════════════════ */
export function GalleryPreview() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', alt: 'Nuwara Wewa lake', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Lake view room', span: '' },
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800', alt: 'Garden café', span: '' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800', alt: 'Heritage suite', span: '' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', alt: 'Dining', span: '' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">Gallery</p>
            <h2 className="font-serif text-[#18392B]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
              Life at the lake
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#18392B] border-b border-[#18392B] pb-0.5 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors duration-300 self-start md:self-auto"
          >
            Full gallery
          </Link>
        </FadeIn>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[400px] lg:h-[560px]">
          {images.map((img, i) => (
            <FadeIn
              key={i}
              delay={i * 0.08}
              className={`relative overflow-hidden group ${img.span || ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Testimonials Section
   ══════════════════════════════════ */
export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#EDE8DE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-lg mx-auto mb-16">
          <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-4">
            Guest Stories
          </p>
          <h2 className="font-serif text-[#18392B]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
            Heard from our guests
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <article className="bg-white p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-[#C8A96B] text-sm">★</span>
                  ))}
                </div>

                <blockquote className="font-serif text-[#1D1D1D] text-lg leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between border-t border-[#EDE8DE] pt-5 mt-auto">
                  <div>
                    <p className="font-medium text-sm text-[#18392B]">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.country} · {t.date}</p>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#6B7280] opacity-60 capitalize">
                    {t.platform}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════
   Booking CTA Section
   ══════════════════════════════════ */
export function BookingCTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920')` }}
      />
      <div className="absolute inset-0 bg-[#0F2319]/75" />

      <FadeIn className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-[#C8A96B] text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
          Reserve your sanctuary
        </p>
        <h2 className="font-serif text-[#F7F4EE] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05' }}>
          Begin your stay<br />
          <em className="not-italic text-[#C8A96B]">beside the lake</em>
        </h2>
        <p className="text-[#F7F4EE]/60 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Direct bookings receive complimentary early check-in, a welcome drink, and our personal guides to the sacred city.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={whatsappLink('Hello! I would like to book a room at The Ivy Lake.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#C8A96B] text-[#18392B] text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-[#DFC28F] transition-colors duration-300"
          >
            Book via WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 border border-[#F7F4EE]/50 text-[#F7F4EE] text-[11px] tracking-[0.18em] uppercase hover:border-[#F7F4EE] hover:bg-[#F7F4EE]/10 transition-all duration-300"
          >
            Send an enquiry
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}