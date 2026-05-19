import { useNavigate } from 'react-router-dom'
import type { Mission, MissionStatus } from '../../data/missions'
import { NeonButton } from '../ui/NeonButton'
import { NeonCard } from '../ui/NeonCard'
import { StatusBadge } from '../ui/StatusBadge'

interface MissionCardProps {
  mission: Mission
  status: MissionStatus
  onOpenBriefing: (mission: Mission) => void
}

export function MissionCard({ mission, status, onOpenBriefing }: MissionCardProps) {
  const navigate = useNavigate()
  const locked = mission.locked || status === 'locked'

  return (
    <NeonCard className={locked ? 'opacity-60' : ''}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <StatusBadge status={status} />
        <span className="font-mono text-xs uppercase text-slate-500">
          {mission.difficulty}
        </span>
      </div>
      <h3 className="mt-2 font-display text-base text-slate-100">{mission.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{mission.description}</p>
      {locked ? (
        <p className="mt-3 font-mono text-xs text-slate-500" title="Sistem indisponibil">
          Sistem indisponibil — furtună activă
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          <NeonButton
            onClick={() => onOpenBriefing(mission)}
            aria-label={`Briefing pentru ${mission.title}`}
          >
            Briefing
          </NeonButton>
          <NeonButton
            variant="magenta"
            onClick={() => navigate(`/lab/${mission.id}`)}
            aria-label={`Laborator ${mission.title}`}
          >
            Laborator
          </NeonButton>
        </div>
      )}
    </NeonCard>
  )
}
