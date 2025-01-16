import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileHeader />
    <App />
  </StrictMode>,
)
