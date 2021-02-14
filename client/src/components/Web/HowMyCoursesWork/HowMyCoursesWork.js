import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan mis cursos?</h2>
        <h3>
          Cada curso cuenta con contenido bajo la web de Udemy, activa las 24 hs, los 365 dias{" "}
        </h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="clock-circle"
              title="Cursos y Clases"
              description="Cursos entre 10 y 30 horas y cada clase con una duración máxima de 30 min."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Acceso 24/7"
              description="Accede a los cursos en cualquier momento desde cualquier lugar."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Aprendizaje Colaborativo"
              description="Aprende de los demás dejando dudas para profesores y compañeros."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Mejora tu perfil"
              description="Aprende y mejora tu perfil para mantenerte al dia de nuevas tecnologias."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Precios bajos"
              description="Obtene los cursos que necesitas al precio de oferta."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Certificado de finalización"
              description="Al completar cada curso obtendrás un certificado de finalización."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
  function CardInfo(props) {
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
      <Card className="how-my-courses-work__card">
        <Icon type={icon} />
        <Meta title={title} description={description} />
      </Card>
    );
  }
}
