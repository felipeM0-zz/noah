import React from "react";
import { useLocation } from "react-router-dom";
// DEFAULTS
import { defaultOptions } from "../../utils/defaults/defaultOptions";
// IMAGES
import ImgLogo from "../../images/logo.png";
// ICONS
import { MdDirectionsBoat, MdNotifications } from "react-icons/md";
// STYLES
import { Container } from "./styles";

const Header = () => {
  const loc = useLocation().pathname;

  return (
    <Container>
      <div>
        <div>
          <MdDirectionsBoat />
          <span>noah</span>
        </div>
        <div>
          <MdNotifications />
          <div>
            <span>Felipe Moreira</span>
            <span>Admin</span>
          </div>
          <img src={ImgLogo} alt="Foto" />
        </div>
      </div>
      <div>
        {Object.values(defaultOptions)
          .filter((item) => item.router === loc)
          .map((v, i) => {
            return <h3 key={i}>{v.id}</h3>;
          })}

        <h3>Noah Company</h3>
      </div>
    </Container>
  );
};

export default Header;
