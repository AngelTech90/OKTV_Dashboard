import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomeDashboardPage from './HomeDashboardPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeDashboardPage/>
  </StrictMode>
)
