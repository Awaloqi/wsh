import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { InputStateless } from 'ui';

import { useDebounce } from 'hooks';
import { applyCoupon } from 'services/apiClient';
import { OrderApplyCouponResponse as AppliedCoupon } from 'api';

type Props = {
  invoiceId: string;
  onSuccess: (coupon: AppliedCoupon) => void;
  onError: () => void;
};

const COUPON_SUBMITTING_DELAY = 500;

export const Coupon = ({ onSuccess, onError, invoiceId }: Props) => {
  const [couponTerm, setCouponTerm] = useState('');
  const debouncedCouponTerm = useDebounce(couponTerm, COUPON_SUBMITTING_DELAY);
  const { isLoading, isError, isSuccess } = useQuery(['coupon', debouncedCouponTerm, invoiceId], applyCoupon, {
    enabled: Boolean(debouncedCouponTerm),
    onSuccess,
    onError,
  });

  return (
    <InputStateless
      value={couponTerm}
      onChange={setCouponTerm}
      name="coupon"
      label="Promo Code"
      placeholder="Promo Code (optional)"
      error={isError ? 'Unknown coupon code' : ''}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
};
