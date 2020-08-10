import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouteUser(props) {
  const email = localStorage.getItem("email");
  if (email === "user@gmail.com") {
    return <Route path={props.path} component={props.component} />;
  }
  return <Redirect to="/" />;
}

export default PrivateRouteUser;
