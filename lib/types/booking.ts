export interface BookingRequest {
  roomId: string
  checkIn: Date | null
  checkOut: Date | null
  guests: number
  name: string
  email: string
  phone: string
  message?: string
}

export interface BookingState {
  roomId: string | null
  checkIn: Date | null
  checkOut: Date | null
  guests: number
  isOpen: boolean
}
