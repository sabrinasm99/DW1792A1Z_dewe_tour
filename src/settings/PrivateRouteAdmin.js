import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouteAdmin(props) {
  const token = localStorage.token;
  const role = localStorage.role;
  if (token) {
    if (role === "Admin") {
      return <Route path={props.path} component={props.component} />;
    } else {
      return <Redirect to="/" />;
    }
  }
  return <Redirect to="/" />;
}

export default PrivateRouteAdmin;
