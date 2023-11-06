import 'swiper/css'
import 'swiper/css/pagination'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import { css } from '@emotion/react'
import styled from './style'

const Blog = () => {
  const router = useRouter()

  const fetchedData = [
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fspine-surgeons.webp%3Falt%3Dmedia%26token%3D2126c1b8-b7f5-45d3-a8a2-600640a5a50e&w=640&q=75',
    },
  ]

  const handleClick = () => {
    router.push('/')
  }
  return (
    <Container>
      <Row css={styled.PostLightboxLayout} className='justify-content-center'>
        <Col xs='12' lg='9'>
          <div className='_post-wrapper'>
            <div className='_button-wrapper'>
              <Button
                spy={true}
                smooth={true}
                className='_button'
                onClick={handleClick}
              >
                Home
              </Button>
            </div>
            <h1 className='_title'>{fetchedData[0].title}</h1>
            <Image
              className='_post-thumbnail'
              src={fetchedData[0].imageUrl}
              width={856}
              height={428}
              loading='lazy'
              sizes='
          (max-width: 991.98px) 100vw,
          (min-width: 992px) 75vw
        '
              alt='Blog post thumbnail'
            />
            <p className='_summary'>{fetchedData[0].summary}</p>
            {/* <div className='_content'>{children}</div> */}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
