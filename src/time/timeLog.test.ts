import { time } from './time.js';
import { timeLog } from './timeLog.js';
import { expect, standardUtils, processUtils } from '@codejamboree/js-test';
import { log } from '../log/log.js';
import { timeEnd } from './timeEnd.js';
import { labels } from './labels.js';

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
  const label = `timeLogWritesCyanStamp: ${atttached ? 'attached' : 'normal'}`;
  time(label);
  timeLog(label);
  if (atttached) {
    // added formatting
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[36m${label}\u001b[39m: 0ms\u001b[39m\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[36m${label}\u001b[39m: 0ms\n`
    ]);
  }
  timeEnd(label);
}

export const timeLogWithArgs = () => {
  const atttached = console.log === log;
  const label = `timeLogWithArgs`;
  time(label);
  timeLog(label, 'arg1', 'arg2');
  if (atttached) {
    // added formatting
    expect(standardUtils.writes()).equals([
      `\u001b[37m\u001b[36m${label}\u001b[39m: 0ms\u001b[39m arg1 arg2\n`
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      `\u001b[36m${label}\u001b[39m: 0ms arg1 arg2\n`
    ]);
  }
  timeEnd(label);
}

export const timeLogUndefined = () => {
  const atttached = console.log === log;
  time();
  timeLog(undefined, 'arg1', 'arg2');
  if (atttached) {
    expect(standardUtils.writes()).equals([
      "\u001b[37m\u001b[36mdefault\u001b[39m: 0ms\u001b[39m arg1 arg2\n"
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      "\u001b[36mdefault\u001b[39m: 0ms arg1 arg2\n"
    ]);
  }
  timeEnd();
}
export const timeLogEmpty = () => {
  const atttached = console.log === log;
  const label = '';
  time(label);
  timeLog(label, 'arg1', 'arg2');
  if (atttached) {
    // added formatting
    expect(standardUtils.writes()).equals([
      "\u001b[37m\u001b[36m\u001b[39m: 0ms\u001b[39m arg1 arg2\n"
    ]);
  } else {
    expect(standardUtils.writes()).equals([
      "\u001b[36m\u001b[39m: 0ms arg1 arg2\n"
    ]);
  }
  timeEnd(label);
}