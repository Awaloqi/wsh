import React, { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-final-form';

import { RegistrationForm, RegistrationFormValues } from './RegistrationForm';
import { Button } from 'ui';
import { getZipCodes, register } from 'services/apiClient';
import { useAuth } from 'hooks';
import { useModal } from 'modals';
import { normalizeAsyncError } from 'utils/object';

export const Registration = () => {
  const history = useHistory();
  const { login, addressLine1, setZipCode, setAddressLine1 } = useAuth();
  const { openModal } = useModal();
  const { data: zipCodes } = useQuery('locations', getZipCodes);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialValues = useMemo(() => ({ addressLine1 }), []);

  const handleSubmit = useCallback(
    async ({ email, password, phone, addressLine1, zipCode }: RegistrationFormValues) => {
      setZipCode(zipCode);
      setAddressLine1(addressLine1);

      window.localStorage.removeItem('washmix-welcome-packages');
      window.localStorage.removeItem('washmix-welcome-delivery');

      if (zipCodes && zipCodes.includes(zipCode)) {
        const error = await register({ zipCode, addressLine1, email, password, phone: `+1 ${phone}` })
          .then(() => undefined)
          .catch(normalizeAsyncError);
        if (error) {
          return error;
        }
        await login({ email, password, saveSession: true });
        history.push('/order/advantage');
      } else {
        openModal('NOTIFY', { addressLine1, zipCode });
      }
    },
    [setZipCode, setAddressLine1, zipCodes, login, history, openModal],
  );

  return (
    <section className="main-container registration-section">
      <div className="registration-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 register-container">
              <div className="register-form-section">
                <div className="registration-form">
                  <h1>Register</h1>
                  <Form<RegistrationFormValues>
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    component={RegistrationForm}
                  />
                </div>

                <div className="registration-socialmedia">
                  <p className="registration-description">
                    If you already have an account click the button below to sign in.
                  </p>
                  <Link
                    to="/login"
                    component={() => (
                      <Button variant="primary" size="md" href="/login" isBlock>
                        Sign In
                      </Button>
                    )}
                  />
                </div>
              </div>
              <footer className="col-xs-12 col-sm-12 col-md-12 text-center privacy-policy">
                <p>
                  By clicking above, you agree to our
                  <Link to="/terms-of-use">
                    {' '}
                    Terms
                    <br /> of Use
                  </Link>{' '}
                  and consent to our
                  <Link to="/privacy-policy"> Privacy Policy</Link>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
