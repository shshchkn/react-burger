import {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../index";
import {getUserRequest} from "../../services/actions/user";
import {getCookie} from "../../utils/helpers";

const ProtectedRoute = ({ children }: {children: JSX.Element}) => {
  const dispatch: AppDispatch = useDispatch();
  const token = getCookie('accessToken');
  const {user} = useSelector((store: RootState) => store.user);

  useEffect(() => {
    token && !user && dispatch(getUserRequest());
  }, [user, token, dispatch]);

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return user && children;
  }
}

export default ProtectedRoute;