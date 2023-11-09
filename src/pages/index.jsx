import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Publication from 'root/src/partials/publications'
import Testimonial from 'root/src/partials/testimonials'
import Blog from 'root/src/partials/blog'
import Contact from 'root/src/partials/contact'
import Scholarly from 'root/src/partials/scholarly'
import Footer from 'root/src/partials/footer'
import Metadata from 'root/src/metadata'

import api from 'root/utils/api'

const HomeVideo = ({
  aboutData,
  expertiseDtata,
  scholarlyWorkDtata,
  blogsDtata,
}) => (
  <ScrollWrapper>
    <Metadata />
    <Hero nav='Home' id='home' variant='video' />
    <About nav='About Me' id='about' aboutData={aboutData} />
    <Services nav='Expertise' id='expertise' expertiseDtata={expertiseDtata} />
    <Hire id='hire' />
    <Scholarly
      nav='My Scholarly Work'
      id='scholarly'
      scholarlyWorkDtata={scholarlyWorkDtata}
    />
    <Publication nav='My Books' id='publication' />
    <Blog nav='My Blogs' id='blog' scholarlyWorkDtata={blogsDtata} />
    <Testimonial nav='Testimonials' id='testimonial' />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' />
  </ScrollWrapper>
)

export default HomeVideo

export const getServerSideProps = async () => {
  const about = await api.get('getAbout/')
  const expertise = await api.get('getExpertise/')
  const scholarlyWork = await api.get('getAllWorks/')
  const blogs = await api.get('getAllBlogs/')

  return {
    props: {
      aboutData: about.data,
      expertiseDtata: expertise.data,
      scholarlyWorkDtata: scholarlyWork.data,
      blogsDtata: blogs.data,
    },
  }
}
