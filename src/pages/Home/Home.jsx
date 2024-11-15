import { Helmet } from 'react-helmet-async'

import Header from '../../components/Header/Header'
import Hero from '../../components/HeroAbout/Hero'
import Carousel from '../../components/HeroCarousol/Carousel'
import Contact from '../../components/BookTable/Contact'
import CarouselTesto from '../../components/Testimonial/CarouselTesto'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Softnio | Homes</title>
      </Helmet>
      {/* header section */}
     <Header/>
      {/* hero section */}
     <Hero/>
    {/* carosole */}
      <Carousel/>
      {/* book table */}
      {/* <BookTable/> */}
      <Contact/>
      {/* testiomonial */}
      <CarouselTesto/>
    </div>
  )
}

export default Home
