import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-center">
      <h3>Made with ❤️️ by Betty Chen</h3>
      <div className="text-center">
        <div className="icon-container">
          <a
            href="mailto:bettychen41@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-envelope fa-3x">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/bettychen41/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-3x">
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a href="https://github.com/bchen41" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-3x">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
