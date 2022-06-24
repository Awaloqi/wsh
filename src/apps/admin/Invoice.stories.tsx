import React from 'react';
import { Invoice } from './Invoice';
import { AmountInputStatefull } from './ui/AmountInput';
import { Button } from './ui/Button';
import { WeightInputStatefull } from './ui/WeightInput';

export default { title: 'admin/Invoice' };

export const invoice = () => <Invoice />;

export const button = () => <Button>Button</Button>;

export const amountInput = () => (
  <div style={{ width: 160, padding: 20 }}>
    <AmountInputStatefull />
  </div>
);

export const weightInput = () => (
  <div style={{ width: 160, padding: 20 }}>
    <WeightInputStatefull />
  </div>
);
