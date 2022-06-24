import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { SwitchStateless } from './SwitchStateless';

type Props = {
  label: string;
  className?: string;
  placeholder?: string;
} & FieldRenderProps<string>;

export const Switch = ({ input, meta: { touched, error, submitError }, ...rest }: Props) => {
  return <SwitchStateless {...input} {...rest} error={touched && (error || submitError)} />;
};
