import Link from 'next/link'
import { navLinks } from '@/data/nav'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { whatsappLink } from '@/lib/utils/whatsappLink'

export function Footer() {
  return (
    <footer className="bg-forest text-ivory/70">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-ivory mb-2">The Ivy Lake</h3>
            <GoldDivider className="mb-4" />
            <p className="text-sm font-sans leading-relaxed">A peaceful sanctuary beside Nuwara Wewa in the sacred city of Anuradhapura, Sri Lanka.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-caps text-gold mb-4 text-[10px]">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-sans hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-caps text-gold mb-4 text-[10px]">Contact</p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>Anuradhapura, Sri Lanka</li>
              <li><a href="tel:+94XXXXXXXXX" className="hover:text-gold transition-colors">+94 XX XXX XXXX</a></li>
              <li><a href="mailto:stay@theivylake.com" className="hover:text-gold transition-colors">stay@theivylake.com</a></li>
              <li><a href={whatsappLink('Hello, I would like to enquire about a stay at The Ivy Lake.')} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="label-caps text-gold mb-4 text-[10px]">Hours</p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>Check-in: 2:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              <li>Café: 7:00 AM – 9:00 PM</li>
              <li>Reception: 24 Hours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs font-sans">© {new Date().getFullYear()} The Ivy Lake. All rights reserved.</p>
          <p className="text-xs font-sans">Designed with care in Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
