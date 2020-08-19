import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouteUser(props) {
  const token = localStorage.token;
  const role = localStorage.role;
  if (token) {
    if (role === "User")
      return <Route path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/list-transaction" />;
  }
  return <Redirect to="/" />;
}

export default PrivateRouteUser;
