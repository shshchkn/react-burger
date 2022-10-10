import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header.module.scss';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className="container container--wide">
        <div className={styles.header__inner}>
          <nav className={styles.header__nav}>
            <ul className={`${styles.header__nav_menu} menu`}>
              <li className={styles.menu__item}>
                {/* eslint-disable-next-line */}
                <a href="#" className={`${styles.menu__item_link} text text_type_main-default text_color_inactive ${styles.menu__item_link_active}`}>
                  <BurgerIcon type="secondary"/> Конструктор
                </a>
              </li>
              <li className={styles.menu__item}>
                {/* eslint-disable-next-line */}
                <a href="#" className={`${styles.menu__item_link} text text_type_main-default text_color_inactive`}>
                  <ListIcon type="secondary"/> Лента заказов
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.header__logo}>
            <a href="/" className={styles.header__logo_link} title="Stellar Burger"><Logo/></a>
          </div>
          {/* eslint-disable-next-line */}
          <a href="#" className={`${styles.header__account} text text_type_main-default text_color_inactive`}>
            <ProfileIcon type='secondary'/> Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;