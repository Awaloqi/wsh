import React from 'react';
import { parse } from 'query-string';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { H4 } from 'ui';
import { AllItems } from './AllItems';
import { CustomerCard } from './CustomerCard';
import { DeliveryCharges } from './DeliveryCharges/DeliveryCharges';

import styles from './Invoice.module.scss';
import { Summary } from './Summary/Summary';
import { postPrepare } from './apiPos';
import { normalizeAsyncError } from '../../utils/object';

const params = parse(document.location.search);
const clientId = Number(params.client_id);
const requestId = Number(params.request_id);

export const Invoice = () => {
  const { data, isLoading, error } = useQuery(['prepare', { client: clientId, request: requestId }], postPrepare, {
    onError: async (response: Response) => {
      const error = await normalizeAsyncError(response);
      if ('nonFieldErrors' in error) {
        toast.error(error.nonFieldErrors, {
          onClose: () => {
            document.location.assign(`/admin/users/client/${clientId}/change/#/tab/inline_0/`);
          },
        });
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={styles.invoice}>
      <div className={styles.invoice__left}>
        <H4>Invoice</H4>
        {data.client && data.request && <CustomerCard client={data.client} request={data.request} />}
        {data.id && <AllItems orderId={data.id} />}
      </div>
      <div className={styles.invoice__right}>
        {data.id && <DeliveryCharges orderId={data.id} />}
        {data.id && <Summary orderId={data.id} clientId={clientId} />}
      </div>
    </div>
  );
};
