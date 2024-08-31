import { lineWidth } from "./lineWidth.js";
import { padCenter } from "./padCenter.js";

export const logSection = (title, prefix = '---{ ', suffix = ' }---') => {
  const cap = lineWidth;
  const decoratorLength = prefix.length + suffix.length;
  console.info();
  padCenter(title, cap - decoratorLength).split('\n').map(line => {
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
  }).map(line => {
    console.info(line);
  });
  console.info();
}