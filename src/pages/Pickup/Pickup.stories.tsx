import React from 'react';
import { action } from '@storybook/addon-actions';

import { Pickup } from './Pickup';
import { ModalPackage } from './ModalPackage';
import { ModalSummary } from './ModalSummary';
import { ModalPayment } from './ModalPayment';
import { ApiProvider, PaymentDecorator } from 'hooks';
import { getAddress, getAddresses, getCards, getPackages, getProfile } from './mock';
import { PendingRequest } from './PendingRequest';
import { withRouter } from 'react-router';

export default { title: 'pages/Pickup', decorators: [PaymentDecorator] };

export const requestPickup = () => (
  <ApiProvider
    api={
      {
        getAddress,
        getAddresses,
        getProfile,
        postDelivery: action('postDelivery'),
        patchAddress: action('patchAddress'),
        postAddresses: action('postAddresses'),
      } as any
    }
  >
    <Pickup />
  </ApiProvider>
);
export const modalPackage = () => (
  <ApiProvider api={{ getPackages, getAddress, getProfile, setupIntent: action('setupIntent') } as any}>
    <ModalPackage isOpen close={action('close')} onSubmit={action('submit')} />
  </ApiProvider>
);
export const modalSummary = () => (
  <ApiProvider api={{ getProfile, getCards, postSubscriptionCheckout: action('postSubscriptionCheckout') } as any}>
    <ModalSummary close={action('close')} />
  </ApiProvider>
);
export const modalPayment = () => (
  <ApiProvider api={{ getProfile } as any}>
    <ModalPayment isOpen close={action('close')} />
  </ApiProvider>
);
export const pendingRequest = withRouter((props) => {
  props.location.state = { deliveryId: '1' };
  return (
    <ApiProvider api={{ getProfile } as any}>
      <PendingRequest />
    </ApiProvider>
  );
});
