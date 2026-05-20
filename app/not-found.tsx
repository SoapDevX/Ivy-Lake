import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center">
        <p className="label-caps text-gold mb-4">404</p>
        <h1 className="heading-display text-forest text-5xl mb-6">Page Not Found</h1>
        <p className="body-lead text-muted mb-8">This page seems to have wandered off into the sacred city.</p>
        <Link href="/" className="label-caps text-forest hover:text-gold transition-colors text-xs border-b border-forest pb-1">Return to The Ivy Lake →</Link>
      </div>
    </div>
  )
}
