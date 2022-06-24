import React from 'react';
import ReactDropdown, { Option } from 'react-dropdown';

import styles from './Dropdown.module.scss';
import { Down, Up } from 'icons';

type Props = {
  options: Option[];
  value?: string;
  onChange?: (value: Option) => void;
  placeholder?: string;
  label?: string;
};

const NBSP = '\u00A0';

export const Dropdown = ({ options, onChange, value, placeholder, label }: Props) => {
  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdown__label}>{label}</label>
      <ReactDropdown
        className={styles.dropdown__wrapper}
        controlClassName={styles.dropdown__field}
        placeholderClassName={styles.dropdown__placeholder}
        menuClassName={styles.dropdown__menu}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        arrowClosed={<Down />}
        arrowOpen={<Up />}
      />

      <span className={styles.dropdown__errorMessage}>{NBSP}</span>
    </div>
  );
};
