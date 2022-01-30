import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="text-center">
        <div>
          <div className="icon-container">
            <a
              href="mailto:bettychen41@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope fa-3x">
                <FontAwesomeIcon className="footer-icons" icon={faEnvelope} />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/bettychen41/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in fa-3x">
                <FontAwesomeIcon className="footer-icons" icon={faLinkedin} />
              </i>
            </a>
            <a
              href="https://github.com/bchen41"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-3x">
                <FontAwesomeIcon
                  className="footer-icons"
                  icon={faGithubSquare}
                />
              </i>
            </a>
          </div>
        </div>
        <h5>Betty Chen's React Portfolio © {new Date().getFullYear()}</h5>
      </footer>
    </div>
  );
}
