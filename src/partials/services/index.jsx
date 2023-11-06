import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

const experties = [
  {
    title: 'Design Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Design Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Design Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Design Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
]

// Services component
const Services = (props) => (
  <SectionWrapper
    css={styled.Services}
    altBg={true}
    headerData={{
      title: 'My Expertise',
      description: '',
    }}
    {...props}
  >
    {/* List of services */}
    <Row>
      {experties.map((item) => (
        <>
          <Col xs='12' md='6' lg='4'>
            <div css={styled.Service}>
              <h6 className='_title'>{item.title}</h6>
              <p className='_description'>{item.description}</p>
            </div>
          </Col>
        </>
      ))}
    </Row>
  </SectionWrapper>
)

export default Services
