import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const ProtectedRoute = ({ permissions, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      reder={(props) =>
        !isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
