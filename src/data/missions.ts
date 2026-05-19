import type { MissionCircuitTarget } from '../lib/circuit/validateMission'
import { mission01Inventory } from './componentsCatalog'

export type MissionStatus = 'new' | 'in_progress' | 'completed' | 'locked'

export interface Mission {
  id: string
  title: string
  description: string
  difficulty: 'inițiere' | 'mediu' | 'avansat'
  locked: boolean
  inventoryId: string
  target: MissionCircuitTarget
  /** Hint vizual: rândul recomandat pentru plasare */
  hintRow: number
}

export const missions: Mission[] = [
  {
    id: 'mission-01',
    title: 'Panou secțiunea B — alimentare navigație',
    description:
      'Reconstruiește un circuit serie: baterie 9V, rezistor 100Ω și 200Ω pe rândul din mijloc (coloanele 1–3).',
    difficulty: 'inițiere',
    locked: false,
    inventoryId: 'mission-01',
    hintRow: 1,
    target: {
      missionId: 'mission-01',
      batteryPos: [1, 0],
      resistor1Pos: [1, 1],
      resistor2Pos: [1, 2],
      expectedVoltage: 9,
      expectedR1: 100,
      expectedR2: 200,
    },
  },
  {
    id: 'mission-02',
    title: 'Panou secțiunea C — iluminat urgență',
    description: 'Sistem indisponibil până la stabilizarea furtunii.',
    difficulty: 'mediu',
    locked: true,
    inventoryId: 'mission-01',
    hintRow: 1,
    target: {
      missionId: 'mission-02',
      batteryPos: [1, 0],
      resistor1Pos: [1, 1],
      resistor2Pos: [1, 2],
      expectedVoltage: 9,
      expectedR1: 100,
      expectedR2: 200,
    },
  },
  {
    id: 'mission-03',
    title: 'Panou secțiunea D — comunicații',
    description: 'Sistem indisponibil — furtună activă.',
    difficulty: 'avansat',
    locked: true,
    inventoryId: 'mission-01',
    hintRow: 1,
    target: {
      missionId: 'mission-03',
      batteryPos: [1, 0],
      resistor1Pos: [1, 1],
      resistor2Pos: [1, 2],
      expectedVoltage: 9,
      expectedR1: 100,
      expectedR2: 200,
    },
  },
]

export function getMissionById(id: string): Mission | undefined {
  return missions.find((m) => m.id === id)
}

export function getInventoryForMission(missionId: string) {
  if (missionId === 'mission-01') return mission01Inventory
  return mission01Inventory
}
