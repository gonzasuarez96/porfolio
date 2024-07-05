import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              PARA <span className="purple"> CONOCERME </span> MEJOR
            </h1>
            <p className="home-about-body">
            Hola, mi nombre es Gonzalo Suárez y soy de Córdoba, Argentina.
              <br />
              <br />Soy
              
                <b className="purple"> desarrollador web Full Stack </b>
              
              ex estudiante de Ingeniería Ambiental.
              <br />
              <br />
              Me especializo principalmente como&nbsp;
              
                <b className="purple">Frontend Developer </b> utilizando tecnologías como{" "}
                <b className="purple">
                JavaScript, React.js, Next.js
                </b>
                &nbsp;y distintos frameworks.
              <br />
              <br />
              Tambien cuento con experiencia en <b className="purple">Ventas </b> 
              y en
                <b className="purple"> Ingles </b>
              conversacional.
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
            <h1>PUEDES ENCONTRARME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gonzasuarez96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gonzalo-suarez-dev/"
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
