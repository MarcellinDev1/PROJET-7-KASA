import './BannerHome.css'
import ImageBanner from '../../assets/images/ImageBannerHome.jpg'

/**
 * Composant représentant la bannière de la page d'accueil.
 * 
 * Contrairement à la bannière de la page "À propos", celle-ci contient
 * un titre principal (h1) superposé à l'image. L'image de fond et le 
 * voile sombre sont gérés en CSS.
 * 
 * @returns {JSX.Element} L'élément de la bannière avec son titre.
 */
function BannerHome() {
  return (
    <div
      className="bannerHome"
      style={{ backgroundImage: `url(${ImageBanner})` }}
    >
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default BannerHome