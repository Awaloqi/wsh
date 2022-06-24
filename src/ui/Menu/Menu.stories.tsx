import React from 'react';
import { action } from '@storybook/addon-actions';

import { Menu } from './Menu';
import { Profile } from 'icons';

export default { title: 'ui/Menu' };

const Label = () => (
  <span>
    <Profile /> Profile
  </span>
);

export const menu = () => (
  <div style={{ width: 400, padding: 50 }}>
    <Menu
      Icon={Profile}
      options={[
        { type: 'button', label: 'button', onClick: action('button click') },
        { type: 'link', label: <Label />, to: '#' },
        { type: 'divider' },
        { type: 'header', label: 'header' },
      ]}
    />
  </div>
);
