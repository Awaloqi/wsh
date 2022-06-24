import React, { createContext, ReactElement, ReactNode, useCallback, useContext } from 'react';
import { ConfirmCardPaymentData, ConfirmCardSetupData, loadStripe } from '@stripe/stripe-js';
import { CardNumberElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

import { STRIPE_PUBLIC_KEY } from '../constants';
import { Address } from 'api';

type Props = { children?: ReactNode };

type PaymentOptions = {
  isSaveCard: boolean;
  secret: string;
  name: { firstName?: string; lastName?: string };
  address: Address;
};

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
const stripeOptions = {
  fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700' }],
};

const PaymentContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  confirmPayment: async (options: PaymentOptions): Promise<string | void> => {},
});

const Payment = ({ children }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const confirmPayment = useCallback(
    async ({ isSaveCard, secret, address, name }: PaymentOptions) => {
      if (!stripe || !elements) return;

      const cardElement = elements.getElement(CardNumberElement);
      if (!cardElement) return;

      const paymentData: ConfirmCardSetupData & ConfirmCardPaymentData = {
        payment_method: {
          card: cardElement,
          billing_details: {
            address: {
              line1: address?.addressLine1 ?? '',
              line2: address?.addressLine2 ?? '',
              postal_code: address?.zipCode ?? '',
            },
            name: `${name?.firstName} ${name?.lastName}`,
          },
        },
      };

      const paymentMethod = isSaveCard ? stripe.confirmCardSetup : stripe.confirmCardPayment;

      const { error } = await paymentMethod(secret, paymentData);

      if (error) {
        return error.message;
      }
    },
    [stripe, elements],
  );

  return <PaymentContext.Provider value={{ confirmPayment }}>{children}</PaymentContext.Provider>;
};

export const PaymentProvider = ({ children }: Props) => {
  return (
    <Elements stripe={stripePromise} options={stripeOptions}>
      <Payment>{children}</Payment>
    </Elements>
  );
};

export const PaymentDecorator = (Story: () => ReactElement<unknown>) => (
  <PaymentProvider>
    <Story />
  </PaymentProvider>
);

export const usePayment = () => {
  return useContext(PaymentContext);
};
