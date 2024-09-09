import { logger } from '../src/index.js';
import { run, standardUtils } from '@codejamboree/js-test';

const main = async () => {

  await run({
    testFilePattern: /\.test\.js$/,
    testFileReplacement: '',
    folderPath: 'build/src'
  })
}

try {
  logger.attach();
  logger.title('Test');
  main()
    .catch(logger.logError)
    .finally(logger.done);
} catch (e) {
  logger.logError(e);
  logger.done();
}