import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  title,
  demoLink,
  githubLink,
  projectImg,
  description,
  technologies,
}) {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="img-wrap">
          <div className="image-box">
            <div>
              <img src={projectImg} alt="Screenshot of BTS Quiz" />
            </div>
          </div>
          <div className="img-description">
            <a href={demoLink} target="_blank" rel="noreferrer">
              <div className="portfolio-title">{title}</div>
            </a>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-3x">
                <FontAwesomeIcon className="githubicon" icon={faGithub} />
              </i>
            </a>
          </div>
        </div>
        <p>{description}</p>
        <h6>{technologies}</h6>
      </div>
    </React.Fragment>
  );
}
