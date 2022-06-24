import React, { useEffect, useState } from 'react';
import { queryCache, useQuery } from 'react-query';
import { parse } from 'query-string';
import styles from './Route.module.scss';

import { DeliveryStatusEnum } from 'api';
import { Route } from './Route';
import { getDeliveries } from './apiDriver';
import { StatusFilter } from './StatusFilter';

const eitherArray = (value: string | string[] | null) => (Array.isArray(value) ? value.join('') : value);

export const Deliveries = () => {
  const [currentStatus, setStatus] = useState(eitherArray(parse(document.location.search)?.status) ?? 'new');
  const [currentFilter, setFilter] = useState<any>('All');
  const [currentSearch, setSearch] = useState<string>('');

  const { data: deliveries, isLoading } = useQuery('deliveries', getDeliveries);

  useEffect(() => {
    queryCache.invalidateQueries('deliveries');
  }, [currentStatus]);

  return (
    <>
      <StatusFilter currentStatus={currentStatus} setStatus={setStatus} />
      <div className={styles.col_contain}>
        <p>Filter:</p>
        <select value={currentFilter} onChange={(e) => setFilter(e.target.value)} className={styles.delivery_select}>
          <option>All</option>

          <option>Pick up</option>
          <option>Drop-off</option>
          <option>Rush</option>
        </select>
      </div>
      <div className={styles.col_contain}>
        <p>Search:</p>
        <input
          type="text"
          value={currentSearch}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.delivery_select}
        ></input>
      </div>
      {isLoading && <div>Loading...</div>}
      {deliveries
        ?.filter((delivery) =>
          currentStatus === 'new'
            ? delivery.status === DeliveryStatusEnum.Accepted || delivery.status === DeliveryStatusEnum.InProgress
            : delivery.status === DeliveryStatusEnum.Completed || delivery.status === DeliveryStatusEnum.Cancelled,
        )
        ?.map((delivery) => {
          if (
            currentSearch !== '' &&
            delivery &&
            delivery.client &&
            delivery.client.firstName &&
            delivery.client.lastName &&
            delivery.address &&
            delivery.address.addressLine1 &&
            (delivery.client.firstName.toLowerCase().includes(currentSearch.toLowerCase()) ||
              delivery.client.lastName.toLowerCase().includes(currentSearch.toLowerCase()) ||
              delivery.address.addressLine1.toLowerCase().includes(currentSearch.toLowerCase()))
          ) {
            if (currentFilter === 'All') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Pick up' && delivery.kind === 'pickup') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Drop-off' && delivery.kind === 'dropoff') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Rush' && delivery.isRush) {
              return <Route key={delivery.id} delivery={delivery} />;
            }
          } else if (currentSearch === '') {
            if (currentFilter === 'All') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Pick up' && delivery.kind === 'pickup') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Drop-off' && delivery.kind === 'dropoff') {
              return <Route key={delivery.id} delivery={delivery} />;
            }
            if (currentFilter === 'Rush' && delivery.isRush) {
              return <Route key={delivery.id} delivery={delivery} />;
            }
          }
          return null;
        })}
    </>
  );
};
