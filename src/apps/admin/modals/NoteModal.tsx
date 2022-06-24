import React, { useCallback, useState } from 'react';

import { Body, Modal, TextareaStateless } from 'ui';
import { Exit } from '../../../icons';
import { Button } from '../ui/Button';
import styles from './NoteModal.module.scss';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  afterClose?: () => void;
  onDone?: (value: string) => void;
  initialValue?: string;
};

export const NoteModal = ({ isOpen, closeModal, afterClose, initialValue = '', onDone }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleDone = useCallback(() => {
    onDone?.(value);
    closeModal();
  }, [closeModal, onDone, value]);

  return (
    <Modal className={styles.modal} isOpen={isOpen} close={closeModal} afterClose={afterClose}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <div className={styles.modal__body}>
        <Body className={styles.modal__title} weight="semi-bold">
          Notes
        </Body>
        <TextareaStateless label="Description" value={value} onChange={setValue} />
        <div className={styles.modal__actions}>
          <Button kind="secondary" onClick={closeModal}>
            Back
          </Button>
          <Button kind="primary" onClick={handleDone}>
            Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};
