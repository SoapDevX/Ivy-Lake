'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Room } from '@/lib/types/room'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { Badge } from '@/components/ui/Badge'

interface RoomCardProps { room: Room; index?: number }

export function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link href={`/rooms#${room.id}`} className="block">
        <div className="overflow-hidden aspect-[4/3] mb-5">
          <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className="w-full h-full">
            <Image
              src={room.images[0]}
              alt={room.name}
              width={800} height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label-eyebrow text-xs mb-1">{room.size} · {room.beds}</p>
              <h3 className="heading-section text-2xl text-[#18392B]">{room.name}</h3>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-[#6B7280] font-sans">from</p>
              <p className="text-xl font-serif text-[#18392B]">{formatCurrency(room.price)}</p>
              <p className="text-xs text-[#6B7280] font-sans">per night</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {room.amenities.slice(0, 4).map(a => (
              <Badge key={a} variant="muted" className="text-[10px]">{a}</Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
