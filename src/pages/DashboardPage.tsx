import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BriefingModal } from '../components/dashboard/BriefingModal'
import { MissionList } from '../components/dashboard/MissionList'
import { PageHeader } from '../components/layout/PageHeader'
import { lore } from '../data/lore'
import type { Mission } from '../data/missions'

export function DashboardPage() {
  const navigate = useNavigate()
  const [briefingMission, setBriefingMission] = useState<Mission | null>(null)

  return (
  <>
      <PageHeader
        title="Dashboard misiuni"
        subtitle={lore.intro}
      />
      <MissionList onOpenBriefing={setBriefingMission} />
      {briefingMission && (
        <BriefingModal
          mission={briefingMission}
          onClose={() => setBriefingMission(null)}
          onStart={() => {
            navigate(`/lab/${briefingMission.id}`)
            setBriefingMission(null)
          }}
        />
      )}
    </>
  )
}
