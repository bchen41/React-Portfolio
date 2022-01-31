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
      description: `Users can signup to donate and symbolically adopt animals in need.
      Stripe is used to successfully
      perform the donation payment.`,
      technologies: `React, MongoDB/Mongoose, GraphQL, Node.js, Javascript, CSS, Express.js, Heroku, Stripe
      `,
    },
    {
      title: "PokeFinder",
      demoLink: "https://bchen41.github.io/PokeFinder/",
      githubLink: "https://github.com/bchen41/PokeFinder",
      projectImg: PokeFinder,
      description: `A search will show a card and list of encounter locations of the desired Pokémon. A search history is rendered to view previous searches.`,
      technologies: `HTML, CSS, Javascript, ZURB Foundation, Poke/PokemonTCG APIs`,
    },
    {
      title: "Day Planner",
      demoLink: "https://bchen41.github.io/Day-Planner/",
      githubLink: "https://github.com/bchen41/Day-Planner",
      projectImg: DayPlanner,
      description: `A day planner where users can store important events into their busy
      work schedule so that they can manage their time effectively.`,
      technologies: `HTML, CSS, jQuery, Moment.js, Font Awesome, Bootstrap`,
    },
    {
      title: "BTS Quiz",
      demoLink: "https://bchen41.github.io/BTS-Quiz/",
      githubLink: "https://github.com/bchen41/BTS-Quiz",
      projectImg: BTSQuiz,
      description: `A simple quiz that will display questions with their corresponding
      answer choices
      one at a time. Highscores are viewable upon saving.`,
      technologies: `HTML, CSS, Javascript`,
    },
  ];
  return (
    <div className="container text-center">
      <h1>Portfolio</h1>
      <Container>
        <div id="cards_landscape_wrap-2">
          <div className="portfolio-container row">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
