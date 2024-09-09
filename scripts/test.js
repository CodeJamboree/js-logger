import { logger } from '../src/index.js';
import { run, standardUtils } from '@codejamboree/js-test';

const main = async () => {

  await run({
    testFilePattern: /\.test\.js$/,
    testFileReplacement: '',
    folderPath: 'src',
    beforeEach,
    afterEach,
  })
}

const beforeEach = () => {
  standardUtils.clearCaptured();
  standardUtils.spyAndHide();
}
const afterEach = () => {
  standardUtils.restore();
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