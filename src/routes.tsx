import { Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { AcademicPage } from './pages/AcademicPage'
import { DashboardPage } from './pages/DashboardPage'
import { LabPage } from './pages/LabPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="lab/:missionId" element={<LabPage />} />
        <Route path="academic" element={<AcademicPage />} />
      </Route>
    </Routes>
  )
}
