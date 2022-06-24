import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { FieldRenderProps } from 'react-final-form';
import styles from './WeekDayPicker.module.scss';
import { H4 } from 'ui';

type DaySelectionProps = {
  handleClick: (day: number) => void;
  week: number[];
};

type Props = {
  label?: string;
} & FieldRenderProps<number[]>;

const WEEK = [
  { label: 'Sunday', value: 7 },
  { label: 'Monday', value: 1 },
  { label: 'Tuesday', value: 2 },
  { label: 'Wednesday', value: 3 },
  { label: 'Thursday', value: 4 },
  { label: 'Friday', value: 5 },
  { label: 'Saturday', value: 6 },
];

export const WEEK_MAP = WEEK.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {} as Record<string, string>);

const DaySelection = ({ handleClick, week }: DaySelectionProps) => (
  <>
    {WEEK.map((day) => (
      <span
        key={day.value}
        className={cn(styles.day, {
          [styles.day_selected]: week.includes(day.value),
          [styles.day_disabled]: day.value === 7,
        })}
        onClick={() => handleClick(day.value)}
      >
        {day.label.split('')[0]}
      </span>
    ))}
  </>
);

export const WeekDayPicker = ({ label, input: { value, onChange }, setChanged }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [whichDay, setWhichDay] = useState<number>(-1);

  const checkMondaySaturday = (day: any, secondDay: any) => {
    if ((day === 1 && secondDay === 6) || (day === 6 && secondDay === 1)) return false;
    else return true;
  };

  const onYes = useCallback(() => {
    let newWeek: number[];
    newWeek = [];
    if (value?.includes(whichDay)) {
      newWeek = value.filter((v) => v !== whichDay);
    } else {
      if (value.length === 0) newWeek = [...value, whichDay];
      else if (value.length === 1) {
        if (Math.abs(whichDay - value[0]) > 2 && checkMondaySaturday(whichDay, value[0]))
          newWeek = [...value, whichDay];
        else newWeek = [...value.slice(1, 1), whichDay];
      } else if (value.length === 2) {
        if (Math.abs(whichDay - value[0]) > 2 && Math.abs(whichDay - value[1]) > 2) newWeek = [...value, whichDay];
        else newWeek = [...value.slice(2, 1), whichDay];
      } else if (value.length === 3) {
        newWeek = [...value.slice(2), whichDay];
      }
    }
    onChange(newWeek);
    setIsOpen(false);
  }, [onChange, value, whichDay]);

  const onNo = useCallback(() => {
    onChange([]);
    setIsOpen(false);
  }, [onChange]);

  const onDayClick = (day: number) => {
    setWhichDay(day);
    setIsOpen(true);
    if (setChanged) setChanged(true);
  };

  return (
    <div>
      {isOpen ? (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <H4>Please note</H4>{' '}
            <p>
              Please note, by selecting a recurring pickup day, you’re indicating that you’d have a bag ready for pickup
              on the selected day. If your order is not ready for pickup - delivery charges will apply{' '}
            </p>
            <div className={styles.buttonRow}>
              <div className={styles.yesButton} onClick={onYes}>
                ACCEPT
              </div>
              <div className={styles.noButton} onClick={onNo}>
                DECLINE
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <label className={styles.label}>{label}</label>
      <div className={styles.selectDay}>
        <DaySelection week={value} handleClick={onDayClick} />
      </div>
    </div>
  );
};
