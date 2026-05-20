import { HeroSection }        from '@/components/sections/HeroSection'
import { ExperienceSection }  from '@/components/sections/ExperienceSection'
import { RoomPreviewSection } from '@/components/sections/RoomPreviewSection'
import { DiningSection }      from '@/components/sections/DiningSection'
import { SacredCitySection }  from '@/components/sections/SacredCitySection'
import { GalleryPreview }     from '@/components/sections/GalleryPreview'
import { TestimonialsSection }from '@/components/sections/TestimonialsSection'
import { BookingCTA }         from '@/components/sections/BookingCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <RoomPreviewSection />
      <DiningSection />
      <SacredCitySection />
      <GalleryPreview />
      <TestimonialsSection />
      <BookingCTA />
    </>
  )
}
