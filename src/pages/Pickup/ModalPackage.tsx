import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import cn from 'classnames';

import { Body2, ButtonGroup, ButtonIcon, H4, ModalTitle, Small, Title } from 'ui';
import styles from './ModalPackage.module.scss';
import { useApi, useInvoice } from 'hooks';
import { prices } from '../../constants';
import { PackageNameEnum, SubscriptionChooseResponse as Invoice } from 'api';
import { Check, ChevronRight, Cross } from 'icons';
import { capitalize, formatPercent, formatSum } from 'utils/string';

type Props = {
  isOpen: boolean;
  close: () => void;
  onSubmit: (invoice: Invoice) => void;
};

type PriceItemProps = {
  desc: string;
  subDesc?: string;
  value?: number | boolean;
};

const NBSP = '\u00A0';

const CheckCross = ({ status }: { status: boolean }) => {
  return status ? (
    <Check className={cn(styles.package_icon, styles.package_icon___active)} />
  ) : (
    <Cross className={styles.package_icon} />
  );
};

const PriceItem = ({ desc, subDesc, value }: PriceItemProps) => {
  return (
    <>
      <div className={styles.package_item}>
        <Body2 className={styles.package_itemDescription}>{desc}</Body2>
        {subDesc && (
          <Body2 className={styles.package_itemDescription} color="dark-grey">
            {subDesc}
          </Body2>
        )}
      </div>
      {typeof value === 'number' && <Title className={styles.percent}>{formatPercent(value)}</Title>}
      {typeof value === 'boolean' && <CheckCross status={value} />}
    </>
  );
};

export const ModalPackage = ({ isOpen, close, onSubmit }: Props) => {
  const { getPackages } = useApi();
  const [activePackageName, setActivePackageName] = useState(PackageNameEnum.Platinum);
  const { data: packages } = useQuery('packages', getPackages);

  const { getInvoice, isLoading } = useInvoice();

  const handleSubmit = useCallback(async () => {
    const invoice = await getInvoice(activePackageName);
    if (invoice) {
      onSubmit(invoice);
    }
  }, [onSubmit, activePackageName, getInvoice]);

  if (!packages) return null;

  const plans = packages.filter(({ name }) => name !== PackageNameEnum.Payc);
  const activePlan = packages.find(({ name }) => name === activePackageName);
  if (!activePlan) return null;
  const buttons = plans.map(({ name }) => ({ id: name, label: capitalize(name) })).reverse();
  return (
    <ModalTitle
      className={styles.modal}
      isOpen={isOpen}
      close={close}
      title={<H4 className={styles.header}>Choose Package</H4>}
    >
      <div className={styles.packages}>
        <ButtonGroup<PackageNameEnum> options={buttons} onChange={setActivePackageName} activeId={activePackageName} />
        <div className={styles.packages_info}>
          <H4 className={styles.package_price}>{formatSum(activePlan.price, 0)}</H4>
          <Small color="grey">{activePlan.description || NBSP}</Small>
        </div>
        <div className={styles.table}>
          <PriceItem desc="Dry Clean + Press Discounts" value={activePlan.dryClean} />
          <PriceItem desc="Laundry + Press Discounts" value={activePlan.laundry} />
          <PriceItem desc="Wash & Fold Discounts" value={activePlan.washFold} />
          <PriceItem desc="Alterations Discount" value={activePlan.alterations} />
          <PriceItem
            desc="FREE Delivery"
            subDesc={`($${prices.freeDeliveryThreshold} & Up)`}
            value={activePlan.hasDelivery}
          />
          <PriceItem
            desc="FREE Welcome Box"
            subDesc={`($${prices.welcomeBoxValue} Value)`}
            value={activePlan.hasWelcomeBox}
          />
          <PriceItem
            desc="FREE Seasonal Garment Storage"
            subDesc={`Up to 5 items & 1 Season ($${prices.seasonStorageValue} / Value)`}
            value={activePlan.hasSeasonalGarment}
          />
          <PriceItem desc="5% Credit Back" subDesc="Applies quarterly" value={activePlan.hasCreditBack} />
        </div>
        <ButtonIcon
          className={styles.button}
          variant="primary"
          label="next"
          Icon={ChevronRight}
          onClick={handleSubmit}
          disabled={isLoading}
        />
      </div>
    </ModalTitle>
  );
};
