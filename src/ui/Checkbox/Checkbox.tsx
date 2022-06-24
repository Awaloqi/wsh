import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { CheckboxStateless } from './CheckboxStateless';

type Props = {
  label: string;
  className?: string;
  placeholder?: string;
} & FieldRenderProps<string>;

export const Checkbox = ({ input, meta: { touched, error, submitError }, ...rest }: Props) => {
  return <CheckboxStateless {...input} {...rest} error={touched && (error || submitError)} />;
};
