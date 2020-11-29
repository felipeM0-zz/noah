import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// STYLES
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
