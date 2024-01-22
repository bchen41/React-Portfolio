import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
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
import BCResume from "../../assets/Betty_Chen_2024.pdf";
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
      </Row>
      <h3>Proficiencies</h3>
      <br></br>
      <Row className="logo-card-container">
        <Col>
          <Card>
            <Card.Header>Front-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex resume-icon-container">
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>HTML</Tooltip>}
                  >
                    <i className="fab fa-html5 fa-3x">
                      <FontAwesomeIcon icon={faHtml5} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>CSS</Tooltip>}
                  >
                    <i className="fab fa-css3 fa-3x">
                      <FontAwesomeIcon icon={faCss3} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Javascript</Tooltip>
                    }
                  >
                    <i className="fab fa-js-square fa-3x">
                      <FontAwesomeIcon icon={faJsSquare} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>React</Tooltip>
                    }
                  >
                    <i className="fab fa-react fa-3x">
                      <FontAwesomeIcon icon={faReact} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Bootstrap</Tooltip>
                    }
                  >
                    <i className="fab fa-bootstrap fa-3x">
                      <FontAwesomeIcon icon={faBootstrap} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={<Tooltip id={`tooltip-${"bottom"}`}>Git</Tooltip>}
                  >
                    <i className="fab fa-git-alt fa-3x">
                      <FontAwesomeIcon icon={faGitAlt} />
                    </i>
                  </OverlayTrigger>
                </div>

                <div>
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>jQuery</Tooltip>
                    }
                  >
                    <img
                      src={JQuery}
                      alt="jquery logo"
                      style={{ width: "65px", paddingTop: "12px" }}
                    />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <br></br>
        <Col>
          <Card>
            <Card.Header>Back-End</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex resume-icon-container">
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Node.js</Tooltip>
                    }
                  >
                    <i className="fab fa-node-js fa-3x">
                      <FontAwesomeIcon icon={faNodeJs} />
                    </i>
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>MongoDB</Tooltip>
                    }
                  >
                    <img
                      src={MongoDB}
                      alt="mongodb logo"
                      style={{ width: "45px", paddingTop: "15px" }}
                    />
                  </OverlayTrigger>
                </div>
                <div>
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Mongoose</Tooltip>
                    }
                  >
                    <img
                      src={MongooseODM}
                      alt="mongooseodm logo"
                      style={{ width: "65px", paddingTop: "5px" }}
                    />
                  </OverlayTrigger>
                </div>
                <div>
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>Express.js</Tooltip>
                    }
                  >
                    <img
                      src={Express}
                      alt="express logo"
                      style={{ width: "85px", paddingTop: "7px" }}
                    />
                  </OverlayTrigger>
                </div>
                <div>
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>MySQL</Tooltip>
                    }
                  >
                    <img
                      src={MySQL}
                      alt="mysql logo"
                      style={{ width: "50px", paddingTop: "12px" }}
                    />
                  </OverlayTrigger>
                </div>
                <div className="resume-icons">
                  <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>GraphQL</Tooltip>
                    }
                  >
                    <img
                      src={GraphQL}
                      alt="graphql logo"
                      style={{ width: "45px", paddingTop: "12px" }}
                    />
                  </OverlayTrigger>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
