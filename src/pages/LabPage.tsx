import { Navigate, useParams } from 'react-router-dom'
import { CircuitGrid } from '../components/lab/CircuitGrid'
import { Inventory } from '../components/lab/Inventory'
import { Oscilloscope } from '../components/lab/Oscilloscope'
import { VerifyPanel } from '../components/lab/VerifyPanel'
import { PageHeader } from '../components/layout/PageHeader'
import { LabSessionProvider, useLabSession } from '../context/LabSessionContext'
import { getInventoryForMission, getMissionById } from '../data/missions'

function LabContent({ missionId }: { missionId: string }) {
  const mission = getMissionById(missionId)!
  const { lastValidation } = useLabSession()

  return (
    <div className="space-y-6">
      <PageHeader title="Laborator virtual" subtitle={mission.title} />
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Inventory />
        <div className="space-y-6">
          <CircuitGrid hintRow={mission.hintRow} />
          <VerifyPanel missionId={missionId} />
          <Oscilloscope
            active={lastValidation?.ok ?? false}
            metrics={lastValidation?.metrics ?? null}
          />
        </div>
      </div>
    </div>
  )
}

export function LabPage() {
  const { missionId } = useParams<{ missionId: string }>()
  const mission = missionId ? getMissionById(missionId) : undefined

  if (!mission || mission.locked) {
    return <Navigate to="/" replace />
  }

  const inventory = getInventoryForMission(mission.id)

  return (
    <LabSessionProvider mission={mission} inventory={inventory}>
      <LabContent missionId={mission.id} />
    </LabSessionProvider>
  )
}
