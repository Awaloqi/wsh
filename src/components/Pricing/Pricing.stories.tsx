import React, { useState } from 'react';
import { Pricing } from './Pricing';
import '../../index.scss';
import { PackagesForm } from './PackagesForm';
import { PackageNameEnum } from 'api';
import { WashFold } from './WashFold';
import { PricingTable } from './PricingTable';

export default { title: 'components/Pricing' };

export const pricing = () => <Pricing />;
export const pricingTable = () => (
  <PricingTable
    data={[
      {
        header: { title: 'PAYC', subTitle: '$0', description: 'Pay as You Clean' },
        values: [
          { title: 'Dry Clean + Press Discounts', value: '0%' },
          { title: 'Laundry + Press Discounts', value: '0%' },
          { title: 'Wash & Fold Discounts', value: '0%' },
          { title: 'FREE Delivery', description: 'For $25 and up', value: false },
          { title: 'FREE Welcome Box', description: '$79 value', value: false },
          { title: 'FREE Seasonal Garment', description: 'Up to 5 items ($29/mo value)', value: false },
          { title: '5% Credit Back', description: 'Applies quarterly', value: false },
        ],
      },
      {
        header: { title: 'GOLD', subTitle: '$99', description: 'Pre Pay Credit' },
        values: [
          { title: 'Dry Clean + Press Discounts', value: '10%' },
          { title: 'Laundry + Press Discounts', value: '5%' },
          { title: 'Wash & Fold Discounts', value: '5%' },
          { title: 'FREE Delivery', description: 'For $25 and up', value: true },
          { title: 'FREE Welcome Box', description: '$79 value', value: true },
          { title: 'FREE Seasonal Garment', description: 'Up to 5 items ($29/mo value)', value: false },
          { title: '5% Credit Back', description: 'Applies quarterly', value: false },
        ],
      },
      {
        header: { title: 'PLATINUM', subTitle: '$199', description: 'Pre Pay Credit', badge: 'Most Popular' },
        values: [
          { title: 'Dry Clean + Press Discounts', value: '20%' },
          { title: 'Laundry + Press Discounts', value: '10%' },
          { title: 'Wash & Fold Discounts', value: '10%' },
          { title: 'FREE Delivery', description: 'For $25 and up', value: true },
          { title: 'FREE Welcome Box', description: '$79 value', value: true },
          { title: 'FREE Seasonal Garment', description: 'Up to 5 items ($29/mo value)', value: true },
          { title: '5% Credit Back', description: 'Applies quarterly', value: true },
        ],
      },
    ]}
  />
);
export const withoutForm = () => {
  return <PackagesForm />;
};
export const WithForm = () => {
  const [activeId, setActiveId] = useState(PackageNameEnum.Payc as string);
  return <PackagesForm activeId={activeId} onChange={setActiveId} />;
};
export const washNFold = () => (
  <WashFold
    items={[
      { amount: 3999, dollarAmount: '39.99', prettyUnit: 'Pound' },
      { amount: 7900, dollarAmount: '79.0', prettyUnit: 'Bag' },
      { amount: 14800, dollarAmount: '148.0', prettyUnit: 'Bag' },
      { amount: 20700, dollarAmount: '207.0', prettyUnit: 'Bag' },
      { amount: 25600, dollarAmount: '256.0', prettyUnit: 'Bag' },
      { amount: 4900, dollarAmount: '49.0', prettyUnit: 'Bag' },
    ]}
  />
);
