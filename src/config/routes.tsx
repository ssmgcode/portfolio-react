import { HiBriefcase, HiHome, HiPhone } from 'react-icons/hi'
import Contact from '../components/pages/Contact'
import Home from '../components/pages/Home'
import Projects from '../components/pages/Projects'

interface AppRoute {
  path: string
  name: string
  element: JSX.Element
  icon: JSX.Element
}

const appRoutes: AppRoute[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    icon: <HiHome />,
  },

  {
    path: '/projects',
    name: 'Projects',
    element: <Projects />,
    icon: <HiBriefcase />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    icon: <HiPhone />,
  },
]

export default appRoutes
