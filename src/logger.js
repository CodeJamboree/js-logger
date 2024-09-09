import { time } from './time/time.js';
import { timeEnd } from './time/timeEnd.js';
import { timeLog } from './time/timeLog.js';
import { timeStamp } from './time/timeStamp.js';

import { debug } from './log/debug.js';
import { log } from './log/log.js';
import { info } from './log/info.js';
import { warn } from './log/warn.js';
import { error } from './log/error.js';

import { group } from './group/group.js';
import { groupEnd } from './group/groupEnd.js';

import { done } from './format/done.js';
import { section } from './format/section.js';
import { title } from './format/title.js';

import { logError } from "./error/logError.js";
import { ansi } from './ansi.js';

import { attach } from './console/attach.js';
import { restore } from './console/restore.js';

export const logger = {
  ansi,

  attach,
  restore,

  done,
  section,
  title,

  logError,

  debug,
  log,
  info,
  warn,
  error,

  group,
  groupEnd,

  time,
  timeEnd,
  timeLog,
  timeStamp
};