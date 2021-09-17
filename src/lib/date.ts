import dayjs, { Dayjs } from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mo',
    MM: '%dmo',
    y: '1y',
    yy: '%dy',
  },
});

/**
 * Function to build a Date given a number of seconds.
 *
 * @example secondsToDate(1582263571)
 */
export function secondsToDate(seconds: number | null) {
  return seconds ? toDate(seconds * 1000) : null;
}

/**
 * Function to build a Date given a string or number of milliseconds.
 *
 * @example toDate('2020-02-01')
 */
export function toDate(date: string | number | Dayjs | Date) {
  return dayjs(date);
}

/**
 * Function to return a UNIX timestamp from a date representation. This value is
 * floored to the nearest second.
 *
 * @example toUnix('2020-10-06')
 */
export function toUnix(date?: string | number | Dayjs | Date) {
  return dayjs(date).unix();
}
