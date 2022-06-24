import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { queryCache, useMutation, useQuery } from 'react-query';

import { maxLength, required } from 'services/formValidator';
import { Input, Button, Dropdown, ModalEdit, InputGeo, Textarea, Checkbox, H4 } from 'ui';
import { useApi } from 'hooks';
import { Fields } from 'utils/Fields';
import styles from './Modal.module.scss';

type Props = {
  close: () => void;
  isOpen: boolean;
  addressId?: number;
  setAddressId: (id: number) => void;
};

export type AddressFormValues = {
  id?: number;
  title: string;
  addressLine1: string;
  addressLine2: string;
  instructions: string;
  hasDoorman: boolean;
  zipCode: string;
};

export const ModalAddress = ({ close, isOpen, addressId, setAddressId }: Props) => {
  const { getAddress, getAddresses, patchAddress, postAddresses } = useApi();
  const [createAddress] = useMutation(postAddresses, {
    onSuccess: (data) => queryCache.setQueryData(['address', data.id], data),
  });
  const [updateAddress] = useMutation(patchAddress, {
    onSuccess: (data) => queryCache.setQueryData(['address', data.id], data),
  });

  const handleChangeAddress = useCallback(
    ({ value }) => {
      setAddressId(Number(value));
    },
    [setAddressId],
  );

  const { data: addresses } = useQuery('addresses', getAddresses, {
    onSuccess: (data) => data.forEach((address) => queryCache.setQueryData(['address', address.id], address)),
  });

  const { data: address } = useQuery(['address', addressId], getAddress, {
    enabled: addressId !== 0,
  });

  const options = useMemo(() => {
    const lastOption = { label: 'Add new address', value: '0' };
    if (!addresses) {
      return [lastOption];
    }
    return addresses.map(({ id, title }) => ({ label: title, value: `${id}` })).concat([lastOption]);
  }, [addresses]);

  const handleSubmit = useCallback(
    async (values: AddressFormValues) => {
      if (values.id) {
        await updateAddress(values);
      } else {
        const newAddress = await createAddress(values);
        if (newAddress?.id) {
          setAddressId(newAddress.id);
        }
      }
      close();
    },
    [createAddress, updateAddress, close, setAddressId],
  );

  const initialValues = useMemo(() => (address ? address : {}), [address]);

  return (
    <ModalEdit isOpen={isOpen} close={close}>
      <H4 className={styles.modal__title}>Edit Address</H4>
      <Dropdown
        options={options}
        value={`${addressId}`}
        onChange={handleChangeAddress}
        label="Address"
        placeholder="Select Address"
      />
      <Form<AddressFormValues> onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" component={Input} placeholder="Title" label="Address Title" validate={required} />
            <Fields names={['zipCode', 'addressLine1']} validate={{ zipCode: required }}>
              {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
            </Fields>
            <Field name="addressLine2" component={Input} label="Apt/Suite (Optional)" placeholder="Apt/Suite" />
            <Field
              name="instructions"
              component={Textarea}
              label="Delivery Instructions"
              placeholder="Type here"
              validate={maxLength}
            />
            <Field name="hasDoorman" type="checkbox" component={Checkbox} label="I have a doorman" />
            <Button variant="primary" size="md" isBlock className={styles.modal__submit} disabled={submitting}>
              {addressId === 0 ? 'Create' : 'Update'}
            </Button>
          </form>
        )}
      </Form>
    </ModalEdit>
  );
};
