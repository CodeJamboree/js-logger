import { debug } from './debug.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const isMagenta = () => {
  standardUtils.spyAndHide();
  const message = 'debug message';
  debug(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[35m${message}\u001b[39m\n`);
}
export const afterEach = () => {
  standardUtils.restore();
}
