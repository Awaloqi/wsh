export const capitalize = (s?: string) => (typeof s === 'string' ? s.charAt(0).toUpperCase() + s.slice(1) : '');

export const upperCase = (s?: string) => (typeof s === 'string' ? s.toUpperCase() : '');

export const formatSum = (sum?: number, precision = 2) =>
  typeof sum === 'number' ? `$${(sum / 100).toFixed(precision)}` : '';

export const formatPercent = (value?: number) => (typeof value === 'number' ? `${value.toFixed(0)}%` : '');

export const snakeToCamel = (str: string) => str.replace(/(_[a-z])/g, (group) => group.toUpperCase().replace('_', ''));

export const snakeToWhite = (str?: string) => (typeof str === 'string' ? str.replace('_', ' ') : '');
