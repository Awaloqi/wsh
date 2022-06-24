import { useMutation } from 'react-query';
import { SubscriptionChooseResponse as Invoice } from 'api';

import { setPackage } from '../services/apiClient';
import { useLocalStorage } from './useLocalStorage';
import { useHistory } from 'react-router';

const INVOICE_LOCALSTORAGE_KEY = 'washmix-welcome-packages';

export const useInvoice = () => {
  const history = useHistory();
  const { storedValue: invoice, setValue } = useLocalStorage<Invoice>(INVOICE_LOCALSTORAGE_KEY);
  const [getInvoice, { isLoading }] = useMutation(setPackage, {
    onSuccess: (data) => data && setValue(data),
    onError: () => history.push('/'),
  });

  return { invoice, getInvoice, isLoading };
};
