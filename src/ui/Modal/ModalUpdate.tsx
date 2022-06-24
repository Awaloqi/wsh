import React, { ReactNode } from 'react';

import styles from './Modal.module.scss';
import { Modal } from './Modal';

type Props = {
  isOpen: boolean;
  close?: () => void;
  children: ReactNode;
};

export const ModalUpdate = ({ close, children, ...rest }: Props) => {
  return (
    <Modal {...rest} close={close} className={styles.modal__content___update}>
      {children}
    </Modal>
  );
};
