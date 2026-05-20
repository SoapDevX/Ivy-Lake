import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { WhatsAppBooking } from '@/components/booking/WhatsAppBooking'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta('Contact Us', 'Get in touch with The Ivy Lake — WhatsApp, email, or phone. We\'re always happy to help plan your stay.')

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80" alt="Contact The Ivy Lake" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <p className="label-caps text-gold mb-2">We'd love to hear from you</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Contact</h1>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <GoldDivider className="mb-6" />
              <h2 className="heading-section text-forest text-3xl mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {[
                  { label: 'Address', value: 'Anuradhapura, North Central Province, Sri Lanka 50000' },
                  { label: 'Phone', value: '+94 XX XXX XXXX' },
                  { label: 'Email', value: 'stay@theivylake.com' },
                  { label: 'Check-in', value: '2:00 PM · Check-out 11:00 AM' },
                  { label: 'Café Hours', value: '7:00 AM – 9:00 PM daily' },
                ].map(item => (
                  <div key={item.label} className="flex gap-6">
                    <span className="label-caps text-gold text-[9px] w-20 pt-0.5 flex-shrink-0">{item.label}</span>
                    <span className="text-sm font-sans text-charcoal leading-relaxed">{item.value}</span>
                  </div>
                ))}
              </div>
              <WhatsAppBooking className="mb-4" />
              <p className="text-xs font-sans text-muted mt-3">Our team typically responds within 30 minutes.</p>
            </FadeIn>

            <FadeIn delay={200} className="bg-white border border-charcoal/8 p-8">
              <h3 className="font-serif text-forest text-2xl mb-6">Send an Enquiry</h3>
              <div className="space-y-4">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { id: 'dates', label: 'Dates of Stay', type: 'text', placeholder: 'e.g. 15–18 June 2025' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="label-caps text-muted text-[9px] mb-1.5 block">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full border border-charcoal/15 px-4 py-3 text-sm font-sans bg-ivory focus:outline-none focus:border-gold transition-colors" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="label-caps text-muted text-[9px] mb-1.5 block">Message</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your stay..." className="w-full border border-charcoal/15 px-4 py-3 text-sm font-sans bg-ivory focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="button" className="w-full bg-forest text-ivory py-3.5 text-xs font-sans uppercase tracking-widest hover:bg-forest-light transition-colors mt-2">
                  Send Enquiry
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
