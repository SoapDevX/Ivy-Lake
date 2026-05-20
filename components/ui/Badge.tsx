import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'forest' | 'muted'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold:   'bg-gold/15 text-gold-dark border border-gold/30',
    forest: 'bg-forest/10 text-forest border border-forest/20',
    muted:  'bg-charcoal/5 text-muted border border-charcoal/10',
  }
  return (
    <span className={cn('inline-block px-3 py-1 text-[10px] font-sans tracking-[0.15em] uppercase', variants[variant], className)}>
      {children}
    </span>
  )
}
