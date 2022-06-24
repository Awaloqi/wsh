import React, { useCallback } from 'react';
import { queryCache, useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { basketRemoveItem, getBasket, patchNote, postCheckout, addCoupon, postCustom, removeCoupon } from '../apiPos';
import { postDeliveryAmount, postRushDeliveryAmount } from '../apiPos';
import styles from './Summary.module.scss';
import { Body, Body2, Caption, H4 } from 'ui';
import { Button } from '../ui/Button';
import { useModal } from '../ModalProvider';
import { BasketItem } from './BasketItem';
import { CustomBasketItem } from './CustomBasketItem';
import { normalizeAsyncError } from '../../../utils/object';

type Props = {
  orderId: number;
  clientId: number;
};

const getToastCheckoutOptions = (clientId: number) => ({
  onClose: () => {
    document.location.assign(`/admin/users/client/${clientId}/change/#/tab/inline_0/`);
  },
  delay: 1000,
});

const dollarsToCents = (price: string) => Math.round(Number.parseFloat(price) * 100);

export const Summary = ({ orderId, clientId }: Props) => {
  const basketId = ['basket', orderId];
  const { data: basket } = useQuery(basketId, getBasket);
  const [removeItem] = useMutation(basketRemoveItem, { onSuccess: (data) => queryCache.setQueryData(basketId, data) });
  const [updateNote] = useMutation(patchNote, { onSuccess: (data) => queryCache.setQueryData(basketId, data) });
  const [checkout, { isLoading }] = useMutation(postCheckout, {
    throwOnError: true,
    onSuccess: (data) => queryCache.setQueryData(basketId, data),
  });
  const [applyCoupon] = useMutation(addCoupon, { onSuccess: () => queryCache.invalidateQueries(basketId) });
  const [deleteCoupon] = useMutation(removeCoupon, { onSuccess: () => queryCache.invalidateQueries(basketId) });
  const [createCustom] = useMutation(postCustom, { onSuccess: (data) => queryCache.setQueryData(basketId, data) });
  const [setDeliveryAmount] = useMutation(postDeliveryAmount, {
    onSuccess: (data) => queryCache.setQueryData(basketId, data),
  });
  const [setRushDeliveryAmount] = useMutation(postRushDeliveryAmount, {
    onSuccess: (data) => queryCache.setQueryData(basketId, data),
  });
  const { openModal, closeModal } = useModal();

  const handleRemove = useCallback(
    async (id: number, count: number, title: string) => {
      await removeItem({ id, count, order: orderId });
      toast.success(`${title} removed`);
    },
    [orderId, removeItem],
  );

  const handleCustomRemove = useCallback(
    async (index: number, title: string) => {
      const extraItems = basket?.basket?.extraItems.filter((_, i) => i !== index) || [];
      await createCustom({ extraItems, order: orderId });
      toast.success(`${title} removed`);
    },
    [basket, createCustom, orderId],
  );

  const handleEditNote = useCallback(
    async (note: string) => {
      await updateNote({ id: basket?.id ?? 0, note });
      toast.success('Note updated');
    },
    [basket, updateNote],
  );

  const handleNotesOpen = useCallback(() => {
    openModal('NOTE', { initialValue: basket?.note, onDone: handleEditNote });
  }, [basket, handleEditNote, openModal]);

  const handleOrderCreate = useCallback(async () => {
    const response = await checkout(basket?.id).catch(normalizeAsyncError);
    if (response?.id) {
      toast.success('Checkout success', getToastCheckoutOptions(clientId));
    } else {
      toast.error((response as any)?.['0'], getToastCheckoutOptions(clientId));
    }
  }, [basket, checkout, clientId]);

  const handleApplyCoupon = useCallback(
    async (coupon: string) => {
      closeModal();
      if (coupon === 'NONE') {
        await deleteCoupon({ order: orderId });
        toast.success('Coupon removed');
      } else {
        await applyCoupon({ coupon, order: orderId });
        toast.success('Coupon applied');
      }
    },
    [applyCoupon, closeModal, deleteCoupon, orderId],
  );

  const handleApplyRush = useCallback(
    async (price: string) => {
      await setRushDeliveryAmount({ orderId, amount: dollarsToCents(price) });
      toast.success('Rush price applied');
    },
    [orderId, setRushDeliveryAmount],
  );

  const handleApplyDelivery = useCallback(
    async (price: string) => {
      await setDeliveryAmount({ orderId, amount: dollarsToCents(price) });
      toast.success('Custom delivery price applied');
    },
    [orderId, setDeliveryAmount],
  );

  const handleDiscountClick = useCallback(() => {
    openModal('DISCOUNT', { onChoose: handleApplyCoupon });
  }, [openModal, handleApplyCoupon]);

  const handleRushClick = useCallback(() => {
    openModal('DELIVERY', { onSubmit: handleApplyRush, initialRushAmount: basket?.request?.dollarRushAmount ?? 0 });
  }, [openModal, handleApplyRush, basket]);

  const handleDeliveryClick = useCallback(() => {
    openModal('DELIVERY', {
      onSubmit: handleApplyDelivery,
      initialRushAmount: basket?.request?.dollarAmountWithDiscount ?? 0,
    });
  }, [openModal, handleApplyDelivery, basket]);

  const handleCreateCustom = useCallback(
    async (name: string, instructions: string, price: number) => {
      const extraItems = basket?.basket?.extraItems.concat([{ title: name, instructions, amount: price }]) || [];
      await createCustom({ extraItems, order: orderId });
      toast.success(`${name} added`);
    },
    [basket, createCustom, orderId],
  );

  const handleCustomClick = useCallback(() => {
    openModal('CUSTOM', { onDone: handleCreateCustom });
  }, [handleCreateCustom, openModal]);

  return (
    <div className={styles.summary}>
      <H4>Summary</H4>
      <div className={styles.summary__list}>
        {basket?.basket?.itemList.map((item) => (
          <BasketItem key={item.id} item={item} onRemove={handleRemove} />
        ))}
        {basket?.basket?.extraItems.map((item, index) => (
          <CustomBasketItem key={item.title} index={index} item={item} onRemove={handleCustomRemove} />
        ))}
        <div className={styles.summary__item}>
          <Caption fontStyle="italic">Notes: {basket?.note}</Caption>
        </div>
      </div>
      <div className={styles.summary__total}>
        <div className={styles.summary__totalItem}>
          <Body2>Discount</Body2>
          <Body2>${basket?.dollarDiscount ?? 0}</Body2>
        </div>
        {basket?.coupon && (
          <div className={styles.summary__totalItem}>
            <Body2>Coupon</Body2>
            <Body2>{basket?.coupon}</Body2>
          </div>
        )}
        <div className={styles.summary__totalItem}>
          <Body2>Subtotal</Body2>
          <Body2>${basket?.dollarAmount ?? 0}</Body2>
        </div>
        <div className={styles.summary__totalSum}>
          <Body weight="semi-bold">Total</Body>
          <Body weight="semi-bold">${basket?.dollarAmountWithDiscount ?? 0}</Body>
        </div>
      </div>
      <div className={styles.summary__actions}>
        <Button kind="secondary" onClick={handleCustomClick}>
          Custom
        </Button>
        <Button kind="secondary" onClick={handleDiscountClick}>
          Discount
        </Button>
      </div>
      <div className={styles.summary__actions}>
        <Button onClick={handleDeliveryClick} kind="secondary">
          Delivery
        </Button>
        {basket?.request?.isRush && (
          <Button kind="secondary" onClick={handleRushClick}>
            Rush
          </Button>
        )}
      </div>
      <div className={styles.summary__actions}>
        <Button onClick={handleNotesOpen} kind="secondary">
          Notes
        </Button>
      </div>
      <div className={styles.summary__actions}>
        <Button kind="primary" onClick={handleOrderCreate} isLoading={isLoading}>
          Create Order
        </Button>
      </div>
    </div>
  );
};
