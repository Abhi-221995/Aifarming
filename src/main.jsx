import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PlantProvider } from './components/Contextapi/PlantContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlantProvider>
    <App/>
    </PlantProvider>
    </BrowserRouter>
  </StrictMode>,
)
