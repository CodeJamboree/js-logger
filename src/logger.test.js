import { logger } from './logger.js';
import { expect } from '@codejamboree/js-test';

export const isNotConsole = () => {
  expect(logger).not().is(console);
}
