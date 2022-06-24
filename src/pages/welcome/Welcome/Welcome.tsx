import React, { useMemo } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { WelcomeHeader, welcomeHeaderSteps } from '../common/WelcomeHeader';
import { Registration } from '../Registration';
import { Packages } from '../Packages';
import { Delivery } from '../Delivery';
import { Checkout } from '../Checkout';
import { useAuth } from 'hooks';
import { steps } from '../common/WelcomeHeader/steps';
import { Advantage } from '../Advantage';

type Step = typeof steps[0]['id'];
type Props = RouteComponentProps;

export const Welcome = ({ location }: Props) => {
  const { user } = useAuth();
  const step = useMemo(() => welcomeHeaderSteps.find(({ url }) => url === location.pathname)?.id, [location.pathname]);
  const disabledSteps = useMemo(() => {
    if (location.pathname === '/registration') return ['packages', 'delivery', 'checkout'] as Step[];
    const result: Step[] = ['welcome'];
    if (!window.localStorage.getItem('washmix-welcome-packages')) {
      result.push('packages');
    }
    if (!window.localStorage.getItem('washmix-welcome-delivery')) {
      result.push('delivery');
    }
    if (!window.localStorage.getItem('washmix-welcome-checkout')) {
      result.push('checkout');
    }
    return result;
  }, [location.pathname]);
  return (
    <div className="grid-container">
      <WelcomeHeader step={step} disabledSteps={disabledSteps} />
      <div className="page-container">
        {user ? (
          <Switch>
            <Redirect from="/registration" to="/order/packages" />
            <Route path="/order/advantage" component={Advantage} />
            <Route path="/order/packages" component={Packages} />
            <Route path="/order/delivery" component={Delivery} />
            <Route path="/order/checkout" component={Checkout} />
          </Switch>
        ) : (
          <Switch>
            <Redirect from="/order" to="/registration" />
            <Route path="/registration" component={Registration} />
          </Switch>
        )}
      </div>
    </div>
  );
};
