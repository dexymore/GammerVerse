import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute(props) {
  if (!localStorage.getItem("userToken")) {
    /// first of all protected route will check if the local storage contains the user token if it has it thats means the user is logged in and no need to block routes from him
    // if not the protect rrout will navigate him to login page to create account
    return <Navigate to="/login"></Navigate>;
  }
  // if the localstorage contains the usertoken then return the route
  else return props.children;
}

export default ProtectedRoute;
