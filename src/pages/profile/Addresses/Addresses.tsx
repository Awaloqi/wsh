import React, { useCallback } from 'react';
import cn from 'classnames';
import { Form } from 'react-final-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { H4 } from 'ui';
import { useApi } from 'hooks';
import { EditAddressForm, EditAddressFormValues } from './EditAddressForm';
import styles from './Addresses.module.scss';
import { normalizeAsyncError } from 'utils/object';

export const Addresses = () => {
  const { getAddresses, patchAddress } = useApi();
  const { data: addresses, isLoading } = useQuery('addresses', getAddresses);
  const [updateAddress] = useMutation(patchAddress, { throwOnError: true });

  const handleSubmit = useCallback(
    (values: EditAddressFormValues) =>
      updateAddress(values)
        .then(() => {
          toast.success('Billing address updated successfully!');
        })
        .catch(normalizeAsyncError),
    [updateAddress],
  );

  if (isLoading) {
    return (
      <div className={styles.addresses}>
        <div className={cn(styles.address, styles.address___isLoading)}>
          <H4>Loading...</H4>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.addresses}>
      {addresses?.map((address) => (
        <div key={address.id} className={styles.address}>
          <H4>Delivery Address</H4>
          <Form<EditAddressFormValues> onSubmit={handleSubmit} component={EditAddressForm} initialValues={address} />
        </div>
      ))}
    </div>
  );
};
