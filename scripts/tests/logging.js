import * as stdout from "./utils/stdout.js";
import logger from '../../src/index.js';
import { expect } from './utils/expect.js';

export const name = 'logging';

export const isConsole = () => {
  expect(logger).is(console);
}
export const logWhite = () => {
  const message = 'log message';
  logger.log(message);
  expect(stdout.getBuffer()).equals([["\u001b[37mlog message\u001b[39m\n", null]]);
}
export const infoBlue = () => {
  const message = 'info message';
  logger.info(message);
  expect(stdout.getBuffer()).equals([["\u001b[34minfo message\u001b[39m\n", null]]);
}
export const debugMagenta = () => {
  const message = 'debug message';
  logger.debug(message);
  expect(stdout.getBuffer()).equals([["\u001b[35mdebug message\u001b[39m\n", null]]);
}
export const warnYellow = () => {
  const message = 'warn message';
  logger.warn(message);
  expect(stdout.getBuffer()).equals([["\u001b[33mwarn message\u001b[39m\n", null]]);
}
export const errorRed = () => {
  const message = 'error message';
  logger.error(message);
  expect(stdout.getBuffer()).equals([["\u001b[31merror message\u001b[39m\n", null]]);
}