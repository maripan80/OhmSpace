import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'cyan' | 'magenta' | 'ghost'
}

export function NeonButton({
  children,
  variant = 'cyan',
  className = '',
  disabled,
  ...props
}: NeonButtonProps) {
  const variants = {
    cyan:
      'border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 shadow-neon-cyan focus:ring-neon-cyan/50',
    magenta:
      'border-neon-magenta/60 text-neon-magenta hover:bg-neon-magenta/10 shadow-neon-magenta focus:ring-neon-magenta/50',
    ghost: 'border-slate-600 text-slate-300 hover:bg-space-700/50',
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`rounded-md border px-4 py-2 font-medium transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-40 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
