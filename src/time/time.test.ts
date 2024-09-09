import { time } from './time.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const timeWritesNothing = () => {
  time('the time');
  expect(standardUtils.writes()).equals([]);
}