import React, { useCallback } from 'react';
import { H4, ModalTitle } from 'ui';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export const RecurringModal = ({ closeModal, isOpen }: Props) => {
  const handleHide = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <ModalTitle isOpen={isOpen} close={handleHide} title={<H4>Please note</H4>}>
      <p>
        Please note, by selecting a recurring pickup day, you’re indicating that you’d have a bag ready for pickup on
        the selected day. IF your order is not ready for pickup - delivery charges will apply{' '}
      </p>
    </ModalTitle>
  );
};
