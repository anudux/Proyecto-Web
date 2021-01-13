import React from "react";
import JaviLogo from "../../../assets/img/png/javier-logo.png";
import { Button, Icon } from "antd";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={JaviLogo}
          alt="Javier Lavilla"
        />
        <button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </button>
      </div>
      <div className="menu-top__right">
        <button type="link" onClick={() => console.log("Log Off")}>
          <Icon type="poweroff" />
        </button>
      </div>
    </div>
  );
}
