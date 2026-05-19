import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'ohmspace-progress'

export interface AppProgress {
  completedMissions: string[]
  quizScore: number | null
  quizAnswers: Record<string, number>
}

const defaultProgress: AppProgress = {
  completedMissions: [],
  quizScore: null,
  quizAnswers: {},
}

function loadProgress(): AppProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress
    return { ...defaultProgress, ...JSON.parse(raw) }
  } catch {
    return defaultProgress
  }
}

function saveProgress(progress: AppProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

/** Persistență progres misiuni și quiz în localStorage */
export function useLocalProgress() {
  const [progress, setProgress] = useState<AppProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const completeMission = useCallback((missionId: string) => {
    setProgress((p) => ({
      ...p,
      completedMissions: p.completedMissions.includes(missionId)
        ? p.completedMissions
        : [...p.completedMissions, missionId],
    }))
  }, [])

  const setQuizResult = useCallback(
    (score: number, answers: Record<string, number>) => {
      setProgress((p) => ({ ...p, quizScore: score, quizAnswers: answers }))
    },
    [],
  )

  const getMissionStatus = useCallback(
    (missionId: string, locked: boolean): 'new' | 'in_progress' | 'completed' | 'locked' => {
      if (locked) return 'locked'
      if (progress.completedMissions.includes(missionId)) return 'completed'
      return 'new'
    },
    [progress.completedMissions],
  )

  return {
    progress,
    completeMission,
    setQuizResult,
    getMissionStatus,
  }
}
