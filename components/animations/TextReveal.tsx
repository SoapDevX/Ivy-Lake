'use client'
import { useInView } from '@/lib/hooks/useInView'

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
}

export function TextReveal({ children, className = '', as: Tag = 'span', delay = 0 }: TextRevealProps) {
  const { ref, inView } = useInView(0.1)
  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={`opacity-0 ${inView ? 'animate-fade-up' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </Tag>
  )
}
