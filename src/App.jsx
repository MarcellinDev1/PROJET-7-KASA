import Router from './router/router'

/**
 * Composant racine de l'application Kasa.
 * 
 * Il sert de point d'entrée principal. Son unique rôle est de monter 
 * le routeur (`<Router />`) qui va gérer l'affichage de toutes les pages 
 * et fournir le contexte de navigation à l'ensemble de l'application.
 * 
 * @returns {JSX.Element} Le routeur de l'application.
 */
function App() {
  return <Router />
}

export default App