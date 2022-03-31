import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const tokenConfig = "access_token";
  const redirectPath = "/";

  const isLoggedIn = localStorage.getItem(tokenConfig);
  if (!isLoggedIn) {
    alert("You need to login to access this page");
    return <Redirect to={redirectPath} />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
