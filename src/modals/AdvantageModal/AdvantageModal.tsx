import React from 'react';
import { Link } from 'react-router-dom';

import { Body, Body2, Modal } from 'ui';
import { Exit } from 'icons';
import styles from './AdvantageModal.module.scss';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export const AdvantageModal = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} close={closeModal} className={styles.modal}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <div className={styles.modal__content}>
        <Body className={styles.modal__title}>Join Our Advantage Program</Body>
        <Body2 weight="light">
          Your request has been received. <b>Save up to 20%</b> on this and each order after with <b>Advantage</b>.
        </Body2>
      </div>
      <Link to="/profile/packages" className={styles.modal__link} onClick={closeModal}>
        Save more now!
      </Link>
    </Modal>
  );
};
