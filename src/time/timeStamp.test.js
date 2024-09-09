import { time } from './time.js';
import { timeStamp } from './timeStamp.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const timeStampWritesNothing = () => {
  time('the timestamp');
  timeStamp('the timestamp', 'arg1', 'arg2');
  expect(standardUtils.writes()).equals([]);
}