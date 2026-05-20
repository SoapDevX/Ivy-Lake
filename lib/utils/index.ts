export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function buildWhatsAppLink(
  message?: string,
  roomName?: string
): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '94712345678'
  const defaultMsg = roomName
    ? `Hello, I'd like to book the ${roomName} at The Ivy Lake, Anuradhapura.`
    : "Hello, I'd like to make a reservation at The Ivy Lake, Anuradhapura."
  const text = encodeURIComponent(message ?? defaultMsg)
  return `https://wa.me/${number}?text=${text}`
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}

export function calculateNights(checkIn: string, checkOut: string): number {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.round(
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / msPerDay
  )
}
