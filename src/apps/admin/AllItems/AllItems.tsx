import React, { useState } from 'react';
import { useQuery } from 'react-query';

import styles from './AllItems.module.scss';
import { Item } from './Item/Item';
import { getServices } from '../apiPos';
import { Button } from '../ui/Button';

type Props = {
  orderId: number;
};

export const AllItems = ({ orderId }: Props) => {
  const [activeService, setService] = useState(0);
  const { data: services } = useQuery('services', getServices);
  return (
    <div className={styles.allItems}>
      <div className={styles.allItems__buttons}>
        {services?.map(({ id, title }, index) => (
          <Button
            key={id}
            className={styles.allItems__button}
            kind={activeService === index ? 'primary' : 'secondary'}
            onClick={() => setService(index)}
          >
            {title}
          </Button>
        ))}
      </div>
      <div className={styles.allItems__list}>
        {services?.[activeService]?.itemList?.map((item) => (
          <Item key={item.id} item={item} orderId={orderId} />
        ))}
      </div>
    </div>
  );
};
