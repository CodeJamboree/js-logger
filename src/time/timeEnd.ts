import { timeLabel } from "./timeLabel.js";
import { timeEnd as consoleTimeEnd } from '../console/timeEnd.js';

export const timeEnd = (label: string) => consoleTimeEnd(timeLabel(label));;
