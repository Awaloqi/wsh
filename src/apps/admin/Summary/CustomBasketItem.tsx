import React, { useCallback } from 'react';

import { Delete } from 'icons';
import { POSExtraItem } from 'api';
import { Body2 } from 'ui';
import styles from './Summary.module.scss';

type Props = {
  index: number;
  item: POSExtraItem;
  onRemove: (index: number, title: string) => void;
};

export const CustomBasketItem = ({ index, item, onRemove }: Props) => {
  const handleRemove = useCallback(() => {
    onRemove(index, item.title);
  }, [index, item, onRemove]);

  return (
    <div className={styles.summary__item}>
      <button onClick={handleRemove} className={styles.summary__delete}>
        <Delete />
      </button>
      <div className={styles.summary__position}>
        <div className={styles.summary__itemName}>
          <Body2 weight="bold">1 x {item.title}</Body2>
          <Body2 weight="bold">${item.dollarAmount}</Body2>
        </div>
      </div>
    </div>
  );
};
