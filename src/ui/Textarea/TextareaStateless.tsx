import React, { ChangeEvent, useCallback } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  rows?: number;
};

const NBSP = '\u00A0';

export const TextareaStateless = ({ label, name, error, onChange, required, isLoading, isSuccess, ...rest }: Props) => {
  const isError = Boolean(error);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <div className={cn(styles.textarea, { [styles.textarea_error]: isError })}>
      <label className={styles.textarea__label} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={cn(styles.textarea__field, {
          [styles.textarea__field_error]: isError,
          [styles.textarea__field_success]: isSuccess,
        })}
        onChange={handleChange}
        {...rest}
      />
      {required && <i className={cn(styles.textarea__oval, { [styles.textarea__oval_error]: isError })} />}
      {isLoading && <i className={cn(styles.textarea__loading)} />}
      <span className={styles.textarea__errorMessage}>{isError ? error : NBSP}</span>
    </div>
  );
};
