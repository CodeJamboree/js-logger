import { timeLabel } from "./timeLabel.js";
import { timeStamp as consoleTimeStamp } from '../console/timeStamp.js';
import { labels } from "./labels.js";

export const timeStamp = (label: string = 'default') => {
  if (!labels.includes(label)) throw new Error(`No such label '${label}' for timeStamp()`);
  consoleTimeStamp(timeLabel(label));
}
