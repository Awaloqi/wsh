import React from 'react';
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import { Field, useFormState } from 'react-final-form';

import { Checkbox, Input, InputGeo, InputStripe } from 'ui';
import { required } from 'services/formValidator';
import { useInvoice } from 'hooks';
import { CheckoutValues } from './Checkout';
import { Fields } from 'utils/Fields';

export const BillingInformation = () => {
  const { invoice } = useInvoice();
  const { values } = useFormState<CheckoutValues>();
  return (
    <div className="billing_info">
      <h1>Billing Information</h1>
      <Field
        name="card.number"
        component={InputStripe}
        label="Card number"
        StripeElement={CardNumberElement}
        validate={required}
      />

      <div className="half">
        <Field
          name="card.expiry"
          component={InputStripe}
          label="Card expiry"
          StripeElement={CardExpiryElement}
          validate={required}
        />
      </div>

      <div className="half">
        <Field
          name="card.cvc"
          component={InputStripe}
          label="CVC code"
          StripeElement={CardCvcElement}
          validate={required}
        />
      </div>
      {/* {JSON.stringify(invoice)} */}
      <div className="checkboxes">
        <Field
          type="checkbox"
          name="isSaveCard"
          component={Checkbox}
          style={{ display: 'none' }}
          label="Save this card on file"
        />
        {invoice?.subscription !== 'payc' && (
          <Field
            type="checkbox"
            name="autoReload"
            component={Checkbox}
            style={{ display: 'none' }}
            label="Auto reload my account, when balance below $10"
          />
        )}
        <Field
          type="checkbox"
          name="theSameBillingAddress"
          component={Checkbox}
          label="Billing address is the same as delivery address"
        />
      </div>
      {!values.theSameBillingAddress && (
        <>
          <Fields
            names={['billingAddress.zipCode', 'billingAddress.addressLine1']}
            validate={{ 'billingAddress.zipCode': required }}
          >
            {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
          </Fields>
          <Field
            name="billingAddress.addressLine2"
            component={Input}
            label="Apt/Suite (Optional)"
            placeholder="Apt/Suite"
          />
        </>
      )}
    </div>
  );
};
