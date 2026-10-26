import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/hero.css'// <-- YEH LINE LAGANA SABSE ZAROORI HAI (Tera CSS Reset)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
