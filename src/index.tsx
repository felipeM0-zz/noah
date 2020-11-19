import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";

import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById("root")
);
