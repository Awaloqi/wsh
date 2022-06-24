import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { FORM_ERROR } from 'final-form';
import { Form } from 'react-final-form';
import { useMutation } from 'react-query';
import moment from 'moment';

import { H3, Link } from 'ui';
import { cleanUser, getUser, saveUserStorage } from 'services/storage';
import { normalizeAsyncError } from 'utils/object';
import styles from './Driver.module.scss';
import { LoginForm, LoginFormValues } from './LoginForm';
import { postLogin } from './apiDriver';
import { Deliveries } from './Deliveries';
import { Timer } from './Timer';

const initialUserState = getUser();

export const Driver = () => {
  const [user, setUser] = useState(initialUserState);
  const [login] = useMutation(postLogin, { throwOnError: true });

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      const response = await login(values).catch(normalizeAsyncError);
      if (response && 'token' in response) {
        const user = { token: response.token, email: values.email, loginTime: moment().toISOString() };
        setUser(user);
        saveUserStorage(user);
      } else {
        return { [FORM_ERROR]: response?.detail ?? 'Something went wrong' };
      }
    },
    [login],
  );

  const handleOnTimeout = useCallback(() => {
    cleanUser();
    document.location.reload();
  }, []);

  const handleLogout = useCallback(() => {
    setUser(undefined);
    cleanUser();
  }, []);

  return (
    <div>
      <div className={cn(styles.driver, { [styles.driver___login]: !user?.token })}>
        <div className={styles.driver__container}>
          {user?.token ? (
            <>
              <H3 className={styles.driver__title}>
                {user.email} / <Link onClick={handleLogout}>Logout</Link>
              </H3>
              <div>
                Logout in <Timer onTimeout={handleOnTimeout} initialTime={user.loginTime} />
              </div>
              <Deliveries />
            </>
          ) : (
            <Form<LoginFormValues> onSubmit={handleSubmit} component={LoginForm} />
          )}
        </div>
      </div>
    </div>
  );
};
