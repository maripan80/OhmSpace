import { lore } from '../../data/lore'
import type { Mission } from '../../data/missions'
import { NeonButton } from '../ui/NeonButton'

interface BriefingModalProps {
  mission: Mission
  onClose: () => void
  onStart: () => void
}

export function BriefingModal({ mission, onClose, onStart }: BriefingModalProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-title"
    >
      <div className="hud-panel border-glow max-h-[90vh] w-full max-w-lg overflow-y-auto p-6">
        <h2 id="briefing-title" className="font-display text-xl text-neon-cyan">
          {lore.briefingTitle}
        </h2>
        <p className="mt-2 font-display text-lg text-slate-100">{mission.title}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{lore.intro}</p>
        <p className="mt-3 text-sm text-slate-400">{mission.description}</p>
        <p className="mt-3 rounded border border-neon-green/30 bg-neon-green/5 p-3 font-mono text-xs text-neon-green">
          Obiectiv: plasează bateria 9V, rezistor 100Ω și 200Ω pe rândul din mijloc (pozițiile
          1–3), apoi apasă „Verifică circuitul”.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <NeonButton onClick={onStart} aria-label="Începe reparația în laborator">
            Inițiază reparația
          </NeonButton>
          <NeonButton variant="ghost" onClick={onClose}>
            Înapoi
          </NeonButton>
        </div>
      </div>
    </div>
  )
}
