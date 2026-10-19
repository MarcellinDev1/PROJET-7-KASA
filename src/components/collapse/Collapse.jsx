import { useState } from "react";
import "./Collapse.css";

/**
 * Composant d'accordéon (Collapse) réutilisable.
 * 
 * Ce composant permet d'afficher un titre cliquable qui dévoile ou masque
 * son contenu (les `children`). Il gère son propre état d'ouverture/fermeture
 * et peut être utilisé plusieurs fois indépendamment sur une même page.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre affiché dans l'en-tête du Collapse.
 * @param {React.ReactNode} props.children - Le contenu à afficher à l'intérieur du Collapse.
 * @returns {JSX.Element} Le composant Collapse avec son en-tête et son contenu.
 */
function Collapse({ title, children }) {
  // État local pour gérer l'ouverture (true) ou la fermeture (false) du composant.
  // Par défaut, le Collapse est fermé à l'initialisation de la page (false).
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      {/* En-tête cliquable avec accessibilité (aria-expanded indique l'état actuel) */}
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        
        {/* La classe "open" est ajoutée dynamiquement pour animer la flèche via le CSS */}
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          ⌄
        </span>
      </button>

      {/* La classe "open" déclenche l'animation de hauteur définie dans le CSS */}
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;