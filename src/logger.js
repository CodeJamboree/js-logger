import { ansi } from './ansi.js';

const oLog = console.log.bind(console);
const oTime = console.time.bind(console);
const oTimeEnd = console.timeEnd.bind(console);
const oTimeLog = console.timeLog.bind(console);
const oTimeStamp = console.timeStamp.bind(console);

const applyColor = (message, colorizer) => colorizer(message);

const timeLabel = label => applyColor(label, ansi.cyan);

const colorWith = (_prefix, ...colorizers) => (...args) => {
  if (args.length === 0) {
    return oLog();
  }
  const [message, ...optionalParams] = args;
  if (typeof message !== 'string') {
    return oLog(message, ...optionalParams);
  }
  return oLog(
    colorizers.reduce(applyColor, message),
    ...optionalParams
  );
};

const emoji = {
  worm: '\ud83d\udc1b',
  redX: '\u274c',
  warningSign: '\u26a0\ufe0f',
  infoBox: '\u2139\ufe0f'
};

console.debug = colorWith(emoji.worm, ansi.magenta);
console.log = colorWith('', ansi.white);
console.info = colorWith(emoji.infoBox, ansi.blue);
console.warn = colorWith(emoji.warningSign, ansi.yellow);
console.error = colorWith(emoji.redX, ansi.red);

console.time = label => oTime(timeLabel(label));
console.timeEnd = label => oTimeEnd(timeLabel(label));
console.timeLog = (label, ...data) => oTimeLog(timeLabel(label), ...data);
console.timeStamp = (label) => oTimeStamp(timeLabel(label));

export const logger = console;