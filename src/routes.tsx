import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Outside from "./pages/Outside";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Access from "./pages/Access";
import Sales from "./pages/Sales";
import Financial from "./pages/Financial";
import Reports from "./pages/Reports";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Outside} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/access" component={Access} />
        <Route path="/sales" component={Sales} />
        <Route path="/financial" component={Financial} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
