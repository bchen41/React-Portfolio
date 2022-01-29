import React from "react";
import BTSQuiz from "../../assets/images/bts-quiz.png";
import DayPlanner from "../../assets/images/dayplanner.png";
import PokeFinder from "../../assets/images/pokefinder.png";

import AnimalPalace from "../../assets/images/animal-palace-home.png";
import Project from "../Project";
import { Container } from "react-bootstrap";

export default function Portfolio() {
  const projects = [
    {
      title: "Animal Palace",
      demoLink: "https://animal-palace-donation.herokuapp.com/",
      githubLink: "https://github.com/bchen41/Animal-Palace",
      projectImg: AnimalPalace,
    },
    {
      title: "PokeFinder",
      demoLink: "https://bchen41.github.io/PokeFinder/",
      githubLink: "https://github.com/bchen41/PokeFinder",
      projectImg: PokeFinder,
    },
    {
      title: "BTS Quiz",
      demoLink: "https://bchen41.github.io/BTS-Quiz/",
      githubLink: "https://github.com/bchen41/BTS-Quiz",
      projectImg: BTSQuiz,
    },
    {
      title: "Day Planner",
      demoLink: "https://bchen41.github.io/Day-Planner/",
      githubLink: "https://github.com/bchen41/Day-Planner",
      projectImg: DayPlanner,
    },
  ];
  return (
    <div className="container text-center">
      <h1>Portfolio</h1>
      <Container>
        <div id="cards_landscape_wrap-2">
          <div>
            <div className="portfolio-container row">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
