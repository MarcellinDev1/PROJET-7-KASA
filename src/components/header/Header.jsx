import { NavLink } from 'react-router-dom'
import logo from '../../data/IMAGES/LogoHeader.png'
import './Header.css'

/**
 * Composant représentant l'en-tête (Header) de l'application.
 * 
 * Il contient le logo cliquable qui ramène à l'accueil (standards du web et 
 * prise en compte de l'expérience utilisateur), ainsi que la navigation
 * principale. Le composant utilise `NavLink` pour souligner automatiquement 
 * le lien correspondant à la page en cours de consultation.
 * 
 * @returns {JSX.Element} L'élément header avec le logo et la navigation.
 */
function Header() {
  return (
    <header className="header">
      {/* Logo cliquable ramenant à la page d'accueil */}
      <NavLink to="/" className="header__logo-link">
        <img src={logo} alt="Kasa" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        {/* 
          Lien vers l'accueil : 
          L'attribut "end" est indispensable ici. Sans lui, la route "/" serait considérée
          comme active sur TOUTES les pages (car toutes les URLs commencent par "/").
        */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          Accueil
        </NavLink>

        {/* 
          Lien vers la page À propos : 
          La classe "active" est ajoutée dynamiquement par React Router si l'URL correspond.
        */}
        <NavLink
          to="/aPropos"
          className={({ isActive }) =>
            isActive ? 'header__link active' : 'header__link'
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header