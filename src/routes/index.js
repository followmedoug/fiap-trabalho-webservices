import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = ({ permissions }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />;
      <Route exact path="/register" component={Register} />;
      {/* <Redirect from="/" exact to="/" />; */}
    </Switch>
  );
};

export default Routes;
