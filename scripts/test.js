import logger from '../src/index.js';
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
  logger.title('Test');
  main()
    .catch(logger.onError)
    .finally(logger.done);
} catch (e) {
  logger.onError(e);
  logger.done();
}