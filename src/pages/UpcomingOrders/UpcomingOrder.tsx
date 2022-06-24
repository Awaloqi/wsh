import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { queryCache, useMutation, useQuery } from 'react-query';

import { Request as Props } from 'api';
import { Body, Body2, H4, Link } from 'ui';
import { formatDate } from 'utils/date';
import { ModalDate, PickupFormValues } from '../Pickup/ModalDate';
import { ModalReschedule } from './ModalReschedule';
import styles from './UpcomingOrders.module.scss';
import { useApi } from '../../hooks';

export const UpcomingOrder = ({ id, address, pickupDate, dropoffDate }: Props) => {
  const { getAddresses, patchDelivery, deleteDelivery } = useApi();
  const { data: addresses, isLoading } = useQuery('addresses', getAddresses);
  const [mutate] = useMutation(patchDelivery, { onSuccess: () => queryCache.invalidateQueries('deliveries') });
  const [deleteCall] = useMutation(deleteDelivery, { onSuccess: () => queryCache.invalidateQueries('deliveries') });

  const [isOpen, setIsOpen] = useState(false);
  const [requestError, setRequestError] = useState();
  const [rescheduleError, setRescheduleError] = useState();

  const [isDateOpen, setIsDateOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleDateOpen = useCallback(() => {
    setIsDateOpen(true);
  }, [setIsDateOpen]);

  const handleDateClose = useCallback(() => {
    setIsDateOpen(false);
  }, [setIsDateOpen]);

  const handleConfirm = useCallback(() => {
    handleClose();
    handleDateOpen();
  }, [handleClose, handleDateOpen]);

  const handleSubmitDate = useCallback(
    async (values: PickupFormValues) => {
      const response = await mutate({ id, address, pickupDate: values.pickupDate });
      if (response?.error) {
        console.log(response);
        setRescheduleError(response.error);
        handleDateClose();

        return { date: response.error };
      }
      handleDateClose();
    },
    [mutate, handleDateClose, id, address],
  );

  const handleSubmitDelete = () => {
    deleteCall(id?.toString())
      .then((response) => {
        if (response?.error) {
          setRequestError(response.error);
        }
      })
      .catch((e) => setRequestError(e));
  };

  if (isLoading) {
    return (
      <div className={cn(styles.upcoming_order, styles.upcoming_order___isLoading)}>
        <H4>Loading...</H4>
      </div>
    );
  }

  return (
    <div className={styles.upcoming_order}>
      <H4 className={styles.header}>Upcoming Order</H4>
      <div className={styles.upcoming_item}>
        <Body weight="medium" color="grey">
          Location Pickup & Dropoff
        </Body>
        <Body2>{addresses?.find(({ id }) => address === id)?.addressLine1}</Body2>
      </div>
      <div className={styles.upcoming_item}>
        <Body weight="medium" color="grey">
          Pickup Date
        </Body>
        <Body2>{formatDate(pickupDate)}</Body2>
      </div>
      <div className={styles.upcoming_item}>
        <Body weight="medium" color="grey">
          Dropoff Date
        </Body>
        <Body2>{formatDate(dropoffDate)}</Body2>
      </div>
      <Link variant="primary" className={styles.upcoming_reschedule} onClick={handleOpen}>
        Reschedule?
      </Link>
      <div className={styles.upcoming_reschedule}>OR</div>
      <Link variant="primary" className={styles.upcoming_reschedule} onClick={handleSubmitDelete}>
        Delete?
      </Link>
      {requestError && <Body2 color="red">{JSON.stringify(requestError)}</Body2>}
      {rescheduleError && <Body2 color="red">{JSON.stringify(rescheduleError)}</Body2>}

      <ModalDate
        isOpen={isDateOpen}
        close={handleDateClose}
        pickupDate={pickupDate}
        isRush={false}
        onSubmit={handleSubmitDate}
      />
      <ModalReschedule isOpen={isOpen} close={handleClose} onConfirm={handleConfirm} />
    </div>
  );
};
