import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { CustomModal } from './modals/CustomModal';
import { DiscountModal } from './modals/DiscountModal';
import { NoteModal } from './modals/NoteModal';
import { ServiceModal } from './modals/ServiceModal';
import { DeliveryModal } from './modals/DeliveryModal';

type Modal = 'NOTE' | 'SERVICE' | 'DISCOUNT' | 'CUSTOM' | 'DELIVERY';
type ModalProps = Record<string, any>;

const ModalContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  openModal: (name: Modal, props: ModalProps | undefined) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeModal: () => {},
});

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleOpen = useCallback(
    (name: Modal, props?: ModalProps) => {
      openModal(name, props);
    },
    [openModal],
  );

  return { openModal: handleOpen, closeModal };
};

export const ModalProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [modal, setModal] = useState<Modal | null>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({});

  const closeModal = useCallback(() => {
    setModal(null);
  }, [setModal]);

  const afterClose = useCallback(() => {
    setModalProps({});
  }, [setModalProps]);

  const openModal = useCallback(
    (name: Modal, props: ModalProps | undefined = {}) => {
      setModal(name);
      setModalProps(props);
    },
    [setModal],
  );

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <NoteModal isOpen={modal === 'NOTE'} closeModal={closeModal} afterClose={afterClose} {...modalProps} />
      <ServiceModal isOpen={modal === 'SERVICE'} closeModal={closeModal} afterClose={afterClose} {...modalProps} />
      <DiscountModal isOpen={modal === 'DISCOUNT'} closeModal={closeModal} afterClose={afterClose} {...modalProps} />
      <CustomModal isOpen={modal === 'CUSTOM'} closeModal={closeModal} afterClose={afterClose} {...modalProps} />
      <DeliveryModal isOpen={modal === 'DELIVERY'} closeModal={closeModal} afterClose={afterClose} {...modalProps} />
    </ModalContext.Provider>
  );
};
