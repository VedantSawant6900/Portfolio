import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/WhatsApp Image 2024-11-23 at 22.14.48.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and the world of data, and I am constantly striving to learn and grow in this exciting field. 🌟
            <br />
            <br />I am fluent in
            <i>
              <b className="purple"> Python, R, and Java,&nbsp;</b>
            </i>
               with a solid foundation in computational languages and statistical tools.
            <br />
            <br />
            My field of interest lies in&nbsp;
            <i>
              <b className="purple">Artificial Intelligence, Data Science, and Machine Learning,&nbsp;</b>
            </i>
            as well as in exploring advancements in
            <b className="purple"> Computational Data Science.</b>
            <br />
            <br />
            Whenever possible, I apply my passion for problem-solving and innovation by working on projects that combine
            <b className="purple"> data-driven methodologies</b> with
            <i>
              <b className="purple"> emerging technologies&nbsp;</b>
            </i>
            to solve real-world challenges.
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tisyavaidya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tisya-vaidya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
