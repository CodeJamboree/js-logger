import { timeLabel } from "./timeLabel.js";
import { timeLog as consoleTimeLog } from '../console/timeLog.js';

export const timeLog = (label: string) => consoleTimeLog(timeLabel(label));;
