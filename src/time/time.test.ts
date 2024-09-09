import { time } from './time.js';
import { expect, standardUtils } from '@codejamboree/js-test';
import { log } from '../log/log.js';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const timeWritesNothing = () => {

  const atttached = console.log === log;
  const distinctLabel = `timeWritesNothing: ${atttached ? 'attached' : 'normal'}`;

  time(distinctLabel);
  expect(standardUtils.writes()).equals([]);
}