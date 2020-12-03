import React, { useState } from "react";
// COMPONENT
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SideProfile from "../../components/SideProfile";
// STYLES
import { Container } from "./styles";

const Main = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Container>
      <Header setShowOptions={(v) => setShowOptions(v)} />
      <Sidebar />
      <div id="content">
        <span>Financial</span>
      </div>

      {showOptions && <SideProfile setShowOptions={(v) => setShowOptions(v)} />}
    </Container>
  );
};

export default Main;
