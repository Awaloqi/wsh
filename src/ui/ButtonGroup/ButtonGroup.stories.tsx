import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { action } from '@storybook/addon-actions';

export default { title: 'ui/ButtonGroup' };

export const buttonGroup = () => (
  <div style={{ width: 400, padding: 50 }}>
    <ButtonGroup
      onChange={action('onChange')}
      activeId="0"
      options={[
        { label: 'platinum', id: '0' },
        { label: 'gold', id: '1' },
      ]}
    />
  </div>
);
