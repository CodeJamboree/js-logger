import { logger } from './logger.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const isConsole = () => {
  expect(logger).is(console);
}
export const logWhite = () => {
  const message = 'log message';
  logger.log(message);
  expect(standardUtils.writes()).equals(["\u001b[37mlog message\u001b[39m\n"]);
}
export const infoBlue = () => {
  const message = 'info message';
  logger.info(message);
  expect(standardUtils.writes()).equals(["\u001b[34minfo message\u001b[39m\n"]);
}
export const debugMagenta = () => {
  const message = 'debug message';
  logger.debug(message);
  expect(standardUtils.writes()).equals(["\u001b[35mdebug message\u001b[39m\n"]);
}
export const warnYellow = () => {
  const message = 'warn message';
  logger.warn(message);
  expect(standardUtils.writes()).equals(["\u001b[33mwarn message\u001b[39m\n"]);
}
export const errorRed = () => {
  const message = 'error message';
  logger.error(message);
  expect(standardUtils.writes()).equals(["\u001b[31merror message\u001b[39m\n"]);
}