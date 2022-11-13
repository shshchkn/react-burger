import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getCookie} from "../../utils/helpers";

const ProtectedRoute = () => {
  const token = getCookie('accessToken');
  const location = useLocation();
  const from = location.state?.from || '/';

  if (token !== undefined && (
    location.pathname === '/register' ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/reset-password'
  )) {
    return <Navigate to={ from } />;
  }

  if (!token && (
    location.pathname === '/profile' ||
    location.pathname === '/profile/orders' ||
    location.pathname === '/profile/orders/:id'
  )) {
    return <Navigate to="/login" state={{ from: location }}/>;
  }

  return <Outlet />;
}

export default ProtectedRoute;