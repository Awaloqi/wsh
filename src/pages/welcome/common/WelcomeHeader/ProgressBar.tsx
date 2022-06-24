import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from './WelcomeHeader.module.scss';
import { steps } from './steps';

type Step = typeof steps[0]['id'];

type Props = {
  step?: Step;
};

export const ProgressBar = ({ step }: Props) => {
  const currentIndex = useMemo(() => steps.findIndex(({ id }) => id === step), [step]);
  return (
    <div className={cn(styles.progressBar, styles[`progressBar___step_${step}`])}>
      <div
        className={cn(styles.progressStrip)}
        role="progressbar"
        aria-valuenow={currentIndex}
        aria-valuemin={0}
        aria-valuemax={3}
      />
    </div>
  );
};
