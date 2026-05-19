import type { ReactNode } from 'react'

interface NeonCardProps {
  children: ReactNode
  className?: string
  title?: string
}

export function NeonCard({ children, className = '', title }: NeonCardProps) {
  return (
    <div className={`hud-panel border-glow p-4 ${className}`}>
      {title && (
        <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-neon-cyan">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
