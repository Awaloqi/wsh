import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { InputStateless } from './InputStateless';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
} & FieldRenderProps<string>;

export const Input = ({ input, meta: { error, touched, submitError }, ...rest }: Props) => {
  return <InputStateless {...input} {...rest} error={touched && (error || submitError)} />;
};
