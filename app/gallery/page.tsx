import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { pageMeta } from '@/lib/seo/meta'

export const metadata: Metadata = pageMeta('Gallery', 'Explore The Ivy Lake through photography — rooms, garden café, lake views, and Anuradhapura.')

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=900&q=80', alt: 'Nuwara Wewa at golden hour', category: 'surroundings', tall: true },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80', alt: 'Deluxe Lake Room', category: 'rooms' },
  { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80', alt: 'Garden Suite', category: 'rooms' },
  { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=900&q=80', alt: 'Garden Café', category: 'cafe', tall: true },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80', alt: 'Room interior', category: 'rooms' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80', alt: 'Hotel grounds', category: 'surroundings' },
  { src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=900&q=80', alt: 'Anuradhapura sacred city', category: 'heritage', tall: true },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80', alt: 'Coffee at the café', category: 'cafe' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', alt: 'Dining', category: 'cafe' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80', alt: 'Suite bathroom', category: 'rooms' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-64 flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1600&q=80" alt="Gallery" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <p className="label-caps text-gold mb-2">Photography</p>
          <h1 className="heading-display text-ivory text-5xl md:text-6xl">Gallery</h1>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-10 flex items-center gap-4">
            <GoldDivider />
            <p className="label-caps text-muted text-[10px]">{galleryItems.length} photographs</p>
          </FadeIn>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((img, i) => (
              <FadeIn key={i} delay={i * 50} className={`break-inside-avoid relative overflow-hidden group ${img.tall ? 'h-80' : 'h-56'}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/25 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-forest/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="label-caps text-ivory/80 text-[9px]">{img.category}</p>
                  <p className="font-serif text-ivory text-sm">{img.alt}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
