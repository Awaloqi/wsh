import React, { useCallback, useState } from 'react';
import { queryCache, useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Caption } from 'ui';
import { POSPrice } from 'api';
import { basketAddItem } from '../../apiPos';

import styles from './Item.module.scss';
import placeholder from './240x240.png';
import { AmountInput } from '../../ui/AmountInput';
import { Button } from '../../ui/Button';

type Props = {
  item?: POSPrice;
  orderId: number;
};

export const Item = ({ item, orderId }: Props) => {
  const basketId = ['basket', orderId];
  const [value, setValue] = useState(0);

  const [addItem, { isLoading }] = useMutation(basketAddItem, {
    onSuccess: (data) => queryCache.setQueryData(basketId, data),
  });

  const handleChooseService = useCallback(async () => {
    if (!item || !item.id) return;
    setValue(0);
    await addItem({ id: item.id, count: value, order: orderId });
    toast.success(`${item?.title} added`);
  }, [addItem, item, orderId, value]);

  if (!item) return null;

  return (
    <div className={styles.item}>
      <img className={styles.item__img} src={item.image ?? placeholder} alt={item.title} />
      <Caption as="div" className={styles.item__caption} weight="semi-bold">
        {item.title}
      </Caption>
      <AmountInput value={value} onChange={setValue} className={styles.item__input} />
      <Button disabled={value === 0 || isLoading} onClick={handleChooseService}>
        Add
      </Button>
    </div>
  );
};
