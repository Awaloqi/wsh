import React, { ChangeEvent, useCallback } from 'react';
import cn from 'classnames';
import styles from './Switch.module.scss';

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

export const SwitchStateless = ({ label, className, name, checked, onChange, error, disabled }: Props) => {
  const isError = Boolean(error);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.checked);
    },
    [onChange],
  );

  return (
    <div className={cn(styles.switch, className, { [styles.switch]: isError })}>
      <input
        checked={checked}
        onChange={handleChange}
        id={name}
        className={cn(styles.switch__field, { [styles.switch__field_error]: isError })}
        disabled={disabled}
        type="checkbox"
      />
      <label className={styles.switch__label} htmlFor={name}>
        {label}
        <span className={styles.switch__gauge} />
      </label>
      {isError && <span className={styles.switch__errorMessage}>{error}</span>}
    </div>
  );
};
