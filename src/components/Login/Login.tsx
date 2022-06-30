import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';
import { Form } from 'react-final-form';

import { LoginForm, LoginFormValues } from './LoginForm';
import { Button } from 'ui';
import { useAuth } from '../../hooks';
import { Header } from '../Header';

export const Login = () => {
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      const error = await login(values);
      if (error) {
        return { [FORM_ERROR]: error };
      }
    },
    [login],
  );
  const { user, logout } = useAuth();
  return (
    <>
      <Header logout={logout} user={user} />
      <section className="home-content login-component" style={{ marginTop: '85px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 register-container">
              <div className="register-form-section">
                <div className="form-inner-wrapper">
                  <div className="registration-form">
                    <h1>Login</h1>
                    <Form<LoginFormValues> onSubmit={handleSubmit} component={LoginForm} />
                  </div>

                  <div className="registration-socialmedia">
                    <p className="registration-description">
                      If you don’t already have an account click the button below to create your account.
                    </p>

                    <Link
                      to="registration"
                      component={() => (
                        <Button href="/registration" variant="primary" size="md" isBlock>
                          Register
                        </Button>
                      )}
                    />
                  </div>
                </div>

                <footer className="col-xs-12 col-sm-12 col-md-12 text-center privacy-policy">
                  <p>
                    So you can’t get in to your account? Did you
                    <Link to="/password/forgot">forget your password?</Link>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
