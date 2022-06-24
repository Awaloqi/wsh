import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { FORM_ERROR } from 'final-form';
import { Form } from 'react-final-form';

import { resetPassword } from 'services/apiClient';
import { normalizeAsyncError } from 'utils/object';
import { PasswordResetForm, PasswordResetFormValues } from './PasswordResetForm';
import styles from './Password.module.scss';

type Props = RouteComponentProps<{ token: string; uid: string }>;

const validatePasswords = ({ newPassword, newPasswordConfirm }: PasswordResetFormValues) => {
  return newPassword === newPasswordConfirm ? undefined : { newPasswordConfirm: 'Must be the same' };
};

export const PasswordReset = ({ history, match }: Props) => {
  const handleSubmit = useCallback(
    async ({ newPassword }: PasswordResetFormValues) => {
      const response = await resetPassword({ newPassword, token: match.params.token, uid: match.params.uid }).catch(
        normalizeAsyncError,
      );
      if (response) {
        return { [FORM_ERROR]: response.token };
      }
      history.push('/password/reset/confirm');
    },
    [history, match.params.token, match.params.uid],
  );

  return (
    <div className={styles.password}>
      <div className={styles.password__wrapper}>
        <h1 className={styles.password__title}>Pick a new password</h1>
        <Form<PasswordResetFormValues>
          onSubmit={handleSubmit}
          component={PasswordResetForm}
          validate={validatePasswords}
        />
      </div>
    </div>
  );
};
