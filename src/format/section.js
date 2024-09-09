import { lineWidth } from "./lineWidth.js";
import { padCenter } from "./padCenter.js";
import { info } from '../log/info.js';

export const section = (title = '', prefix = '---{ ', suffix = ' }---') => {
  const cap = lineWidth;
  const decoratorLength = prefix.length + suffix.length;
  info();
  padCenter(title, cap - decoratorLength)
    .split('\n')
    .map(decorate, { prefix, suffix })
    .forEach(writeLine);
  info();
}

const writeLine = line => info(line);

function decorate(line) {
  const {
    prefix,
    suffix
  } = this;
  let spaceAtStart = /^(\s+)/;
  let spaceAtEnd = /(\s+)$/;

  if (spaceAtStart.test(line)) {
    line = line.replace(spaceAtStart, `$1${prefix}`);
  } else {
    line = `${prefix}${line}`;
  }
  if (spaceAtEnd.test(line)) {
    line = line.replace(spaceAtEnd, `${suffix}$1`);
  } else {
    line = `${line}${suffix}`;
  }
  return line;
};
