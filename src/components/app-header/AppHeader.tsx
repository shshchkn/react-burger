
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import classNames from 'classnames/bind';

import styles from './app-header.module.scss';
import {Link, NavLink} from "react-router-dom";

let cx = classNames.bind(styles);

const AppHeader = () => {
  const navLinkClassName = cx('menu__item_link', {
    'text text_type_main-default text_color_inactive': true,
  });
  const profileLinkClassName = cx('header__account', {
    'text text_type_main-default text_color_inactive': true,
  });
  const linkClasses = ({isActive}: {isActive: boolean}) => !isActive ? navLinkClassName : navLinkClassName + ' ' + styles.active;
  const accountClasses = ({isActive}: {isActive: boolean}) => !isActive ? profileLinkClassName : profileLinkClassName + ' ' + styles.active;

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className="container container--wide">
        <div className={styles.header__inner}>
          <nav className={styles.header__nav}>
            <ul className={`${styles.header__nav_menu} menu`}>
              <li className={styles.menu__item}>
                <NavLink to="/" className={linkClasses} end>
                  <BurgerIcon type="secondary"/> Конструктор
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="orders" className={linkClasses} >
                  <ListIcon type="secondary"/> Лента заказов
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.header__logo}>
            <Link to="/" className={styles.header__logo_link} title="Stellar Burger">
              <Logo/>
            </Link>
          </div>
          <NavLink to="profile" className={accountClasses} >
            <ProfileIcon type='secondary'/> Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;