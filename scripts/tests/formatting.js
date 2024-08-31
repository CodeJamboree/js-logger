import * as stdout from "./utils/stdout.js";
import logger from '../../src/index.js';
import { expect } from './utils/expect.js';

export const name = 'formatting';

export const done = () => {
  logger.done();
  const buffer = stdout.getBuffer();
  expect(buffer).lengthOf(2);
  expect(buffer[0][0]).startsWith("\u001b[37m\u001b[36mRunning time\u001b[39m: ");
  expect(buffer[0][0]).endsWith("ms\u001b[39m\n");
  expect(buffer[1]).equals(["\u001b[34mdone\u001b[39m\n", null]);
}
export const section = () => {
  logger.section('my section');
  expect(stdout.getBuffer()).equals([
    ["\n", null],
    ["\u001b[34m          ---{ my section }---          \u001b[39m\n", null],
    ["\n", null]
  ]);
}
export const wrapSection = () => {
  logger.section('big section '.repeat(5).trim());
  expect(stdout.getBuffer()).equals([
    ["\n", null],
    ["\u001b[34m ---{ big section big section big }---  \u001b[39m\n", null],
    ["\u001b[34m   ---{ section big section big }---    \u001b[39m\n", null],
    ["\u001b[34m           ---{ section }---            \u001b[39m\n", null],
    ["\n", null]
  ]);
}
export const title = () => {
  logger.title('my title');
  expect(stdout.getBuffer()).equals([
    ["\u001b[34m----------------------------------------\u001b[39m\n", null],
    ["\u001b[34m                my title                \u001b[39m\n", null],
    ["\u001b[34m----------------------------------------\u001b[39m\n", null]
  ]);
}
export const wrapTitle = () => {
  logger.title('big title '.repeat(7).trim());
  expect(stdout.getBuffer()).equals([
    ["\u001b[34m----------------------------------------\u001b[39m\n", null],
    ["\u001b[34mbig title big title big title big title \u001b[39m\n", null],
    ["\u001b[34m     big title big title big title      \u001b[39m\n", null],
    ["\u001b[34m----------------------------------------\u001b[39m\n", null]
  ]);
}