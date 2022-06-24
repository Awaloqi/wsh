import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';

import { Body, Input, Modal, Textarea } from 'ui';
import { Exit } from 'icons';
import { required } from 'services/formValidator';
import { Button } from '../ui/Button';
import styles from './NoteModal.module.scss';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  afterClose?: () => void;
  onDone?: (name: string, instructions: string, price: number) => void;
};

type CustomModalForm = {
  name: string;
  instructions: string;
  price: string;
};

export const CustomModal = ({ isOpen, closeModal, afterClose, onDone }: Props) => {
  const handleDone = useCallback(
    (values: CustomModalForm) => {
      onDone?.(values.name, values.instructions, (Number(values.price) || 0) * 100);
      closeModal();
    },
    [closeModal, onDone],
  );

  return (
    <Modal className={styles.modal} isOpen={isOpen} close={closeModal} afterClose={afterClose}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <Form<CustomModalForm> onSubmit={handleDone}>
        {({ handleSubmit }) => (
          <form className={styles.modal__body} onSubmit={handleSubmit}>
            <Body className={styles.modal__title} weight="semi-bold">
              Custom Item
            </Body>
            <Field name="name" component={Input} label="Item Name" required validate={required} />
            <Field name="instructions" component={Textarea} label="Special Instructions" required validate={required} />
            <Field name="price" component={Input} label="Item Price" required validate={required} />
            <div className={styles.modal__actions}>
              <Button kind="secondary" onClick={closeModal}>
                Back
              </Button>
              <Button kind="primary">Done</Button>
            </div>
          </form>
        )}
      </Form>
    </Modal>
  );
};
