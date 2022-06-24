import React, { ChangeEvent, useCallback } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
};

const NBSP = '\u00A0';

export const InputStateless = ({ label, required, name, onChange, error, isLoading, isSuccess, ...rest }: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value);
    },
    [onChange],
  );

  const isError = Boolean(error);
  return (
    <div className={cn(styles.input, { [styles.input_error]: isError, [styles.input_success]: isSuccess })}>
      <label className={styles.input__label} htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className={cn(styles.input__field, {
          [styles.input__field_error]: isError,
          [styles.input__field_success]: isSuccess,
        })}
        onChange={handleChange}
      />
      {required && <i className={cn(styles.input__oval, { [styles.input__oval_error]: isError })} />}
      {isLoading && <i className={cn(styles.input__loading)} />}
      <span className={styles.input__errorMessage}>{error ? error : NBSP}</span>
    </div>
  );
};
