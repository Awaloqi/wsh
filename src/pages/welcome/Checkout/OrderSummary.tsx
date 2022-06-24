import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormState } from 'react-final-form';
import { useQuery } from 'react-query';

import { Body, Button, WEEK_MAP } from 'ui';
import { getPackages } from 'services/apiClient';
import { PackageNameEnum } from 'api';
import { useAuth, useInvoice, useLocalStorage } from 'hooks';
import { prices } from '../../../constants';
import { capitalize, upperCase } from 'utils/string';
import { formatDate } from 'utils/date';
import { DeliveryFormValues } from '../Delivery/Delivery';
import { Coupon } from './Coupon';
import { OrderApplyCouponResponse as AppliedCoupon } from 'api';
import { BadgeContainerCheckout } from 'components/BadgeContainerCheckout';

export const OrderSummary = () => {
  const { user } = useAuth();
  const [coupon, setCoupon] = useState<AppliedCoupon | null>(null);
  const { data: packages } = useQuery('packages', getPackages);
  const { invoice } = useInvoice();
  const { storedValue: deliveryValue } = useLocalStorage<DeliveryFormValues>('washmix-welcome-delivery');
  const selectedPackage = packages?.find((p) => p.name === invoice?.subscription);

  const { submitting, submitError } = useFormState();

  const packageName =
    selectedPackage?.name === PackageNameEnum.Payc
      ? upperCase(selectedPackage.name)
      : capitalize(selectedPackage?.name);

  return (
    <div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="shadow_pannel">
          <h1>Order Summary</h1>
          <div>
            <div>
              <h2>Email</h2>
              <p>{user?.email}</p>
            </div>

            <div>
              <h2>
                Plan -
                <Link to="/order/packages">
                  <span> Change</span>
                </Link>
              </h2>
              <p>
                {packageName} Credit Pack ${selectedPackage?.dollarPrice}
              </p>
            </div>

            <div>
              <h2>
                Pickup Day -
                <Link to="/order/delivery">
                  <span> Change</span>
                </Link>
              </h2>
              <p>{deliveryValue?.pickupDate && formatDate(deliveryValue?.pickupDate)}</p>
            </div>

            <div>
              <h2>
                Recurring Pickup Days -
                <Link to="/order/delivery">
                  <span> Change</span>
                </Link>
              </h2>

              {deliveryValue?.recurringPickup ? (
                <p>
                  Every{' '}
                  {deliveryValue.recurringPickup.map((day, index) => (
                    <strong key={day}>
                      {index !== 0 && ', '}
                      {WEEK_MAP[day]}
                    </strong>
                  ))}{' '}
                  after first pickup day
                </p>
              ) : (
                <p>None</p>
              )}
            </div>
          </div>
          <div className="total_pannel">
            {selectedPackage?.name !== PackageNameEnum.Payc && (
              <Coupon onSuccess={setCoupon} onError={() => setCoupon(null)} invoiceId={`${invoice?.id}`} />
            )}

            <h2 className="blue_color_txt">
              <strong>{packageName} Credit Pack</strong>
            </h2>
            <p className="blue_color_txt">
              <strong>${selectedPackage?.dollarPrice}</strong>
            </p>

            {selectedPackage?.hasWelcomeBox && (
              <div>
                <h2>Promo Box (${prices.welcomeBoxValue} Value)</h2>
                <p>FREE</p>
              </div>
            )}

            {selectedPackage?.hasSeasonalGarment && (
              <div>
                <h2>Seasonal Garment Storage (${prices.seasonStorageValue}/mo value)</h2>
                <p>FREE</p>
              </div>
            )}

            {coupon && (
              <div>
                <h2>Discount</h2>
                <p>${coupon.dollarDiscount}</p>
              </div>
            )}

            <div className="total_row">
              <h2>
                <strong>Total</strong>
              </h2>
              <p>
                <strong>${coupon ? coupon.dollarAmountWithDiscount : selectedPackage?.dollarPrice}</strong>
              </p>
            </div>
            {packageName === 'PAYC' ? null : (
              <p style={{ color: '#2ec35f' }} className="text-center">
                Don’t forget - your available credit <b>NEVER</b> Expires.
              </p>
            )}
          </div>
          <div className="text-center">
            <Button variant="primary" size="md" isLoading={submitting}>
              Place Order
            </Button>
            {submitError && <Body color="red">{submitError}</Body>}
          </div>
          <BadgeContainerCheckout />
        </div>
      </div>
      <div className="place_order_txt">
        <p>
          By Clicking “PLACE ORDER”, you agree that you have read and understood our{' '}
          <Link to="/terms-of-use">Terms & Conditions of Service</Link> &{' '}
          <Link to="/privacy-policy">WashMix Privacy Policy Statement</Link>.
        </p>
      </div>
    </div>
  );
};
