import logger from '../../src/index.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const timeNone = () => {
  logger.time('the time', 'arg1', 'arg2');
  expect(standardUtils.writes()).equals([]);
}
export const timeStampNone = () => {
  logger.time('the timestamp');
  logger.timeStamp('the timestamp', 'arg1', 'arg2');
  expect(standardUtils.writes()).equals([]);
}
export const timeEndCyan = () => {
  logger.time('the time end');
  logger.timeEnd('the time end', 'arg1', 'arg2');
  const writes = standardUtils.writes();
  expect(writes, 'writes').lengthOf(1);
  const [message] = writes;
  expect(message).startsWith("\u001b[37m\u001b[36mthe time end\u001b[39m: 0.")
  expect(message).endsWith("ms\u001b[39m\n");
}
export const timeLogCyan = () => {
  logger.time('the time log');
  logger.timeLog('the time log', 'arg1', 'arg2');
  const writes = standardUtils.writes();
  expect(writes, 'writes').lengthOf(1);
  const [message] = writes;
  expect(message).startsWith("\u001b[37m\u001b[36mthe time log\u001b[39m: 0.")
  expect(message).endsWith("ms\u001b[39m arg1 arg2\n");
}