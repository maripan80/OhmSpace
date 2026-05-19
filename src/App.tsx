import { BrowserRouter } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import { AppRoutes } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <AppRoutes />
      </ProgressProvider>
    </BrowserRouter>
  )
}
