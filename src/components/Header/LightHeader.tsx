import React, { ReactNode, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styles from './Header.module.scss';
import { Menu } from 'ui';
import { Profile } from 'icons';
//import logo from '../../assets/logo-top.png';
import logo from '../../assets/newImages/logo.svg';
import requestPickupIcon from '../../assets/request-pickup.svg';
import myAccountIcon from '../../assets/my-account.svg';
import upcomingOrdersIcon from '../../assets/upcoming-orders.svg';
import { useApi } from 'hooks';

type Props = {
  user?: { token: string; email: string };
  logout: () => void;
};

const MenuLink = ({ children }: { children: ReactNode }) => <span>{children}</span>;

export const LightHeader = ({ user, logout }: Props) => {
  const nav = useRef(null as HTMLUListElement | null);
  const [isOpen, setOpen] = useState(false);
  const [prof, setProf] = useState<any>();

  const { getProfile } = useApi();

  useEffect(() => {
    if (!prof)
      getProfile()
        .then((res) => setProf(res))
        .catch();
  });

  const [styleHeder, setStyleHeder] = useState({ backgroundColor: 'transparent' });
  const [colorTextLogo, setColorTextLogo] = useState({ color: '#FFF' });

  useEffect(() => {
    if (nav.current) {
      window.scrollTo(0, 0);
      if (isOpen) {
        disableBodyScroll(nav.current);
      } else {
        enableBodyScroll(nav.current);
      }
    }
    return () => clearAllBodyScrollLocks();
  }, [isOpen, nav]);

  const handleMenuClick = () => {
    setOpen(!isOpen);
    styleHeder.backgroundColor === '#FFF'
      ? setStyleHeder({ backgroundColor: 'transparent' })
      : setStyleHeder({ backgroundColor: '#FFF' });
    colorTextLogo.color === '#FFF' ? setColorTextLogo({ color: '#003459' }) : setColorTextLogo({ color: '#FFF' });
  };

  const handleLogoutClick = () => {
    setProf(null);
    logout();
    closeMenu();
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <header className="new-header" style={styleHeder}>
      <div className={styles.header__wrapper}>
        <Link to="/" className={styles.header__brand} onClick={closeMenu}>
          <img alt="WashMix Logo" src={logo} width="48px" height="48px" />
          <span className="text-logo" style={colorTextLogo}>
            washmix<label>&#174;</label>
          </span>
        </Link>
        <nav className={styles.nav}>
          <button
            className={styles.nav__toggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'close menu' : 'menu'}
            type="button"
            onClick={handleMenuClick}
          >
            <div className={cn(styles.hamburger, { [styles.hamburger___isActive]: isOpen })}>
              <div className={styles.hamburger__box}>
                <div className={styles.hamburger__inner} />
              </div>
            </div>
          </button>
          <ul
            className={cn(styles.nav__wrapper, { [styles.nav__wrapper___active]: isOpen })}
            ref={nav}
            style={{ marginTop: '-5px' }}
          >
            {user?.token && (
              <>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <div className={styles.nav__link}>Hello {prof ? prof.firstName : user.email}!</div>
                </li>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <NavLink className={styles.nav__link} to="/pickup" onClick={closeMenu}>
                    <img className={styles.icon} src={requestPickupIcon} alt="Pickup Icon" />
                    Request Pickup
                  </NavLink>
                </li>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <NavLink className={styles.nav__link} to="/profile" onClick={closeMenu}>
                    <img className={styles.icon} src={myAccountIcon} alt="Pickup Icon" />
                    My Account
                  </NavLink>
                </li>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <NavLink className={styles.nav__link} to="/upcoming" onClick={closeMenu}>
                    <img className={styles.icon} src={upcomingOrdersIcon} alt="Pickup Icon" />
                    Upcoming Orders
                  </NavLink>
                </li>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <div className={styles.nav__divider} />
                </li>
              </>
            )}
            <li className={styles.nav__item}>
              <NavLink
                className={styles.nav__link}
                activeClassName={styles.nav__link___active}
                data-text="How It Works"
                to="/hiw"
                onClick={closeMenu}
              >
                How It Works
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={styles.nav__link}
                activeClassName={styles.nav__link___active}
                data-text="Services"
                to="/services"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            {/* <li className={styles.nav__item}>
              <NavLink
                className={styles.nav__link}
                activeClassName={styles.nav__link___active}
                data-text="advantages"
                to="/advantage"
                onClick={closeMenu}
              >
                Advantage
              </NavLink>
            </li> */}
            <li className={styles.nav__item}>
              <NavLink
                className={styles.nav__link}
                activeClassName={styles.nav__link___active}
                data-text="pricing"
                to="/pricing"
                onClick={closeMenu}
              >
                Pricing
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={styles.nav__link}
                activeClassName={styles.nav__link___active}
                data-text="FAQs"
                to="/faqs"
                onClick={closeMenu}
              >
                FAQs
              </NavLink>
            </li>

            {user?.token ? (
              <>
                <li className={cn(styles.nav__item, styles.nav__item___mobile)}>
                  <button className={styles.nav__link} onClick={handleLogoutClick}>
                    Logout
                  </button>
                </li>
                <li className={cn(styles.nav__item, styles.nav__item___end, styles.nav__item___desktop)}>
                  <Menu
                    className={styles.nav__userMenu}
                    Icon={Profile}
                    options={[
                      { type: 'header', label: `Hello ${prof ? prof.firstName : user.email}!` },
                      {
                        type: 'link',
                        label: (
                          <MenuLink>
                            <img className={styles.icon} src={requestPickupIcon} alt="Pickup Icon" />
                            Request Pickup
                          </MenuLink>
                        ),
                        to: '/pickup',
                      },
                      {
                        type: 'link',
                        label: (
                          <MenuLink>
                            <img className={styles.icon} src={myAccountIcon} alt="Pickup Icon" />
                            My Account
                          </MenuLink>
                        ),
                        to: '/profile',
                      },
                      {
                        type: 'link',
                        label: (
                          <MenuLink>
                            <img className={styles.icon} src={upcomingOrdersIcon} alt="Pickup Icon" />
                            Upcoming Orders
                          </MenuLink>
                        ),
                        to: '/upcoming',
                      },
                      { type: 'divider' },
                      { type: 'button', label: 'Logout', onClick: handleLogoutClick },
                    ]}
                  />
                </li>
              </>
            ) : (
              <>
                <li className={cn(styles.nav__item, styles.nav__item___end)}>
                  <NavLink
                    className={styles.nav__link}
                    activeClassName={styles.nav__link___active}
                    data-text="Login"
                    to="/login"
                    onClick={closeMenu}
                  >
                    Login
                  </NavLink>
                </li>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__button} to="/registration" onClick={closeMenu}>
                    Request Pickup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
