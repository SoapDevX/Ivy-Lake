export function whatsappLink(message: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '94XXXXXXXXX'
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function bookingWhatsapp(roomName: string, checkIn: string, checkOut: string, guests: number): string {
  const msg = `Hello! I'd like to book the ${roomName} at The Ivy Lake.\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\n\nPlease confirm availability.`
  return whatsappLink(msg)
}
