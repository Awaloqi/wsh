import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './WelcomeHeader.module.scss';
import { steps } from './steps';

type Props = {
  item: typeof steps[0];
  currentStep?: typeof steps[0]['id'];
  disabled?: boolean;
};

export const WelcomeHeaderItem = ({ item, currentStep, disabled }: Props) => {
  const isActive = currentStep === item.id;
  return (
    <Link
      className={cn(styles.navbar_link, {
        [styles.navbar_link___active]: isActive,
        [styles.navbar_link___disabled]: !isActive && disabled,
      })}
      key={item.url}
      to={item.url}
    >
      {item.title}
    </Link>
  );
};
