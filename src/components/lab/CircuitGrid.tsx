import { useLabSession } from '../../context/LabSessionContext'
import { NeonCard } from '../ui/NeonCard'
import { GridCellComponent } from './GridCell'

interface CircuitGridProps {
  hintRow: number
}

export function CircuitGrid({ hintRow }: CircuitGridProps) {
  const { grid, placeOnCell } = useLabSession()

  return (
    <NeonCard title="Panou circuit 3×3">
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <GridCellComponent
              key={`${r}-${c}`}
              row={r}
              col={c}
              cell={cell}
              highlighted={r === hintRow}
              onActivate={() => placeOnCell(r, c)}
            />
          )),
        )}
      </div>
      <p className="mt-2 font-mono text-xs text-neon-magenta/80">
        Rândul {hintRow + 1} este zona recomandată pentru misiunea curentă.
      </p>
    </NeonCard>
  )
}
