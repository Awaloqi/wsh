import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './Orders.module.scss';
import { Forward } from 'icons';
import { useApi } from 'hooks';
import { formatDateShort } from 'utils/date';

export const Orders = () => {
  const { getOrders } = useApi();
  const { data: orders } = useQuery('orders', getOrders);
  return (
    <div className={styles.orders}>
      <div className={styles.table}>
        <div className={cn(styles.table__row, styles.table__header)}>
          <div className={styles.table__headerCell}>Date</div>
          <div className={styles.table__headerCell}>Order #</div>
          <div className={styles.table__headerCell}>Total</div>
          <div className={styles.table__headerCell}>Credit Back</div>
          <div className={styles.table__headerCell}>Savings</div>
          <div className={styles.table__headerCell}>Balance Before</div>
          <div className={styles.table__headerCell}>Balance After</div>

          <div className={cn(styles.table__headerCell, styles.table__headerCell___shrink)} />
        </div>
        {orders?.map(
          ({
            request,
            id,
            dollarAmountWithDiscount,
            dollarDiscount,
            created,
            dollarCreditBack,
            balanceBeforePurchase,
            balanceAfterPurchase,
          }) => (
            <div key={id} className={styles.table__row}>
              <div className={styles.table__cell}>{formatDateShort(created)}</div>
              <div className={cn(styles.table__cell, styles.table__cell___secondary)}>#{id}</div>
              <div className={cn(styles.table__cell, styles.table__cell___grow)}>
                <div className={styles.table__cellTotal}>Total: </div>${dollarAmountWithDiscount}
              </div>
              <div className={cn(styles.table__cell, styles.table__cell___secondary)}>${dollarCreditBack}</div>
              <div className={cn(styles.table__cell, styles.table__cell___secondary)}>${dollarDiscount}</div>
              <div className={cn(styles.table__cell, styles.table__cell___secondary)}>
                $
                {balanceBeforePurchase !== null &&
                balanceBeforePurchase !== undefined &&
                (created ? new Date(created) > new Date(2022, 0, 16) : true)
                  ? balanceBeforePurchase / 100
                  : null}
              </div>
              <div className={cn(styles.table__cell, styles.table__cell___secondary)}>
                $
                {balanceAfterPurchase !== null &&
                balanceAfterPurchase !== undefined &&
                (created ? new Date(created) > new Date(2022, 0, 16) : true)
                  ? balanceAfterPurchase / 100
                  : null}
              </div>

              <div className={cn(styles.table__cell, styles.table__cell___shrink)}>
                <Link to={`/profile/orders/${id}`} className={styles.table__action}>
                  <Forward />
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
