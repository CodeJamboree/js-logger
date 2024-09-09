import { colorWith } from "./colorWith.js";
import { ansi } from "../ansi.js";
import { log as consoleLog } from '../console/log.js';

export const log = colorWith(consoleLog, '', ansi.white);
