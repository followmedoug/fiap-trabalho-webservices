import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/Home";

const Routes = ({ permissions }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />;
      {/* <Redirect from="/" exact to="/" />; */}
    </Switch>
  );
};

export default Routes;
