interface StarRatingProps { rating: number; size?: 'sm' | 'md' }

export function StarRating({ rating, size = 'sm' }: StarRatingProps) {
  const sz = size === 'sm' ? 'text-sm' : 'text-base'
  return (
    <div className={`flex gap-0.5 ${sz}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-gold' : 'text-gold/25'}>★</span>
      ))}
    </div>
  )
}
