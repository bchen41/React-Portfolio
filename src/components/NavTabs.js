import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <h1 className="navbar-brand">Betty Chen</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link active" href="#about-me">
              About Me <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#works">
              Portfolio
            </a>
            <a className="nav-item nav-link active" href="#contact-me">
              Contact Me
            </a>
            <a
              className="nav-item nav-link active"
              href="./assets/bc-resume.pdf"
              download
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
