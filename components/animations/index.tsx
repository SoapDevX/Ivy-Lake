'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

/* ── TextReveal: staggered word-by-word reveal ── */
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  tag: Tag = 'h2',
}: TextRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={cn('overflow-hidden', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial={{ opacity: 0, y: '100%' }}
          animate={inView ? { opacity: 1, y: '0%' } : {}}
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

/* ── ParallaxImage: subtle scroll-based parallax ── */
interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  parallaxStrength?: number
  priority?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
}: ParallaxImageProps) {
  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      <motion.div
        className="absolute inset-0 scale-110"
        initial={{ y: '0%' }}
        whileInView={{ y: '-5%' }}
        viewport={{ once: false }}
        transition={{ duration: 1.4, ease: 'linear' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  )
}

/* ── MagneticButton: subtle magnetic hover effect ── */
interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)'
    e.currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
  }

  return (
    <div
      className={cn(className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease' }}
    >
      {children}
    </div>
  )
}
