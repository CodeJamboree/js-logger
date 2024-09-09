import { lineWidth } from "./lineWidth.js";
import { padCenter } from "./padCenter.js";
import { info } from '../log/info.js';

export const title = (title = '') => {
  const cap = lineWidth;
  const line = '-'.repeat(cap);
  info(line);
  padCenter(title, cap).split("\n").forEach(writeLine);
  info(line);
}

const writeLine = line => info(line);