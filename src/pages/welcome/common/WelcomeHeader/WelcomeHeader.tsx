import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import styles from './WelcomeHeader.module.scss';
import { ProgressBar } from './ProgressBar';
import { steps } from './steps';
import { WelcomeHeaderItem } from './WelcomeHeaderItem';

type Step = typeof steps[0]['id'];

type Props = {
  step?: Step;
  disabledSteps?: Step[];
};

export const WelcomeHeader = ({ step, disabledSteps }: Props) => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_header}>
          <Link className={styles.navbar_brand} to="/">
            <img alt="WashMix Logo" src={logo} width="48" height="48" />
          </Link>

          <div className={styles.navbar_nav}>
            {steps.map((item) => (
              <WelcomeHeaderItem
                key={item.id}
                currentStep={step}
                item={item}
                disabled={disabledSteps?.includes(item.id)}
              />
            ))}
          </div>
        </div>
      </nav>
      <ProgressBar step={step} />
    </div>
  );
};
