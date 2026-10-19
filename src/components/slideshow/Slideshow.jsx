import { useState } from 'react'
import './Slideshow.css'

/**
 * Composant de carrousel (Slideshow) pour la galerie d'images d'un logement.
 * 
 * Il permet de naviguer entre les images via des flèches. La navigation 
 * est "infinie" (la flèche gauche sur la première image ramène à la dernière, 
 * et inversement). Les flèches et le compteur sont masqués s'il n'y a qu'une seule image.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.pictures - Le tableau contenant les URLs des images.
 * @param {string} props.title - Le titre du logement, utilisé pour l'attribut alt.
 * @returns {JSX.Element} Le carrousel d'images interactif.
 */

//title récupèré via Slideshow pour utilisation dans l'attribut "alt" (accessibilité et SEO/erreurs)
function Slideshow({ pictures, title }) {
  // État pour suivre l'index de l'image actuellement affichée (démarre à 0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = pictures.length
  const hasMultiple = total > 1 // Condition pour afficher ou non les contrôles

  /**
   * Passe à l'image précédente. 
   * Si on est sur la première image (index 0), on boucle vers la dernière.
   */
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  /**
   * Passe à l'image suivante. 
   * Si on est sur la dernière image, on boucle vers la première (index 0).
   */
  const goNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  return (
    <div className="slideshow">
      {/* Image actuelle (mise à jour dynamiquement selon le currentIndex) */}
      <img
        src={pictures[currentIndex]}
        alt={title}
        className="slideshow__image"
      />

      {/* 
        Affichage conditionnel : on ne montre les flèches et le compteur 
        que s'il y a plusieurs images (évite les boutons inutiles).
      */}
      {hasMultiple && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            ‹
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={goNext}
            aria-label="Image suivante"
          >
            ›
          </button>

          {/* Compteur d'images (ex: "1 / 4"). On ajoute +1 à l'index pour l'affichage utilisateur */}
          <div className="slideshow__counter">
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  )
}

export default Slideshow