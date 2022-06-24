import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { Body2, Button, Input } from 'ui';
import { composeValidators, email, minLength, required } from 'services/formValidator';

export type LoginFormValues = {
  email: string;
  password: string;
};

type Props = FormRenderProps<LoginFormValues>;

export const LoginForm = ({ handleSubmit, pristine, submitting, submitError }: Props) => (
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

    {submitError && <Body2 color="red">{submitError}</Body2>}

    <Button disabled={pristine || submitting} variant="primary" size="md" isBlock>
      Sign In
    </Button>
  </form>
);
