import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { required } from 'services/formValidator';
import { Button, Input, InputGeo } from 'ui';
import styles from './Billing.module.scss';
import { Fields } from 'utils/Fields';

export type BillingAddressFormValues = {
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
};

type Props = FormRenderProps<BillingAddressFormValues>;

export const BillingAddressForm = ({ handleSubmit, submitting }: Props) => {
  const [isChanged, setIsChanged] = React.useState(false);

  return (
    <form onSubmit={handleSubmit} onChange={() => setIsChanged(true)}>
      <Fields names={['zipCode', 'addressLine1']} validate={{ zipCode: required }}>
        {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
      </Fields>
      <Field name="addressLine2" component={Input} label="Apt/Suite (Optional)" placeholder="Apt/Suite" />
      {isChanged ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button variant="primary" size="sm" className={styles.cards__button} isLoading={submitting}>
        Update
      </Button>
    </form>
  );
};
