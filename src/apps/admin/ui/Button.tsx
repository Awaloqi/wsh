import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type Props = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  kind?: 'primary' | 'secondary';
  children: ReactNode;
};

export const Button = ({ className, kind = 'primary', isLoading, disabled, children, ...rest }: Props) => {
  return (
    <button
      className={cn(styles.button, className, { [styles.button___secondary]: kind === 'secondary' })}
      disabled={disabled || isLoading}
      {...rest}
    >
      <span className={cn(styles.button__label, { [styles.button__label___loading]: isLoading })}>{children}</span>
      {isLoading && <i className={styles.button__loading} />}
    </button>
  );
};
