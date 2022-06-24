import React from 'react';
import cn from 'classnames';
import { FieldRenderProps } from 'react-final-form';
import styles from './InputMD.module.scss';

type Props = {
  label: string;
} & FieldRenderProps<string>;

export const InputMD = ({ label, input, meta }: Props) => {
  const isActiveOrNotEmpty = meta.active || input.value !== '';
  const isError = meta.error && meta.touched;
  return (
    <div
      className={cn(styles.input, {
        [styles.input__field_error]: isError,
        [styles.error]: isError,
        [styles.active]: isActiveOrNotEmpty,
      })}
    >
      <input {...input} className={styles.input__field} />
      <span className={styles.bar} />
      <label className={styles.input__label}>{label}</label>
      <div className={styles.input__errorMessage}>{isError ? meta.error : ''}</div>
    </div>
  );
};
