import React from "react";
import Navigation from "./Navigation"

export default function Header({handlePageChange, currentPage}) {
  return (
    <header className="d-flex justify-content-between">
      <h1>Betty Chen</h1>
      <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />
    </header>
  );
}
