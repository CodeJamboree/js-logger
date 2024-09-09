import { time } from './time.js';
import { timeEnd } from './timeEnd.js';
import { expect, standardUtils, processUtils } from '@codejamboree/js-test';
import { log } from '../log/log.js';

export const afterEach = () => {
  processUtils.restore();
}
export const timeEndWritesCyanStamp = () => {
  processUtils.freeze();
  const label = 'testing time end';
  time(label, 'arg1', 'arg2');
  timeEnd(label, 'arg3', 'arg4');
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