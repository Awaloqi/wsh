import React from 'react';
import cn from 'classnames';
import { FieldInputProps, FieldRenderProps } from 'react-final-form';
import InputMask from 'react-input-mask';
import styles from './Input.module.scss';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  mask?: string;
} & FieldRenderProps<string>;

const NBSP = '\u00A0';

export const InputPhone = ({
  label,
  placeholder,
  disabled,
  required,
  mask,
  input,
  meta: { error, touched, submitError },
}: Props) => {
  const { name } = input;
  const isError = (error || submitError) && touched;
  return (
    <InputMask {...input} disabled={disabled} mask={mask}>
      {(props: FieldInputProps<'input'>) => (
        <div className={cn(styles.input, { [styles.input_error]: isError })}>
          <label className={styles.input__label} htmlFor={name}>
            {label}
          </label>
          <input
            id={name}
            placeholder={placeholder}
            className={cn(styles.input__field, { [styles.input__field_error]: isError })}
            disabled={disabled}
            {...props}
          />
          {required && <i className={cn(styles.input__oval, { [styles.input__oval_error]: isError })} />}
          <span className={styles.input__errorMessage}>{isError ? error || submitError : NBSP}</span>
        </div>
      )}
    </InputMask>
  );
};
