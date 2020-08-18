import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouteUser(props) {
  const email = localStorage.getItem("email");
  if (email && email !== "harisman@gmail.com") {
    return <Route path={props.path} component={props.component} />;
  } else {
    if (email === "harisman@gmail.com")
      return <Redirect to="/list-transaction" />;
    else return <Redirect to="/" />;
  }
}

export default PrivateRouteUser;
