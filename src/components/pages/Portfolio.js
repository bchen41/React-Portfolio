import React from "react";
import BTSQuiz from "../../assets/images/bts-quiz.png";
import DayPlanner from "../../assets/images/dayplanner.png";
import PokeFinder from "../../assets/images/pokefinder.png";
import WeatherDash from "../../assets/images/weather-dashboard.png";
import ComingSoon from "../../assets/images/coming-soon.jpg";

export default function Portfolio() {
  return (
    <div id="cards_landscape_wrap-2">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card-flyer">
              <div className="text-box">
                <div className="image-box">
                  <a href="https://bchen41.github.io/BTS-Quiz/" target="_blank">
                    <img src={BTSQuiz} alt="Screenshot of BTS Quiz" />
                  </a>
                </div>
                <div className="text-container">
                  <h6>BTS Quiz</h6>
                  <p>
                    A simple quiz that will display questions with their
                    corresponding answer choices one at a time. Highscores are
                    viewable upon saving.
                  </p>
                  <p>
                    Click
                    <a
                      href="https://github.com/bchen41/BTS-Quiz"
                      target="_blank"
                    >
                      here
                    </a>
                    to check out the repository!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card-flyer">
              <div className="text-box">
                <div className="image-box">
                  <a
                    href="https://bchen41.github.io/Day-Planner/"
                    target="_blank"
                  >
                    <img
                      src={DayPlanner}
                      alt="Screenshot of Work Day Planner"
                    />
                  </a>
                </div>
                <div className="text-container">
                  <h6>Work Day Planner</h6>
                  <p>
                    A day planner where users can store important events into
                    their busy work schedule so that they can manage their time
                    effectively.
                  </p>
                  <p>
                    Click
                    <a
                      href="https://github.com/bchen41/Day-Planner"
                      target="_blank"
                    >
                      here
                    </a>
                    to check out the repository!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card-flyer">
              <div className="text-box">
                <div className="image-box">
                  <a
                    href="https://bchen41.github.io/PokeFinder/"
                    target="_blank"
                  >
                    <img
                      src={PokeFinder}
                      alt="Screenshot of PokeFinder Webpage"
                    />
                  </a>
                </div>
                <div className="text-container">
                  <h6>PokeFinder</h6>
                  <p>
                    A card and a list of encounter locations of the desired
                    Pokémon will be presented. A search history is available to
                    view previous searches again.
                  </p>
                  <p>
                    Click
                    <a
                      href="https://github.com/bchen41/PokeFinder"
                      target="_blank"
                    >
                      here
                    </a>
                    to check out the repository!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card-flyer">
              <div className="text-box">
                <div className="image-box">
                  <a
                    href="https://bchen41.github.io/Weather-Dashboard/"
                    target="_blank"
                  >
                    <img
                      src={WeatherDash}
                      alt="Screenshot of Weather Dashboard"
                    />
                  </a>
                </div>
                <div className="text-container">
                  <h6>Weather Dashboard</h6>
                  <p>
                    Users can search for the weather outlook of multiple cities
                    so that they can plan a trip accordingly.
                  </p>
                  <p>
                    Click
                    <a
                      href="https://github.com/bchen41/Weather-Dashboard"
                      target="_blank"
                    >
                      here
                    </a>
                    to check out the repository!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card-flyer">
              <div className="text-box">
                <div className="image-box">
                  <img src={ComingSoon} alt="coming soon img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
