import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Outside from "./pages/Outside";
import Main from "./pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Outside} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
