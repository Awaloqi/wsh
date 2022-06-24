import React from 'react';

import { POSItem } from 'api';
import { Body, Body2, Modal } from 'ui';
import { Exit } from '../../../icons';
import { Button } from '../ui/Button';
import styles from './NoteModal.module.scss';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  afterClose?: () => void;
  item?: POSItem;
  count?: number;
  onChoose?: (id: number) => void;
};

export const ServiceModal = ({ isOpen, closeModal, afterClose, item, count, onChoose }: Props) => {
  return (
    <Modal className={styles.modal} isOpen={isOpen} close={closeModal} afterClose={afterClose}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <div className={styles.modal__body}>
        <Body className={styles.modal__title} weight="semi-bold">
          {count} {item?.title}
        </Body>
        <Body2 className={styles.modal__title}>Choose a service</Body2>
        <div className={styles.modal__services}>
          {item?.priceList?.map((service) => (
            <Button key={service.id} kind="secondary" onClick={() => onChoose?.(service.id ?? 0)}>
              {service.title}
            </Button>
          ))}
        </div>
      </div>
    </Modal>
  );
};
