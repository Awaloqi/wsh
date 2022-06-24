import React, { useCallback, useMemo, useState } from 'react';
import { Form } from 'react-final-form';
import { queryCache, useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { H4, Link } from 'ui';
import { useApi } from 'hooks';
import { normalizeAsyncError } from 'utils/object';
import { BillingAddressForm, BillingAddressFormValues } from './BillingAddressForm';
import styles from './Billing.module.scss';
import { BillingCard } from './BillingCard';
import { ModalPayment } from '../../Pickup/ModalPayment';
import { deleteCard } from 'services/apiClient';

export const Billing = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { patchProfile, getProfile, getCards, postRefreshCards } = useApi();
  const { data: profile } = useQuery('profile', getProfile);
  const { data: cards } = useQuery('cards', getCards);
  const [updateAddress] = useMutation(patchProfile, {
    onSuccess: (data) => queryCache.setQueryData('profile', data),
    throwOnError: true,
  });
  const [refreshCards] = useMutation(postRefreshCards, {
    onSuccess: () => queryCache.invalidateQueries('cards'),
  });

  const [removeCard] = useMutation(deleteCard, {
    onSuccess: () => {
      console.log('card removed');
    },
    onError: (e: any) => {
      console.log('had an error', e);
    },
  });

  const handleSubmit = useCallback(
    (values: BillingAddressFormValues) =>
      updateAddress({ billingAddress: values })
        .then(() => {
          toast.success('Billing address updated successfully!');
        })
        .catch(normalizeAsyncError),
    [updateAddress],
  );
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

  const handleClosePaymentModal = useCallback(async () => {
    setShowPaymentModal(false);
    await refreshCards();
    await delay(2000);

    cards?.forEach(async (card) => {
      await removeCard(card.id);
    });

    await refreshCards();
  }, [refreshCards, cards, removeCard]);

  const handleOpenPaymentModal = useCallback(async () => {
    setShowPaymentModal(true);
  }, []);

  const initialValues = useMemo(
    () => ({
      zipCode: (profile?.billingAddress as any)?.zipCode,
      addressLine1: (profile?.billingAddress as any)?.addressLine1,
      addressLine2: (profile?.billingAddress as any)?.addressLine2,
    }),
    [profile],
  );

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <H4>Billing address</H4>
        <Form<BillingAddressFormValues>
          onSubmit={handleSubmit}
          component={BillingAddressForm}
          initialValues={initialValues}
        />
      </div>
      <div className={styles.card}>
        <H4>Payment Methods</H4>
        <div className={styles.payments}>
          {cards?.map((card) => (
            <BillingCard key={card.id} {...card} />
          ))}
          <div className={styles.addPayment}>
            <Link onClick={handleOpenPaymentModal}>
              <span className={styles.plusIcon}>+</span>Add a different card
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="disclaimercard">
        <b style={{ color: '#2ec35f' }}>Disclaimer:</b>
        <br />
        By using WashMix, we require all clients to have a valid credit card on file at all times. IF you would like to
        update your card details; simply click on + Add a different card - then proceed to add a valid card. This will
        will automatically update and replacement your old card.
      </div>
      <ModalPayment isOpen={showPaymentModal} close={handleClosePaymentModal} />
    </div>
  );
};
