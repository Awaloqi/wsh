import React from 'react';
import { action } from '@storybook/addon-actions';
import { Form } from 'react-final-form';

import '../../index.scss';
import { Registration } from './Registration';
import { Packages } from './Packages';
import { Delivery } from './Delivery';
import { Checkout } from './Checkout';
import { RegistrationForm } from './Registration/RegistrationForm';
import { BillingDemo } from './Checkout/BillingDemo';
import { PaymentDecorator } from 'hooks';

export default { title: 'components/Welcome', decorators: [PaymentDecorator] };

export const registration = () => <Registration />;
export const packages = () => <Packages />;
export const delivery = () => <Delivery />;
export const checkout = () => <Checkout />;
export const registrationForm = () => <Form onSubmit={action('onSubmit')} component={RegistrationForm} />;
export const billingForm = () => <BillingDemo />;
