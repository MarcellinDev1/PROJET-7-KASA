import './BannerAPropos.css'
import ImageBannerAPropos from '../../assets/images/ImageBannerAPropos.jpg'

/**
 * Composant représentant la bannière de la page "À propos".
 * 
 * Contrairement à la bannière de la page d'accueil, celle-ci ne contient 
 * aucun texte (conformément à la maquette Figma). Elle affiche uniquement 
 * une image de fond avec un léger voile sombre (géré en CSS).
 * 
 * Note d'accessibilité : L'image étant gérée en CSS (background-image), 
 * on utilise `role="img"` et `aria-label` pour que les lecteurs d'écran 
 * puissent la décrire aux utilisateurs malvoyants.
 * 
 * @returns {JSX.Element} L'élément de la bannière.
 */
function BannerAPropos() {
  return (
    <div
      className="bannerAPropos"
      style={{ backgroundImage: `url(${ImageBannerAPropos})` }}
      role="img"
      aria-label="Paysage de montagnes et de sapins"
    ></div>
  )
}

export default BannerAPropos