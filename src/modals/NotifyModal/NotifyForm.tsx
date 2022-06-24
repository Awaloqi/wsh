import React from 'react';
import { FormRenderProps, Field } from 'react-final-form';

import { Button, Input, InputPhone } from 'ui';
import { composeValidators, email, required, usPhone } from 'services/formValidator';

export type CustomerFormValues = {
  email: string;
  phone: string;
};

type Props = FormRenderProps<CustomerFormValues>;

export const NotifyForm = ({ handleSubmit, pristine, submitError, submitting }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="email"
        component={Input}
        name="email"
        validate={composeValidators(required, email)}
        label="Email"
        placeholder="Enter Email"
      />
      <Field
        type="text"
        component={InputPhone}
        name="phone"
        validate={usPhone}
        label="Phone Number"
        placeholder="###-###-####"
        mask="999-999-9999"
      />

      {submitError && (
        <div className="text-danger" style={{ marginTop: 15 }}>
          {submitError}
        </div>
      )}

      <Button disabled={pristine || submitting} variant="primary" isBlock size="md">
        Notify me
      </Button>
    </form>
  );
};
