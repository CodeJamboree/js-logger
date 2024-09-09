import { time } from './time.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const timeWritesNothing = () => {
  time('the time', 'arg1', 'arg2');
  expect(standardUtils.writes()).equals([]);
}