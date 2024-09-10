import { timeLabel } from "./timeLabel.js";
import { timeLog as consoleTimeLog } from '../console/timeLog.js';
import { labels } from "./labels.js";

export const timeLog = (label: string = 'default', ...data: any[]) => {
  if (!labels.includes(label)) return;

  consoleTimeLog(timeLabel(label), ...data);
}
