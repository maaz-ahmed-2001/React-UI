import React from "react";
import InlineForm from "../InlineForm";
import "./index.scss";
import { Container } from "react-bootstrap";

function Business() {
  const content = {
    bold: "WeFresh",
    heading: "for business",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  };
  return (
    <section>
      <div className="business">
        <Container>
          <h2>
            <b>{content.bold}</b> {content.heading}
          </h2>
          <p>{content.info}</p>
          <InlineForm type="tel" placeholder="Enter phone number" btn="Send" />
        </Container>
      </div>
    </section>
  );
}

export default Business;
