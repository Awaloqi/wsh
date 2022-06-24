import React, { ElementType } from 'react';
import { useQuery } from 'react-query';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useApi, useAuth } from 'hooks';

type Props = {
  component: ElementType;
} & RouteProps;

const CheckSubscriptionRoute = ({ component: Component, ...rest }: Props) => {
  const { getProfile } = useApi();
  const { data: profile } = useQuery('profile', getProfile);

  return (
    <Route
      {...rest}
      render={(props) =>
        !profile || profile.subscription ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/order/packages', state: { from: props.location } }} />
        )
      }
    />
  );
};

export const PrivateRoute = ({ component, ...rest }: Props) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <CheckSubscriptionRoute component={component} {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};
