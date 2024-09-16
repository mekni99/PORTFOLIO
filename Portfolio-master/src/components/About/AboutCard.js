import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MEKNI MOHAMED DHIA</span>
            from <span className="purple">Ariana, Tunisia.</span>
            <br />
            I am currently a student pursuing an Engineering degree at 
            <span className="purple"> ESPRIT (École Supérieure Privée d'Ingénierie et de Technologie)</span>,
            with a focus on Web Technologies and Internet (TWIN).
            <br />
            I am passionate about web development, microservices, and network security.
            <br />
            <br />
          </p>
        

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always eager to learn, build, and innovate!"{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Dhia Mekni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
