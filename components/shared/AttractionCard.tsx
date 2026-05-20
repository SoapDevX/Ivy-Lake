import Image from 'next/image'
import type { Attraction } from '@/data/attractions'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'

interface AttractionCardProps { attraction: Attraction; index?: number }

export function AttractionCard({ attraction, index = 0 }: AttractionCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group flex gap-5 items-start p-5 border border-[#EDE8DE] hover:border-[#C8A96B]/50 transition-colors duration-300 bg-white">
        <div className="w-24 h-24 shrink-0 overflow-hidden">
          <Image
            src={attraction.image}
            alt={attraction.name}
            width={96} height={96}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="gold" className="text-[9px]">{attraction.distance}</Badge>
            <span className="text-xs text-[#6B7280] font-sans">{attraction.duration}</span>
          </div>
          <h4 className="font-serif text-lg text-[#18392B] mb-1">{attraction.name}</h4>
          <p className="text-sm text-[#6B7280] font-sans font-light leading-relaxed line-clamp-2">{attraction.description}</p>
        </div>
      </div>
    </FadeIn>
  )
}
