import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Switch } from './Switch';

export default { title: 'ui/Switch' };

export const checkbox = () => (
  <div style={{ width: 300, padding: 30 }}>
    <Form onSubmit={action('submit')} initialValues={{ on: true, off: false }}>
      {() => (
        <>
          <Field name="off" type="checkbox" component={Switch} label="Off" />
          <br />
          <Field name="on" type="checkbox" component={Switch} label="On" />
        </>
      )}
    </Form>
  </div>
);
