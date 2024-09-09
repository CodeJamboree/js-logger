import { logger } from '../src/index.js';
import { run } from '@codejamboree/js-test';

const main = async (isAttached: boolean) => {

  if (isAttached) {
    logger.section('Attached');
    logger.attach();
  } else {
    logger.section('Not Attached');
    logger.restore();
  }

  return await run({
    testFilePattern: /\.test\.js$/,
    testFileReplacement: '',
    folderPath: 'build/src',
    randomOrder: true,
    failFast: true,
    timeoutMs: 10
  })
}

try {
  logger.title('Test');
  main(false)
    .then(async (results) => {
      if (results.failed === 0) {
        return main(true)
      } else {
        throw new Error('Aborting - First test run failed.')
      }
    })
    .catch(logger.logError)
    .finally(logger.done);
} catch (e) {
  logger.logError(e);
  logger.done();
}