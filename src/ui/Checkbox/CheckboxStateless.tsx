import React, { ChangeEvent, useCallback } from 'react';
import cn from 'classnames';
import styles from './Checkbox.module.scss';

type Props = {
  label: string;
  name: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  error?: string;
};

export const CheckboxStateless = ({ label, className, name, checked, onChange, error, disabled }: Props) => {
  const isError = Boolean(error);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.checked);
    },
    [onChange],
  );

  return (
    <div className={cn(styles.checkbox, className, { [styles.checkbox]: isError })}>
      <input
        checked={checked}
        onChange={handleChange}
        id={name}
        className={cn(styles.checkbox__field, { [styles.checkbox__field_error]: isError })}
        disabled={disabled}
        type="checkbox"
      />{' '}
      <label className={styles.checkbox__label} htmlFor={name}>
        {label}
      </label>
      {isError && <span className={styles.checkbox__errorMessage}>{error}</span>}
    </div>
  );
};
