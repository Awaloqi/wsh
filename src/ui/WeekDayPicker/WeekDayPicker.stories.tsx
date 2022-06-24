import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { WeekDayPicker } from './WeekDayPicker';

export default { title: 'ui/WeekDayPicker' };

export const weekDayPicker = () => (
  <div style={{ width: 300 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={WeekDayPicker} label="Label" />
        </>
      )}
    </Form>
  </div>
);
