import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Formulario from './components/Fomulario'
import Lista from './components/Lista'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Formulario />
    <Lista/>
  </React.StrictMode>
)
