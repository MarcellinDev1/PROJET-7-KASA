import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import Logements from '../pages/logements/Logements'
import Error404 from '../pages/error404/Error404'
import APropos from '../pages/aPropos/APropos'

/**
 * Configuration du routeur de l'application.
 * 
 * On utilise `createBrowserRouter` (approche moderne de React Router v6) 
 * qui permet de définir les routes sous forme d'objets. 
 * Le composant `<Layout />` sert de parent à toutes les pages, ce qui 
 * permet de conserver le Header et le Footer fixes sur tout le site.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // La prop "index" définit la route par défaut pour le chemin "/" (la page d'accueil)
        index: true,
        element: <Home />,
      },
      {
        // Route dynamique : ":id" sera remplacé par l'identifiant réel du logement
        path: '/logements/:id',
        element: <Logements />,
      },
      {
        path: '/aPropos',
        element: <APropos />,
      },
      {
        // L'astérisque "*" est un joker (wildcard) qui capture toutes les URLs non reconnues
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])

/**
 * Composant principal qui fournit le routeur à l'application React.
 * 
 * La prop `future` avec `v7_startTransition: true` active le comportement 
 * de la future version 7 de React Router (utilisation de `React.startTransition` 
 * pour les mises à jour d'état). Cela supprime le warning affiché en console 
 * et prépare l'application à la migration vers React Router v7.
 * 
 * @returns {JSX.Element} Le fournisseur de contexte React Router.
 */
function Router() {
  return (
    <RouterProvider 
      router={router} 
      future={{ v7_startTransition: true }} 
    />
  )
}

export default Router