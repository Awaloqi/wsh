import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { queryCache, useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Body, Body2, Button, Link } from 'ui';
import { Coupon } from '../welcome/Checkout/Coupon';
import { OrderApplyCouponResponse as AppliedCoupon } from 'api';
import styles from './ModalSummary.module.scss';
import { Payment } from 'icons';
import { useApi, useInvoice } from 'hooks';
import { capitalize } from 'utils/string';
import { delay } from 'utils/date';
import { prices } from '../../constants';
import { ModalPayment } from './ModalPayment';

type Props = {
  close: () => void;
};

const UPDATING_PLAN_DELAY = 3 * 1000;

export const ModalSummary = ({ close }: Props) => {
  const { getCards, postSubscriptionCheckout } = useApi();
  const [coupon, setCoupon] = useState<AppliedCoupon | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleOpenPaymentModal = useCallback(() => setShowPaymentModal(true), [setShowPaymentModal]);
  const handleClosePaymentModal = useCallback(() => setShowPaymentModal(false), [setShowPaymentModal]);
  const { data: cards } = useQuery('cards', getCards);
  const { invoice } = useInvoice();
  const [checkout, { isLoading }] = useMutation(postSubscriptionCheckout, {
    onSuccess: async () => {
      await delay(UPDATING_PLAN_DELAY);
      toast.success('Package updated successfully!');
    },
    onSettled: () => queryCache.invalidateQueries('profile'),
  });

  const handleSubmit = useCallback(async () => {
    if (cards?.[0] && invoice) {
      await checkout({ order: `${invoice.id}` });
      close();
    }
  }, [cards, invoice, checkout, close]);

  if (!invoice) return null;

  return (
    <>
      <div className={styles.block}>
        <Body className={styles.spaceXL}>Review Order</Body>
        <Coupon onSuccess={setCoupon} onError={() => setCoupon(null)} invoiceId={`${invoice.id}`} />

        <div className={cn(styles.total, styles.spaceXS)}>
          <Body2 weight="light">{capitalize(invoice?.subscription)} Credit Pack</Body2>
          <Body2 weight="light">${invoice.dollarAmount}</Body2>
        </div>

        <div className={cn(styles.total, styles.spaceXS)}>
          <Body2 weight="light">Promo Box (${prices.welcomeBoxValue} Value)</Body2>
          <Body2 weight="light">FREE</Body2>
        </div>

        <div className={cn(styles.total, styles.spaceXS)}>
          <Body2 weight="light">
            Seasonal Garment Storage
            <br />
            (${prices.seasonStorageValue}/mo value)
          </Body2>
          <Body2 weight="light">FREE</Body2>
        </div>

        {coupon && (
          <div className={cn(styles.total, styles.spaceXS)}>
            <Body2 weight="light">Discount</Body2>
            <Body2 weight="light">${coupon.dollarDiscount}</Body2>
          </div>
        )}

        <div className={cn(styles.total, styles.spaceM)}>
          <Body>Total</Body>
          <Body>${coupon ? coupon.dollarAmountWithDiscount : invoice.dollarAmount}</Body>
        </div>
      </div>
      <div className={styles.block}>
        <Body className={styles.spaceXL}>Payment Method</Body>
        {cards && cards[0] && (
          <div className={cn(styles.card, styles.spaceXS)}>
            <Payment className={styles.icon} />
            <Body2 weight="light" color="dark-grey">
              Payment card ending in {cards[0].last}
            </Body2>
          </div>
        )}
        <div className={styles.card}>
          <span className={styles.plusIcon}>+</span>
          <Link onClick={handleOpenPaymentModal}>Use a different card</Link>
        </div>
      </div>
      <Button variant="primary" size="md" isBlock className={styles.button} onClick={handleSubmit} disabled={isLoading}>
        Place order
      </Button>
      <ModalPayment isOpen={showPaymentModal} close={handleClosePaymentModal} />
    </>
  );
};
