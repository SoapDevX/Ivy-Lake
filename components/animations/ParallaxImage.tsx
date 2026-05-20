'use client'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover animate-ken-burns"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
