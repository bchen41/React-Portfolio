import React from "react";
import BTSQuiz from "../../assets/images/bts-quiz.png";
import DayPlanner from "../../assets/images/dayplanner.png";
import PokeFinder from "../../assets/images/pokefinder.png";
import Inquerii from "../../assets/images/inquerii.png";
import AnimalPalace from "../../assets/images/animal-palace-home.png";
import Project from "../Project";
import { Carousel, CarouselItem, Container, Image } from "react-bootstrap";

export default function Portfolio() {
  const projects = [
    {
      title: "Inquerii",
      demoLink: "https://inquerii.com/",
      githubLink: null,
      projectImg: Inquerii,
      description:
        "Micro-consulting platform to lend your expertise while earning money and expanding your network",
      technologies: "React, MongoDB, Nodejs, AWS",
    },
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
        <Carousel
          fade
          interval={8000}
          style={{
            marginTop: "30px",
          }}
        >
          {/* <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
          {projects.map((p, idx) => (
            <Carousel.Item>
              <Image src={p.projectImg} thumbnail fluid></Image>
            </Carousel.Item>
          ))}
        </Carousel>
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
