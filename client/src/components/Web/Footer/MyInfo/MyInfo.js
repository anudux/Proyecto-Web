import React from "react";
import Logo from "../../../../assets/img/png/javier-logo2.png";
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={Logo} alt="Javier Lavilla" className="logo" />
      <h4>
        Entra en el mundo del desarrollo web, disfruta creando <br />
        proyectos de todo tipo, deja que tú imaginación fluya y crea <br />
        verdaderas maravillas!
      </h4>
      <SocialLinks />
    </div>
  );
}
