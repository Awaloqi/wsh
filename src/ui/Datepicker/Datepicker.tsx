import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { FieldRenderProps } from 'react-final-form';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { Calendar } from 'icons';
import { dateToApiFormat } from 'utils/date';
import styles from './Datepicker.module.scss';

type Props = {
  label: string;
} & FieldRenderProps<string>;

const NBSP = '\u00A0';

export const Datepicker = ({ isRush, label, input: { value, onChange, onBlur }, meta }: Props) => {
  const [focused, setFocused] = useState(false);
  const [pickUpDay, setPickUpDay] = useState<string | undefined>();

  const toggleDatePicker = useCallback(() => {
    setFocused(!focused);
  }, [setFocused, focused]);

  const handleChange = useCallback(
    (date: moment.Moment | null) => {
      setPickUpDay(date?.format('dddd').toString());
      onChange(dateToApiFormat(date));
      onBlur();
    },
    [onBlur, onChange],
  );

  const getDropOff = (day: string | undefined) => {
    if (!day) return null;

    if (day === 'Monday') return 'Thursday';
    if (day === 'Tuesday') return 'Friday';
    if (day === 'Wednesday') return 'Saturday';
    if (day === 'Thursday') return 'Monday';
    if (day === 'Friday') return 'Tuesday';
    if (day === 'Saturday') return 'Wednesday';
  };

  const getDropOffRush = (day: string | undefined) => {
    if (!day) return null;

    if (day === 'Monday') return 'Wednesday';
    if (day === 'Tuesday') return 'Thursday';
    if (day === 'Wednesday') return 'Friday';
    if (day === 'Thursday') return 'Saturday';
    if (day === 'Friday') return 'Monday';
    if (day === 'Saturday') return 'Tuesday';
  };
  const buttonText = value ? `${moment(value).format('MM/DD/YYYY')}` : 'Select Date';
  const error = meta.touched && (meta.error || meta.submitError);
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <button
        className={cn(styles.button, { [styles.button___error]: error })}
        onClick={toggleDatePicker}
        type="button"
      >
        <Calendar className={styles.icon} /> {buttonText}
        <span className={styles.caret} />
      </button>
      <div className={styles.datepicker_input}>
        <SingleDatePicker
          id=""
          date={value ? moment(value) : null}
          onDateChange={handleChange}
          numberOfMonths={1}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused || false)}
        />
      </div>
      <div className={styles.pickupdropoff}>
        <p>
          PICK UP = {pickUpDay}
          <br />
          DROP OFF = {isRush ? getDropOffRush(pickUpDay) : getDropOff(pickUpDay)}
        </p>
      </div>
      <div className={styles.datepicker__errorMessage}>{error ? error : NBSP}</div>
    </div>
  );
};
