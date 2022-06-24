import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Datepicker } from './Datepicker';

export default { title: 'ui/Datepicker' };

export const datepicker = () => (
  <div style={{ width: 300 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={Datepicker} label="Label" />
        </>
      )}
    </Form>
  </div>
);
