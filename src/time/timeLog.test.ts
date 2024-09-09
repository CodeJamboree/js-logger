import { time } from './time.js';
import { timeLog } from './timeLog.js';
import { expect, standardUtils, processUtils } from '@codejamboree/js-test';
import { log } from '../log/log.js';

export const beforeEach = () => {
  standardUtils.spyAndHide();
  processUtils.freeze();
}
export const afterEach = () => {
  standardUtils.restore();
  processUtils.restore();
}
export const timeLogWritesCyanStamp = () => {
  const atttached = console.log === log;
  const distinctLabel = `timeLogWritesCyanStamp: ${atttached ? 'attached' : 'normal'}`;
  time(distinctLabel);
  timeLog(distinctLabel);
  if (atttached) {
    // added formatting
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[36m${distinctLabel}\u001b[39m: 0ms\u001b[39m\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[36m${distinctLabel}\u001b[39m: 0ms\n`
    ]);
  }
}