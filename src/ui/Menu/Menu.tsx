import React, { MouseEvent } from 'react';
import cn from 'classnames';
import { Menu as ReactMenu, MenuItem, MenuButton, FocusableItem, MenuDivider, MenuHeader } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import styles from './Menu.module.scss';
import { Down, Up } from 'icons';
import { Link } from 'react-router-dom';

type Option =
  | { type: 'button'; label: string; onClick: (e: MouseEvent<HTMLButtonElement>) => void }
  | { type: 'link'; label: any; to: string }
  | { type: 'header'; label: string }
  | { type: 'divider' };

type Props = {
  options: Option[];
  Icon?: any;
  className?: string;
};

export const Menu = ({ options, Icon, className }: Props) => {
  return (
    <div className={cn(styles.menu, className)}>
      <ReactMenu
        align="center"
        offsetY={16}
        className={styles.menu__list}
        menuButton={({ open }: any) => (
          <MenuButton className={styles.menu__button}>
            <Icon className={cn(styles.menu__icon, styles.menu__icon___big)} />
            {open ? <Up className={styles.menu__icon} /> : <Down className={styles.menu__icon} />}
          </MenuButton>
        )}
      >
        {options.map((option, index) => {
          if (option.type === 'button') {
            return (
              <MenuItem className={styles.menu__item} key={index}>
                <button className={styles.menu__itemButton} onClick={option.onClick}>
                  {option.label}
                </button>
              </MenuItem>
            );
          }
          if (option.type === 'link') {
            return (
              <FocusableItem key={index} className={styles.menu__item}>
                {({ ref, closeMenu }: any) => (
                  <Link
                    ref={ref}
                    to={option.to}
                    onClick={({ detail }) => closeMenu(detail === 0 ? 'Enter' : undefined)}
                    className={styles.menu__link}
                  >
                    {option.label}
                  </Link>
                )}
              </FocusableItem>
            );
          }
          if (option.type === 'header') {
            return (
              <MenuHeader className={styles.menu__header} key={index}>
                {option.label}
              </MenuHeader>
            );
          }
          if (option.type === 'divider') {
            return <MenuDivider className={styles.menu__divider} key={index} />;
          }
          return null;
        })}
      </ReactMenu>
    </div>
  );
};
