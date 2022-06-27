import React from "react";
import appStoreImg from "../../assests/images/AppStore.svg";
import playStoreImg from "../../assests/images/PlayStore.svg";
import { Container } from "react-bootstrap";
import SectionHeading from "../SectionHeading/index";
import "./index.scss";

function GetApp() {
  const content = {
    heading: "Ready to",
    bold: "Get the app",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore `,
  };
  return (
    <section>
      <div className="getApp">
        <Container>
          <SectionHeading heading={content.heading} bold={content.bold} />
          <p className="info">{content.info}</p>
          <div className="imgContainer">
            <img src={appStoreImg} alt="app-store" />
            <img src={playStoreImg} alt="google-play" />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default GetApp;
