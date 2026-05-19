import { useState } from 'react'
import { quizQuestions } from '../../data/quizQuestions'
import { useProgress } from '../../context/ProgressContext'
import { NeonButton } from '../ui/NeonButton'
import { NeonCard } from '../ui/NeonCard'
import { QuizResults } from './QuizResults'

export function QuizCard() {
  const { progress, setQuizResult } = useProgress()
  const [answers, setAnswers] = useState<Record<string, number>>(
    progress.quizAnswers ?? {},
  )
  const [submitted, setSubmitted] = useState(progress.quizScore !== null)

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return
    setAnswers((a) => ({ ...a, [questionId]: optionIndex }))
  }

  const handleSubmit = () => {
    let score = 0
    for (const q of quizQuestions) {
      if (answers[q.id] === q.correctIndex) score++
    }
    setQuizResult(score, answers)
    setSubmitted(true)
  }

  const score =
    progress.quizScore ??
    quizQuestions.filter((q) => answers[q.id] === q.correctIndex).length

  return (
    <section className="mt-8 space-y-4">
      <h2 className="font-display text-lg text-neon-cyan">Quiz interactiv</h2>

      {quizQuestions.map((q, qi) => (
        <NeonCard key={q.id} title={`Întrebarea ${qi + 1}`}>
          <p className="mb-3 text-sm text-slate-200">{q.question}</p>
          <fieldset className="space-y-2">
            {q.options.map((opt, oi) => {
              const selected = answers[q.id] === oi
              const showFeedback = submitted
              const isCorrect = oi === q.correctIndex

              return (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-2 rounded border px-3 py-2 text-sm ${
                    selected ? 'border-neon-cyan/50 bg-neon-cyan/5' : 'border-slate-700'
                  } ${
                    showFeedback && isCorrect
                      ? 'border-neon-green/50 text-neon-green'
                      : ''
                  } ${
                    showFeedback && selected && !isCorrect
                      ? 'border-neon-magenta/50 text-neon-magenta'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={selected}
                    onChange={() => handleSelect(q.id, oi)}
                    disabled={submitted}
                    className="accent-neon-cyan"
                  />
                  {opt}
                </label>
              )
            })}
          </fieldset>
          {submitted && (
            <p className="mt-2 text-xs text-slate-500">{q.explanation}</p>
          )}
        </NeonCard>
      ))}

      {!submitted ? (
        <NeonButton
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < quizQuestions.length}
          aria-label="Trimite răspunsurile quiz"
        >
          Trimite răspunsurile
        </NeonButton>
      ) : (
        <QuizResults score={score} total={quizQuestions.length} />
      )}
    </section>
  )
}
