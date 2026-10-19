import BannerAPropos from '../../components/banner/BannerAPropos'
import Collapse from '../../components/collapse/Collapse'
import './APropos.css'

/**
 * Page "À propos" de l'application Kasa.
 * 
 * Cette page présente l'entreprise à travers plusieurs sections (Fiabilité, 
 * Respect, Service, Sécurité). Elle illustre la réutilisabilité des composants 
 * en intégrant le composant `<Collapse />` quatre fois avec des contenus différents.
 * 
 * @returns {JSX.Element} La page À propos complète.
 */
function APropos() {
  return (
    <div className="a-propos">
      {/* Bannière spécifique à la page À propos (sans titre, juste l'image) */}
      <BannerAPropos />

      {/* Section regroupant les 4 blocs d'accordéons (Collapse) */}
      <section className="a-propos__collapses">
        
        {/* Section 1 : Fiabilité */}
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations 
            sont régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        {/* Section 2 : Respect */}
        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage 
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        {/* Section 3 : Service */}
        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez
            la moindre question.
          </p>
        </Collapse>

        {/* Section 4 : Sécurité */}
        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
            que pour les voyageurs, chaque logement correspond aux critères
            de sécurité établis par nos services. En laissant une note aussi
            bien à l'hôte qu'au locataire, cela permet à nos équipes
            de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité 
            domestique pour nos hôtes.
          </p>
        </Collapse>
        
      </section>
    </div>
  )
}

export default APropos