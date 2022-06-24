import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import styles from './Orders.module.scss';
import { Forward } from 'icons';
import { Body, Body2, Title } from 'ui';
import { useApi } from 'hooks';
import { formatDateLong } from 'utils/date';
import { capitalize } from '../../../utils/string';

type Params = {
  id?: string;
};

export const Order = () => {
  const { id } = useParams<Params>();
  const { getOrders } = useApi();
  const { data: orders } = useQuery('orders', getOrders);
  const order = orders?.find((o) => o.id === Number(id));
  if (!order) {
    return null;
  }
  return (
    <div className={styles.order}>
      <Link to="/profile/orders" className={styles.order__back}>
        <Forward className={styles.order__icon} />
        <Body2>Back</Body2>
      </Link>
      <div className={styles.list}>
        <div className={styles.list__date}>
          <Body2 color="white">{formatDateLong(order.created)}</Body2>
        </div>
        <div className={styles.list__items}>
          {order.basket?.itemList.map((item) => (
            <div key={item.id} className={styles.list__item}>
              <Body>{item.count}</Body>
              <Body className={styles.list__itemName}>{item.item}</Body>
              <Body>${item.dollarAmount}</Body>
            </div>
          ))}
          {order.basket?.extraItems.map((item) => (
            <div key={item.title} className={styles.list__item}>
              <Body>1</Body>
              <Body className={styles.list__itemName}>{item.title}</Body>
              <Body>${item.dollarAmount}</Body>
            </div>
          ))}
          {!order.basket && order.subscription && (
            <div className={styles.list__item}>
              <Body>1</Body>
              <Body className={styles.list__itemName}>Package: {capitalize(order.subscription)}</Body>
              <Body>${order.dollarAmountWithDiscount}</Body>
            </div>
          )}
          {order.request && (
            <>
              <div className={styles.list__item}>
                <Body>1</Body>
                <Body className={styles.list__itemName}>Delivery</Body>
                <Body>${order.request.dollarAmountWithDiscount}</Body>
              </div>
              {order.request.isRush && (
                <div className={styles.list__item}>
                  <Body>1</Body>
                  <Body className={styles.list__itemName}>Rush Delivery</Body>
                  <Body>${order.request.dollarRushAmount}</Body>
                </div>
              )}
            </>
          )}
        </div>
        {order.coupon ? (
          <div className={styles.list__total}>
            <Title>
              Coupon [{order.coupon}] {order.discountType === 'percentage' ? order.discountPercent + '%' : null}
            </Title>
            <Title>${order.couponDiscount ? Number((order.couponDiscount / 100).toFixed(2)) : null}</Title>
          </div>
        ) : null}
        <div className={styles.list__total}>
          <Title>Discounts</Title>
          <Title>
            $
            {order.dollarDiscount
              ? order.couponDiscount
                ? Number(order.dollarDiscount - order.couponDiscount / 100).toFixed(2)
                : order.dollarDiscount
              : 0}
          </Title>
        </div>
        <div className={styles.list__total}>
          <Title>Total</Title>
          <Title>${order.dollarAmountWithDiscount}</Title>
        </div>
        {order.note && order.note !== '' ? (
          <div className={styles.list__total}>
            <Title>Note</Title>
            <p style={{ marginLeft: '2%' }}>{order.note}</p>
          </div>
        ) : null}
        {order.created && new Date(order.created) > new Date(2022, 0, 16) ? (
          <div className={styles.list_balances}>
            <div className={styles.list_internal}>
              <Title className={styles.balance_title}>Balance Before</Title>
              <Title className={styles.balance_title}>
                $
                {order.balanceBeforePurchase !== null && order.balanceBeforePurchase !== undefined
                  ? order.balanceBeforePurchase / 100
                  : null}
              </Title>
            </div>
            <br></br>
            <div className={styles.list_internal}>
              <Title className={styles.balance_title}>Balance After</Title>
              <Title className={styles.balance_title}>
                $
                {order.balanceAfterPurchase !== null && order.balanceAfterPurchase !== undefined
                  ? order.balanceAfterPurchase / 100
                  : null}
              </Title>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
