import { Exit } from 'icons';
import React, { ReactNode, useState } from 'react';

import styles from './SingleFAQ.module.scss';

type Props = {
  question: string;
  answer?: ReactNode;
  fullWidth?: boolean;
};

export const SingleFAQ = ({ question, answer, fullWidth = false }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={fullWidth ? styles.main_with_fullWidth : styles.main}>
      <div onClick={() => setOpen(!open)} className={styles.question_row}>
        <div className={styles.question}>{question}</div>
        {open ? (
          <Exit width="38px" height="38px" />
        ) : (
          <Exit width="38px" height="38px" style={{ transform: 'rotate(45deg)' }} />
        )}
      </div>
      {open ? <div className={styles.answer}> {answer} </div> : null}
    </div>
  );
};
