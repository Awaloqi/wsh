import React, { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './AmountInput.module.scss';
import { Minus, Plus } from 'icons';

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const MAX_VALUE = 9999;

export const AmountInput = ({ className, value, onChange }: Props) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = Number.parseInt(e.currentTarget.value, 10);
      const clampedValue = newValue < 0 ? 0 : newValue > MAX_VALUE ? MAX_VALUE : newValue;
      onChange(Number.isInteger(clampedValue) ? clampedValue : 0);
    },
    [onChange],
  );

  const handleInputClick = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  }, []);

  const handlePlusClick = useCallback(() => {
    onChange(value >= MAX_VALUE ? MAX_VALUE : value + 1);
  }, [onChange, value]);

  const handleMinusClick = useCallback(() => {
    onChange(value <= 0 ? 0 : value - 1);
  }, [onChange, value]);

  return (
    <div className={cn(styles.amountInput, className)}>
      <button className={styles.amountInput__button} onClick={handleMinusClick}>
        <Minus />
      </button>
      <input
        className={styles.amountInput__input}
        type="text"
        value={value.toString(10)}
        onChange={handleInputChange}
        onFocus={handleInputClick}
      />
      <button className={styles.amountInput__button} onClick={handlePlusClick}>
        <Plus />
      </button>
    </div>
  );
};

export const AmountInputStatefull = () => {
  const [value, setValue] = useState(0);
  return <AmountInput value={value} onChange={setValue} />;
};
