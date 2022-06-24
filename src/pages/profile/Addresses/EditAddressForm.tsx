import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { maxLength, required } from 'services/formValidator';
import { Button, Checkbox, Input, InputGeo, Textarea } from 'ui';
import styles from './Addresses.module.scss';
import { Fields } from '../../../utils/Fields';

export type EditAddressFormValues = {
  title: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  instructions: string;
  hasDoorman: boolean;
};

export const EditAddressForm = ({ handleSubmit, submitting }: FormRenderProps<EditAddressFormValues>) => {
  const [isChanged, setIsChanged] = React.useState(false);

  return (
    <form onSubmit={handleSubmit} onChange={() => setIsChanged(true)}>
      <Field
        type="text"
        name="title"
        component={Input}
        validate={required}
        required
        placeholder="Address Title"
        label="Address Title"
      />

      <Fields names={['zipCode', 'addressLine1']} validate={{ zipCode: required }}>
        {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
      </Fields>

      <Field type="text" name="addressLine2" component={Input} placeholder="Apt/Suite" label="Apt/Suite" />

      <Field
        name="instructions"
        component={Textarea}
        label="Delivery Instructions"
        placeholder="Type here"
        validate={maxLength}
      />

      <Field name="hasDoorman" type="checkbox" component={Checkbox} label="I have a doorman" />
      {isChanged ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button variant="primary" size="sm" className={styles.information__button} isLoading={submitting}>
        Update
      </Button>
    </form>
  );
};
