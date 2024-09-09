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
  const label = 'testing time log';
  time(label);
  timeLog(label);
  if (console.log === log) {
    // added formatting
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[36m${label}\u001b[39m: 0ms\u001b[39m\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[36m${label}\u001b[39m: 0ms\n`
    ]);
  }
}