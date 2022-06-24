import React, { ReactNode } from 'react';
import { init as sentryInit, ErrorBoundary } from '@sentry/react';

import { SENTRY_DSN } from '../constants';

if (SENTRY_DSN) {
  sentryInit({ dsn: SENTRY_DSN });
}

export const Logger = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary fallback="An error has occurred">{children}</ErrorBoundary>
);
