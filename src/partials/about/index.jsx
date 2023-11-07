// /*
// This is the About section
// */

// import { Row, Col } from 'react-bootstrap'
// import SectionWrapper from 'root/src/components/section-wrapper'
// import Button from 'root/src/components/button'
// import aboutImg from 'root/public/partials/about/picture.jpg'
// import Image from 'next/image'
// import { Link as ScrollLink } from 'react-scroll'
// import styled from './style'

// const About = (props) => (
//   <SectionWrapper
//     css={styled.About}
//     headerData={{ title: 'About me', description: '' }}
//     {...props}
//   >
//     <div className='row align-items-center'>
//       {/* Image part - Displays profile image */}
//       <Col xs='12' lg='5' className=' _image'>
//         <Image
//           className='img-thumbnail'
//           sizes='
//             (max-width: 992px) 250px,
//             (min-width: 992px) 41.66vw
//           '
//           alt='About Picture'
//           src={aboutImg}
//         />
//       </Col>

//       {/* Text part - Displays name, description, contact details */}
//       <Col xs='12' lg='7'>
//         {/* Information part */}
//         <h2 className='_subtitle'>Who am i?</h2>

//         <h2 className='_title'>
//           I&apos;m Alex Smith, a visual UX/UI Designer and Web Developer
//         </h2>

//         <div className='_description'>
//           <p>
//             I am a freelancer based in the United Kingdom and i have been
//             building noteworthy UX/UI designs and websites for years, which
//             comply with the latest design trends. I help convert a vision and an
//             idea into meaningful and useful products. Having a sharp eye for
//             product evolution helps me prioritize tasks, iterate fast and
//             deliver faster.
//           </p>
//         </div>

//         <address className='_address'>
//           <Row>
//             <Col className='_info' xs='12' md='6'>
//               <span>Name:</span>
//               <p>Alex Smith</p>
//             </Col>
//             <Col className='_info' xs='12' md='6'>
//               <span>Email:</span>
//               <p>
//                 <a href='alex@example.com'>alex@example.com</a>
//               </p>
//             </Col>
//           </Row>
//           <Row>
//             <Col className='_info' xs='12' md='6'>
//               <span>Age:</span>
//               <p>21</p>
//             </Col>
//             <Col className='_info' xs='12' md='6'>
//               <span>From:</span>
//               <p>Liverpool, UK</p>
//             </Col>
//           </Row>
//         </address>

//         {/* Buttons part */}
//         <Button className='_button' href='/partials/about/cv.pdf' download>
//           Download CV
//         </Button>

//         <Button
//           as={ScrollLink}
//           to={'portfolio'}
//           spy={true}
//           smooth={true}
//           duration={600}
//           className='_button'
//           variant='light'
//         >
//           My Work
//         </Button>
//       </Col>
//     </div>
//   </SectionWrapper>
// )

// export default About
import { Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'About me', description: 'Get to know me' }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={aboutImg}
        />
      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='12' lg='7'>
        {/* Information part */}
        <h2 className='_subtitle'>Who am i?</h2>

        <h2 className='_title'>
          I&apos;m Alex Smith, a visual UX/UI Designer and Web Developer
        </h2>

        <div className='_description mb-5'>
          <p>
            I am a freelancer based in the United Kingdom and i have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.
          </p>
          <span>
            I am a freelancer based in the United Kingdom and i have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.
          </span>
        </div>

        {/* Buttons part */}
        <Button className='_button' href='/partials/about/cv.pdf' download>
          Download CV
        </Button>
      </Col>
    </div>
  </SectionWrapper>
)

export default About
