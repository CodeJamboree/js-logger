import { warn } from './warn.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const isYellow = () => {
  standardUtils.spyAndHide();
  const message = 'warn message';
  warn(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[33m${message}\u001b[39m\n`);
}
export const afterEach = () => {
  standardUtils.restore();
}