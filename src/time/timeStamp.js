import { timeLabel } from "./timeLabel.js";
import { timeStamp as consoleTimeStamp } from '../console/timeStamp.js';

export const timeStamp = label => consoleTimeStamp(timeLabel(label));;
