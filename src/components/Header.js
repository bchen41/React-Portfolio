import React from "react";
import Navigation from "./Navigation";

export default function Header({ handlePageChange, currentPage }) {
  return (
    <header>
      <Navigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </header>
  );
}
