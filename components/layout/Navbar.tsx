'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navLinks } from '@/data/nav'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-forest/97 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl text-ivory tracking-wide">The Ivy Lake</span>
          <span className="label-caps text-gold/80 text-[9px] tracking-[0.25em] mt-0.5">Anuradhapura · Sri Lanka</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="label-caps text-ivory/70 hover:text-gold transition-colors duration-300 text-[10px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="gold" size="sm" href="/booking">Book a Stay</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-forest border-t border-ivory/10 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="label-caps text-ivory/70 hover:text-gold transition-colors text-xs"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" href="/booking" className="mt-2 w-fit">Book a Stay</Button>
        </div>
      </div>
    </header>
  )
}
