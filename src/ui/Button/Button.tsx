import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';
import styles from './Button.module.scss';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'outline-primary' | 'outline-accent';
  disabled?: boolean;
  size?: 'sm' | 'md';
  isBlock?: boolean;
  type?: 'submit' | 'button';
  isLoading?: boolean;
};

type ButtonProps = {
  onClick?: () => void;
};

type LinkProps = {
  href: string;
};

type Props = CommonProps & (RouterLinkProps | ButtonProps | LinkProps);

export const Button = ({ className, variant, size, isBlock, isLoading, disabled, children, ...props }: Props) => {
  const classNames = cn(styles.button, className, {
    [styles.button_primary]: variant === 'primary',
    [styles.button_accent]: variant === 'accent',
    [styles.button_primary_outline]: variant === 'outline-primary',
    [styles.button_outline_accent]: variant === 'outline-accent',
    [styles.button_small]: size === 'sm',
    [styles.button_medium]: size === 'md',
    [styles.button_block]: isBlock,
    [styles.button_loading]: isLoading,
  });

  if ('to' in props) {
    return (
      <Link {...props} className={classNames}>
        {children}
      </Link>
    );
  }
  if ('href' in props) {
    const linkProps = props.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a {...props} {...linkProps} className={classNames}>
        {children}
      </a>
    );
  }
  return (
    <button {...props} className={classNames} disabled={disabled || isLoading}>
      {children}
    </button>
  );
};
