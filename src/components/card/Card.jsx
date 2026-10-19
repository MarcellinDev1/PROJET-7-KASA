import { Link } from 'react-router-dom'
import './Card.css'

/**
 * Composant affichant la carte d'un logement dans la galerie de la page d'accueil.
 * 
 * La carte est entièrement cliquable et redirige vers la page de détail 
 * du logement concerné (route dynamique : /logements/:id).
 * L'image de fond et le dégradé sombre sont gérés via le CSS.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.logement - L'objet contenant les données du logement.
 * @param {string} props.logement.id - L'identifiant unique du logement.
 * @param {string} props.logement.cover - L'URL de l'image de couverture.
 * @param {string} props.logement.title - Le titre du logement.
 * @returns {JSX.Element} La carte du logement cliquable.
 */
function Card({ logement }) {
  return (
    <Link to={`/logements/${logement.id}`} className="card__link">
      <article className="card">
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </article>
    </Link>
  )
}

export default Card