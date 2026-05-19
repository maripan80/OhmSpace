import { stationCode } from '../../theme/tokens'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-6 border-b border-neon-cyan/20 pb-4">
      <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan/70">
        Stație {stationCode}
      </p>
      <h1 className="font-display text-2xl font-bold text-slate-100 md:text-3xl">
        {title}
      </h1>
      {subtitle && <p className="mt-1 text-slate-400">{subtitle}</p>}
    </header>
  )
}
