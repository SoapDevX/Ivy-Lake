'use client'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
import { Button } from '@/components/ui/Button'
import { whatsappLink } from '@/lib/utils/whatsappLink'

export function StickyBookingBar() {
  const progress = useScrollProgress()
  const show = progress > 25

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-[60] h-[2px] bg-gold transition-all duration-150" style={{ width: `${progress}%` }} />

      {/* Booking bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-forest/97 backdrop-blur border-t border-ivory/10 transition-all duration-500 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-serif text-ivory text-sm">The Ivy Lake</p>
            <p className="label-caps text-gold/70 text-[9px]">Anuradhapura · Sri Lanka</p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={whatsappLink('Hello! I would like to book a room at The Ivy Lake.')}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-ivory/60 hover:text-gold transition-colors text-[10px] hidden sm:block"
            >
              WhatsApp
            </a>
            <Button variant="gold" size="sm" href="/booking">Check Availability</Button>
          </div>
        </div>
      </div>
    </>
  )
}
