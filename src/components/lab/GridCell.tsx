import type { GridCell as Cell } from '../../lib/circuit/types'

function cellLabel(cell: Cell): string {
  if (!cell) return '·'
  switch (cell.kind) {
    case 'battery':
      return `${cell.voltage}V`
    case 'resistor':
      return `${cell.resistance}Ω`
    case 'wire':
      return '—'
    default:
      return '?'
  }
}

interface GridCellProps {
  row: number
  col: number
  cell: Cell
  highlighted: boolean
  onActivate: () => void
}

export function GridCellComponent({
  row,
  col,
  cell,
  highlighted,
  onActivate,
}: GridCellProps) {
  return (
    <button
      type="button"
      onClick={onActivate}
      aria-label={`Celulă ${row + 1},${col + 1}${cell ? `, conține ${cell.kind}` : ', goală'}`}
      className={`flex aspect-square items-center justify-center rounded border font-mono text-sm transition ${
        highlighted
          ? 'border-neon-magenta/50 bg-neon-magenta/5'
          : 'border-neon-cyan/30 bg-space-900/80'
      } ${cell ? 'text-neon-green shadow-neon-green' : 'text-slate-600 hover:border-neon-cyan/60'}`}
    >
      {cellLabel(cell)}
    </button>
  )
}
