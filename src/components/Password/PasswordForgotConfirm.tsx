import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import styles from './Password.module.scss';
import { contacts } from '../../constants';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = RouteComponentProps<{}, StaticContext, { email?: string }>;

export const PasswordForgotConfirm = ({ location }: Props) => {
  return (
    <div className={styles.password}>
      <div className={styles.password__wrapper}>
        <h1 className={styles.password__title}>Email Sent!</h1>
        <div className={styles.password__description}>
          IF you have an account established with this Email, an email will be sent to{' '}
          <strong>{location?.state?.email}</strong> so you can pick your new password.
        </div>
        <div className={styles.password__description}>
          Didn’t get the email? Call us at <a href={contacts.phoneLink}>{contacts.phoneNumber}</a> or email us at{' '}
          <a href={contacts.emailCSLink}>{contacts.emailCS}</a>.
        </div>
        <div className={styles.password__description}>
          Not your email address? <a href="/password/forgot">Try again.</a>
        </div>
      </div>
    </div>
  );
};
