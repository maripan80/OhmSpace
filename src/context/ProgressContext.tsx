import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'
import { useLocalProgress } from '../hooks/useLocalProgress'

type ProgressContextValue = ReturnType<typeof useLocalProgress>

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const value = useLocalProgress()
  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress trebuie folosit în ProgressProvider')
  return ctx
}
