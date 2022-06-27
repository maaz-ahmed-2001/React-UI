import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import weFreshLogo from "../../assests/images/WeFreshBlue.svg";
import playStore from "../../assests/images/playIconDark.svg";
import appStore from "../../assests/images/Apple.svg";
import { Link } from "react-router-dom";
import "./index.scss";

function Footer() {
  const content = {
    copyRight: "© 2020  WeFresh.  All Rights Reserved.",
    footerTitles: {
      title_1: "service area",
      title_2: "about",
      title_3: "help",
    },
    services: ["Lorem", "Ipsum dolor", "Lorem Ipsum", "Sum dolor"],
    about: ["Story of WeFresh", "Read our blog", "Sign up to deliver"],
    help: ["help centre", "Read FAQs", "Community", "Security"],
    appTitle: "Available on",
    app: [playStore, appStore],
  };
  return (
    <footer>
      <div className="topBar">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
              <div className="footerLogo">
                <img src={weFreshLogo} alt="WeFresh" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="footeServices">
                <ul>
                  <li>{content.footerTitles.title_1}</li>
                  {content.services.map((service, index) => (
                    <li key={index}>
                      <Link to="/">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="footerAbout">
                <ul>
                  <li>{content.footerTitles.title_2}</li>
                  {content.about.map((item, index) => (
                    <li key={index}>
                      <Link to="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
              <div className="footerHelp">
                <ul>
                  <li>{content.footerTitles.title_3}</li>
                  {content.help.map((item, index) => (
                    <li key={index}>
                      <Link to="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2} xl={2}>
              <div className="app">
                <p>{content.appTitle}</p>
                <div className="iconContainer">
                  {content.app.map((image, index) => (
                    <img src={image} alt={image.toString()} key={index} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottomBar">
        <Container>
          <p>{content.copyRight}</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
