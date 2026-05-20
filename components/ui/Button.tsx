import { cn } from '@/lib/utils/cn'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  external?: boolean
}

const variants = {
  primary: 'bg-forest text-ivory hover:bg-forest-light border border-forest',
  outline: 'bg-transparent text-forest border border-forest hover:bg-forest hover:text-ivory',
  ghost:   'bg-transparent text-ivory border border-ivory/40 hover:border-ivory hover:bg-ivory/10',
  gold:    'bg-gold text-forest hover:bg-gold-light border border-gold font-medium',
}

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-7 py-3.5 text-xs tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
}

export function Button({
  children, variant = 'primary', size = 'md', href, onClick,
  className, type = 'button', disabled, external,
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 font-sans uppercase transition-all duration-300',
    variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className
  )
  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
      : <Link href={href} className={cls}>{children}</Link>
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
