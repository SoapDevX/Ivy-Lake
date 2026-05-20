'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks/useScrollProgress'
import { bookingWhatsapp } from '@/lib/utils/whatsappLink'
import { Button } from '@/components/ui/Button'
import { rooms } from '@/data/rooms'

export function BookingBar() {
  const progress = useScrollProgress()        // returns number 0–100
  const scrolled = progress > 25             // show bar after 25% scroll

  const [checkIn, setCheckIn]   = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests]     = useState(2)
  const [roomId, setRoomId]     = useState('')

  const handleBook = () => {
    const room = rooms.find(r => r.id === roomId)
    const roomName = room?.name ?? 'a room'
    const url = bookingWhatsapp(roomName, checkIn || 'TBD', checkOut || 'TBD', guests)
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-40 bg-[#18392B] border-b border-[#C8A96B]/20"
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4 flex-wrap">
            <span className="text-[#F7F4EE] font-serif text-sm hidden lg:block mr-4">Reserve your stay</span>

            <div className="flex items-center gap-1 flex-1 flex-wrap">
              <div className="flex items-center gap-2 bg-[#F7F4EE]/10 border border-[#F7F4EE]/20 px-4 py-2">
                <span className="text-[#C8A96B] text-xs font-sans uppercase tracking-wider">Check-in</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="bg-transparent text-[#F7F4EE] text-sm font-sans outline-none"
                />
              </div>

              <div className="flex items-center gap-2 bg-[#F7F4EE]/10 border border-[#F7F4EE]/20 px-4 py-2">
                <span className="text-[#C8A96B] text-xs font-sans uppercase tracking-wider">Check-out</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="bg-transparent text-[#F7F4EE] text-sm font-sans outline-none"
                />
              </div>

              <div className="flex items-center gap-2 bg-[#F7F4EE]/10 border border-[#F7F4EE]/20 px-4 py-2">
                <span className="text-[#C8A96B] text-xs font-sans uppercase tracking-wider">Guests</span>
                <select
                  value={guests}
                  onChange={e => setGuests(Number(e.target.value))}
                  className="bg-transparent text-[#F7F4EE] text-sm font-sans outline-none"
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n} className="text-black">{n}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 bg-[#F7F4EE]/10 border border-[#F7F4EE]/20 px-4 py-2">
                <span className="text-[#C8A96B] text-xs font-sans uppercase tracking-wider">Room</span>
                <select
                  value={roomId}
                  onChange={e => setRoomId(e.target.value)}
                  className="bg-transparent text-[#F7F4EE] text-sm font-sans outline-none"
                >
                  <option value="" className="text-black">Any</option>
                  {rooms.map(r => (
                    <option key={r.id} value={r.id} className="text-black">{r.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <Button variant="gold" size="sm" onClick={handleBook}>Check Availability</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}