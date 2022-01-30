import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faGitAlt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import BCResume from "../../assets/bc-resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Resume.css";
import MongoDB from "../../assets/images/mongodb.svg";
import MongooseODM from "../../assets/images/mongooseODM.png";
import Express from "../../assets/images/expressjs.svg";
import MySQL from "../../assets/images/mysql.png";
import GraphQL from "../../assets/images/graphql.png";
import JQuery from "../../assets/images/jquery.png";
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
      <Row className="logo-card-container">
        <Col>
          <Card>
            <Card.Header>Front-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex resume-icon-container">
                <div className="resume-icons">
                  <i className="fab fa-html5 fa-3x">
                    <FontAwesomeIcon icon={faHtml5} />
                  </i>
                </div>
                <div className="resume-icons">
                  <i className="fab fa-css3 fa-3x">
                    <FontAwesomeIcon icon={faCss3} />
                  </i>
                </div>
                <div className="resume-icons">
                  <i className="fab fa-js-square fa-3x">
                    <FontAwesomeIcon icon={faJsSquare} />
                  </i>
                </div>
                <div className="resume-icons">
                  <i className="fab fa-react fa-3x">
                    <FontAwesomeIcon icon={faReact} />
                  </i>
                </div>
                <div className="resume-icons">
                  <i className="fab fa-bootstrap fa-3x">
                    <FontAwesomeIcon icon={faBootstrap} />
                  </i>
                </div>
                <div className="resume-icons">
                  <i className="fab fa-git-alt fa-3x">
                    <FontAwesomeIcon icon={faGitAlt} />
                  </i>
                </div>
                <div>
                  <img
                    src={JQuery}
                    style={{ width: "65px", paddingTop: "12px" }}
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Back-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex resume-icon-container">
                <div className="resume-icons">
                  <i className="fab fa-node-js fa-3x">
                    <FontAwesomeIcon icon={faNodeJs} />
                  </i>
                </div>
                <div className="resume-icons">
                  <img
                    src={MongoDB}
                    style={{ width: "45px", paddingTop: "15px" }}
                  />
                </div>
                <div>
                  <img
                    src={MongooseODM}
                    style={{ width: "65px", paddingTop: "5px" }}
                  />
                </div>
                <div>
                  <img
                    src={Express}
                    style={{ width: "85px", paddingTop: "7px" }}
                  />
                </div>
                <div>
                  <img
                    src={MySQL}
                    style={{ width: "55px", paddingTop: "9px" }}
                  />
                </div>
                <div className="resume-icons">
                  <img
                    src={GraphQL}
                    style={{ width: "52px", paddingTop: "7px" }}
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
