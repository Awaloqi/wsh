import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { composeValidators, email, required } from 'services/formValidator';
import { Button, Input } from 'ui';
import styles from './PasswordForm.module.scss';

export type ResetPasswordFormValues = {
  email: string;
};

export const PasswordForgotForm = ({ handleSubmit, submitting }: FormRenderProps<ResetPasswordFormValues>) => {
  return (
    <form onSubmit={handleSubmit} className={styles.passwordForm}>
      <Field
        name="email"
        type="text"
        component={Input}
        validate={composeValidators(required, email)}
        label="Email Address"
        placeholder="Enter your email address"
        required
      />
      <div className={styles.passwordForm__actions}>
        <Button variant="primary" size="md" onClick={handleSubmit} disabled={submitting}>
          Send
        </Button>
      </div>
    </form>
  );
};
