import { logPerformance } from './logPerformance.js';

export const logDone = () => {
  logPerformance();
  console.info(`done`);
}