import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

export default { title: 'ui/Checkbox' };

export const checkbox = () => (
  <div style={{ width: 300, padding: 30 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={Checkbox} label="Label" placeholder="Placeholder" />
        </>
      )}
    </Form>
  </div>
);
