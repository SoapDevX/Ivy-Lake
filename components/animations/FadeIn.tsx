'use client'
import { useInView } from '@/lib/hooks/useInView'
import { cn } from '@/lib/utils/cn'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'in'
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('opacity-0', inView && (direction === 'up' ? 'animate-fade-up' : 'animate-fade-in'), className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}
