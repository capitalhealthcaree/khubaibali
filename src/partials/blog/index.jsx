/*
This is the Blog section
It retrieves blog post data from the MDX files and passes it through context to other components
It also handles the lightbox state and dispatching actions
*/

import { createContext, useReducer, useState } from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// import { css } from '@emotion/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card, Col, Row } from 'react-bootstrap'
// import MdxRenderer from 'root/src/components/mdx-renderer'
import { capitalizeFirstLetter } from 'root/utils'
import { cx } from '@emotion/css'
import dayjs from 'dayjs'
// import Lightbox from 'root/src/components/lightbox'
import styled from './style'

// Define where the MDX files are located

// Create a Context for passing data between components
const Context = createContext({})

// Renders a preview card for each blog post
const Post = ({ data }) => {
  // Populates the data state with content, causing the lightbox to show

  // Destructure passed data
  const { title, date, tags, summary, imageUrl } = data

  // Populates the blog post card with passed tags
  const tagsToText = (array) => {
    // Capitalizes first letter of each tag
    const treatedArray = array.map((element) => capitalizeFirstLetter(element))

    // Checks length for singular/plural formatting
    if (treatedArray.length === 1)
      return <a className='link'>{treatedArray[0]}</a>

    // Joins tags for plural display
    return treatedArray.reduce((prev, curr) => (
      <>
        <span className='_tag'>{prev}</span>
        <span className='_delimiter'>/</span>
        <span className='_tag'>{curr}</span>
      </>
    ))
  }

  // Format passed plain text date
  const dateToText = (dateInput) => dayjs(dateInput).format('MMMM D, YYYY')

  return (
    <Card css={styled.Post}>
      {/* Blog post card image */}
      <span className='_image-wrapper'>
        <Image
          className='card-img-top'
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
          fill
          sizes='
            (max-width: 767.98px) 100vw,
            (min-width: 768px) and (max-width: 991.98px) 50vw,
            (min-width: 992px) 33.33vw
          '
          src={imageUrl}
          alt='Blog post thumbnail'
        ></Image>
        <span className='_date'>{dateToText(date)}</span>
      </span>
      {/* Blog post card body */}
      <Card.Body className='_content'>
        <Card.Title className='_title'>{title}</Card.Title>
        <Card.Text className='_summary'>{summary}</Card.Text>
        <div className='_tags'>
          <span className='_key'>Tags: </span>
          <span className='_list'>{tagsToText(tags)}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

/*
Renders a swiper component to display blog post cards
Handles navigation between posts
*/
const PostsList = () => {
  // Get fetched data from context
  // const { fetchedData } = useContext(Context)
  const fetchedData = [
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fspine-surgeons.webp%3Falt%3Dmedia%26token%3D2126c1b8-b7f5-45d3-a8a2-600640a5a50e&w=640&q=75',
    },
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fshoulder-sprain.webp%3Falt%3Dmedia%26token%3D858f06fd-76f1-4982-92ee-cc878169fca0&w=640&q=75',
    },
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fcomminuted-fracture.webp%3Falt%3Dmedia%26token%3D277bef01-2138-4421-9c94-dcf3429fd625&w=640&q=75',
    },
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Frhizotomy-procedure.webp%3Falt%3Dmedia%26token%3D3c781c09-b99d-450a-b2d8-d1b3bb833c7f&w=640&q=75',
    },
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Farthritis-dr-near-me.webp%3Falt%3Dmedia%26token%3Ddcffec22-918f-46ae-9b17-d74894069f57&w=640&q=75',
    },
    {
      title: 'sdas00',
      tags: ['ReactJs', 'NextJs'],
      summary: 'It is very easy',
      slug: 'reactjs-is-happy',
      imageUrl:
        'https://www.mypremierpain.com/_next/image/?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpremirepaindashboard.appspot.com%2Fo%2Fimages%252Fshoulder-rom.webp%3Falt%3Dmedia%26token%3D27657c35-ae5f-4585-84b3-b8e7067bfae6&w=640&q=75',
    },
  ]
  // State to store Swiper instance and slide edge status
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [slideEdge, setSlideEdge] = useState([null, null])

  // Handle navigation clicks
  const handleNav = (action) => {
    // Check if Swiper instance exists
    if (!swiperInstance) return

    // Switch on action to call prev/next methods
    switch (action) {
      case 'PREV':
        // Go to previous slide
        swiperInstance.slidePrev()
        break
      case 'NEXT':
        // Go to next slide
        swiperInstance.slideNext()
        break
      default:
        break
    }
  }

  return (
    <div css={styled.PostsList}>
      <Row>
        {/* Navigation buttons */}
        <div className='_nav'>
          <span
            className={cx({
              '--active': !slideEdge[0],
            })}
            onClick={() => handleNav('PREV')}
          >
            PREV
          </span>
          <span
            className={cx({
              '--active': !slideEdge[1],
            })}
            onClick={() => handleNav('NEXT')}
          >
            NEXT
          </span>
        </div>

        {/* Swiper component */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            // Update slide edge status
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
          onInit={(swiper) => {
            // Set initial swiper instance and slide edge
            setSwiperInstance(swiper)
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
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
          {/* Map over each blog post and embed it in slider */}
          {fetchedData.map((mdxItem, i) => (
            <SwiperSlide key={i}>
              <Post data={mdxItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </div>
  )
}

/*
Layout for post content in lightbox modal
Renders title, summary and MDX content
*/

/*
Main lightbox modal component
Renders selected post content
*/

/*
Main Blog component page.
Handles data fetching, context and lightbox state.
*/
const Blog = (props) => {
  // Destructure props
  const { data, ...otherProps } = props

  // Initial state
  const initialState = {
    show: false,
    data: false,
  }

  // State reducer
  const stateReducer = (state, action) => {
    switch (action.type) {
      // Set data and show lightbox
      case 'data':
        if (action.data) return { ...state, show: true, data: action.data }
        return { ...state, show: false }

      // Toggle lightbox show
      case 'show':
        return { ...state, show: action.show }

      default:
        return state
    }
  }

  // State and dispatch from useReducer
  const [state, dispatch] = useReducer(stateReducer, initialState)

  // Context data
  const contextData = {
    fetchedData: data,
    state,
    dispatch,
  }

  return (
    <SectionWrapper
      headerData={{
        title: 'My Blog',
        description: 'Check out my latest blog posts',
      }}
      altBg={false}
      {...otherProps}
    >
      <Row>
        <Col xs='12'>
          {/* Provide context */}
          <Context.Provider value={contextData}>
            <PostsList />
          </Context.Provider>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Blog
