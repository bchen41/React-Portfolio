import React from "react";
import Avatar from "../../assets/images/avatar.jpg";

export default function AboutMe() {
  return (
    <div className="about-me-container-fluid bg-1 text-center">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src={Avatar}
          className="img-circle"
          alt="Me and my husband"
          width="350"
          height="450"
        ></img>
        <div>
          <p>
            My name is Betty Chen and I was born in Manhattan, NY, but spent
            most of my childhood in Buffalo, NY. After a couple of years, my
            family moved to Ridgewood, NJ, where I stayed until I graduated from
            high school. I then graduated from UCONN with a bachelor's in
            Molecular and Cell Biology. After that, I worked in a pharmaceutical
            industry for one year and then a chemical laboratory for two years.
            I am now learning how to be a web developer through Rutgers Coding
            Bootcamp.
          </p>
          <p>
            I enjoy eating all kinds of foods, such as Korean BBQ and sushi.
            watching shows, reading webtoons,playing games, baking,listening to
            music, and dancing. My number one favorite band is BTS 💜.
          </p>
        </div>
      </div>
    </div>
  );
}
