import './Footer.css'
import logoFooter from '../../assets/images/LogoFooter.png'

/**
 * Composant représentant le pied de page (Footer) de l'application.
 * 
 * Il affiche le logo Kasa en blanc ainsi que le texte de copyright.
 * Il est présent sur toutes les pages de l'application (via le Layout).
 * 
 * @returns {JSX.Element} L'élément footer avec le logo et le texte.
 */
function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer