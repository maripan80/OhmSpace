import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CircuitGrid, PlacedComponent, ValidationResult } from '../lib/circuit/types'
import { createEmptyGrid, validateMission } from '../lib/circuit/validateMission'
import type { Mission } from '../data/missions'
import type { InventoryItem } from '../data/componentsCatalog'

interface LabSessionState {
  grid: CircuitGrid
  selectedItemId: string | null
  lastValidation: ValidationResult | null
  placedCounts: Record<string, number>
}

interface LabSessionContextValue extends LabSessionState {
  selectInventoryItem: (id: string | null) => void
  placeOnCell: (row: number, col: number) => void
  clearCell: (row: number, col: number) => void
  verifyCircuit: () => ValidationResult
  resetGrid: () => void
  inventory: InventoryItem[]
}

const LabSessionContext = createContext<LabSessionContextValue | null>(null)

function countPlaced(grid: CircuitGrid, item: InventoryItem): number {
  let n = 0
  const comp = item.component
  for (const row of grid) {
    for (const cell of row) {
      if (!cell) continue
      if (comp.kind === 'wire' && cell.kind === 'wire') n++
      if (comp.kind === 'battery' && cell.kind === 'battery' && cell.voltage === comp.voltage) n++
      if (
        comp.kind === 'resistor' &&
        cell.kind === 'resistor' &&
        cell.resistance === comp.resistance
      )
        n++
    }
  }
  return n
}

export function LabSessionProvider({
  mission,
  inventory,
  children,
}: {
  mission: Mission
  inventory: InventoryItem[]
  children: ReactNode
}) {
  const [grid, setGrid] = useState<CircuitGrid>(createEmptyGrid)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [lastValidation, setLastValidation] = useState<ValidationResult | null>(null)

  const placedCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of inventory) {
      counts[item.id] = countPlaced(grid, item)
    }
    return counts
  }, [grid, inventory])

  const selectInventoryItem = useCallback((id: string | null) => {
    setSelectedItemId(id)
  }, [])

  const placeOnCell = useCallback(
    (row: number, col: number) => {
      setGrid((g) => {
        const next = g.map((r) => [...r])
        const existing = next[row][col]

        // Fără piesă selectată: click golește celula ocupată
        if (!selectedItemId) {
          if (existing) next[row][col] = null
          return next
        }

        const item = inventory.find((i) => i.id === selectedItemId)
        if (!item) return next

        const used = countPlaced(g, item)
        if (!existing && used >= item.maxCount) return next

        if (existing && sameComponent(existing, item.component)) {
          next[row][col] = null
          return next
        }

        next[row][col] = { ...item.component }
        return next
      })
      setLastValidation(null)
    },
    [selectedItemId, inventory],
  )

  const clearCell = useCallback((row: number, col: number) => {
    setGrid((g) => {
      const next = g.map((r) => [...r])
      next[row][col] = null
      return next
    })
    setLastValidation(null)
  }, [])

  const verifyCircuit = useCallback(() => {
    const result = validateMission(grid, mission.target)
    setLastValidation(result)
    return result
  }, [grid, mission.target])

  const resetGrid = useCallback(() => {
    setGrid(createEmptyGrid())
    setLastValidation(null)
    setSelectedItemId(null)
  }, [])

  const value: LabSessionContextValue = {
    grid,
    selectedItemId,
    lastValidation,
    placedCounts,
    selectInventoryItem,
    placeOnCell,
    clearCell,
    verifyCircuit,
    resetGrid,
    inventory,
  }

  return (
    <LabSessionContext.Provider value={value}>{children}</LabSessionContext.Provider>
  )
}

function sameComponent(a: PlacedComponent, b: PlacedComponent): boolean {
  if (a.kind !== b.kind) return false
  if (a.kind === 'resistor') return a.resistance === b.resistance
  if (a.kind === 'battery') return a.voltage === b.voltage
  return true
}

export function useLabSession() {
  const ctx = useContext(LabSessionContext)
  if (!ctx) throw new Error('useLabSession trebuie folosit în LabSessionProvider')
  return ctx
}
