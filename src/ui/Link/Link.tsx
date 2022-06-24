import React, { ReactNode } from 'react';
import { Link as RouterLink, LinkProps as ReactLinkProps } from 'react-router-dom';
import cn from 'classnames';

import styles from './Link.module.scss';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'accent';
};

type ButtonProps = {
  onClick?: () => void;
};

type Props = CommonProps & (ReactLinkProps | ButtonProps);

export const Link = ({ className, variant = 'primary', children, ...rest }: Props) => {
  const classNames = cn(styles.link, className, {
    [styles.link__accent]: variant === 'accent',
  });
  if ('to' in rest) {
    return (
      <RouterLink {...rest} className={classNames}>
        {children}
      </RouterLink>
    );
  }
  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
};
