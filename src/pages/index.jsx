import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Blog from 'root/src/partials/blog'
import Contact from 'root/src/partials/contact'
import Footer from 'root/src/partials/footer'
import Metadata from 'root/src/metadata'

const HomeVideo = () => (
  <ScrollWrapper>
    <Metadata />
    <Hero nav='Home' id='home' variant='video' />
    <About nav='About' id='about' />
    <Services nav='Services' id='services' />
    <Hire id='hire' />
    <Blog nav='Blog' id='blog' />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' />
  </ScrollWrapper>
)

export default HomeVideo
