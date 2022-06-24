import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

export default { title: 'ui/Textarea' };

export const textarea = () => (
  <div style={{ width: 300, padding: 30 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={Textarea} label="Label" placeholder="Placeholder" />
        </>
      )}
    </Form>
  </div>
);
