import React, { useCallback } from 'react';
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import { FORM_ERROR } from 'final-form';
import { Field, Form } from 'react-final-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Button, Checkbox, H4, InputStripe, ModalUpdate } from 'ui';
import { required } from 'services/formValidator';
import { useApi, usePayment } from 'hooks';
import styles from './ModalPayment.module.scss';

type Props = {
  isOpen: boolean;
  close: () => void;
};

type PaymentValues = {
  isSaveCard: boolean;
  invoice: number;
  user: {
    firstName?: string;
    lastName?: string;
  };
  address: {
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
  };
  card: {
    number: boolean;
    expiry: boolean;
    cvc: boolean;
  };
};

const initialValues = {
  isSaveCard: true,
};

export const ModalPayment = ({ isOpen, close }: Props) => {
  const { getAddress, getProfile, setupIntent } = useApi();
  const { confirmPayment } = usePayment();
  const { data: profile } = useQuery('profile', getProfile);
  const { data: address } = useQuery(['address', profile?.mainAddress], getAddress, {
    enabled: profile && profile.mainAddress != null,
  });

  const handleSubmit = useCallback(
    async ({ isSaveCard }: PaymentValues) => {
      if (!address) {
        return;
      }
      const name = { firstName: profile?.firstName, lastName: profile?.lastName };

      const { secret } = await setupIntent({ isSaveCard });

      const error = await confirmPayment({ isSaveCard, secret, address, name });
      if (error) {
        return { [FORM_ERROR]: error };
      }

      toast.success('Card was added');
      close();
    },
    [address, profile, setupIntent, confirmPayment, close],
  );

  return (
    <ModalUpdate isOpen={isOpen}>
      <H4 className={styles.header}>Update Payment</H4>
      <Form<PaymentValues> onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="card.number"
              component={InputStripe}
              label="Card number"
              StripeElement={CardNumberElement}
              validate={required}
            />
            <Field
              name="card.expiry"
              component={InputStripe}
              label="Card expiry"
              StripeElement={CardExpiryElement}
              validate={required}
            />
            <Field
              name="card.cvc"
              component={InputStripe}
              label="CVC code"
              StripeElement={CardCvcElement}
              validate={required}
            />
            <div className="checkboxes">
              <Field type="checkbox" name="isSaveCard" component={Checkbox} label="Save this card on file" />
            </div>
            <div className={styles.buttons}>
              <Button type="button" variant="outline-primary" size="sm" onClick={close} isBlock>
                Cancel
              </Button>
              <Button variant="primary" size="sm" isBlock isLoading={submitting}>
                Apply
              </Button>
            </div>
          </form>
        )}
      </Form>
    </ModalUpdate>
  );
};
