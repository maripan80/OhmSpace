import { missions, type Mission } from '../../data/missions'
import { useProgress } from '../../context/ProgressContext'
import { MissionCard } from './MissionCard'

interface MissionListProps {
  onOpenBriefing: (mission: Mission) => void
}

export function MissionList({ onOpenBriefing }: MissionListProps) {
  const { getMissionStatus } = useProgress()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          status={getMissionStatus(mission.id, mission.locked)}
          onOpenBriefing={onOpenBriefing}
        />
      ))}
    </div>
  )
}
