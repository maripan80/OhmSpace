import { lore } from '../../data/lore'
import { useProgress } from '../../context/ProgressContext'
import { useLabSession } from '../../context/LabSessionContext'
import { NeonButton } from '../ui/NeonButton'
import { NeonCard } from '../ui/NeonCard'

interface VerifyPanelProps {
  missionId: string
}

export function VerifyPanel({ missionId }: VerifyPanelProps) {
  const { verifyCircuit, lastValidation, resetGrid } = useLabSession()
  const { completeMission } = useProgress()

  const handleVerify = () => {
    const result = verifyCircuit()
    if (result.ok) {
      completeMission(missionId)
    }
  }

  return (
    <NeonCard title="Verificare circuit">
      <NeonButton onClick={handleVerify} aria-label="Verifică circuitul">
        Verifică circuitul
      </NeonButton>
      <NeonButton variant="ghost" className="ml-2" onClick={resetGrid}>
        Resetează grila
      </NeonButton>

      {lastValidation && (
        <div className="mt-4 space-y-2">
          {lastValidation.ok ? (
            <>
              <p className="text-sm text-neon-green">{lore.missionSuccess}</p>
              {lastValidation.metrics && (
                <dl className="font-mono text-xs text-slate-400">
                  <div className="flex justify-between gap-4">
                    <dt>I (curent)</dt>
                    <dd>{lastValidation.metrics.I.toFixed(4)} A</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>R_total</dt>
                    <dd>{lastValidation.metrics.Rtotal} Ω</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>U_R1</dt>
                    <dd>{lastValidation.metrics.U_R1.toFixed(2)} V</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>U_R2</dt>
                    <dd>{lastValidation.metrics.U_R2.toFixed(2)} V</dd>
                  </div>
                </dl>
              )}
            </>
          ) : (
            <>
              <p className="text-sm text-neon-magenta">{lore.missionFailHint}</p>
              <ul className="list-inside list-disc text-sm text-slate-400">
                {lastValidation.errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </NeonCard>
  )
}
