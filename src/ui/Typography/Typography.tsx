import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Typography.module.scss';

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

export const H1 = ({ className, children }: HeaderProps) => {
  return <h1 className={cn(styles.h1, className)}>{children}</h1>;
};

export const H2 = ({ className, children }: HeaderProps) => {
  return <h2 className={cn(styles.h2, className)}>{children}</h2>;
};

export const H3 = ({ className, children }: HeaderProps) => {
  return <h3 className={cn(styles.h3, className)}>{children}</h3>;
};

export const H4 = ({ className, children }: HeaderProps) => {
  return <h4 className={cn(styles.h4, className)}>{children}</h4>;
};

export const Title = ({ className, children }: HeaderProps) => {
  return <div className={cn(styles.title, className)}>{children}</div>;
};

type BodyProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold';
  color?: 'black' | 'grey' | 'dark-grey' | 'red' | 'green';
  fontStyle?: 'normal' | 'italic';
};

export const Body = ({
  className,
  as = 'div',
  weight = 'normal',
  color = 'black',
  fontStyle = 'normal',
  children,
}: BodyProps) => {
  const Component = as;
  return (
    <Component
      className={cn(styles.body, className, {
        [styles.light]: weight === 'light',
        [styles.medium]: weight === 'medium',
        [styles.semiBold]: weight === 'semi-bold',
        [styles.bold]: weight === 'bold',
        [styles.italic]: fontStyle === 'italic',
        [styles.grey]: color === 'grey',
        [styles.darkGrey]: color === 'dark-grey',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
      })}
    >
      {children}
    </Component>
  );
};

type Body2Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold';
  color?: 'white' | 'black' | 'grey' | 'dark-grey' | 'red' | 'green';
  fontStyle?: 'normal' | 'italic';
};

export const Body2 = ({
  className,
  as = 'div',
  weight = 'normal',
  color = 'black',
  fontStyle = 'normal',
  children,
}: Body2Props) => {
  const Component = as;
  return (
    <Component
      className={cn(styles.body2, className, {
        [styles.light]: weight === 'light',
        [styles.medium]: weight === 'medium',
        [styles.semiBold]: weight === 'semi-bold',
        [styles.bold]: weight === 'bold',
        [styles.italic]: fontStyle === 'italic',
        [styles.grey]: color === 'grey',
        [styles.darkGrey]: color === 'dark-grey',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.white]: color === 'white',
      })}
    >
      {children}
    </Component>
  );
};

export const Caption = ({
  className,
  as = 'span',
  weight = 'normal',
  color = 'black',
  fontStyle = 'normal',
  children,
}: Body2Props) => {
  const Component = as;
  return (
    <Component
      className={cn(styles.caption, className, {
        [styles.light]: weight === 'light',
        [styles.medium]: weight === 'medium',
        [styles.semiBold]: weight === 'semi-bold',
        [styles.bold]: weight === 'bold',
        [styles.italic]: fontStyle === 'italic',
        [styles.grey]: color === 'grey',
        [styles.darkGrey]: color === 'dark-grey',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.white]: color === 'white',
      })}
    >
      {children}
    </Component>
  );
};

type SmallProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  color?: 'black' | 'grey' | 'dark-grey' | 'red' | 'green';
};

export const Small = ({ className, as = 'div', weight = 'normal', color = 'black', children }: SmallProps) => {
  const Component = as;
  return (
    <Component
      className={cn(styles.small, className, {
        [styles.light]: weight === 'light',
        [styles.medium]: weight === 'medium',
        [styles.bold]: weight === 'bold',
        [styles.grey]: color === 'grey',
        [styles.darkGrey]: color === 'dark-grey',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
      })}
    >
      {children}
    </Component>
  );
};
