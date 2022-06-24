import React from 'react';
import { Field } from 'react-final-form';

import { maxLength, required } from 'services/formValidator';
import { Checkbox, Input, InputGeo, Textarea } from 'ui';
import { Fields } from 'utils/Fields';

export const DeliveryInformation = () => (
  <div>
    <h1>Delivery Information</h1>
    <div>
      <ul>
        <li className="half">
          <Field
            name="user.firstName"
            component={Input}
            label="First Name"
            placeholder="First Name"
            validate={required}
            required
          />
        </li>
        <li className="half">
          <Field
            name="user.lastName"
            component={Input}
            label="Last Name"
            placeholder="Last Name"
            validate={required}
            required
          />
        </li>
        <li>
          <Fields names={['address.zipCode', 'address.addressLine1']} validate={{ zipCode: required }}>
            {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
          </Fields>
        </li>
        <li>
          <Field name="address.addressLine2" component={Input} label="Apt/Suite (Optional)" placeholder="Apt/Suite" />
        </li>
        <li>
          <Field
            name="address.instructions"
            component={Textarea}
            label="Delivery Instructions"
            placeholder="Type here"
            validate={maxLength}
          />
        </li>
        <li>
          <Field name="address.hasDoorman" type="checkbox" component={Checkbox} label="I have a doorman" />
        </li>
      </ul>
    </div>
  </div>
);
