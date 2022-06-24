import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';

import { Body, Body2, Input, Modal } from 'ui';
import { Exit } from 'icons';
import { composeValidators, number, required } from 'services/formValidator';
import { Button } from '../ui/Button';
import styles from './NoteModal.module.scss';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  afterClose?: () => void;
  onSubmit?: (price: string) => void;
  initialRushAmount?: string;
};

type DeliveryForm = {
  price: string;
};

export const DeliveryModal = ({ isOpen, closeModal, afterClose, onSubmit, initialRushAmount }: Props) => {
  const handleSubmit = useCallback(
    (values: DeliveryForm) => {
      onSubmit?.(values.price);
      closeModal();
    },
    [closeModal, onSubmit],
  );

  const initialValues = useMemo(
    () => ({
      price: initialRushAmount,
    }),
    [initialRushAmount],
  );

  return (
    <Modal className={styles.modal} isOpen={isOpen} close={closeModal} afterClose={afterClose}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <div className={styles.modal__body}>
        <Body className={styles.modal__title} weight="semi-bold">
          Rush
        </Body>
        <Body2 className={styles.modal__title}>Enter the price for delivery</Body2>
        <div className={styles.modal__services}>
          <Form<DeliveryForm> onSubmit={handleSubmit} initialValues={initialValues}>
            {(props) => (
              // eslint-disable-next-line react/prop-types
              <form onSubmit={props.handleSubmit}>
                <Field
                  name="price"
                  label="Price"
                  component={Input}
                  autoFocus
                  validate={composeValidators(required, number)}
                />
                <Button kind="secondary">Submit</Button>
              </form>
            )}
          </Form>
        </div>
      </div>
    </Modal>
  );
};
