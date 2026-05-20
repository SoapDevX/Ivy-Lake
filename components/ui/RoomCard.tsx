'use client'
import Image from 'next/image'
import Link from 'next/link'
import type { Room } from '@/lib/types'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { Badge } from './Badge'

interface RoomCardProps {
  room: Room
  onBook?: (roomId: string) => void
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <article className="group bg-white border border-charcoal/8 overflow-hidden hover:shadow-xl transition-shadow duration-500">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-forest/10 group-hover:bg-forest/5 transition-colors duration-300" />
        {room.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold">Featured</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="label-caps text-gold mb-1">{room.view} View · {room.size}</p>
            <h3 className="heading-section text-2xl text-charcoal">{room.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted font-sans">from</p>
            <p className="font-serif text-xl text-forest">{formatCurrency(room.price)}</p>
            <p className="text-xs text-muted font-sans">per night</p>
          </div>
        </div>
        <p className="text-sm text-muted font-sans leading-relaxed mb-5 line-clamp-2">{room.shortDesc}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.amenities.slice(0, 4).map(a => (
            <span key={a} className="text-[10px] font-sans tracking-wide px-2.5 py-1 bg-ivory text-charcoal/70 border border-charcoal/8">{a}</span>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-[10px] font-sans tracking-wide px-2.5 py-1 bg-ivory text-muted border border-charcoal/8">+{room.amenities.length - 4} more</span>
          )}
        </div>
        <div className="flex gap-3">
          <Link href={`/rooms/${room.slug}`} className="flex-1 text-center text-xs font-sans uppercase tracking-widest py-3 border border-forest text-forest hover:bg-forest hover:text-ivory transition-all duration-300">
            View Room
          </Link>
          <button
            onClick={() => onBook?.(room.id)}
            className="flex-1 text-xs font-sans uppercase tracking-widest py-3 bg-gold text-forest hover:bg-gold-light transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}
