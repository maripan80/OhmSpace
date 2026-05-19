/** Tipuri pentru piesele și grila circuitului */

export type ComponentKind = 'empty' | 'wire' | 'battery' | 'resistor'

export interface PlacedComponent {
  kind: ComponentKind
  /** Valoare în ohmi — doar pentru rezistor */
  resistance?: number
  /** Tensiune în volți — doar pentru baterie */
  voltage?: number
}

export type GridCell = PlacedComponent | null

/** Grilă 3x3 — index [row][col] */
export type CircuitGrid = GridCell[][]

export interface CircuitMetrics {
  /** Curent total (A) */
  I: number
  /** Tensiune sursă (V) */
  U: number
  Rtotal: number
  /** Tensiune pe primul rezistor */
  U_R1: number
  U_R2: number
}

export interface ValidationResult {
  ok: boolean
  errors: string[]
  metrics?: CircuitMetrics
}
