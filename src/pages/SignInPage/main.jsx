import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import SignInpage from './SignInPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignInpage />
  </StrictMode>
)