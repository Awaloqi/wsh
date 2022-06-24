import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { composeValidators, email, minLength, required, usPhone } from 'services/formValidator';
import { Button, Input, InputGeo, InputPhone } from 'ui';
import { Fields } from '../../../utils/Fields';

type Props = FormRenderProps<RegistrationFormValues>;

export type RegistrationFormValues = {
  zipCode: string;
  addressLine1: string;
  phone: string;
  email: string;
  password: string;
};

export const RegistrationForm = ({ submitError, handleSubmit, pristine, submitting }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Fields names={['zipCode', 'addressLine1']} validate={{ zipCode: required }}>
        {(fieldState) => <InputGeo label="Address" fieldState={fieldState} placeholder="Address" autofocus />}
      </Fields>

      <Field
        type="text"
        component={InputPhone}
        name="phone"
        validate={composeValidators(required, usPhone)}
        required
        label="Phone Number"
        placeholder="###-###-####"
        mask="999-999-9999"
      />

      <Field
        type="email"
        component={Input}
        name="email"
        validate={composeValidators(required, email)}
        required
        label="Email"
        placeholder="Email"
      />

      <Field
        type="password"
        component={Input}
        name="password"
        validate={composeValidators(required, minLength)}
        required
        label="Password"
        placeholder="Password"
      />

      {submitError && (
        <div className="text-danger" style={{ marginTop: 15 }}>
          Invalid credentials
        </div>
      )}

      <Button className="form-submit" variant="primary" size="md" disabled={pristine || submitting} isBlock>
        Register
      </Button>
    </form>
  );
};
