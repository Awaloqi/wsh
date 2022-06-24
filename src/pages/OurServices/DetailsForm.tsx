import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { Input, InputPhone, Checkbox, Button } from 'ui';
import { composeValidators, email, required, usPhone } from 'services/formValidator';
import styles from './OurServices.module.scss';

export type DetailsFormValues = {
  fullName: string;
  phone: string;
  email: string;
  accept: boolean;
};

type Props = FormRenderProps<DetailsFormValues>;

export const DetailsForm = ({ handleSubmit }: Props) => {
  return (
    <form className={styles.detailsForm} onSubmit={handleSubmit}>
      <Field name="fullName" component={Input} label="" placeholder="Name" validate={required} />
      <Field
        component={InputPhone}
        name="phone"
        validate={composeValidators(usPhone, required)}
        label=""
        placeholder="###-###-####"
        mask="999-999-9999"
      />
      <Field
        name="email"
        component={Input}
        label=""
        placeholder="Email"
        validate={composeValidators(email, required)}
      />

      <Button variant="primary" size="md" isBlock className={styles.detailsForm_button}>
        Submit
      </Button>
      <br />
      <Field
        name="accept"
        type="checkbox"
        component={Checkbox}
        label="Accept Terms & Condition & Privacy Statement"
        validate={required}
      />
    </form>
  );
};
