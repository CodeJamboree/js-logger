import * as stdout from "./tests/utils/stdout.js";
import logger from '../src/index.js';

import * as onErrorTests from './tests/onError.js';
import * as timerTests from './tests/timers.js';
import * as loggingTests from './tests/logging.js';
import * as formattingTests from './tests/formatting.js';
import * as ansiTests from './tests/ansi.js';

const excess = 10;

const main = async () => {
  const suites = [
    onErrorTests,
    timerTests,
    loggingTests,
    formattingTests,
    ansiTests
  ];

  let passed = 0;
  let failed = 0;

  beforeAll();
  for (let s = 0; s < suites.length; s++) {
    let suite = suites[s];
    const tests = Object.values(suite).filter(test => typeof test === 'function');
    console.debug(suite.name ?? `Suite ${s + 1}`);
    for (let i = 0; i < tests.length; i++) {
      const pass = await runTest(tests[i], i, tests);
      if (pass) passed++; else failed++;
    }
  }
  afterAll();
  summarizeTests(passed, failed);
}

const beforeAll = () => {
  stdout.enableBuffer();
  stdout.resetBuffer();
}
const afterAll = () => {
  stdout.showOutput();
  stdout.disableBuffer();
}
const beforeEach = () => {
  stdout.resetBuffer();
  stdout.hideOutput();
}
const afterEach = () => {
  stdout.showOutput();
}
const runTest = async (test, i, a) => {
  const { name } = test;
  try {
    beforeEach();
    await test();
    afterEach();
    console.group();
    if (i < excess) {
      console.info(`pass: ${name}`);
    } else if (i === excess) {
      console.debug('pass: ...');
    } else if (i === a.length - 1) {
      console.info(`pass: ${name}`);
    }
    console.groupEnd();
    return true;
  } catch (e) {
    afterEach();
    console.group();
    console.error(`fail: ${name} ${e}`);
    console.groupEnd();
    return false;
  }
}
const summarizeTests = (passed, failed) => {
  const total = passed + failed;
  if (failed === 0) {
    console.info('Success:', passed, 'of', total, 'tests passed.');
  } else {
    console.error('Failed:', failed, 'and', passed, 'of', total, 'passed.');
  }
}

try {
  logger.title('Test');
  main()
    .catch(logger.onError)
    .finally(logger.done);
} catch (e) {
  logger.onError(e);
  logger.done();
}