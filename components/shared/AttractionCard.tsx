import type { attractions } from '@/data/attractions'
import { FadeIn } from '@/components/animations/FadeIn'
import { Badge } from '@/components/ui/Badge'

type Attraction = typeof attractions[number]

interface AttractionCardProps { attraction: Attraction; index?: number }

export function AttractionCard({ attraction, index = 0 }: AttractionCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group flex gap-5 items-start p-5 border border-[#EDE8DE] hover:border-[#C8A96B]/50 transition-colors duration-300 bg-white">
        <div className="w-14 h-14 shrink-0 bg-[#F7F4EE] border border-[#EDE8DE] flex items-center justify-center text-2xl">
          {attraction.icon}
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