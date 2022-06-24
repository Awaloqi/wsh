import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PrivacyPolicy, TermsOfUse, Welcome } from 'pages';
import { ApiProvider, AuthProvider, MapsProvider, PaymentProvider } from 'hooks';
import { ModalProvider } from 'modals';
import { ScrollToTop } from 'utils/ScrollToTop';
import { combineProviders } from 'utils/combineProviders';
import { Logger } from 'utils/Logger';
import { Container } from './Container';

import '../../bootstrap.min.css';
import '../../index.scss';
import 'react-toastify/dist/ReactToastify.css';
import WashmixAdvantageModal from 'modals/WashmixAdvantageModal';

// Providers are applied from bottom to top
const Providers = combineProviders([
  MapsProvider,
  ModalProvider,
  PaymentProvider,
  AuthProvider,
  ApiProvider,
  Router,
  Logger,
]);

export const App = () => {
  return (
    <Providers>
      <div className="app">
        <Switch>
          <Route path={['/registration', '/order']} component={Welcome} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/washmix-advantages-modal" component={WashmixAdvantageModal} />
          <Route path="/" render={() => <Container />} />
        </Switch>

        <ScrollToTop />
        <ToastContainer />
      </div>
    </Providers>
  );
};
