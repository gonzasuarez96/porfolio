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
import MultiPlaceMock from "../../Assets/Projects/MultiPlaceMock.png"
import StockManagerMock from "../../Assets/Projects/StockManagerMock.png"
import HealthMateMock from "../../Assets/Projects/HealthMateMock.png"
import EnergialyMock from "../../Assets/Projects/EnergialyMock.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui veras proyectos en los que participe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MultiPlaceMock}
              isBlog={false}
              title="MultiPlace"
              description="WebApp para una Inmobiliaria destinada a la muestra de propiedades disponibles para la venta y alquiler, permite a los usuarios buscar una propiedad acorde a sus preferencia a través de distintos filtros, obtener mas detalles de las mismas, poder contactarse con un representante de la inmobiliaria llenando un formulario que luegos se eniva automaticamente por mail."
              technologiesFront="Javascript, Next.js, Tailwind, Bootstrap"
              technologiesBack="Java, Spring Boot"
              technologiesDB="MySql"
              ghLink="https://github.com/No-Country-simulation/c14-27-m-java-react"
              demoLink="https://multiplace.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockManagerMock}
              isBlog={false}
              title="StockManager"
              description="WebApp para uso interno de control de inventarios para una ferreteria, control de stock, ingreso, egresos, cargas de facturas y remitos, generacion de pdf, notificaciones de advertencias de faltantes de stock, autenticacion de logueo."
              technologiesFront="Javascript, Next.js, Tailwind"
              technologiesBack="Php"
              technologiesDB=""
              ghLink="https://github.com/No-Country-simulation/s12-16-ft-php-next"
              demoLink="https://stock-manager-web.vercel.app/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealthMateMock}
              isBlog={false}
              title="HealthMate"
              description="Plataforma que ofrece acceso a servicios médicos y de salud. Permite a los usuarios programar citas médicas, acceder a historias clínicas electrónicas. Además, proporciona a los especialistas acceso al listado de sus pacientes, permitiéndoles gestionar citas y necesidades específicas."
              technologiesFront="Javascript, Next.js, Tailwind"
              technologiesBack="Javascript, Node.js, Express.js"
              technologiesDB="PostgreSql"
              ghLink="https://github.com/No-Country-simulation/s13-09-ft-node-react"
              demoLink="https://s13-09-ft-node-react.vercel.app/"              
            />
          </Col>


        <h1 className="project-heading">
          Mis <strong className="purple">Pasantias </strong>
        </h1>
          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={EnergialyMock}
              isBlog={false}
              title="Energialy"
              description="Energialy es una Plataforma para integrar a la Cadena de Valor, gestionar contrataciones entre Pymes y acceder a financiamiento de servicios y proyectos energéticos en Vaca Muerta. Una sola plataforma para contratar y ser contratado."
              technologiesFront="Javascript, Next.js, Tailwind"
              technologiesBack="Javascript, Node.js, Express.js"
              technologiesDB="PostgreSql"
              ghLink="https://github.com/energialy/energialy-app"
              demoLink="https://energialy2-0.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
