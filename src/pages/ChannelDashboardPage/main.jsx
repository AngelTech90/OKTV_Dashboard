import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChannelDashboardPage from './ChannelDashboardPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChannelDashboardPage/>
  </StrictMode>
)
