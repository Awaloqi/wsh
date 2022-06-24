import React from 'react';
import { Field, Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { InputMD } from './InputMD';
import { InputGeo } from './InputGeo';
import { required } from 'services/formValidator';
import { Input } from './Input';
import { InputPhone } from './InputPhone';
import { InputStateless } from './InputStateless';
import { Fields } from 'utils/Fields';

export default { title: 'ui/Input' };

export const input = () => (
  <div style={{ width: 300 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={Input} label="Label" placeholder="Placeholder" />
          <Field name="required" validate={required} component={Input} label="Required" required />
        </>
      )}
    </Form>
  </div>
);

export const inputMD = () => (
  <div style={{ width: 300 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={InputMD} label="Label" />
          <br />
          <Field name="required" component={InputMD} label="Required" validate={required} />
        </>
      )}
    </Form>
  </div>
);

export const inputGeo = () => (
  <div style={{ width: 500, padding: 50 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <Fields names={['zipCode', 'addressLine1']}>
          {(fieldState) => <InputGeo label="Street Address" fieldState={fieldState} placeholder="Street Address" />}
        </Fields>
      )}
    </Form>
    <br />
    <Form onSubmit={action('submit')}>
      {() => (
        <Fields names={['zipCode', 'addressLine1']}>
          {(fieldState) => <InputGeo label="Address" variant="md" fieldState={fieldState} />}
        </Fields>
      )}
    </Form>
  </div>
);

export const inputPhone = () => (
  <div style={{ width: 300 }}>
    <Form onSubmit={action('submit')}>
      {() => (
        <>
          <Field name="default" component={InputPhone} label="Label" mask="999 999 99 99" />
        </>
      )}
    </Form>
  </div>
);

export const inputStateless = () => (
  <div style={{ width: 300 }}>
    <InputStateless label="Stateless" name="stateless" />
    <InputStateless label="Loading" name="loading" isLoading />
  </div>
);
