import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Hero from '../components/HeroAbout/Hero'
import Carousel from '../components/HeroCarousol/Carousel'
import CarouselTesto from '../components/Testimonial/CarouselTesto'
import Contact from '../components/BookTable/Contact'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <Hero/>,
      },
      {
        path: '/portfolio',
        element: <Carousel/>,
      },
      {
        path: '/clients',
        element: <CarouselTesto/>,
      },
      {
        path: '/blog',
        element: <Carousel/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
