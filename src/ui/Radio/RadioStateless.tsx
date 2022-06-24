import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import styles from './Radio.module.scss';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  checked?: boolean;
  value?: string;
  variant?: 'primary' | 'accent';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioStateless = ({ label, error, variant = 'primary', ...rest }: Props) => {
  const isError = Boolean(error);
  const id = `${rest.name}_${rest.value}`;

  return (
    <div
      className={cn(styles.radio, {
        [styles.radio_error]: isError,
        [styles.radio_primary]: variant === 'primary',
        [styles.radio_accent]: variant === 'accent',
      })}
    >
      <input
        {...rest}
        id={id}
        className={cn(styles.radio__field, { [styles.radio__field_error]: isError })}
        checked={rest.checked}
        type="radio"
      />
      <label htmlFor={id} className={cn(styles.radio__label, { [styles.radio__label_hasLabel]: label })}>
        {label ? ` ${label}` : null}
      </label>
    </div>
  );
};
