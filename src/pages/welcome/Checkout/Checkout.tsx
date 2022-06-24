import React, { useCallback, useMemo } from 'react';
import { FORM_ERROR } from 'final-form';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';
import { createPersistDecorator } from 'final-form-persist';
import { useMutation, useQuery } from 'react-query';

import { CheckoutForm } from './CheckoutForm';
import { getZipCodes, postCheckout, postRequest, postSchedule, setupIntent } from 'services/apiClient';
import { useAuth, useInvoice, useLocalStorage, usePayment } from 'hooks';
import { DeliveryFormValues } from '../Delivery/Delivery';
import { ScheduleStatusEnum } from 'api';
import { useModal } from '../../../modals';

export type CheckoutValues = {
  user: {
    firstName: string;
    lastName: string;
  };
  address: {
    title: string;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    instructions: string;
    hasDoorman: boolean;
  };
  billingAddress: {
    zipCode: string;
    addressLine1: string;
    addressLine2: string;
  };
  card: {
    number: boolean;
    expiry: boolean;
    cvc: boolean;
  };
  isSaveCard: boolean;
  autoReload: boolean;
  theSameBillingAddress: boolean;
};

const { persistDecorator, clear: clearCheckout } = createPersistDecorator<CheckoutValues>({
  name: 'washmix-welcome-checkout',
  debounceTime: 500,
});

export const Checkout = () => {
  const { confirmPayment } = usePayment();
  const history = useHistory();
  const { invoice } = useInvoice();
  const { zipCode, addressLine1, setZipCode, setAddressLine1 } = useAuth();
  const { openModal } = useModal();
  const { data: zipCodes } = useQuery('locations', getZipCodes);
  const { clear: clearPackages } = useLocalStorage('washmix-welcome-packages');
  const { clear: clearDelivery, storedValue: delivery } = useLocalStorage<DeliveryFormValues>(
    'washmix-welcome-delivery',
  );
  const [createDelivery] = useMutation(postRequest, { throwOnError: true });
  const [createSchedule] = useMutation(postSchedule);
  // @ts-ignore
  const checkoutInitialValue: Partial<CheckoutValues> = useMemo(
    () => ({
      theSameBillingAddress: true,
      isSaveCard: true,
      autoReload: true,
      address: { addressLine1, zipCode },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleValidate = useCallback(
    (values: CheckoutValues) => {
      if (invoice?.subscription === 'payc') {
        if (values.isSaveCard) return undefined;
        else {
          return undefined;
        }
      } else {
        return undefined;
      }
    },
    [invoice],
  );

  const handleSubmit = useCallback(
    async ({ user, address, autoReload, isSaveCard, ...values }: CheckoutValues) => {
      const billingAddress = values.theSameBillingAddress ? address : values.billingAddress;

      setZipCode(address.zipCode);
      setAddressLine1(address.addressLine1);
      if (isSaveCard === false) {
        openModal('SAVECARD', {});
        return;
      }

      if (!(zipCodes && zipCodes.includes(address.zipCode))) {
        openModal('NOTIFY', address);
        return;
      }

      if (!invoice?.id) {
        return { [FORM_ERROR]: 'Please choose package' };
      }

      const { secret } = await setupIntent({ isSaveCard, order: `${invoice.id}` });

      const name = { firstName: user.firstName, lastName: user.lastName };

      const error = await confirmPayment({ isSaveCard, secret, address, name });
      if (error) {
        return { [FORM_ERROR]: error };
      }

      const { error: checkoutError, data } = await postCheckout({
        user: { ...user, isAutoBilling: autoReload },
        address,
        order: `${invoice?.id}`,
        billingAddress,
      });
      if (checkoutError) return { [FORM_ERROR]: checkoutError };

      if (delivery) {
        if (delivery.pickupDate) {
          const response = await createDelivery({
            pickupDate: delivery.pickupDate,
            isRush: delivery.rushDelivery,
            address: data?.address.id || 0,
          }).catch((e) => e);
          if (typeof response === 'string') {
            return { [FORM_ERROR]: response };
          }
        }
        if (delivery.recurringPickup) {
          await createSchedule({
            days: delivery.recurringPickup,
            status: ScheduleStatusEnum.Active,
            address: data?.address.id || 0,
          });
        }
      }

      clearPackages();
      clearDelivery();
      clearCheckout();

      history.push('/');
    },
    [
      clearDelivery,
      clearPackages,
      confirmPayment,
      createDelivery,
      createSchedule,
      delivery,
      history,
      invoice?.id,
      openModal,
      setAddressLine1,
      setZipCode,
      zipCodes,
    ],
  );

  return (
    <div>
      <div className="checkout_pannel">
        <Form<CheckoutValues>
          onSubmit={handleSubmit}
          component={CheckoutForm}
          initialValues={checkoutInitialValue}
          validate={handleValidate}
          decorators={[persistDecorator]}
        />
      </div>
    </div>
  );
};
