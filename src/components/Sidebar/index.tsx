import React from "react";
import { Link, useLocation } from "react-router-dom";
// DEFAULTS
import { defaultOptions } from "../../utils/defaults/defaultOptions";
// ICONS
import { MdSettings } from "react-icons/md";

// STYLES
import Container from "./styles";

const Sidebar = () => {
  const loc = useLocation().pathname;

  return (
    <Container>
      <div>
        {Object.values(defaultOptions).map((v, i) => {
          return (
            <Link to={v.router} key={i} className={loc === v.router ? "active" : ""}>
              {v.icon}
            </Link>
          );
        })}
      </div>
      <div>
        <MdSettings />
      </div>
    </Container>
  );
};

export default Sidebar;
