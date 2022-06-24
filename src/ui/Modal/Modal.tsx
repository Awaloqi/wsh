import React, { ReactNode, useEffect } from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames';

import styles from './Modal.module.scss';

type Props = {
  isOpen: boolean;
  close?: () => void;
  afterClose?: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = ({ children, isOpen, close, afterClose, className }: Props) => {
  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      className={cn(styles.modal__content, className)}
      overlayClassName={styles.modal__overlay}
      closeTimeoutMS={200}
      bodyOpenClassName={styles.modal__body}
      onAfterClose={afterClose}
    >
      {children}
    </ReactModal>
  );
};
