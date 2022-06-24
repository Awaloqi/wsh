import { snakeToCamel } from './string';

export const joinObjectValues = (obj: Record<string, string[]>) =>
  Object.entries(obj)
    .map(([key, value]) => [key, Array.isArray(value) ? value.join(' ') : value])
    .reduce((acc, [key, value]) => {
      acc[snakeToCamel(key)] = value;
      return acc;
    }, {} as Record<string, string>);

export const normalizeAsyncError = (e: Response | Error) => {
  if (e instanceof Response) {
    if (e.status >= 500) {
      return { detail: e.statusText };
    }
    return e.json().then(joinObjectValues);
  }
  return { detail: e.message };
};
