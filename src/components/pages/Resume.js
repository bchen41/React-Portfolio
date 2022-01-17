import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import resume from "../../assets/bc-resume.pdf";
export default function Resume() {
  return (
    <Container className="text-center">
      <h1>Resume</h1>
      <Row>
        <p>
          Download my{" "}
          <a className="resume" href={resume} download>
            resume
          </a>
          !
        </p>
        <h3>Proficiencies</h3>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Front-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML/CSS</ListGroup.Item>
              <ListGroup.Item>JavaScript/jQuery</ListGroup.Item>
              <ListGroup.Item>Responsive/Mobile Design</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Git/Version Control</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Back-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item>RESTful APIs</ListGroup.Item>
              <ListGroup.Item>MySQL/Sequelize</ListGroup.Item>
              <ListGroup.Item>MongoDB/Mongoose</ListGroup.Item>
              <ListGroup.Item>GraphQL</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
