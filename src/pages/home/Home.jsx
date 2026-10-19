import BannerHome from '../../components/banner/BannerHome'
import Card from '../../components/card/Card'
import { logements } from '../../data/logements'
import './Home.css'

/**
 * Page d'accueil de l'application Kasa.
 * 
 * Cette page affiche la bannière principale ainsi que la galerie de tous 
 * les logements disponibles. Elle utilise la méthode `.map()` pour générer 
 * dynamiquement une carte (`<Card />`) pour chaque logement du fichier de données.
 * 
 * @returns {JSX.Element} La page d'accueil complète.
 */
function Home() {
  return (
    <>
      {/* Bannière principale avec le titre "Chez vous, partout et ailleurs" */}
      <BannerHome />

      {/* Galerie affichant la liste des logements */}
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            /* 
              La prop "key" est obligatoire dans une boucle .map() en React.
              Elle doit être unique pour chaque élément (ici, l'id du logement) 
              afin d'optimiser les re-rendus et d'éviter les warnings.
            */
            key={logement.id}
            /* On passe l'objet logement complet en prop au composant Card */
            logement={logement}
          />
        ))}
      </section>
    </>
  )
}

export default Home