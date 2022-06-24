import React, { useCallback } from 'react';
import cn from 'classnames';
import styles from './ButtonGroup.module.scss';

type Option<T> = {
  label: string;
  id: T;
};

type Props<T> = {
  options: Option<T>[];
  activeId: T;
  onChange: (id: T) => void;
};

type ButtonProps<T> = {
  isActive: boolean;
  onChange: (id: T) => void;
} & Option<T>;

const Button = <T extends string>({ id, label, isActive, onChange }: ButtonProps<T>) => {
  const handleClick = useCallback(() => {
    onChange(id);
  }, [onChange, id]);

  return (
    <button
      type="button"
      className={cn(styles.buttonGroup_item, { [styles.buttonGroup_item___active]: isActive })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export const ButtonGroup = <T extends string>({ options, activeId, onChange }: Props<T>) => {
  return (
    <div className={styles.buttonGroup}>
      {options.map(({ label, id }) => (
        <Button key={id} label={label} id={id} onChange={onChange} isActive={activeId === id} />
      ))}
    </div>
  );
};
