import { QuizCard } from '../components/academic/QuizCard'
import { TheorySection } from '../components/academic/TheorySection'
import { PageHeader } from '../components/layout/PageHeader'

export function AcademicPage() {
  return (
    <>
      <PageHeader
        title="Modul academic"
        subtitle="Teorie și evaluare — Legea lui Ohm și Kirchhoff"
      />
      <TheorySection />
      <QuizCard />
    </>
  )
}
