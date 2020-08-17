import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouteAdmin(props) {
  const email = localStorage.getItem("email");
  if (email === "harisman@gmail.com") {
    return <Route path={props.path} component={props.component} />;
  }
  return <Redirect to="/" />;
}

export default PrivateRouteAdmin;
