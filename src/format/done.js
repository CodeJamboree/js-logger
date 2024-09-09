import { logPerformance } from './logPerformance.js';
import { info } from '../log/info.js';

export const done = () => {
  logPerformance();
  info(`done`);
}