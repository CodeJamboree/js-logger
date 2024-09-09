import { time } from './time.js';
import { timeStamp } from './timeStamp.js';
import { expect, standardUtils } from '@codejamboree/js-test';
import { log } from '../log/log.js';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const timeStampWritesNothing = () => {

  const atttached = console.log === log;
  const distinctLabel = `timeStampWritesNothing: ${atttached ? 'attached' : 'normal'}`;

  time(distinctLabel);
  timeStamp(distinctLabel);
  expect(standardUtils.writes()).equals([]);
}