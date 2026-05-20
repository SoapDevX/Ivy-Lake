import { FadeIn } from '@/components/animations/FadeIn'
import { cn } from '@/lib/utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-14', className)}>
      {eyebrow && (
        <FadeIn delay={0}>
          <p className={cn('label-eyebrow mb-4', light && 'text-[#C8A96B]')}>{eyebrow}</p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className={cn('heading-section text-4xl md:text-5xl lg:text-6xl mb-5', light ? 'text-[#F7F4EE]' : 'text-[#18392B]')}>
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className={cn('body-refined max-w-2xl text-lg', centered && 'mx-auto', light && 'text-[#F7F4EE]/70')}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
