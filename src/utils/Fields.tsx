import React, { ReactNode } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

type FieldsProps = {
  names: string[];
  children?: (fieldState: any) => ReactNode;
  fieldState?: { [key: string]: FieldRenderProps<string> };
  [otherProp: string]: any;
};

// eslint-disable-next-line react/prop-types
export const Fields = ({ names, subscription, fieldsState = {}, children, originalRender, validate }: FieldsProps) => {
  if (!names.length) {
    return (originalRender || children)(fieldsState);
  }
  const [name, ...rest] = names;
  return (
    <Field name={name} subscription={subscription} validate={validate && validate[name]}>
      {(fieldState) => (
        <Fields
          names={rest}
          subscription={subscription}
          originalRender={originalRender || children}
          fieldsState={{ ...fieldsState, [name]: fieldState }}
          validate={validate}
        />
      )}
    </Field>
  );
};
