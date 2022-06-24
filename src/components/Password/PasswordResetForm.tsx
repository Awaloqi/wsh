import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { composeValidators, minLength, required } from 'services/formValidator';
import { Button, Input } from 'ui';
import styles from './PasswordForm.module.scss';

export type PasswordResetFormValues = {
  newPassword: string;
  newPasswordConfirm: string;
};

export const PasswordResetForm = ({
  handleSubmit,
  submitError,
  submitting,
}: FormRenderProps<PasswordResetFormValues>) => {
  return (
    <form className={styles.passwordForm} onSubmit={handleSubmit}>
      <Field
        name="newPassword"
        type="password"
        component={Input}
        validate={composeValidators(required, minLength)}
        label="New Password"
        placeholder="Enter your new password"
      />
      <Field
        name="newPasswordConfirm"
        type="password"
        component={Input}
        validate={required}
        label="Type it again"
        placeholder="Enter your new password again"
      />
      {submitError && (
        <div className="text-danger" style={{ marginTop: 15 }}>
          {submitError}
        </div>
      )}
      <div className={styles.passwordForm__actions}>
        <Button variant="primary" size="md" onClick={handleSubmit} disabled={submitting}>
          Change Password
        </Button>
      </div>
    </form>
  );
};
