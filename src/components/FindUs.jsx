import {Container,Row,Col} from 'react-bootstrap'
import InlineForm from './InlineForm'
import SectionHeading from './SectionHeading'
import mainImg from '../assests/images/findUsMainImg.svg'
import blueBgImg from '../assests/images/findUsBlueImg.svg'
import orangeBgImg from '../assests/images/findUsOrangeImg.svg'

function FindUs() {
  return (
    <div className='findUs'>
        <Container>
            <Row>
                <Col>
                    <div className="findUsContent">
                        <SectionHeading heading="Find us in these" bold="Area" />
                        <InlineForm placeholder="Enter your area" btn="Search" textDark={true}/>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={mainImg} alt="Find-us" />
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={blueBgImg} alt="blue-img" className='findUsBgImg1'/>
        <img src={orangeBgImg} alt="orange-img" className='findUsBgImg2'/>
    </div>
  )
}

export default FindUs