import React from 'react';

import { Dropdown } from './Dropdown';

export default { title: 'ui/Dropdown' };

export const dropdown = () => (
  <div style={{ width: 400, padding: 50 }}>
    <Dropdown
      placeholder="Select an option"
      options={[
        { label: 'option1', value: '1' },
        { label: 'option2', value: '2' },
      ]}
    />
  </div>
);
