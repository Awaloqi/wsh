import React, { useMemo } from 'react';
import { Field, Form } from 'react-final-form';

import { composeValidators, required } from 'services/formValidator';
import { checkRequest } from 'services/apiClient';
import { Button, Datepicker, H4, ModalEdit } from 'ui';
import { normalizeAsyncError } from 'utils/object';
import styles from './Modal.module.scss';

type Props = {
  close: () => void;
  isOpen: boolean;
  isRush: boolean;
  pickupDate: string;
  onSubmit: (values: PickupFormValues) => void;
};

export type PickupFormValues = {
  pickupDate: string;
};

const validate = (values: PickupFormValues) =>
  checkRequest({ pickupDate: values.pickupDate, pickupStart: '9:00' })
    .catch(normalizeAsyncError)
    .then((e) => {
      if ('nonFieldErrors' in e) {
        return { ...e, pickupDate: e.nonFieldErrors };
      }
    });

export const ModalDate = ({ close, isRush, isOpen, pickupDate, onSubmit }: Props) => {
  const initialValues = useMemo(() => ({ pickupDate }), [pickupDate]);

  return (
    <ModalEdit isOpen={isOpen} close={close}>
      <H4 className={styles.modal__title}>Pickup Date</H4>
      <Form<PickupFormValues> onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
        {({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="pickupDate"
              component={Datepicker}
              label="Pickup Date"
              placeholder="Pickup Date"
              isRush={isRush}
              validate={composeValidators(required)}
            />
            <Button variant="primary" size="md" className={styles.modal__submit} disabled={invalid} isBlock>
              Update
            </Button>
          </form>
        )}
      </Form>
    </ModalEdit>
  );
};
