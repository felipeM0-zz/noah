import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// DEFAULTS
import { defaultOptions } from "../../utils/defaults/defaultOptions";
import { HiSun, HiMoon } from "react-icons/hi";

// STYLES
import { Container, Switcher } from "./styles";

import ContextTheme from "../../contexts/ContextTheme";

const Sidebar = () => {
  const loc = useLocation().pathname;
  const ContTheme = useContext(ContextTheme);

  const changeTheme = () => {
    ContTheme.setTheme({ checked: !ContTheme.theme.checked });
    localStorage.setItem("theme", JSON.stringify(!ContTheme.theme.checked));
  };

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
        <Switcher
          onChange={() => changeTheme()}
          checked={ContTheme.theme.checked}
          checkedIcon={<HiSun />}
          uncheckedIcon={<HiMoon />}
        />
      </div>
    </Container>
  );
};

export default Sidebar;
