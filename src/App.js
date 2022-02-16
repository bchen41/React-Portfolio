import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
// import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    // if (currentPage === "ContactMe") {
    //   return <ContactMe />;
    // }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      </div>
      <div className="content-container">{renderPage()}</div>
      <div className="footer--pin">
        <Footer />
      </div>
    </div>
  );
}

export default App;
