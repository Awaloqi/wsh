import React from 'react';
import { FormRenderProps } from 'react-final-form';
import { DeliveryInformation } from './DeliveryInformation';
import { BillingInformation } from './BillingInformation';
import { OrderSummary } from './OrderSummary';
import { CheckoutValues } from './Checkout';

type Props = FormRenderProps<CheckoutValues>;

export const CheckoutForm = ({ handleSubmit }: Props) => {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="shadow_pannel shadow_mob_0">
          <DeliveryInformation />
          <BillingInformation />
        </div>
      </div>
      <OrderSummary />
    </form>
  );
};
