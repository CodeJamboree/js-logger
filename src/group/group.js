import { colorWith } from "../log/colorWith.js";
import { ansi } from "../ansi.js";
import { emoji } from "../log/emoji.js";
import { group as consoleGroup } from '../console/group.js';

export const group = (...label) => {
  if (group.length === 0)
    consoleGroup();
  else
    colorWith(consoleGroup, emoji.infoBox, ansi.blue)(...label);
}