import { colorWith } from "./colorWith.js";
import { ansi } from "../ansi.js";
import { emoji } from "./emoji.js";
import { log } from '../console/log.js';

export const info = colorWith(log, emoji.infoBox, ansi.blue);
