import { error } from './error.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const isRed = () => {
  const message = 'error message';
  error(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[31m${message}\u001b[39m\n`);
}
