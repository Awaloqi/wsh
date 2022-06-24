import React, { ReactNode, useCallback, useState } from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import { Address, Down, OrderHistory, Packages, Payment, Phone, Preferences, Profile } from 'icons';
import { formatSum } from 'utils/string';

type Props = {
  balance?: number;
  className?: string;
};

const links: Record<string, { link: string; label: string; icon: ReactNode }> = {
  '/profile': {
    link: '/profile',
    label: 'Profile',
    icon: <Profile />,
  },
  '/profile/address': {
    link: '/profile/address',
    label: 'Addresses',
    icon: <Address />,
  },
  '/profile/phones': {
    link: '/profile/phones',
    label: 'Phones',
    icon: <Phone />,
  },
  '/profile/packages': {
    link: '/profile/packages',
    label: 'Packages',
    icon: <Packages />,
  },
  '/profile/billing': {
    link: '/profile/billing',
    label: 'Billing',
    icon: <Payment />,
  },
  '/profile/orders': {
    link: '/profile/orders',
    label: 'Order history',
    icon: <OrderHistory />,
  },
  '/profile/preferences': {
    link: '/profile/preferences',
    label: 'Preferences',
    icon: <Preferences />,
  },
};
export const SideBar = ({ className, balance }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const link = links[location.pathname] || links['/profile/orders'];

  return (
    <div className={cn(styles.sidebar, className, { [styles.sidebar___isOpen]: isOpen })} onClick={handleToggle}>
      <button
        className={cn(styles.sidebar__button, { [styles.sidebar__button___isOpen]: isOpen })}
        onClick={handleToggle}
      >
        {link.icon} {link.label} <Down />
      </button>
      <div className={cn(styles.sidebar__wrapper, { [styles.sidebar__wrapper___hidden]: !isOpen })}>
        <div className={styles.sidebar__links}>
          {Object.values(links).map(({ icon, label, link }) => (
            <NavLink
              key={link}
              to={link}
              className={styles.sidebar__link}
              isActive={(match, location) =>
                link === '/profile' ? location.pathname === '/profile' : location.pathname.startsWith(link)
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </div>
        <div className={styles.sidebar__info}>AVAILABLE CREDIT: {formatSum(balance)}</div>
      </div>
    </div>
  );
};
