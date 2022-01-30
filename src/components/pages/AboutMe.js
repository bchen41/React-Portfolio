import React from "react";
import Avatar from "../../assets/images/avatar.jpg";

import { Container, Row, Col } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div className="text-center">
      <div className="container">
        <h1>About Me</h1>
      </div>
      <Container className="about-container">
        <Row>
          <Col lg={true} className="about-img">
            <img
              src={Avatar}
              className="img-circle fluid"
              alt="Me and my husband"
              width="350"
              height="450"
            ></img>
          </Col>
          <Col lg={true}>
            <div>
              <p>
                I am a Full Stack Developer with a bachelor's degree in
                Molecular and Cell Biology from University of Connecticut. I
                have experience in the pharmaceutical and chemical industry as
                an analytical technician. I have taken the opportunity during
                the pandemic to pivot my career path towards software
                engineering. I underwent a challenging 3-month Full Stack Web
                Development program through the Rutgers University Coding
                Bootcamp, with newly developed skills using MongoDB, Express.js,
                Node.js, React.js., RESTful APIs and creating
                responsive/polished UI web design.
              </p>
              <p>
                I enjoy eating all kinds of foods, such as Korean BBQ and sushi.
                watching shows, reading webtoons, baking, and listening to
                music. My favorite band is BTS 💜.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
