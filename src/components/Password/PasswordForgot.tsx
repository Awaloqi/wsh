import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-final-form';

import { forgotPassword } from 'services/apiClient';
import { PasswordForgotForm, ResetPasswordFormValues } from './PasswordForgotForm';
import styles from './Password.module.scss';

export const PasswordForgot = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values: ResetPasswordFormValues) => {
      await forgotPassword(values);
      history.push('/password/forgot/confirm', { email: values.email });
    },
    [history],
  );

  return (
    <div className={styles.password}>
      <div className={styles.password__wrapper}>
        <h1 className={styles.password__title}>Forgot your password?</h1>
        <div className={styles.password__description}>
          Hey, it happens to everyone. Just let us know what email address you use to login and we’ll send you an email
          with instructions.
        </div>
        <Form<ResetPasswordFormValues> onSubmit={handleSubmit} component={PasswordForgotForm} />
      </div>
    </div>
  );
};
