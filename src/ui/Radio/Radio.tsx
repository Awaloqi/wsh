import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { RadioStateless } from './RadioStateless';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: 'primary' | 'accent';
} & FieldRenderProps<string>;

export const Radio = ({ label, input, meta: { touched, error }, disabled, variant }: Props) => {
  const isError = error && touched;
  return <RadioStateless {...input} error={isError && error} disabled={disabled} label={label} variant={variant} />;
};
