import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, Soy <span className="purple">Gonzalo Suarez </span>
            de <span className="purple"> Cordoba, Argentina.</span>
            <br />
            Full Stack Developer con formación en Ingeniería Ambiental y experiencia en ventas.
            <br />
            He participado en
proyectos voluntarios para mejorar y practicar mis habilidades, no solo tecnicas, sino tambien mis habilidades en equipo,
organizacion y resolucion de problemas, ya que he participado como team leader.
            <br />
Actualmente estoy en busqueda laboral, cuento con un buen manejo de ingles. Aqui podras encontrar las tecnologias que manejo
y proyectos en los que he participado.
            <br />
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
