export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Care este formulă corectă a legii lui Ohm?',
    options: ['U = R · I', 'I = R · U', 'R = U · I', 'U = I / R'],
    correctIndex: 0,
    explanation:
      'Tensiunea U (volți) este produsul dintre rezistența R (ohmi) și curentul I (amperi).',
  },
  {
    id: 'q2',
    question:
      'În misiunea demo, rezistoarele 100Ω și 200Ω sunt legate în serie. Cum se calculează rezistența echivalentă?',
    options: [
      'R_total = R₁ + R₂ = 300Ω',
      'R_total = 1/(1/R₁ + 1/R₂)',
      'R_total = R₁ − R₂',
      'R_total = R₁ × R₂',
    ],
    correctIndex: 0,
    explanation:
      'În serie, rezistențele se adună. În paralel s-ar folosi formula inversului sumei inverselor.',
  },
  {
    id: 'q3',
    question: 'Ce afișează osciloscopul în laboratorul virtual?',
    options: [
      'Variația tensiunii în timp',
      'Doar temperatura pieselor',
      'Masa rezistoarelor',
      'Viteza vântului marțian',
    ],
    correctIndex: 0,
    explanation:
      'Osciloscopul măsoară și vizualizează semnalul electric — de obicei tensiunea U(t) pe axa verticală.',
  },
]
