import { timeLabel } from "./timeLabel.js";
import { timeEnd as consoleTimeEnd } from '../console/timeEnd.js';
import { labels } from "./labels.js";

export const timeEnd = (label: string = 'default') => {
  if (!labels.includes(label))
    throw new Error(`No such label '${label}' for timeEnd()`);
  labels.splice(labels.indexOf(label), 1);
  consoleTimeEnd(timeLabel(label));
}
