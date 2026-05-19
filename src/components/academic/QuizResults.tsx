import { NeonCard } from '../ui/NeonCard'

interface QuizResultsProps {
  score: number
  total: number
}

export function QuizResults({ score, total }: QuizResultsProps) {
  const passed = score >= 2

  return (
    <NeonCard title="Rezultat quiz">
      <p className="font-display text-2xl text-neon-cyan">
        {score} / {total}
      </p>
      {passed ? (
        <p className="mt-2 text-sm text-neon-green">
          Excelent! Poți aplica conceptele în laboratorul virtual.
        </p>
      ) : (
        <p className="mt-2 text-sm text-slate-400">
          Revizuiește secțiunea de teorie și încearcă din nou. Recomandăm și o misiune în
          laborator.
        </p>
      )}
    </NeonCard>
  )
}
