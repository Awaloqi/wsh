import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { Edit } from 'icons';
import { Body, Body2, Button, H4, Link, ModalTitle, CheckboxStateless } from 'ui';
import { useApi } from 'hooks';
import { capitalize, formatSum } from 'utils/string';
import { addOneDay, formatDate, addTwoDays } from 'utils/date';
import { ModalAddress } from './ModalAddress';
import { ModalDate, PickupFormValues } from './ModalDate';
import styles from './Pickup.module.scss';
import { ModalPackage } from './ModalPackage';
import { ModalSummary } from './ModalSummary';
import { NavLink } from 'react-router-dom';

const tomorrow = new Date().getDay() !== 6 ? addOneDay(new Date()) : addTwoDays(new Date());

const DEFAULT_DELIVERY_DAYS = 2;
const RUSH_DELIVERY_DAYS = 1;

export const Pickup = () => {
  const { getAddress, getProfile, postRequest } = useApi();
  const history = useHistory();
  const [addressId, setAddressId] = useState(0);
  const [pickupDate, setPickupDate] = useState(tomorrow);
  const [isRush, setIsRush] = useState(false);

  const { data: profile } = useQuery('profile', getProfile);

  useEffect(() => {
    if (profile?.mainAddress) {
      setAddressId(profile.mainAddress);
    }
  }, [profile]);

  const { data: address } = useQuery(['address', addressId], getAddress, {
    enabled: addressId !== 0,
  });

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const handleCloseAddressModal = useCallback(() => setShowAddressModal(false), [setShowAddressModal]);
  const handsetClosePickupModal = useCallback(() => setShowPickupModal(false), [setShowPickupModal]);
  const handsetClosePackageModal = useCallback(() => setShowPackageModal(false), [setShowPackageModal]);
  const handsetCloseSummaryModal = useCallback(() => setShowSummaryModal(false), [setShowSummaryModal]);
  const handleOpenAddressModal = useCallback(() => setShowAddressModal(true), [setShowAddressModal]);
  const handsetOpenPickupModal = useCallback(() => setShowPickupModal(true), [setShowPickupModal]);
  const handsetOpenPackageModal = useCallback(() => setShowPackageModal(true), [setShowPackageModal]);
  const handsetOpenSummaryModal = useCallback(() => setShowSummaryModal(true), [setShowSummaryModal]);

  const [createRequest, { isLoading, error: requestError }] = useMutation(postRequest, {
    onSuccess: ({ id }) => {
      history.push('/pending', { deliveryId: id });
    },
    throwOnError: false,
  });

  const handleSubmit = useCallback(async () => {
    if (!addressId) {
      toast.warn('Please choose location for pickup and dropoff');
      return;
    }
    await createRequest({
      address: addressId,
      pickupDate: pickupDate,
      isRush,
    });
  }, [addressId, createRequest, pickupDate, isRush]);

  const handleSubmitPackage = useCallback(() => {
    handsetClosePackageModal();
    handsetOpenSummaryModal();
  }, [handsetClosePackageModal, handsetOpenSummaryModal]);

  const handlePrevSummaryModal = useCallback(() => {
    handsetCloseSummaryModal();
    handsetOpenPackageModal();
  }, [handsetCloseSummaryModal, handsetOpenPackageModal]);

  const handleDateSubmit = useCallback(
    (values: PickupFormValues) => {
      setPickupDate(values.pickupDate);
      handsetClosePickupModal();
    },
    [setPickupDate, handsetClosePickupModal],
  );

  const estimateDeliveryTime = isRush ? RUSH_DELIVERY_DAYS : DEFAULT_DELIVERY_DAYS;

  return (
    <div className={styles.pickup}>
      <div className={styles.pickup_box}>
        {requestError ? (
          <H4 className={styles.pickup_header_2}>
            You already have a pickup request made -{' '}
            <NavLink className={styles.nav__link} to="/upcoming">
              click here to view
            </NavLink>
          </H4>
        ) : null}
        <H4 className={styles.pickup_header}>Confirm Pickup</H4>
        <div className={styles.pickup_action}>
          <Body className={styles.pickup_edit} weight="medium" color="grey">
            Location Pickup & Dropoff <Edit className={styles.pickup_icon} onClick={handleOpenAddressModal} />
          </Body>
          <Body2>{address?.addressLine1}</Body2>
        </div>

        <div className={styles.pickup_action}>
          <Body className={styles.pickup_edit} weight="medium" color="grey">
            Pickup Date
            <Edit className={styles.pickup_icon} onClick={handsetOpenPickupModal} />
          </Body>
          <Body2>{formatDate(pickupDate)}</Body2>
        </div>

        <div className={styles.pickup_action}>
          <Body weight="medium" color="grey">
            Dropoff Date
          </Body>
          <Body2>
            Estimate for deliveries is {estimateDeliveryTime} business day{estimateDeliveryTime > 1 && 's'}
          </Body2>
        </div>
        {!profile?.subscription || profile.subscription === 'payc' ? (
          <>
            <Body2 weight="bold">For ongoing discounts & more</Body2>
            <Link onClick={handsetOpenPackageModal} variant="accent">
              Try WashMix Advantage Now…
            </Link>
          </>
        ) : (
          <div className={styles.pickup_action}>
            <Body2 weight="medium">
              Membership:{' '}
              <Body2 color="green" as="span">
                {capitalize(profile?.subscription)}
              </Body2>
            </Body2>
            <Body2 weight="medium">
              Available Credit:{' '}
              <Body2 color="green" as="span">
                {formatSum(profile?.balance)}
              </Body2>
            </Body2>
          </div>
        )}

        <CheckboxStateless label="Rush delivery" name="rushDelivery" checked={isRush} onChange={setIsRush} />
        <p style={{ margin: '4% 0%', fontSize: '12px' }} className={styles.hideOnMobile}>
          {isRush ? (
            <>
              Rush service is available for regular dry cleaning and laundry service. If you&apos;re including
              alterations and repair or complex items (ie: beaded garments or garments with excessive or complex stains
              present) rush service may not be ideal as more time may be necessary to process the order. If any
              questions contact us at <a href="mailto:cs@washmix.com">cs@washmix.com</a>
            </>
          ) : (
            <>
              Most orders will be processed under 2-Business Days. However, at times some garments will require more
              care and cleaning to complete. Although rare, they do however occur on fancy items, beaded garments, and
              items with more than usual or complex stains. Also, if you&apos;re including Alterations please allow time
              to process. If any questions email <a href="mailto:cs@washmix.com">cs@washmix.com</a>
            </>
          )}
        </p>
        <Button
          className={styles.pickup_confirm}
          variant="primary"
          size="md"
          isBlock
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Confirm pickup
        </Button>
        <ModalAddress
          isOpen={showAddressModal}
          close={handleCloseAddressModal}
          addressId={addressId}
          setAddressId={setAddressId}
        />
        <ModalDate
          isOpen={showPickupModal}
          isRush={isRush}
          close={handsetClosePickupModal}
          pickupDate={pickupDate}
          onSubmit={handleDateSubmit}
        />
        <ModalPackage isOpen={showPackageModal} close={handsetClosePackageModal} onSubmit={handleSubmitPackage} />
        <ModalTitle
          isOpen={showSummaryModal}
          close={handsetCloseSummaryModal}
          prev={handlePrevSummaryModal}
          title={<H4 className={styles.header}>Order Summary</H4>}
        >
          <ModalSummary close={handsetCloseSummaryModal} />
        </ModalTitle>
      </div>
    </div>
  );
};
