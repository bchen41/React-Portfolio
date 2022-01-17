import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({ title, demoLink, githubLink, projectImg }) {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="card-flyer">
          <div className="img-wrap">
            <div className="image-box">
              {demoLink.length > 1 ? (
                <div>
                  <img src={projectImg} alt="Screenshot of BTS Quiz" />
                </div>
              ) : (
                <a href="javascript:void(0)">
                  <img src={projectImg} alt="Img of Coming Soon"></img>
                </a>
              )}
            </div>
            {githubLink.length > 1 ? (
              <div className="img-description">
                <a
                  className="portfolio-title"
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>{title}</div>
                </a>

                <a href={githubLink} target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-3x">
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
