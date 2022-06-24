import React from 'react';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';

import { Driver } from './driver/Driver';
import '../index.scss';
import './DriverApp.css';

const reactQueryConfig: ReactQueryConfig = {
  queries: {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  },
  mutations: {
    throwOnError: true,
  },
};

export const DriverApp = () => {
  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <Driver />
    </ReactQueryConfigProvider>
  );
};
