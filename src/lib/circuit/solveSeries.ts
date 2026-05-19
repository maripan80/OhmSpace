import type { CircuitMetrics } from './types'

/**
 * Calculează mărimile unui circuit serie simplu (Ohm).
 * U = R_total · I
 */
export function solveSeries(
  voltage: number,
  r1: number,
  r2: number,
): CircuitMetrics {
  const Rtotal = r1 + r2
  const I = voltage / Rtotal
  const U_R1 = I * r1
  const U_R2 = I * r2

  return { I, U: voltage, Rtotal, U_R1, U_R2 }
}
