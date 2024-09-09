import logger from '../src/index.js';
import { run, standardUtils } from '@codejamboree/js-test';

const main = async () => {

  await run({
    testFilePattern: /\.js$/,
    testFileReplacement: '',
    folderPath: 'scripts/tests',
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
  logger.title('Test');
  main()
    .catch(logger.onError)
    .finally(logger.done);
} catch (e) {
  logger.onError(e);
  logger.done();
}