import {AppDispatch, RootState} from "../../index";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {logoutRequest} from "../../services/actions/logout";
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import styles from "./profile.module.scss";

const Profile = () => {
  const navigate = useNavigate();
  const {logoutFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutRequest());
    !logoutFailed && navigate('/login');
  };

  return (
    <div className={`${styles.profile} mt-30`}>
      <div className={`${styles.profileSidebar}`}>
        <ul className={styles.profileMenu}>
          <li className={styles.profileMenuItem}>
            <NavLink to="/profile" className={`${styles.profileMenuLink} text text_type_main-medium text_color_inactive`} end>
              Профиль
            </NavLink>
          </li>
          <li className={styles.profileMenuItem}>
            <NavLink to="/profile/orders" className={`${styles.profileMenuLink} text text_type_main-medium text_color_inactive`}>
              История заказов
            </NavLink>
          </li>
          <li className={styles.profileMenuItem}>
            <button className={`${styles.profileMenuLink} text text_type_main-medium text_color_inactive`} onClick={logout}>
              Выход
            </button>
          </li>
        </ul>
      </div>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;