import { timeLabel } from "./timeLabel.js";
import { time as consoleTime } from "../console/time.js";
import { labels } from "./labels.js";
export const time = (label: string = 'default') => {
  if (labels.includes(label)) throw new Error(`Label '${label}' already exists for time()`);
  labels.push(label);
  consoleTime(timeLabel(label));
}
