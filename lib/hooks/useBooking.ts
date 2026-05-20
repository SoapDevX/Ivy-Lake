'use client'
import { useState } from 'react'
import type { BookingState } from '../types'

const initial: BookingState = { roomId: null, checkIn: null, checkOut: null, guests: 2, isOpen: false }

export function useBooking() {
  const [state, setState] = useState<BookingState>(initial)

  const openBooking = (roomId?: string) =>
    setState(s => ({ ...s, isOpen: true, roomId: roomId ?? s.roomId }))
  const closeBooking = () =>
    setState(s => ({ ...s, isOpen: false }))
  const setDates = (checkIn: Date | null, checkOut: Date | null) =>
    setState(s => ({ ...s, checkIn, checkOut }))
  const setGuests = (guests: number) =>
    setState(s => ({ ...s, guests }))

  return { state, openBooking, closeBooking, setDates, setGuests }
}
