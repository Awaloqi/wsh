import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { composeValidators, email, minLength, required } from 'services/formValidator';
import { Button, Checkbox, Input } from 'ui';

type Props = FormRenderProps<LoginFormValues>;

export type LoginFormValues = {
  email: string;
  password: string;
  saveSession: boolean;
};

export const LoginForm = ({ submitError, handleSubmit, pristine, submitting }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={Input}
        type="email"
        validate={composeValidators(required, email)}
        label="User Name"
        placeholder="User Name"
        required
      />

      <Field
        name="password"
        component={Input}
        type="password"
        validate={composeValidators(required, minLength)}
        label="Password"
        placeholder="Password"
        required
      />

      {submitError && <div className="login-error">The email address or password you entered is incorrect.</div>}

      <Field
        name="saveSession"
        component={Checkbox}
        type="checkbox"
        label="Keep me signed in"
        className="saveSession"
      />

      <Button disabled={pristine || submitting} variant="primary" size="md" isBlock>
        Sign In
      </Button>
    </form>
  );
};
