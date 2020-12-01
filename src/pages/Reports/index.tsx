import React from "react";
// COMPONENT
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
// STYLES
import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <div id="content">
        <h2>Reports</h2>
      </div>
    </Container>
  );
};

export default Main;
