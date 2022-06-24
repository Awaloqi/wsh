import moment from 'moment';

const API_DATE_FORMAT = 'YYYY-MM-DD';

const parseDate = (date?: string | Date) => {
  if (!date) {
    return moment();
  }
  if (typeof date === 'string') {
    return moment(date, API_DATE_FORMAT);
  }
  return moment(date);
};

export const formatDate = (date?: string | Date) => parseDate(date).format('dddd[,] MMMM Do');

export const formatDateShort = (date?: string | Date) => parseDate(date).format('L');

export const formatDateLong = (date?: string | Date) => parseDate(date).format('LL');

export const addOneDay = (date?: Date) => moment(date).add(1, 'day').format(API_DATE_FORMAT);
export const addTwoDays = (date?: Date) => moment(date).add(2, 'day').format(API_DATE_FORMAT);

export const dateToApiFormat = (date?: moment.Moment | null) => (date ? date.format(API_DATE_FORMAT) : null);

export const delay = (timeout: number) =>
  new Promise<null>((resolve) => {
    setTimeout(() => resolve(null), timeout);
  });
