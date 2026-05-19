import { useLabSession } from '../../context/LabSessionContext'
import { NeonCard } from '../ui/NeonCard'

export function Inventory() {
  const { inventory, selectedItemId, selectInventoryItem, placedCounts } = useLabSession()

  return (
    <NeonCard title="Inventar piese">
      <ul className="flex flex-col gap-2">
        {inventory.map((item) => {
          const used = placedCounts[item.id] ?? 0
          const depleted = used >= item.maxCount
          const selected = selectedItemId === item.id

          return (
            <li key={item.id}>
              <button
                type="button"
                disabled={depleted}
                onClick={() => selectInventoryItem(selected ? null : item.id)}
                aria-label={`Selectează ${item.label}`}
                aria-pressed={selected}
                className={`w-full rounded border px-3 py-2 text-left text-sm transition ${
                  selected
                    ? 'border-neon-cyan bg-neon-cyan/15 text-neon-cyan'
                    : 'border-slate-600 text-slate-300 hover:border-neon-cyan/40'
                } ${depleted ? 'cursor-not-allowed opacity-40' : ''}`}
              >
                <span className="font-mono font-medium">{item.label}</span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {item.description} ({used}/{item.maxCount})
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      <p className="mt-3 font-mono text-xs text-slate-500">
        Selectează o piesă, apoi click pe celula din grilă.
      </p>
    </NeonCard>
  )
}
