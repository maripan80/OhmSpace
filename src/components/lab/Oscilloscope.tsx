import { useEffect, useRef } from 'react'
import type { CircuitMetrics } from '../../lib/circuit/types'
import { drawWaveform } from '../../lib/oscilloscope/drawWaveform'
import { NeonCard } from '../ui/NeonCard'

interface OscilloscopeProps {
  active: boolean
  metrics: CircuitMetrics | null
}

export function Oscilloscope({ active, metrics }: OscilloscopeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phaseRef = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height

    if (!active || !metrics) {
      ctx.fillStyle = '#0a0e17'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)'
      ctx.font = '12px JetBrains Mono, monospace'
      ctx.fillText('Aștept circuit valid…', width / 2 - 70, height / 2)
      return
    }

    const amplitude = metrics.U_R1 + metrics.U_R2 > 0 ? metrics.U : 2
    const frequency = 50

    const animate = () => {
      phaseRef.current += 0.08
      drawWaveform(ctx, {
        width,
        height,
        amplitude,
        frequency,
        phase: phaseRef.current,
      })
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [active, metrics])

  return (
    <NeonCard title="Osciloscop — semnal U(t)">
      <canvas
        ref={canvasRef}
        className="h-48 w-full rounded border border-neon-cyan/20 bg-space-900"
        aria-label="Osciloscop — forma de undă a tensiunii"
      />
      {active && metrics && (
        <p className="mt-2 font-mono text-xs text-neon-cyan">
          Semnal activ · U_sursă = {metrics.U} V · I = {metrics.I.toFixed(4)} A
        </p>
      )}
    </NeonCard>
  )
}
