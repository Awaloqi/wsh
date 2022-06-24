import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from 'react-router';

import { ApiProvider, AuthDecorator } from 'hooks';
import { SideBar } from './Sidebar';
import { Profile } from './Profile';
import { Information } from './Information';
import { Addresses } from './Addresses';
import { Phones } from './Phones';
import { Order, Orders } from './Orders';
import { getProfile, getAddresses, getPhones } from './mock';

export default { title: 'pages/Profile' };

export const profile = () => (
  <ApiProvider api={{ getProfile } as any}>
    <MemoryRouter initialEntries={['/profile']}>
      <Route component={Profile} path="/profile" />
    </MemoryRouter>
  </ApiProvider>
);
profile.decorators = [AuthDecorator];

export const sidebar = () => (
  <div style={{ width: 300 }}>
    <MemoryRouter initialEntries={['/profile']}>
      <Route render={() => <SideBar balance={19200} />} path="/profile" />
    </MemoryRouter>
  </div>
);

export const information = () => (
  <ApiProvider api={{ getProfile, patchProfile: action('patchProfile') } as any}>
    <Information />
  </ApiProvider>
);

export const addresses = () => (
  <ApiProvider api={{ getProfile, getAddresses, patchAddresses: action('patchAddresses') } as any}>
    <Addresses />
  </ApiProvider>
);

export const phones = () => (
  <ApiProvider api={{ getProfile, getPhones, patchPhone: action('patchPhone') } as any}>
    <Phones />
  </ApiProvider>
);

export const orders = () => (
  <div style={{ backgroundColor: '#fafafa', padding: 30 }}>
    <ApiProvider api={{} as any}>
      <Orders />
    </ApiProvider>
  </div>
);

export const order = () => (
  <div style={{ backgroundColor: '#fafafa', padding: 30 }}>
    <ApiProvider api={{} as any}>
      <Order />
    </ApiProvider>
  </div>
);
