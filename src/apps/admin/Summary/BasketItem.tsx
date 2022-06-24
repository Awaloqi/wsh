import React, { useCallback } from 'react';

import { Delete } from 'icons';
import { POSQuantity } from 'api';
import { Body2 } from 'ui';
import styles from './Summary.module.scss';

type Props = {
  item: POSQuantity;
  onRemove: (id: number, count: number, title: string) => void;
};

export const BasketItem = ({ item, onRemove }: Props) => {
  const handleRemove = useCallback(() => {
    onRemove(item.id, item.count, item.item);
  }, [item, onRemove]);

  return (
    <div className={styles.summary__item}>
      <button onClick={handleRemove} className={styles.summary__delete}>
        <Delete />
      </button>
      <div className={styles.summary__position}>
        <div className={styles.summary__itemName}>
          <Body2 weight="bold">
            {item.count} x {item.item}
          </Body2>
          <Body2 weight="bold">${item.dollarAmount}</Body2>
        </div>
        <Body2>{item.service}</Body2>
      </div>
    </div>
  );
};
