import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getCookie} from "../../utils/helpers";

const ProtectedRoute = ({anonymous = false }) => {
  const isLoggedIn = getCookie('accessToken');
  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && isLoggedIn) {
    return <Navigate to={ from } />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location}}/>;
  }

  return <Outlet />;
}

export default ProtectedRoute;