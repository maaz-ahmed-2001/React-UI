import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../SectionHeading/index";
import ServicesBtnContainer from "../ServicesBtnContainer/index";
import bgImg from "../../assests/images/servicesBgImg.svg";
import phone from "../../assests/images/servicesPhone.svg";
import ServicesContent from "../ServicesContent/index";

function Services() {
  return (
    <section>
      <div className="services">
        <Container>
          <Row>
            <SectionHeading heading="We've more" bold="services" />
          </Row>
          <Row>
            <ServicesBtnContainer />
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className="servicesMainImg">
                <img src={bgImg} alt="services-background" />
                <img src={phone} alt="phone" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="servicesContent">
                <ServicesContent />
                <ServicesContent />
                <ServicesContent />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Services;
