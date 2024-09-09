import { done } from "./done.js";
import { timeEnd } from "../time/timeEnd.js";
import { time } from '../time/time.js';
import { log } from '../log/log.js';

import { standardUtils, expect, processUtils } from "@codejamboree/js-test";

export const showsPerformanceAndDone = () => {
  processUtils.freeze();
  standardUtils.spyAndHide();
  const label = 'Running time';
  timeEnd(label);
  time(label);
  standardUtils.clearCaptured();

  done();

  if (console.log === log) {
    // added formatting
    expect(standardUtils.writeAt(0), 'performance').equals(`\u001b[37m\u001b[36m${label}\u001b[39m: 0ms\u001b[39m\n`);
  } else {
    expect(standardUtils.writeAt(0), 'performance').equals(`\u001b[36m${label}\u001b[39m: 0ms\n`);
  }
  expect(standardUtils.writeAt(1), 'done').equals("\u001b[34mdone\u001b[39m\n");
}

export const afterEach = () => {
  processUtils.restore();
  standardUtils.restore();
}