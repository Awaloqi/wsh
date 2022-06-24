import React, { FunctionComponent, useCallback, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { CardNumberElementProps } from '@stripe/react-stripe-js';
import { StripeCardNumberElementChangeEvent, StripeCardNumberElementOptions } from '@stripe/stripe-js';

import styles from './Input.module.scss';
import cn from 'classnames';

type Props = {
  label: string;
  placeholder?: string;
  StripeElement: FunctionComponent<CardNumberElementProps>;
} & FieldRenderProps<string>;

const NBSP = '\u00A0';

const stripeElementStyles = {
  color: '#003459',
  fontSize: '16px',
  fontWeight: '400',
  fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
};

const stripeElementOptions: StripeCardNumberElementOptions = {
  style: { base: stripeElementStyles },
};

export const InputStripe = ({ StripeElement, label, input, meta: { touched } }: Props) => {
  const { name } = input;

  const [error, setError] = useState<string | undefined>('Required');

  const isError = touched && error;

  const handleChange = useCallback(
    (e: StripeCardNumberElementChangeEvent) => {
      input.onChange(e.error == null);
      setError(e.error?.message);
    },
    [input],
  );

  return (
    <div className={cn(styles.input, { [styles.input_error]: isError })}>
      <label className={styles.input__label} htmlFor={name}>
        {label}
      </label>
      <StripeElement
        className={cn(styles.input__field, styles.input__field_stripe, { [styles.input__field_error]: isError })}
        id={name}
        options={stripeElementOptions}
        onChange={handleChange}
        onFocus={input.onFocus}
        onBlur={input.onBlur}
      />
      <i className={cn(styles.input__oval, { [styles.input__oval_error]: isError })} />
      <span className={styles.input__errorMessage}>{touched && error ? error : NBSP}</span>
    </div>
  );
};
