import React from "react";

import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './AppHeader.module.scss';

type NavProps = {
  children: React.ReactNode;
};

const Nav = ({children}: NavProps) => {
  return (
    <nav className={styles.header__nav}>
      <ul className={`${styles.header__nav_menu} menu`} role="list">
        {children}
      </ul>
    </nav>
  );
}

type NavItemProps = {
  name: string,
  icon: React.ReactNode,
  active: boolean
};

const NavItem = ({name, icon, active}: NavItemProps) => {
  return (
    <li className={styles.menu__item}>
      <a href="#" className={`${styles.menu__item_link} text text_type_main-default text_color_inactive ${active ? styles.menu__item_link_active : ''}`}>
        {icon}{name}
      </a>
    </li>
  );
}

const HeaderLogo = () => {
  return (
    <div className={styles.header__logo}>
      <a href="/" className={styles.header__logo_link} title="Stellar Burger"><Logo/></a>
    </div>
  );
}

type AccountLinkProps = {
  name: string,
  icon: React.ReactNode,
};

const AccountLink = ({name, icon}: AccountLinkProps) => {
  return (
    <a href="#" className={`${styles.header__account} text text_type_main-default text_color_inactive`}>
      {icon}{name}
    </a>
  );
}

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className="container container--wide">
        <div className={styles.header__inner}>
          <Nav>
            <NavItem name="Конструктор" icon={<BurgerIcon type="secondary"/>} active={true} />
            <NavItem name="Лента заказов" icon={<ListIcon type="secondary"/>} active={false} />
          </Nav>
          <HeaderLogo />
          <AccountLink name="Личный кабинет" icon={<ProfileIcon type='secondary'/>}/>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;