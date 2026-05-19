import type { CircuitGrid, ValidationResult } from './types'
import { solveSeries } from './solveSeries'

export interface MissionCircuitTarget {
  missionId: string
  /** Poziții [row, col] pentru lanțul serie: baterie → R1 → R2 */
  batteryPos: [number, number]
  resistor1Pos: [number, number]
  resistor2Pos: [number, number]
  expectedVoltage: number
  expectedR1: number
  expectedR2: number
}

function getCell(grid: CircuitGrid, r: number, c: number) {
  return grid[r]?.[c] ?? null
}

/**
 * Verifică dacă grila respectă misiunea demo (lanț serie pe rândul din mijloc).
 */
export function validateMission(
  grid: CircuitGrid,
  target: MissionCircuitTarget,
): ValidationResult {
  const errors: string[] = []

  const battery = getCell(grid, ...target.batteryPos)
  const r1Cell = getCell(grid, ...target.resistor1Pos)
  const r2Cell = getCell(grid, ...target.resistor2Pos)

  if (!battery || battery.kind !== 'battery') {
    errors.push(
      'Lipsește bateria pe poziția marcată. Sursele de tensiune alimentează întregul lanț — plasează bateria de 9V în celula indicată.',
    )
  } else if (battery.voltage !== target.expectedVoltage) {
    errors.push(
      `Tensiunea bateriei trebuie să fie ${target.expectedVoltage}V. Verifică inventarul și piesa selectată.`,
    )
  }

  if (!r1Cell || r1Cell.kind !== 'resistor') {
    errors.push(
      'Primul rezistor lipsește sau este greșit. În serie, curentul trece prin fiecare rezistor la rând.',
    )
  } else if (r1Cell.resistance !== target.expectedR1) {
    errors.push(
      `Primul rezistor trebuie să fie ${target.expectedR1}Ω. Rezistența totală se obține prin însumare în serie.`,
    )
  }

  if (!r2Cell || r2Cell.kind !== 'resistor') {
    errors.push(
      'Al doilea rezistor lipsește. Completează lanțul serie: baterie → R₁ → R₂.',
    )
  } else if (r2Cell.resistance !== target.expectedR2) {
    errors.push(
      `Al doilea rezistor trebuie să fie ${target.expectedR2}Ω.`,
    )
  }

  // Verifică că pozițiile sunt pe același rând și consecutive (serie orizontală)
  const [br, bc] = target.batteryPos
  const [r1r, r1c] = target.resistor1Pos
  const [r2r, r2c] = target.resistor2Pos

  if (br !== r1r || r1r !== r2r) {
    errors.push(
      'Componentele active trebuie aliniate pe același rând — circuitul serie al misiunii este orizontal.',
    )
  }

  const cols = [bc, r1c, r2c].sort((a, b) => a - b)
  if (cols[1] !== cols[0] + 1 || cols[2] !== cols[1] + 1) {
    errors.push(
      'Rezistoarele nu sunt în serie: pozițiile trebuie să fie alăturate, fără goluri între ele.',
    )
  }

  // Fire de legătură între componente (celulele dintre sau în jur — pe rândul serie, toate non-empty)
  for (let c = Math.min(...cols); c <= Math.max(...cols); c++) {
    const cell = getCell(grid, br, c)
    if (!cell || cell.kind === 'empty') {
      errors.push(
        `Lipsește conexiunea la coloana ${c + 1}. Folosește fire (wire) sau plasează componentele direct alăturate.`,
      )
      break
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors }
  }

  const metrics = solveSeries(
    target.expectedVoltage,
    target.expectedR1,
    target.expectedR2,
  )

  return { ok: true, errors: [], metrics }
}

/** Creează grilă goală 3x3 */
export function createEmptyGrid(): CircuitGrid {
  return Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => null),
  )
}
