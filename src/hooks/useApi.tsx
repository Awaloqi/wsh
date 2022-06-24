import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { captureException } from '@sentry/react';
import * as apiClient from 'services/apiClient';
import { getUser } from '../services/storage';

type Props = PropsWithChildren<{
  api?: typeof apiClient;
}>;

const ApiContext = createContext(apiClient);

const reactQueryConfig: ReactQueryConfig = {
  queries: {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: async (error: any) => {
      if (error instanceof Response && error.status < 500) {
        const e = await error.clone().json();
        captureException(new Error(e.detail ?? e), {
          extra: { response: error, user: getUser()?.email },
          tags: { scope: 'query' },
        });
      } else {
        captureException(error);
      }
    },
  },
  mutations: {
    onError: async (error: any, variables: any) => {
      if (error instanceof Response && error.status < 500) {
        const e = await error.clone().json();
        captureException(new Error(e.detail ?? e), {
          extra: { response: error, variables, user: getUser()?.email },
          tags: { scope: 'mutation' },
        });
      } else {
        captureException(error);
      }
    },
  },
};

export const ApiProvider = ({ children, api }: Props) => {
  return (
    <ApiContext.Provider value={api || apiClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ReactQueryConfigProvider config={reactQueryConfig}>{children}</ReactQueryConfigProvider>
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
