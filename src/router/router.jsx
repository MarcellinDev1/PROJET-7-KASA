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
 * @returns {JSX.Element} Le fournisseur de contexte React Router.
 */
function Router() {
  return <RouterProvider router={router} />
}

export default Router