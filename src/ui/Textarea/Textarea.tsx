import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { TextareaStateless } from './TextareaStateless';

type Props = {
  label: string;
  placeholder?: string;
  disabled?: boolean;
} & FieldRenderProps<string>;

export const Textarea = ({ input, meta: { touched, error, submitError }, ...rest }: Props) => {
  return <TextareaStateless {...input} {...rest} error={touched && (error || submitError)} />;
};
