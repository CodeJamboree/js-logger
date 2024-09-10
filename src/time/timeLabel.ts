import { ansi } from '../ansi.js';
import { applyColor } from '../applyColor.js';
export const timeLabel = (label: string = 'default') => {
  return applyColor(label, ansi.cyan);
}