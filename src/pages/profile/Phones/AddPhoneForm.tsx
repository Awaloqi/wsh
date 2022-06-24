import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { composeValidators, required, usPhone } from 'services/formValidator';
import { Button, Input, InputPhone } from 'ui';
import styles from './Phones.module.scss';

export type AddPhoneFormValues = {
  title: string;
  number: string;
};

export const AddPhoneForm = ({ handleSubmit, submitting }: FormRenderProps<AddPhoneFormValues>) => {
  const [isChanged, setIsChanged] = React.useState(false);

  return (
    <form onSubmit={handleSubmit} onChange={() => setIsChanged(true)}>
      <Field
        type="text"
        name="title"
        component={Input}
        validate={required}
        required
        placeholder="Phone Title"
        label="Phone Title"
      />

      <Field
        type="text"
        component={InputPhone}
        name="number"
        validate={composeValidators(required, usPhone)}
        required
        label="Phone Number"
        placeholder="###-###-####"
        mask="999-999-9999"
      />
      {isChanged ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button variant="primary" size="sm" className={styles.phones__button} isLoading={submitting}>
        Add
      </Button>
    </form>
  );
};
