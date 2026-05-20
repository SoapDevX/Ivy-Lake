import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80', alt: 'Lake view at sunset', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', alt: 'Deluxe lake room' },
  { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80', alt: 'Garden suite' },
  { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80', alt: 'Garden café' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', alt: 'Hotel exterior' },
]

export function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="label-caps text-gold mb-4">Gallery</p>
            <GoldDivider className="mb-5" />
            <h2 className="heading-section text-forest text-4xl md:text-5xl">Through the Lens</h2>
          </div>
          <Link href="/gallery" className="label-caps text-forest hover:text-gold transition-colors text-xs">View Full Gallery →</Link>
        </FadeIn>

        <FadeIn className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[480px]">
          {galleryImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden group ${img.span ?? ''}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-all duration-300" />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
