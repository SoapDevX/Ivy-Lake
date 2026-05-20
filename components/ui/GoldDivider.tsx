export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px w-12 bg-gold" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      <div className="h-px w-12 bg-gold" />
    </div>
  )
}
