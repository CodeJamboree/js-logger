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

  await run({
    testFilePattern: /\.test\.js$/,
    testFileReplacement: '',
    folderPath: 'build/src'
  })
}

try {
  logger.title('Test');
  main(false)
    .then(async () => await main(true))
    .catch(logger.logError)
    .finally(logger.done);
} catch (e) {
  logger.logError(e);
  logger.done();
}