import { time } from './time.js';
import { timeStamp } from './timeStamp.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const timeStampWritesNothing = () => {
  time('the timestamp');
  timeStamp('the timestamp');
  expect(standardUtils.writes()).equals([]);
}