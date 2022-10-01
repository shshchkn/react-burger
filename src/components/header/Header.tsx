import React from "react";

import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import header from './header.module.scss';

type NavProps = {
  children: React.ReactNode;
};

const Nav = ({children}: NavProps) => {
  return (
    <nav className={header.header__nav}>
      <ul className={`${header.header__nav_menu} menu`} role="list">
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
    <li className={header.menu__item}>
      <a href="#" className={`${header.menu__item_link} text text_type_main-default text_color_inactive ${active ? header.menu__item_link_active : ''}`}>
        {icon}{name}
      </a>
    </li>
  );
}

const HeaderLogo = () => {
  return (
    <div className={header.header__logo}>
      <a href="/" className={header.header__logo_link} title="Stellar Burger"><Logo/></a>
    </div>
  );
}

type AccountLinkProps = {
  name: string;
};

const AccountLink = ({name}: AccountLinkProps) => {
  return (
    <a href="#" className={`${header.header__account} text text_type_main-default text_color_inactive`}>
      <ProfileIcon type='secondary' />
      {name}
    </a>
  );
}

const AppHeader = () => {
  return (
    <header className={`${header.header} pt-4 pb-4`}>
      <div className="container container--wide">
        <div className={header.header__inner}>
          <Nav>
            <NavItem name="Конструктор" icon={<BurgerIcon type="secondary"/>} active={true} />
            <NavItem name="Лента заказов" icon={<ListIcon type="secondary"/>} active={false} />
          </Nav>
          <HeaderLogo />
          <AccountLink name="Личный кабинет"/>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;