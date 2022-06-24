import React, { useEffect, useState } from 'react';
import moment from 'moment';

type Props = {
  initialTime?: string;
  onTimeout: () => void;
};

const LOGOUT_TIMEOUT = 30 * 60 * 1000;

const millisecondsToMinutesAndSeconds = (milliseconds: number) => {
  const ms = Math.abs(milliseconds);
  const sign = milliseconds < 0 ? '-' : '';
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  if (seconds === '60') return `${minutes + 1}:00`;
  return `${sign}${minutes}:${seconds.padStart(2, '0')}`;
};

const getRemainingTime = (time: string) => moment(time).add(LOGOUT_TIMEOUT).diff(moment());

export const Timer = ({ initialTime, onTimeout }: Props) => {
  const [timer, setTimer] = useState(millisecondsToMinutesAndSeconds(initialTime ? getRemainingTime(initialTime) : 0));

  useEffect(() => {
    if (!initialTime) {
      return;
    }
    const interval = setInterval(() => {
      const remainingTime = getRemainingTime(initialTime);
      setTimer(millisecondsToMinutesAndSeconds(remainingTime));
      if (remainingTime <= 0) {
        onTimeout();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [initialTime, onTimeout]);

  return <span>{timer}</span>;
};
