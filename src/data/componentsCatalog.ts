import type { PlacedComponent } from '../lib/circuit/types'

export interface InventoryItem {
  id: string
  label: string
  description: string
  component: PlacedComponent
  maxCount: number
}

/** Piese disponibile în inventarul misiunii demo */
export const mission01Inventory: InventoryItem[] = [
  {
    id: 'battery-9v',
    label: 'Baterie 9V',
    description: 'Sursă de tensiune continuă',
    component: { kind: 'battery', voltage: 9 },
    maxCount: 1,
  },
  {
    id: 'resistor-100',
    label: 'Rezistor 100Ω',
    description: 'R₁ — prima etapă din lanț',
    component: { kind: 'resistor', resistance: 100 },
    maxCount: 1,
  },
  {
    id: 'resistor-200',
    label: 'Rezistor 200Ω',
    description: 'R₂ — a doua etapă din lanț',
    component: { kind: 'resistor', resistance: 200 },
    maxCount: 1,
  },
  {
    id: 'wire',
    label: 'Fir',
    description: 'Conectează componentele alăturate',
    component: { kind: 'wire' },
    maxCount: 6,
  },
]
