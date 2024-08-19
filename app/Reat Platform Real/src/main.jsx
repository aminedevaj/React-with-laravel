import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StateContextProvider from './Context/StateContext.jsx'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
    <StateContextProvider>


    <App />
    </StateContextProvider>
    
    </BrowserRouter>
  </StrictMode>,
)
