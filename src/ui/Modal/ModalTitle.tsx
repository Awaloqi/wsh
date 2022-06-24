import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Modal.module.scss';
import { Modal } from './Modal';
import { Exit, Prev } from 'icons';

type Props = {
  isOpen: boolean;
  close: () => void;
  prev?: () => void;
  title: ReactNode;
  className?: string;
  children: ReactNode;
};

export const ModalTitle = ({ close, prev, title, className, children, ...rest }: Props) => {
  return (
    <Modal {...rest} close={close} className={cn(styles.modal__content, styles.modal__content___title, className)}>
      <div className={cn(styles.modal__header, styles.modal__header___hasTitle)}>
        {prev ? <Prev className={styles.modal__close} onClick={prev} /> : <div className={styles.modal__fakeBtn} />}
        {title}
        <Exit className={styles.modal__close} onClick={close} />
      </div>
      {children}
    </Modal>
  );
};
