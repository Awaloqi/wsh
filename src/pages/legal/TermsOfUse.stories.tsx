import React from 'react';

import { Price } from './Price';
import { TermsOfUse } from './TermsOfUse';
import { DeliveryFees } from './DeliveryFees';
import { GarmentStorage } from './GarmentStorage';

export default { title: 'pages/TermsOfUse' };

export const price = () => <Price />;
export const garmentStorage = () => <GarmentStorage />;
export const termsOfUse = () => <TermsOfUse />;
export const deliveryFees = () => (
  <div style={{ maxWidth: 795 }}>
    <DeliveryFees />
  </div>
);
