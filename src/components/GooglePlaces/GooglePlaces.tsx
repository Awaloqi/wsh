import React from 'react';
import { Form } from 'react-final-form';

import { Button, InputGeo } from 'ui';
import { ArrowRight } from 'icons';
import { required } from 'services/formValidator';
import styles from './GooglePlaces.module.css';
import { Fields } from 'utils/Fields';

type Props = {
  onSubmit: (values: AddressValues) => void;
};

export type AddressValues = {
  zipCode: string;
  addressLine1: string;
};

export const GooglePlaces = ({ onSubmit }: Props) => {
  return (
    <Form<AddressValues> onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.container}>
          <Fields names={['zipCode', 'addressLine1']} validate={{ zipCode: required }}>
            {(fieldState) => <InputGeo className={styles.input} label="Address" variant="md" fieldState={fieldState} />}
          </Fields>
          <Button className={styles.button} variant="accent" type="submit">
            Request Pickup
            <ArrowRight />
          </Button>
        </form>
      )}
    </Form>
  );
};
