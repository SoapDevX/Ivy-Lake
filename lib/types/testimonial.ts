export interface Testimonial {
  id: string
  name: string
  country: string
  flag: string
  rating: number
  text: string
  date: string
  platform: 'google' | 'tripadvisor' | 'booking'
}
