import React, { Fragment } from 'react';
import { parse } from 'query-string';

import { snakeToWhite } from 'utils/string';
import { Body } from 'ui';

type Props = {
  currentStatus: string;
  setStatus: (status: string) => void;
};

const eitherArray = (value: string | string[] | null) => (Array.isArray(value) ? value.join('') : value);

export const StatusFilter = ({ currentStatus, setStatus }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.replaceState(null, '', e.currentTarget.href);
    const newStatus = parse(e.currentTarget.attributes.getNamedItem('href')?.value ?? '')?.status;
    setStatus(eitherArray(newStatus) ?? 'new');
  };

  return (
    <Body>
      Status:{' '}
      {['new', 'completed'].map((status, index) => (
        <Fragment key={status}>
          {index > 0 && ', '}
          {status === currentStatus ? (
            snakeToWhite(status)
          ) : (
            <a onClick={handleClick} href={`?status=${status}`}>
              {snakeToWhite(status)}
            </a>
          )}
        </Fragment>
      ))}
    </Body>
  );
};
