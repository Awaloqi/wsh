import React from 'react';
import { useQuery } from 'react-query';

import { Body2, H4 } from 'ui';
import styles from './DeliveryCharges.module.scss';
import { getBasket } from '../apiPos';

type Props = {
  orderId: number;
};

export const DeliveryCharges = ({ orderId }: Props) => {
  const basketId = ['basket', orderId];
  const { data: basket } = useQuery(basketId, getBasket);

  return (
    <div className={styles.deliveryCharges}>
      <H4>Delivery Charges</H4>
      <div className={styles.deliveryCharges__list}>
        <div className={styles.deliveryCharges__item}>
          <Body2>Delivery</Body2>
          <Body2>${basket?.request?.dollarAmountWithDiscount ?? 0}</Body2>
        </div>
        {basket?.request?.isRush && (
          <div className={styles.deliveryCharges__item}>
            <Body2>Rush</Body2>
            <Body2>${basket.request.dollarRushAmount ?? 0}</Body2>
          </div>
        )}
      </div>
    </div>
  );
};
