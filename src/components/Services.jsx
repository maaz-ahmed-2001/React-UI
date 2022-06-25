import { Container, Row, Col } from 'react-bootstrap'
import SectionHeading from './SectionHeading'
import ServicesBtnContainer from './ServicesBtnContainer'
import bgImg from '../assests/images/servicesBgImg.svg'
import phone from '../assests/images/servicesPhone.svg'
import ServicesContent from './ServicesContent'

function Services() {

    return (
        <div className="services">
            <Container>
                <Row>
                    <SectionHeading heading="We've more" bold="services" />
                </Row>
                <Row>
                    <ServicesBtnContainer />
                </Row>
                <Row >
                    <Col sm={12} md={6} lg={6}>
                        <div className="servicesMainImg">
                            <img src={bgImg} alt="services-background" />
                            <img src={phone} alt="phone" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="servicesContent">
                            <ServicesContent/>
                            <ServicesContent/>
                            <ServicesContent/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services