import { lineWidth } from "./lineWidth.js";

export const padCenter = (text: string, width = lineWidth, fillString = ' '): string => {
  text = text.trim();
  const length = text.length;
  if (length === width) return text;
  if (length > width) {
    const pattern = `[^\\s]{1,${width}}`;
    let wordPattern = new RegExp(pattern, 'g');
    let matches = text.matchAll(wordPattern);
    return Array.from(matches)
      .map(match => match[0])
      .reduce(buildLines(width), [])
      .map((line: string) => padCenter(line, width)).join('\n');
  }

  const half = width / 2;
  const halfText = length / 2;
  const indent = Math.floor(half - halfText);
  return text.padStart(indent + length, fillString).padEnd(width, fillString);
}

const buildLines = (width: number) => (lines: string[], word: string) => {
  if (lines.length === 0) {
    return [word];
  }
  let line = lines[lines.length - 1];
  line += ` ${word}`;
  if (line.length > width) {
    return [...lines, word];
  }
  lines[lines.length - 1] = line;
  return lines;
}