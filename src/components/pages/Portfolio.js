import React from "react";
import BTSQuiz from "../../assets/images/bts-quiz.png";
import DayPlanner from "../../assets/images/dayplanner.png";
import PokeFinder from "../../assets/images/pokefinder.png";
import WeatherDash from "../../assets/images/weather-dashboard.png";
import ComingSoon from "../../assets/images/coming-soon.jpg";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
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
    {
      title: "PokeFinder",
      demoLink: "https://bchen41.github.io/PokeFinder/",
      githubLink: "https://github.com/bchen41/PokeFinder",
      projectImg: PokeFinder,
    },
    {
      title: "Weather Dash",
      demoLink: "https://bchen41.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/bchen41/Weather-Dashboard",
      projectImg: WeatherDash,
    },
    {
      title: "",
      demoLink: "#",
      githubLink: "#",
      projectImg: ComingSoon,
    },
  ];
  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="row">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
