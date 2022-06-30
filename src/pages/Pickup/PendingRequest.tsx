import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useQuery } from 'react-query';

import { Body2, Button, H4, Link } from 'ui';
import { useApi, useAuth } from 'hooks';
import { useModal } from 'modals';
import styles from './PendingRequest.module.scss';
import { Header } from '../../components/Header';

export const PendingRequest = () => {
  const { user, logout } = useAuth();
  const { getProfile } = useApi();
  const { openModal } = useModal();
  const history = useHistory();
  const { state } = useLocation<{ deliveryId: number } | undefined>();
  const { data: profile } = useQuery('profile', getProfile);

  useEffect(() => {
    if (!state?.deliveryId) {
      history.replace('/');
    } else if (profile?.subscription === undefined || profile?.subscription === 'payc') {
      openModal('ADVANTAGE');
    }
  }, [history, openModal, profile, state]);

  return (
    <>
      <Header logout={logout} user={user} />
      <div className={styles.container}>
        <div className={styles.bg} />
        <div className={styles.content}>
          <div className={styles.message}>
            <H4 className={styles.header}>Pending Request</H4>
            <Body2 className={styles.desc} weight="light">
              We are in processing of scheduling your pickup. Hang tight!
            </Body2>
            {(!profile?.subscription || profile.subscription === 'payc') && (
              <>
                <Body2 className={styles.desc2} weight="bold">
                  For ongoing discounts & more
                </Body2>
                <Link to="/account/packages" variant="primary">
                  Try WashMix Advantage Now…
                </Link>
              </>
            )}
          </div>
          <Button variant="primary" size="md" isBlock to="/upcoming">
            View request
          </Button>
        </div>
      </div>
    </>
  );
};
