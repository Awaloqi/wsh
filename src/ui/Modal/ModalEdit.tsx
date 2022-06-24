import React, { ReactNode } from 'react';

import styles from './Modal.module.scss';
import { Modal } from './Modal';
import { Exit } from 'icons';

type Props = {
  isOpen: boolean;
  close?: () => void;
  children: ReactNode;
};

export const ModalEdit = ({ close, children, ...rest }: Props) => {
  return (
    <Modal {...rest} close={close} className={styles.modal__content___edit}>
      <div className={styles.modal__header}>
        <Exit className={styles.modal__close} onClick={close} />
      </div>
      {children}
    </Modal>
  );
};
