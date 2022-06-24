import React from 'react';
import { Button } from 'ui';
import styles from './Password.module.scss';
import formStyles from './PasswordForm.module.scss';

export const PasswordResetConfirm = () => {
  return (
    <div className={styles.password}>
      <div className={styles.password__wrapper}>
        <h1 className={styles.password__title}>Password Changed!</h1>
        <div className={styles.password__description}>Your password has been changed successfully.</div>

        <div className={formStyles.passwordForm}>
          <div className={formStyles.passwordForm__actions}>
            <Button variant="primary" size="md" href="/login">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
