import { Exit } from 'icons';
import React from 'react';

import { Body, Body2, Button, Modal } from 'ui';
import styles from './ModalReschedule.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
};

export const ModalReschedule = ({ isOpen, close, onConfirm }: Props) => {
  return (
    <Modal isOpen={isOpen} close={close} className={styles.modal}>
      <Exit className={styles.modal_close} onClick={close} />
      <Body className={styles.modal_header}>Reschedule your pickup?</Body>
      <Body2>You can request a pickup again. Would you like to reschedule for later?</Body2>
      <div className={styles.modal_actions}>
        <Button isBlock size="sm" variant="outline-primary" onClick={close}>
          Cancel
        </Button>
        <Button isBlock size="sm" variant="primary" onClick={onConfirm}>
          Reschedule
        </Button>
      </div>
    </Modal>
  );
};
