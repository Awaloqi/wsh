import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { queryCache, useMutation } from 'react-query';

import { Body, Button } from 'ui';
import { Delivery, DeliveryStatusEnum } from 'api';
import { capitalize, snakeToWhite } from 'utils/string';
import { formatDateShort } from 'utils/date';
import {
  patchDeliveryFinish,
  patchDeliveryStart,
  patchDeliverytoAccepted,
  patchDeliverytoCompleted,
  patchDeliverytoInProgress,
} from './apiDriver';
import styles from './Route.module.scss';
import { Note } from './Note';
import moment from 'moment';

type Props = {
  delivery: Delivery;
};

export const Route = ({ delivery }: Props) => {
  const [changeStatus, setChangeStatus] = useState<boolean>(false);
  const [changeTo, setChangeTo] = useState<string>('Accepted');

  const [deliveryStart] = useMutation(patchDeliveryStart, {
    onSuccess: () => queryCache.invalidateQueries('deliveries'),
  });
  const [deliveryFinish] = useMutation(patchDeliveryFinish, {
    onSuccess: () => queryCache.invalidateQueries('deliveries'),
  });

  const [deliveryAccepted] = useMutation(patchDeliverytoAccepted, {
    onSuccess: () => queryCache.invalidateQueries('deliveries'),
  });
  const [deliveryInProgress] = useMutation(patchDeliverytoInProgress, {
    onSuccess: () => queryCache.invalidateQueries('deliveries'),
  });
  const [deliveryCompleted] = useMutation(patchDeliverytoCompleted, {
    onSuccess: () => queryCache.invalidateQueries('deliveries'),
  });

  const handleStart = useCallback(async () => {
    await deliveryStart(delivery.id);
  }, [delivery, deliveryStart]);

  const handleFinish = useCallback(async () => {
    await deliveryFinish(delivery.id);
  }, [delivery, deliveryFinish]);

  const handleStatusUpdate = useCallback(
    async (newStatus) => {
      if (newStatus === '') {
        return;
      }

      if (newStatus === 'Accepted') {
        await deliveryAccepted(delivery.id);
      }
      if (newStatus === 'In Progress') {
        await deliveryInProgress(delivery.id);
      }
      if (newStatus === 'Completed') {
        await deliveryCompleted(delivery.id);
      }
    },
    [delivery, deliveryAccepted, deliveryCompleted, deliveryInProgress],
  );

  return (
    <div className={cn(styles.route, { [styles.route_rush]: delivery.isRush })}>
      <div className={styles.route__aligner}>
        <div className={styles.route__statement}>
          <Body>
            Type: <strong>{capitalize(delivery.kind)}</strong>
          </Body>
        </div>
        <div className={styles.route__statement}>
          <Body>
            Date: <strong>{formatDateShort(delivery.date)}</strong>
          </Body>
        </div>
      </div>
      <div className={styles.route__statement}>
        <div className={styles.statusWithChange}>
          <Body>
            Status: <strong>{capitalize(snakeToWhite(delivery.status))}</strong>{' '}
          </Body>
          <div>
            {!changeStatus ? (
              <div onClick={() => setChangeStatus(true)}>Change?</div>
            ) : (
              <div onClick={() => setChangeStatus(false)}>Cancel</div>
            )}
          </div>
        </div>
      </div>
      {changeStatus ? (
        <div className={styles.row_contain}>
          {/* <div>Change to: </div> */}
          <select
            value={changeTo}
            onChange={(e) => {
              console.log('in fun', e.target.value);
              setChangeTo(e.target.value);
            }}
            className={styles.delivery_select}
          >
            <option>Accepted</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <div className={styles.delivery_btn} onClick={() => handleStatusUpdate(changeTo)}>
            Update
          </div>
        </div>
      ) : null}
      <br />
      <div className={styles.route__statement}>
        <Body>
          Address:{' '}
          <strong>
            <a href={`geo:${delivery.address?.addressLine1}`}>
              {delivery.address?.addressLine2}, {delivery.address?.addressLine1}, {delivery.address?.zipCode}
              {delivery.address?.hasDoorman && ', Has Doorman'}
            </a>
          </strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Instructions: <strong>{delivery.address?.instructions}</strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Comment: <strong>{delivery.comment}</strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Phone:{' '}
          <a href={`tel:${delivery.client?.mainPhone}`}>
            <strong>{delivery.client?.mainPhone}</strong>
          </a>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Customer:{' '}
          <strong>
            {delivery.client?.firstName} {delivery.client?.lastName}
          </strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Rush: <strong>{delivery.isRush ? 'Yes' : 'No'}</strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Last updated: <strong>{moment(delivery.changed).format('DD MMM YYYY hh:mm:ss a')}</strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Body>
          Additional Numbers:&nbsp;
          <strong>{delivery.client && delivery.client.client_numbers ? delivery.client.client_numbers : 'N/A'}</strong>
        </Body>
      </div>
      <div className={styles.route__statement}>
        <Note id={delivery.id} initialValue={delivery.note} />
      </div>
      <div className={styles.route__actions}>
        {delivery.status === DeliveryStatusEnum.Accepted && (
          <Button variant="primary" size="sm" onClick={handleStart}>
            Start Route
          </Button>
        )}
        {delivery.status === DeliveryStatusEnum.InProgress && (
          <Button variant="primary" size="sm" onClick={handleFinish}>
            Finish Route
          </Button>
        )}
        {delivery.status === DeliveryStatusEnum.Completed && <Body>Delivery Completed</Body>}
      </div>
    </div>
  );
};
