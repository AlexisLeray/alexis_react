import Home from '../components/Home'
import Presentation from '../components/Presentation'

// definition des différentes routes avec appel du composant correspondant 
export const routes = [
        {path: '/', element:<Home />  },
        {path: '/presentation', element: <Presentation />}
    ]
// route reservée aux personnes connectées
// export const userPath= [
//         '/profil', 'panier', 'payment', 'updateProfil'
//     ]