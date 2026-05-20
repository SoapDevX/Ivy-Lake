export interface Room {
  id: string
  name: string
  slug: string
  description: string
  shortDesc: string
  price: number
  currency: string
  images: string[]
  amenities: string[]
  size: string
  guests: number
  beds: string
  view: string
  featured?: boolean
}
