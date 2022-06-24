import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

type Props = {
  Icon: FC;
  label: string;
  variant?: 'primary' | 'outline-primary';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export const ButtonIcon = ({ variant, label, className, Icon, ...props }: Props) => {
  return (
    <button
      title={label}
      className={cn(styles.button, styles.button_icon, className, {
        [styles.button_primary]: variant === 'primary',
        [styles.button_primary_outline]: variant === 'outline-primary',
      })}
      {...props}
    >
      <Icon />
    </button>
  );
};
