import { Container, Row, Col } from 'react-bootstrap'
import blueBg from '../assests/images/partnersBgImg.svg'
import PartnersContainer from './PartnersContainer'
import SectionHeading from './SectionHeading'

function OurPartners() {
    return (
        <div className='ourPartners'>
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='ourPartnersContent'>
                            <div className='content'>
                                <img src={blueBg} alt="background-img"/>
                                <div className='details'>
                                    <SectionHeading heading="Our" bold="Partners"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. sed do eiusmod.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="partnersContainer">
                            <PartnersContainer />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurPartners