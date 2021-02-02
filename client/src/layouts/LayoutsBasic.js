import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Footer } = Layout;

  return (
    <Row>
      <Col lg={4} />
      <Col lg={16}>
        <MenuTop />
        <LoadRoutes routes={routes} />
        <Footer> Javier Lavilla 2021 ® </Footer>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} component={route.component} exact={route.exact} />
      ))}
    </Switch>
  );
}
