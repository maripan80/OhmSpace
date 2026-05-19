import type { MissionStatus } from '../../data/missions'

const labels: Record<MissionStatus, string> = {
  new: 'Nou',
  in_progress: 'În curs',
  completed: 'Reparat',
  locked: 'Blocat',
}

const styles: Record<MissionStatus, string> = {
  new: 'border-neon-cyan/50 text-neon-cyan',
  in_progress: 'border-amber-400/50 text-amber-300',
  completed: 'border-neon-green/50 text-neon-green',
  locked: 'border-slate-600 text-slate-500',
}

export function StatusBadge({ status }: { status: MissionStatus }) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 font-mono text-xs uppercase ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}
