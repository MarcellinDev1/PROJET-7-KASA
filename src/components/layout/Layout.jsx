import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Layout.css'

/**
 * Composant de mise en page (Layout) principal de l'application.
 * 
 * Il sert de "gabarit" persistant. Il affiche le Header et le Footer 
 * qui restent identiques sur tout le site. 
 * 
 * @returns {JSX.Element} La structure globale avec le Header, le contenu et le Footer.
 */
function Layout() {
  return (
    <div className="layout">
      <Header />

      <main>
        {/* 
          <Outlet /> est une "fenêtre" d'injection. 
          React Router y placera UNIQUEMENT le contenu spécifique de la page 
          (le composant défini dans les routes "children", comme <Home /> ou <APropos />).
          
          Attention : le composant <APropos /> ne contient pas le Header/Footer. 
          L'écran final complet est la fusion de ce Layout (Header + Footer) 
          et du contenu injecté par l'Outlet (<APropos />).
        */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout