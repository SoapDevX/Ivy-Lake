'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { bookingWhatsapp } from '@/lib/utils/whatsappLink'
import { rooms } from '@/data/rooms'

export function BookingWidget() {
  const [checkIn, setCheckIn]   = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests]     = useState(2)
  const [roomId, setRoomId]     = useState('')

  const handleWhatsApp = () => {
    const room = rooms.find(r => r.id === roomId)
    const name = room?.name ?? 'a room'
    const url = bookingWhatsapp(name, checkIn || 'TBD', checkOut || 'TBD', guests)
    window.open(url, '_blank')
  }

  const inputCls = 'w-full bg-white border border-charcoal/15 px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors'
  const labelCls = 'label-caps text-muted text-[9px] mb-1.5 block'

  return (
    <div className="bg-white border border-charcoal/10 p-8 shadow-sm">
      <h3 className="font-serif text-forest text-2xl mb-6">Check Availability</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelCls}>Check-in</label>
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Check-out</label>
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Guests</label>
          <select value={guests} onChange={e => setGuests(Number(e.target.value))} className={inputCls}>
            {[1,2,3,4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Room Type</label>
          <select value={roomId} onChange={e => setRoomId(e.target.value)} className={inputCls}>
            <option value="">Any Room</option>
            {rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </div>
      </div>
      <Button variant="gold" size="md" onClick={handleWhatsApp} className="w-full">
        Check Availability via WhatsApp
      </Button>
      <p className="text-xs font-sans text-muted text-center mt-3">Direct bookings get complimentary early check-in</p>
    </div>
  )
}
