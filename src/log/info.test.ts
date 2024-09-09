import { info } from './info.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const beforeEach = () => {
  standardUtils.spyAndHide();
}
export const afterEach = () => {
  standardUtils.restore();
}
export const isBlue = () => {
  const message = 'info message';
  info(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[34m${message}\u001b[39m\n`);
}
