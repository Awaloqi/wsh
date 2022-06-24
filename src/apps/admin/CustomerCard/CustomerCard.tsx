import React from 'react';

import { POSOrderPrepareClientResponse, POSOrderPrepareRequestResponse } from 'api';
import { Body2, Caption } from 'ui';
import { capitalize, snakeToWhite } from 'utils/string';
import styles from './CustomerCard.module.scss';

type Props = {
  client: POSOrderPrepareClientResponse;
  request: POSOrderPrepareRequestResponse;
};

export const CustomerCard = ({ client, request }: Props) => {
  return (
    <div className={styles.customer}>
      <Body2 className={styles.description} weight="medium">
        {client.firstName} {client.lastName}
      </Body2>
      <div className={styles.description}>
        <Caption>
          {request.address.addressLine2}, {request.address.addressLine1} {request.address.hasDoorman && 'Has doorman'}
        </Caption>
      </div>
      <div className={styles.description}>
        <Caption color="grey" weight="semi-bold">
          Starch
        </Caption>
        <Caption>{capitalize(client.starch)}</Caption>
      </div>
      <div className={styles.description}>
        <Caption color="grey" weight="semi-bold">
          No Crease (Pants)
        </Caption>
        <Caption>{capitalize(snakeToWhite(client.noCrease))}</Caption>
      </div>
      <div className={styles.description}>
        <Caption color="grey" weight="semi-bold">
          Fix tears, rips and undone hem
        </Caption>
        <Caption>{client.fixTears ? 'On' : 'Off'}</Caption>
      </div>
      <div className={styles.description}>
        <Caption color="grey" weight="semi-bold">
          Available Credit
        </Caption>
        <Caption color="green">+ {client.dollarBalance} Credit</Caption>
      </div>
    </div>
  );
};
