import { FieldValidator } from 'final-form';

type Validator<T> = FieldValidator<T>;

// eslint-disable-next-line @typescript-eslint/ban-types
export const composeValidators = <T extends string>(...validators: Validator<T>[]) => (value: T, allValues: object) =>
  validators.reduce((error, validator) => error || validator(value, allValues), undefined);

export const required = <T extends string>(value?: T) => (value ? undefined : 'Required');

export const minLength = (value?: string) => (value && value.length < 7 ? 'Must be 7 characters or more' : undefined);

export const maxLength = (value?: string) =>
  value && value.length > 256 ? 'Must be 256 characters or less' : undefined;

export const number = (value?: string) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);

export const email = (value?: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const usPhone = (value?: string) => {
  if (!value) return undefined;
  return value.replace(/[-_]/g, '').length === 10 ? undefined : 'Invalid phone number, must be 10 digits';
};
