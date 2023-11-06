/*
This is the Testimonials section
It retrieves data from the MDX files and passes it through components
*/

import { Row } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Image from 'next/image'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
// import MdxRenderer from 'root/src/components/mdx-renderer'
import styled from './style'

// Define where the MDX files are located
export const testimonialsDataPath = 'src/partials/testimonials/data/*.mdx'

const SingleTestimonial = (props) => {
  // Destructure props
  const { message, clientName, avatar } = props
  return (
    <div css={styled.Testimonial}>
      {/* Icon */}
      <div>
        <svg
          className='_icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z' />
        </svg>
      </div>
      {/* Message */}
      {message}

      {/* Avatar */}
      {avatar}

      {/* Name */}
      <span className='_name'>{clientName}</span>
    </div>
  )
}

// Component to display testimonials
const Testimonials = (props) => {
  // Destructure props
  const { data, ...otherProps } = props
  const testmonial = [
    {
      clientName: 'ali',
      avatar:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fhip-pain-from-running.webp%3Falt%3Dmedia%26token%3Dddbf3d34-75b6-42c7-a20c-16f688f7a2f8&w=1080&q=75',
      message:
        'Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.',
    },
    {
      clientName: 'ali2',
      avatar:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fspine-surgeons.webp%3Falt%3Dmedia%26token%3D2126c1b8-b7f5-45d3-a8a2-600640a5a50e&w=640&q=75',
      message:
        'Daniel did an excellent creative job. Quick and professional. Highly recommended, and will definitely work with him again.',
    },
  ]
  return (
    <SectionWrapper
      css={styled.Testimonials}
      altBg={true}
      headerData={{
        title: 'Testimonials',
        description: '',
      }}
      {...otherProps}
    >
      {/* Testimonial slides */}
      <Row>
        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Map over MDX files to generate slides */}
          {testmonial.map((item, i) => {
            // Render avatar image
            const AvatarImage = (
              <div style={{ overflow: 'hidden' }}>
                <Image
                  src={item.avatar}
                  // placeholder='blur'
                  // blurDataURL={item.avatar}
                  alt='Client avatar'
                  className='_avatar'
                  sizes='56px'
                  width={56}
                  height={56}
                ></Image>
              </div>
            )

            // Render testimonial inside a slide
            return (
              <SwiperSlide key={i}>
                <SingleTestimonial
                  clientName={item.clientName}
                  message={item.message}
                  avatar={AvatarImage}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
    </SectionWrapper>
  )
}
export default Testimonials
