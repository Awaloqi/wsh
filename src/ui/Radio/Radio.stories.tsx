import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Radio } from './Radio';

export default { title: 'ui/Radio' };

export const radio = () => (
  <div style={{ width: 300, padding: 30 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field
            name="radio"
            type="radio"
            component={Radio}
            label="Primary"
            placeholder="Placeholder"
            variant="primary"
            value="primary"
          />
          <Field
            name="radio"
            type="radio"
            component={Radio}
            label="Accent"
            placeholder="Placeholder"
            variant="accent"
            value="accent"
          />
        </>
      )}
    </Form>
  </div>
);
