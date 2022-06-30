import React from 'react';
import cn from 'classnames';
import { useQuery } from 'react-query';

import { Body2, Button, H4 } from 'ui';
import { UpcomingOrder } from './UpcomingOrder';
import styles from './UpcomingOrders.module.scss';
import { useAuth, useApi } from '../../hooks';
import { Header } from '../../components/Header';

export const UpcomingOrders = () => {
  const { user, logout } = useAuth();
  const { getDeliveries } = useApi();
  const { data: deliveries, isLoading } = useQuery('deliveries', getDeliveries);
  const noUpcomingOrders = !deliveries || deliveries.length === 0;

  if (isLoading) {
    return (
      <div className={styles.upcoming}>
        <div className={cn(styles.upcoming_order, styles.upcoming_order___isLoading)}>
          <H4>Loading...</H4>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header logout={logout} user={user} />
      <div className={styles.upcoming}>
        {noUpcomingOrders ? (
          <div className={cn(styles.upcoming_order, styles.upcoming_order___isEmpty)}>
            <H4 className={styles.header}>Upcoming Order</H4>
            <Body2 weight="light" className={styles.upcoming_description}>
              You currently have no order scheduled. Please select Request Pickup to schedule your order.{' '}
            </Body2>
            <Button variant="primary" size="md" to="/pickup">
              Request pickup
            </Button>
          </div>
        ) : (
          deliveries?.map((delivery) => <UpcomingOrder key={delivery.id} {...delivery} />)
        )}
      </div>
    </>
  );
};
