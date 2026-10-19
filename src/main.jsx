import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Point d'entrée de l'application React.
 * 
 * Cette instruction va chercher la balise <div id="root"> dans le fichier 
 * index.html, puis y injecter toute l'application React (<App />).
 * Elle ne retourne aucune valeur : elle déclenche simplement le rendu.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)