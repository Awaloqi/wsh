import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Invoice } from './admin/Invoice';
import './AdminApp.css';
import { combineProviders } from '../utils/combineProviders';
import { ApiProvider } from 'hooks';
import { ModalProvider } from './admin/ModalProvider';

const Providers = combineProviders([ModalProvider, ApiProvider]);

export const AdminApp = () => {
  return (
    <Providers>
      <Invoice />
      <ToastContainer />
    </Providers>
  );
};
