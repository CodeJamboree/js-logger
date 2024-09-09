import { timeLabel } from "./timeLabel.js";
import { time as consoleTime } from "../console/time.js";

export const time = (label: string) => consoleTime(timeLabel(label));
