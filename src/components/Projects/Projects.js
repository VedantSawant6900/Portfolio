import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Enhancing Hate Speech Detection Through Multi-Model Ensemblestify"
              description="Developed an advanced hate speech detection system by building on insights from prior works, integrating transformer models (BERT and RoBERTa), ensemble techniques, and innovative preprocessing methods to significantly enhance performance on imbalanced datasets."
              ghLink="https://github.com/tisyavaidya/DS340W--Project"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Course Scheduler"
              description="Developed a course scheduling software that allowed two types of users, including myself as an admin user, to perform the necessary functions to schedule courses by semester. As the admin, I could perform multiple functions to set up the database, enabling students to schedule courses without any hassles."
              ghLink="https://github.com/tisyavaidya/Course-Scheduler"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={leaf}
              isBlog={false}
              title="Pizza Serving Calculator"
              description="Designed and developed a Java-based graphical user interface (GUI) application, 'Pizza Servings Calculator,' using Java Swing components. The application allows users to input the size of a circular pizza and calculates the number of servings based on a specific formula."
              ghLink="https://github.com/tisyavaidya/Pizza-Servings-Calculator-GUI-"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cache"
              description="Created a custom cache management system for a computer, implementing three cache levels (L1, L2, L3) using hash tables and linked lists. Developed and optimized data structures for efficient content storage and retrieval, while implementing eviction policies. Demonstrated strong problem-solving and data structure skills in Python."
              ghLink="https://github.com/tisyavaidya/Cache"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
