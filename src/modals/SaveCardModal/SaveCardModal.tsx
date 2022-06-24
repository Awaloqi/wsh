import React, { useCallback } from 'react';
import { H4, ModalTitle } from 'ui';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export const SaveCardModal = ({ closeModal, isOpen }: Props) => {
  const handleHide = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <ModalTitle isOpen={isOpen} close={handleHide} title={<H4>Please note</H4>}>
      <p>
        Please select &apos;Save this card on file&apos;. This will place your card on file so that we can process your
        order after pickup.
      </p>
    </ModalTitle>
  );
};
