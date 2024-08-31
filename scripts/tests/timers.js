import * as stdout from "./utils/stdout.js";
import logger from '../../src/index.js';
import { expect } from './utils/expect.js';

export const name = 'timers';

export const timeNone = () => {
  logger.time('the time', 'arg1', 'arg2');
  expect(stdout.getBuffer()).equals([]);
}
export const timeStampNone = () => {
  logger.time('the timestamp');
  logger.timeStamp('the timestamp', 'arg1', 'arg2');
  expect(stdout.getBuffer()).equals([]);
}
export const timeEndCyan = () => {
  logger.time('the time end');
  logger.timeEnd('the time end', 'arg1', 'arg2');
  const buffer = stdout.getBuffer();
  expect(buffer, 'buffer').lengthOf(1);
  expect(buffer[0], 'buffer[0]').lengthOf(2);
  expect(buffer[0][1], 'buffer[0][1]').isFunction();
  const [[message]] = buffer;
  expect(message).startsWith("\u001b[37m\u001b[36mthe time end\u001b[39m: 0.")
  expect(message).endsWith("ms\u001b[39m\n");
}
export const timeLogCyan = () => {
  logger.time('the time log');
  logger.timeLog('the time log', 'arg1', 'arg2');
  const buffer = stdout.getBuffer();
  expect(buffer, 'buffer').lengthOf(1);
  expect(buffer[0], 'buffer[0]').lengthOf(2);
  expect(buffer[0][1], 'buffer[0][1]').isFunction();
  const [[message]] = buffer;
  expect(message).startsWith("\u001b[37m\u001b[36mthe time log\u001b[39m: 0.")
  expect(message).endsWith("ms\u001b[39m arg1 arg2\n");
}