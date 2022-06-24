import React, { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './WeightInput.module.scss';

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const MAX_VALUE = 9999;

export const WeightInput = ({ className, value, onChange }: Props) => {
  const [temporalValue, setTemporalValue] = useState(value.toFixed(2));

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTemporalValue(e.currentTarget.value);
    },
    [setTemporalValue],
  );

  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const parsedValue = Number.parseFloat(e.currentTarget.value.replace(',', '.'));
      const newValue = Number.isNaN(parsedValue) ? 0 : parsedValue;
      const clampedValue = newValue < 0 ? 0 : newValue > MAX_VALUE ? MAX_VALUE : newValue;
      onChange(clampedValue);
      setTemporalValue(clampedValue.toFixed(2));
    },
    [onChange],
  );

  const handleInputClick = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  }, []);

  return (
    <div className={cn(styles.weightInput, className)}>
      <input
        className={styles.weightInput__input}
        type="text"
        value={temporalValue}
        onChange={handleInputChange}
        onFocus={handleInputClick}
        onBlur={handleInputBlur}
      />
      <div className={styles.weightInput__measure}>lb</div>
    </div>
  );
};

export const WeightInputStatefull = () => {
  const [value, setValue] = useState(0);
  return <WeightInput value={value} onChange={setValue} />;
};
