import { Container, Row, Col } from "react-bootstrap";
import InlineForm from "../InlineForm/index";
import SectionHeading from "../SectionHeading/index";
import mainImg from "../../assests/images/findUsMainImg.svg";
import blueBgImg from "../../assests/images/findUsBlueImg.svg";
import orangeBgImg from "../../assests/images/findUsOrangeImg.svg";

function FindUs() {
  return (
    <section>
      <div className="findUs">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="findUsContent">
                <SectionHeading heading="Find us in these" bold="Area" />
                <InlineForm
                  placeholder="Enter your area"
                  btn="Search"
                  type="text"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="findUsImgContent">
                <div className="findUsImgContainer">
                  <img src={mainImg} alt="Find-us" />
                </div>
                <img src={blueBgImg} alt="blue-img" className="findUsBgImg1" />
                <img
                  src={orangeBgImg}
                  alt="orange-img"
                  className="findUsBgImg2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default FindUs;
