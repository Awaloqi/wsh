import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { NotifyModal } from './NotifyModal';
import { AdvantageModal } from './AdvantageModal';
import { RecurringModal } from './RecurringModal';
import { SaveCardModal } from './SaveCardModal';

type Modal = 'NOTIFY' | 'ADVANTAGE' | 'RECURRING' | 'SAVECARD';
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
    setModalProps({});
  }, [setModal, setModalProps]);

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
      <NotifyModal isOpen={modal === 'NOTIFY'} closeModal={closeModal} {...modalProps} />
      <AdvantageModal isOpen={modal === 'ADVANTAGE'} closeModal={closeModal} {...modalProps} />
      <RecurringModal isOpen={modal === 'RECURRING'} closeModal={closeModal} {...modalProps} />
      <SaveCardModal isOpen={modal === 'SAVECARD'} closeModal={closeModal} {...modalProps} />
    </ModalContext.Provider>
  );
};
