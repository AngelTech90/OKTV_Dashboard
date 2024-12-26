import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CreateAccountPage from './CreateAccountPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateAccountPage />
  </StrictMode>
)
