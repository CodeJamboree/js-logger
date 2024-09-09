import { colorWith } from "../log/colorWith.js";
import { ansi } from "../ansi.js";
import { emoji } from "../log/emoji.js";
import { groupEnd as consoleGroupEnd } from '../console/groupEnd.js';

export const groupEnd = colorWith(consoleGroupEnd, emoji.infoBox, ansi.blue);
