import Home from '../components/Home'
import Presentation from '../components/Presentation'
import Why from '../components/Why'
// definition des différentes routes avec appel du composant correspondant 
export const routes = [
        {path: '/', element: <Home />  },
        {path: '/presentation', element: <Presentation />},
        {path: '/motivation', element: <Why />}
    ]
