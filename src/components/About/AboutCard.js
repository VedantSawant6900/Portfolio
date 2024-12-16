import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Tisya Vaidya </span>
              .
              <br />
              I am currently a senior at Pennsylvania State University,
              majoring in Computational Data Science with a minor in Mathematics and Statistics.
              <br />
              Apart from coding, I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Its always a beautiful day to debug and build intelligence!"{" "}
          </p> 
          <footer className="blockquote-footer">Tisya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
