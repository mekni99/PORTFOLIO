import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png"; // Replace with your actual common image path

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my key professional experiences and academic projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DevOps Project"
              description="Setup and managed a DevOps environment including Jenkins, GitHub, SonarQube, Nexus, Docker, and monitoring tools like Prometheus and Grafana."
              ghLink="https://github.com/asmafoudhaili/Projet_Devops" // Update with actual link
              demoLink="https://devops-demo.example.com" // Update with actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Microservice Application"
              description="Developed a microservices application for library management using Spring Boot, Spring Cloud, and Angular, enabling efficient collaboration and book management."
              ghLink="https://github.com/asmafoudhaili/4TWIN5-Mind-Masters" // Update with actual link
              demoLink="https://microservice-demo.example.com" // Update with actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Full Stack JS Project"
              description="Built a student contract management application using Angular, Spring Boot, and MySQL, facilitating the management of student contracts within university departments."
              ghLink="https://github.com/samibentaarit/AngularMiniProjet" // Update with actual link
              demoLink="https://fullstack-demo.example.com" // Update with actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Network & Security Architecture"
              description="Designed a secure LAN/WAN environment with pfSense, DMZ configuration, Nessus vulnerability scanning, OpenVPN, WebGoat, and Snort for intrusion detection."
              ghLink="/" // Update with actual link
              demoLink="https://network-demo.example.com" // Update with actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Web Development Platform"
              description="Developed a platform for data science collaboration using MongoDB, Express.js, React.js, Node.js, and NLP technologies."
              ghLink="https://github.com/TektAI/TektAI-FrontEnd" // Update with actual link
              demoLink="https://webdev-demo.example.com" // Update with actual demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
