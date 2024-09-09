import { log } from './log.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const isWhite = () => {
  const message = 'log message';
  log(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[37m${message}\u001b[39m\n`);
}
