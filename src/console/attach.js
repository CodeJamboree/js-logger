import { time } from '../time/time.js';
import { timeEnd } from '../time/timeEnd.js';
import { timeLog } from '../time/timeLog.js';
import { timeStamp } from '../time/timeStamp.js';

import { debug } from '../log/debug.js';
import { log } from '../log/log.js';
import { info } from '../log/info.js';
import { warn } from '../log/warn.js';
import { error } from '../log/error.js';

import { group } from '../group/group.js';
import { groupEnd } from '../group/groupEnd.js';

export const attach = () => {
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