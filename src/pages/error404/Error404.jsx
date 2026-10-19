import { Link } from 'react-router-dom'
import './Error404.css'

/**
 * Page d'erreur 404.
 * 
 * Ce composant s'affiche lorsque l'utilisateur tente d'accéder à une URL 
 * qui n'existe pas, ou lorsque l'ID d'un logement est invalide (via une 
 * redirection programmée depuis Logements.jsx).
 * Il propose un lien de retour vers la page d'accueil pour guider l'utilisateur.
 * 
 * @returns {JSX.Element} La page 404 avec son message et son lien de retour.
 */
function Error404() {
  return (
    <div className="error404">
      {/* Titre principal de la page (un seul <h1> par page pour l'accessibilité) */}
      <h1 className="error404__title">404</h1>

      {/* Message explicatif pour l'utilisateur */}
      <p className="error404__text">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      {/* 
        Lien de retour à l'accueil. 
        On utilise <Link> de React Router (et non <a>) pour éviter un 
        rechargement complet de la page et rester dans la logique SPA.
      */}
      <Link to="/" className="error404__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error404