import logger from '../../src/index.js';
import { expect, standardUtils } from '@codejamboree/js-test';

export const name = 'formatting';

export const done = () => {
  logger.done();
  const buffer = standardUtils.writes();
  expect(buffer).lengthOf(2);
  expect(buffer[0]).startsWith("\u001b[37m\u001b[36mRunning time\u001b[39m: ");
  expect(buffer[0]).endsWith("ms\u001b[39m\n");
  expect(buffer[1]).equals("\u001b[34mdone\u001b[39m\n");
}
export const section = () => {
  logger.section('my section');
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m          ---{ my section }---          \u001b[39m\n",
    "\n"
  ]);
}
export const wrapSection = () => {
  logger.section('big section '.repeat(5).trim());
  expect(standardUtils.writes()).equals([
    "\n",
    "\u001b[34m ---{ big section big section big }---  \u001b[39m\n",
    "\u001b[34m   ---{ section big section big }---    \u001b[39m\n",
    "\u001b[34m           ---{ section }---            \u001b[39m\n",
    "\n"
  ]);
}
export const title = () => {
  logger.title('my title');
  expect(standardUtils.writes()).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34m                my title                \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}
export const wrapTitle = () => {
  logger.title('big title '.repeat(7).trim());
  expect(standardUtils.writes()).equals([
    "\u001b[34m----------------------------------------\u001b[39m\n",
    "\u001b[34mbig title big title big title big title \u001b[39m\n",
    "\u001b[34m     big title big title big title      \u001b[39m\n",
    "\u001b[34m----------------------------------------\u001b[39m\n"
  ]);
}