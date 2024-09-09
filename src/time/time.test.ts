import { time } from './time.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const timeWritesNothing = () => {
  time('the time');
  expect(standardUtils.writes()).equals([]);
}