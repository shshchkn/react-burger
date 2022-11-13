import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getCookie} from "../../utils/helpers";

const ProtectedRoute = ({anonymous = false}) => {
  const token = getCookie('accessToken');
  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && token) {
    return <Navigate to={ from } />;
  }

  if (!anonymous && !token) {
    return <Navigate to="/login" state={{ from: location}}/>;
  }

  console.log(anonymous)

  return <Outlet />;
}

export default ProtectedRoute;