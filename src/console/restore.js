import { time } from './time.js';
import { timeEnd } from './timeEnd.js';
import { timeLog } from './timeLog.js';
import { timeStamp } from './timeStamp.js';

import { debug } from './debug.js';
import { log } from './log.js';
import { info } from './info.js';
import { warn } from './warn.js';
import { error } from './error.js';

import { group } from './group.js';
import { groupEnd } from './groupEnd.js';

export const restore = () => {
  console.group = group;
  console.groupEnd = groupEnd;
  console.error = error;
  console.warn = warn;
  console.info = info;
  console.log = log;
  console.debug = debug;
  console.time = time;
  console.timeEnd = timeEnd;
  console.timeStamp = timeStamp;
  console.timeLog = timeLog;
}