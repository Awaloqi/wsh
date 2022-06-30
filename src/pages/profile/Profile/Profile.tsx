import React from 'react';
import { Switch } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useApi, useAuth } from 'hooks';
import styles from './Profile.module.scss';
import { SideBar } from '../Sidebar';
import { Information } from '../Information';
import { Addresses } from '../Addresses';
import { Phones } from '../Phones';
import { Packages } from '../Packages';
import { Billing } from '../Billing';
import { Preferences } from '../Preferences';
import { Order, Orders } from '../Orders';
import { PrivateRoute } from 'components/App/PrivateRoute';
import { Header } from '../../../components/Header';

export const Profile = () => {
  const { getProfile } = useApi();
  const { data: profile } = useQuery('profile', getProfile);
  const { user, logout } = useAuth();
  return (
    <>
      <Header logout={logout} user={user} />
      <div className={styles.profile}>
        <div className={styles.profile__wrapper}>
          <SideBar className={styles.profile__sidebar} balance={profile?.balance} />
          <Switch>
            <PrivateRoute path="/profile/address" component={Addresses} />
            <PrivateRoute path="/profile/phones" component={Phones} />
            <PrivateRoute path="/profile/packages" component={Packages} />
            <PrivateRoute path="/profile/billing" component={Billing} />
            <PrivateRoute path="/profile/orders/:id" component={Order} />
            <PrivateRoute path="/profile/orders" component={Orders} />
            <PrivateRoute path="/profile/preferences" component={Preferences} />
            <PrivateRoute path="/profile" component={Information} />
          </Switch>
        </div>
      </div>
    </>
  );
};
