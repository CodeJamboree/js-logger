import { info } from './info.js';
import { standardUtils, expect } from '@codejamboree/js-test';

export const isBlue = () => {
  standardUtils.spyAndHide();
  const message = 'info message';
  info(message);
  expect(standardUtils.writeAt(0)).is(`\u001b[34m${message}\u001b[39m\n`);
}
export const afterEach = () => {
  standardUtils.restore();
}
