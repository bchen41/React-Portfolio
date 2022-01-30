import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import BCResume from "../../assets/bc-resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Resume() {
  return (
    <Container className="text-center">
      <h1>Resume</h1>
      <Row>
        <p>
          Download my resume:{" "}
          <a className="resume" href={BCResume} download>
            <i className="fas fa-download fa">
              <FontAwesomeIcon icon={faDownload} />
            </i>
          </a>
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
