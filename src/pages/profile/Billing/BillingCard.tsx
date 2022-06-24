import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { queryCache, useMutation } from 'react-query';

import styles from './Billing.module.scss';
import { Payment } from 'icons';
import { Body2, Link } from 'ui';
import { Card } from 'api';
import { useApi } from 'hooks';

type Props = Card;

export const BillingCard = ({ expirationMonth, expirationYear, id, last }: Props) => {
  const { deleteCard } = useApi();
  const [isChanged, setIsChanged] = React.useState(false);

  const [removeCard] = useMutation(deleteCard, {
    onSuccess: () => {
      toast.success('Card was removed');

      queryCache.invalidateQueries('cards');
    },
    onError: (e: any) => {
      if (e.status === 412) {
        setIsChanged(true);
      }
    },
  });

  const handleRemoveCard = useCallback(async () => {
    await removeCard(id);
  }, [removeCard, id]);

  return (
    <div key={id} className={styles.payment}>
      <Payment className={styles.icon} />
      <Body2 weight="light" color="dark-grey" className={styles.cardDescription}>
        Payment card ending in {last}, expiration {expirationMonth} / {expirationYear}
      </Body2>
      {isChanged ? (
        <div className={styles.popupCard}>
          <span className={styles.popuptextCard} id="myPopup">
            Your default payment method can&apos;t be deleted. In order to update your card, simply click on{' '}
            <i>+ Add a different card</i>
          </span>
        </div>
      ) : null}
      <Link onClick={handleRemoveCard}>
        <span className={styles.plusIcon}>–</span>Remove
      </Link>
    </div>
  );
};
