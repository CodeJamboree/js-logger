import { performance } from './performance.js';
import { info } from '../log/info.js';

export const done = () => {
  performance();
  info(`done`);
}