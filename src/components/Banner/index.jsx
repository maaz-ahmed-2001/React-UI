import { Container, Col, Row } from "react-bootstrap";
import apple from "../../assests/images/Apple.svg";
import googlePlay from "../../assests/images/Googleplay.svg";
import phone from "../../assests/images/phone.svg";
import InlineForm from "../InlineForm/index.jsx";
import bannerImg1 from "../../assests/images/bannerImg1.svg";
import bannerImg2 from "../../assests/images/bannerImg2.svg";
import bannerImg3 from "../../assests/images/bannerImg3.svg";
import bannerImg4 from "../../assests/images/bannerImg4.svg";
import bannerImg5 from "../../assests/images/bannerImg5.svg";

function Banner() {
  return (
    <section>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="bannerLeftSideContent">
                <div className="bannerHeading">
                  <h1>
                    The smarter way
                    <br />
                    <b>to order your food</b>
                  </h1>
                </div>
                <InlineForm
                  placeholder="Enter phone number"
                  btn="Send"
                  type="tel"
                />
                <div className="bannerSocials">
                  <p>Available on</p>
                  <img src={apple} alt="apple-icon" />
                  <img src={googlePlay} alt="google-play-icon" />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} xl={5}>
              <div className="bannerPhoneContainer">
                <img src={phone} alt="phone" />
              </div>
            </Col>
          </Row>
          <img src={bannerImg1} alt="" className="bannerImg1" />
          <img src={bannerImg2} alt="" className="bannerImg2" />
          <img src={bannerImg3} alt="" className="bannerImg3" />
          <img src={bannerImg4} alt="" className="bannerImg4" />
          <img src={bannerImg5} alt="" className="bannerImg5" />
        </Container>
      </div>
    </section>
  );
}

export default Banner;
