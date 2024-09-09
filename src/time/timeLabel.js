import { ansi } from '../ansi.js';
import { applyColor } from '../applyColor.js';
export const timeLabel = label => applyColor(label, ansi.cyan);