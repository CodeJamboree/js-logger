import { colorWith } from "./colorWith.js";
import { ansi } from "../ansi.js";
import { emoji } from "./emoji.js";
import { log } from '../console/log.js';

export const warn = colorWith(log, emoji.warningSign, ansi.yellow);
