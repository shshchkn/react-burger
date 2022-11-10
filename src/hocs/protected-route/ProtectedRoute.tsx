import {Navigate, Outlet, useLocation} from "react-router-dom";
import {getCookie} from "../../utils/helpers";

const ProtectedRoute = () => {
  const {pathname} = useLocation();
  const token = getCookie('accessToken');

  if (
    (token !== undefined && (
      pathname === '/register' ||
      pathname === '/forgot-password' ||
      pathname === '/reset-password'
    )) ||
    (!token && (
      pathname === '/profile' ||
      pathname === '/profile/orders' ||
      pathname === '/profile/orders/:id'
    ))
  ) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />;

}

export default ProtectedRoute;