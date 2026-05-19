/** Parametri pentru desenarea formei de undă pe canvas */
export interface WaveformParams {
  width: number
  height: number
  /** Amplitudine vizuală (px) derivată din tensiune */
  amplitude: number
  /** Frecvență vizuală (Hz) pentru animație */
  frequency: number
  /** Fază temporală (rad) — pentru animație */
  phase: number
  /** Culoare linie */
  strokeColor?: string
}

/**
 * Desenează grila și sinusoida pe contextul canvas.
 */
export function drawWaveform(
  ctx: CanvasRenderingContext2D,
  params: WaveformParams,
): void {
  const {
    width,
    height,
    amplitude,
    frequency,
    phase,
    strokeColor = '#00f0ff',
  } = params

  const midY = height / 2
  const padding = 24

  ctx.clearRect(0, 0, width, height)

  // Fundal panou
  ctx.fillStyle = '#0a0e17'
  ctx.fillRect(0, 0, width, height)

  // Grilă discretă
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)'
  ctx.lineWidth = 1
  const gridStep = 20
  for (let x = padding; x < width - padding; x += gridStep) {
    ctx.beginPath()
    ctx.moveTo(x, padding)
    ctx.lineTo(x, height - padding)
    ctx.stroke()
  }
  for (let y = padding; y < height - padding; y += gridStep) {
    ctx.beginPath()
    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)
    ctx.stroke()
  }

  // Axă centrală
  ctx.strokeStyle = 'rgba(57, 255, 20, 0.4)'
  ctx.beginPath()
  ctx.moveTo(padding, midY)
  ctx.lineTo(width - padding, midY)
  ctx.stroke()

  // Etichete HUD
  ctx.fillStyle = 'rgba(0, 240, 255, 0.7)'
  ctx.font = '10px JetBrains Mono, monospace'
  ctx.fillText('U(t)', padding, padding - 6)
  ctx.fillText(`${frequency} Hz`, width - padding - 40, padding - 6)

  // Sinusoidă — tensiune în timp
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = 2
  ctx.shadowColor = strokeColor
  ctx.shadowBlur = 8
  ctx.beginPath()

  const plotWidth = width - 2 * padding
  const ampPx = Math.min(amplitude * 4, (height - 2 * padding) / 2 - 4)

  for (let px = 0; px <= plotWidth; px++) {
    const t = px / plotWidth
    const angle = 2 * Math.PI * frequency * t + phase
    const y = midY - ampPx * Math.sin(angle)
    const x = padding + px
    if (px === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.shadowBlur = 0
}
