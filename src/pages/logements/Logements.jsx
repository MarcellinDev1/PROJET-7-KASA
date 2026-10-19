import { useParams, Navigate } from 'react-router-dom'
import { logements } from '../../data/logements'
import Slideshow from '../../components/slideshow/Slideshow'
import Collapse from '../../components/collapse/Collapse'
import './Logements.css'

/**
 * Page de détail d'un logement.
 * 
 * Ce composant récupère l'ID du logement depuis l'URL (ex: /logements/c67ab8a7),
 * vérifie son existence, puis affiche toutes ses informations (carrousel, hôte, 
 * équipements, description). Si l'ID est invalide, l'utilisateur est redirigé 
 * vers la page 404.
 * 
 * @returns {JSX.Element} La page de détail du logement ou la redirection 404.
 */
function Logements() {
  // 1. Récupération de l'ID passé dans l'URL par React Router
  const { id } = useParams()
  
  // 2. Recherche du logement correspondant dans le fichier de données
  const logement = logements.find((l) => l.id === id)

  // 3. Sécurité : si aucun logement ne correspond à l'ID, on redirige vers la 404
  // La prop "replace" évite que l'utilisateur puisse revenir à l'URL invalide via 
  // le bouton Retour. Cela évite une boucle infinie.
  if (!logement) {
    return <Navigate to="/404" replace />
  }

  // 4. Déstructuration de l'objet logement pour un accès plus simple aux données
  const {
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
    pictures,
  } = logement

  // 5. Conversion de la note (string dans le JSON) en nombre pour la comparaison des étoiles
  const note = Number(rating)

  return (
    <div className="logement">
      {/* --- Carrousel d'images --- */}
      <Slideshow pictures={pictures} title={title} />

      {/* --- En-tête : Titre, localisation, tags (gauche) + Hôte et note (droite) --- */}
      <div className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>

          {/* Affichage dynamique de la liste des tags */}
          <ul className="logement__tags">
            {tags.map((tag) => (
              <li key={tag} className="logement__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="logement__host">
          <div className="logement__host-infos">
            <p className="logement__host-name">{host.name}</p>
            <img
              src={host.picture}
              alt={host.name}
              className="logement__host-picture"
            />
          </div>

          {/* Génération dynamique de 5 étoiles pour la note */}
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                /* 
                  Logique de couleur : 
                  L'étoile est rouge (classe --filled) si son numéro est 
                  inférieur ou égal à la note du logement. Sinon, elle reste grise.
                */
                className={`logement__star ${
                  star <= note ? 'logement__star--filled' : ''
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- Section des descriptions (réutilisation du composant Collapse) --- */}
      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="logement__equipments">
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logements