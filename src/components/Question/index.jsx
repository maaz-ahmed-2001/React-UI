import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import "./index.scss";

function Questions() {
  const content = {
    title_heading_1: "Got questions?",
    title_heading_2: "Still have a question?",
    title_info_1: "Perfect, we've got answers",
    title_info_2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    details_1: "Lorem ipsum dolor sit amet, consectetur",
    details_2: "Lorem ipsum dolor sit amet, consectetur",
    phone_num: "+66 8959888",
    email: "Support@service.com",
  };
  const questions = [
    {
      q: "How to get started?",
      title: "Lorem ipsum dolor sit amet, consectetur adipis",
      ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      q: "How to get started?",
      title: "Lorem ipsum dolor sit amet, consectetur adipis",
      ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      q: "How to get started?",
      title: "Lorem ipsum dolor sit amet, consectetur adipis",
      ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      q: "How to get started?",
      title: "Lorem ipsum dolor sit amet, consectetur adipis",
      ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      q: "How to get started?",
      title: "Lorem ipsum dolor sit amet, consectetur adipis",
      ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];
  return (
    <section>
      <div className="questions">
        <Container>
          <SectionHeading heading={content.title_heading_1} />
          <p className="titleInfo">{content.title_info_1}</p>
          <Accordion>
            {questions.map(({ q, title, ans }, index) => (
              <Accordion.Item key={index} eventKey={index - 1}>
                <Accordion.Header>{q}</Accordion.Header>
                <Accordion.Body>
                  <h3>{title}</h3>
                  <p>{ans}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <div className="moreQuestions">
            <SectionHeading heading={content.title_heading_2} />
            <p>{content.title_info_2}</p>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="helpContainer">
                  <h5>{content.phone_num}</h5>
                  <p>{content.details_1}</p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="helpContainer">
                  <h5>{content.email}</h5>
                  <p>{content.details_1}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Questions;
