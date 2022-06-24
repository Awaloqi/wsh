import React from 'react';
import { action } from '@storybook/addon-actions';

import { UpcomingOrders } from './UpcomingOrders';
import { ModalReschedule } from './ModalReschedule';
import { ApiProvider } from 'hooks';
import { addresses, deliveries } from './mock';

export default { title: 'pages/UpcomingOrders' };

const getDeliveries = () => deliveries;

const getAddresses = () => addresses;

export const loading = () => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <ApiProvider api={{ getDeliveries: () => new Promise(() => {}) } as any}>
    <UpcomingOrders />
  </ApiProvider>
);

export const empty = () => (
  <ApiProvider api={{ getDeliveries: () => [] } as any}>
    <UpcomingOrders />
  </ApiProvider>
);

export const orders = () => (
  <ApiProvider api={{ getDeliveries, getAddresses, patchDelivery: action('updateDelivery') } as any}>
    <UpcomingOrders />
  </ApiProvider>
);

export const modalReschedule = () => (
  <ModalReschedule isOpen={true} close={action('close')} onConfirm={action('onConfirm')} />
);
