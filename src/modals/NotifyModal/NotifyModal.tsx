import React, { useCallback } from 'react';
import { Form } from 'react-final-form';

import { CustomerKindEnum } from 'api';
import { postCustomer } from 'services/apiClient';
import { normalizeAsyncError } from 'utils/object';
import { CustomerFormValues, NotifyForm } from './NotifyForm';
import { H4, ModalTitle } from 'ui';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  addressLine1?: string;
  zipCode?: string;
};

export const NotifyModal = ({ closeModal, isOpen, addressLine1, zipCode }: Props) => {
  const handleHide = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleSubmit = useCallback(
    async (values: CustomerFormValues) => {
      const error = await postCustomer({
        ...values,
        phone: `+1 ${values.phone}`,
        zipCode,
        address: addressLine1,
        kind: CustomerKindEnum.Interested,
      })
        .then(() => undefined)
        .catch(normalizeAsyncError);
      if (error) return error;
      closeModal();
    },
    [addressLine1, closeModal, zipCode],
  );

  return (
    <ModalTitle isOpen={isOpen} close={handleHide} title={<H4>Sorry...</H4>}>
      <p>
        We do not offer service in your area at this moment. We are working hard to change that Sign up below to get
        notified as soon as we service your area.
      </p>
      <Form<CustomerFormValues> onSubmit={handleSubmit} component={NotifyForm} />
    </ModalTitle>
  );
};
