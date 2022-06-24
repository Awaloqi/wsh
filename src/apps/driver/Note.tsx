import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { TextareaStateless } from 'ui';
import { useDebounce } from 'hooks';
import { patchDeliveryNote } from './apiDriver';

type Props = {
  id?: number;
  initialValue?: string;
};

const NOTE_SUBMITTING_DELAY = 500;

export const Note = ({ id, initialValue }: Props) => {
  const [value, setValue] = useState(initialValue ?? '');
  const debouncedCouponTerm = useDebounce(value, NOTE_SUBMITTING_DELAY);
  const { isLoading, isSuccess } = useQuery([id, debouncedCouponTerm], patchDeliveryNote, {
    enabled: debouncedCouponTerm && debouncedCouponTerm !== (initialValue ?? ''),
  });

  return (
    <TextareaStateless
      rows={2}
      label="Note"
      name="note"
      value={value}
      onChange={setValue}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
};
