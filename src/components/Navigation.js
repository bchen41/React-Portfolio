import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        
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
            <a
              href="#about-me"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
            <a
              href="#contact-me"
              onClick={() => handlePageChange("ContactMe")}
              className={
                currentPage === "ContactMe" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
