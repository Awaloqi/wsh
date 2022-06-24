import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { queryCache, useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Button, CheckboxStateless, H4 } from 'ui';
import { useApi } from 'hooks';
import styles from './Packages.module.scss';
import { PackagesForm } from 'components/Pricing';
import { delay } from 'utils/date';
import { normalizeAsyncError } from 'utils/object';
import downArrow from 'assets/new-ui/pricing/downarrow.png';
import WashmixAdvantageModal from 'modals/WashmixAdvantageModal';

const UPDATING_PLAN_DELAY = 3 * 1000;

export const Packages = () => {
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  const [isAdvantageModalOpen, setIsAdvantageModalOpen] = useState(false);

  const [plan, setPlan] = useState<string>('payc');
  const [isAutoBilling, setAutoBilling] = useState(true);
  const { getProfile, getPackages, patchProfile, postSubscriptionCheckout, setPackage } = useApi();
  useQuery('packages', getPackages);
  const [updateProfile, { isLoading: isProfileUpdating }] = useMutation(patchProfile, {
    onSuccess: (data) => queryCache.setQueryData('profile', data),
  });
  const { data: profile, isLoading: isProfileLoading } = useQuery('profile', getProfile, {
    refetchOnMount: true,
    onSuccess: (data) => {
      setPlan(data?.subscription ?? 'payc');
      setAutoBilling(data?.isAutoBilling ?? true);
    },
  });

  const [getInvoice, { isLoading: isInvoiceLoading }] = useMutation(setPackage);
  const [checkout] = useMutation(postSubscriptionCheckout, {
    onMutate: () => setCheckoutLoading(true),
    onSuccess: async () => {
      await delay(UPDATING_PLAN_DELAY);
      toast.success('Package updated successfully!');
    },
    onError: async (response: any) => {
      const errors = await normalizeAsyncError(response);
      Object.values(errors).forEach((error) => toast.error(error));
    },
    onSettled: async () => {
      await queryCache.invalidateQueries('profile');
      setCheckoutLoading(false);
    },
  });

  const isLoading = isInvoiceLoading || isCheckoutLoading || isProfileUpdating;

  const handleSubmit = useCallback(async () => {
    const isBillingChanged = profile?.isAutoBilling !== isAutoBilling;
    const isPlanChanged = profile?.subscription !== plan;
    if (isPlanChanged) {
      const invoice = await getInvoice(plan);
      await checkout({ order: `${invoice?.id}` });
    }
    if (isBillingChanged) {
      await updateProfile({ isAutoBilling: isAutoBilling });
      toast.success('Billing updated successfully!');
    }
    if (!isBillingChanged && !isPlanChanged) {
      toast.info('Nothing to update');
    }
  }, [profile, isAutoBilling, updateProfile, plan, getInvoice, checkout]);

  if (isProfileLoading) {
    return (
      <div className={cn(styles.packages, styles.packages___isLoading)}>
        <H4>Loading...</H4>
      </div>
    );
  }

  return (
    <div className={styles.packages}>
      <WashmixAdvantageModal visible={isAdvantageModalOpen} onHide={() => setIsAdvantageModalOpen(false)} />
      <div className="vague-remover">
        <div>
          <b>Select</b> either <b>PAYC</b> [Pay As You Clean] <br />
          <b style={{ color: '#2ec35f', lineHeight: '25px' }}>OR</b> <br />
          <b>WashMix Advantage Pre-Paid</b> options & get <b>Discounts & Perks</b> <br />
        </div>{' '}
        <span style={{ fontSize: 'small' }}>
          <i>
            <span style={{ color: '#2ec35f', fontWeight: 'bold' }}>Reminder</span>: Your Pre-paid credit{' '}
            <span style={{ color: '#2ec35f', fontWeight: 'bold' }}>never</span>&nbsp;expires
          </i>
        </span>
        <p className="more-info-sect">
          For more info, see{' '}
          <span className="advantage-modal-text" onClick={() => setIsAdvantageModalOpen(true)}>
            Washmix Advantage
          </span>
        </p>
        <img src={downArrow} width="30px" alt="down-arrow" />
      </div>
      <div className={styles.packages__table}>
        <PackagesForm activeId={plan} onChange={setPlan} />
      </div>
      {plan !== 'payc' && (
        <CheckboxStateless
          className={styles.packages__checkbox}
          name="autoReloadCard"
          label="Auto reload my account, when balance below $10"
          checked={isAutoBilling}
          onChange={setAutoBilling}
        />
      )}

      {plan !== profile?.subscription ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button
        className={styles.packages__button}
        variant="primary"
        size="md"
        disabled={plan === profile?.subscription}
        onClick={handleSubmit}
        isLoading={isLoading}
      >
        Update
      </Button>
    </div>
  );
};
