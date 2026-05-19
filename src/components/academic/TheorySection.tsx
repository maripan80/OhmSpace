import { useState } from 'react'
import { NeonCard } from '../ui/NeonCard'

const theoryCards = [
  {
    id: 'ohm',
    title: 'Legea lui Ohm',
    content: (
      <>
        <p className="font-mono text-lg text-neon-cyan">U = R · I</p>
        <p className="mt-2 text-sm text-slate-300">
          Tensiunea U (volți) este egală cu produsul dintre rezistența R (ohmi) și curentul I
          (amperi). În misiunea de pe Ares-3: baterie 9V, R₁ = 100Ω, R₂ = 200Ω → R_total =
          300Ω, deci I = 9 / 300 = 0,03 A.
        </p>
      </>
    ),
  },
  {
    id: 'kirchhoff',
    title: 'Legile lui Kirchhoff',
    content: (
      <>
        <p className="text-sm text-slate-300">
          <strong className="text-neon-green">KCL:</strong> suma curenților care intră într-un
          nod este egală cu suma celor care ies.
        </p>
        <p className="mt-2 text-sm text-slate-300">
          <strong className="text-neon-green">KVL:</strong> într-o buclă închisă, suma
          tensiunilor este zero. În serie, tensiunea bateriei se împarte pe rezistoare: U = U_R1
          + U_R2.
        </p>
      </>
    ),
  },
]

export function TheorySection() {
  const [openId, setOpenId] = useState<string | null>('ohm')

  return (
    <section className="space-y-3">
      <h2 className="font-display text-lg text-neon-cyan">Teorie</h2>
      {theoryCards.map((card) => {
        const open = openId === card.id
        return (
          <NeonCard key={card.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenId(open ? null : card.id)}
              aria-expanded={open}
            >
              <span className="font-display text-sm text-slate-100">{card.title}</span>
              <span className="text-neon-cyan">{open ? '−' : '+'}</span>
            </button>
            {open && <div className="mt-3 border-t border-neon-cyan/20 pt-3">{card.content}</div>}
          </NeonCard>
        )
      })}
    </section>
  )
}
