import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Publication from 'root/src/partials/publications'
import Blog from 'root/src/partials/blog'
import Research from 'root/src/partials/research'
import Contact from 'root/src/partials/contact'
import Footer from 'root/src/partials/footer'
import Metadata from 'root/src/metadata'
import Testimonials from '../partials/testimonials'

const HomeVideo = () => (
  /* Wrap all sections within a scroll-wrapper that adds a functional navbar/sidebar feature */
  <ScrollWrapper>
    {/* Include website metadata */}
    <Metadata />

    {/* Hero section with a video background */}
    <Hero nav='Home' id='home' variant='video' />

    {/* Include the rest of sections, some with passed MDX data */}
    <About nav='About' id='about' />
    <Services nav='Expertise' id='expertise' />
    <Hire id='hire' />
    <Testimonials nav='Testimonials' id='testimonials' />
    <Research nav='Research' id='research' />
    <Publication nav='Boooks' id='publication' />
    <Blog nav='Blog' id='blog' />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' />
  </ScrollWrapper>
)

export default HomeVideo
