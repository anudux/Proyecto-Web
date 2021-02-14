import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/png/avatar.png";
import AvatarPersona1 from "../../../assets/img/png/avatar1.png";
import AvatarPersona2 from "../../../assets/img/png/avatar2.png";
import AvatarPersona3 from "../../../assets/img/png/avatar3.png";
import AvatarPersona4 from "../../../assets/img/png/avatar4.png";
import AvatarPersona5 from "../../../assets/img/png/avatar5.png";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>Forma parte de más de los 35 mil estudiantes que estan aprendiendo con mis cursos</h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Jose Perez"
                subtitle="Alumno"
                avatar={AvatarPersona}
                review="Excelente curso he aprendido mucho y lo estoy implementando en mi ambiente laboral"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Carlos Ramirez"
                subtitle="Alumno"
                avatar={AvatarPersona2}
                review="Muy buenos cursos! Super recomendable! gracias a los profesores para su atención."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Carla Gomez"
                subtitle="Alumna"
                avatar={AvatarPersona3}
                review="Realicé el Curso de Diseño Web en Mayo y la verdad me gusto mucho la dinamica de aprendizaje que se llevo a cabo. Los materiales muy buenos y completos."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Patricia Gimenez"
                subtitle="Alumna"
                avatar={AvatarPersona4}
                review="Workshop super interesante y recomendable."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Hernan Gonzalez"
                subtitle="Alumno"
                avatar={AvatarPersona5}
                review="Muy conforme con lo aprendido! Super recomendable."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Pedro Rodriguez"
                subtitle="Alumno"
                avatar={AvatarPersona1}
                review="Muy buen contenido, los profes explican re bien y lo mejor de todo es que hay mucha práctica. Me ayudó mucho para encontrar trabajo."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
  function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
      <Card className="reviews-courses__card">
        <p>{review}</p>
        <Meta avatar={<Avatar src={avatar} />} title={name} description={subtitle} />
      </Card>
    );
  }
}
