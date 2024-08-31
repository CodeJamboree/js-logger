const fgBlack = 30;
const fgRed = 31;
const fgGreen = 32;
const fgYellow = 33;
const fgBlue = 34;
const fgMagenta = 35;
const fgCyan = 36;
const fgWhite = 37;
const fgNormal = 39;

const bgBlack = 40;
const bgRed = 41;
const bgGreen = 42;
const bgYellow = 43;
const bgBlue = 44;
const bgMagenta = 45;
const bgCyan = 46;
const bgWhite = 47;
const bgNormal = 49;

const escape = code => `\x1b[${code}m`;

const isFgColor = code => code >= 30 && code <= 39;

const colorize = (code) => (message) => {
  let endCode = isFgColor(code) ? fgNormal : bgNormal;
  const open = escape(code);
  const close = escape(endCode);
  message = overrideClosers(open, message, close);
  return `${open}${message}${close}`;
}
const overrideClosers = (open, message, close) => {
  let i = message.lastIndexOf(close)
  if (i === -1) return message;
  const matches = Array.from(message.matchAll(/([^\x1b]*)(\x1b\[\d+[^m]*m)?/g));
  return matches.map(([_, text = '', code = '']) =>
    code === close ? `${text}${open}` : `${text}${code}`
  ).join('');
}

export const ansi = {
  black: colorize(fgBlack),
  red: colorize(fgRed),
  green: colorize(fgGreen),
  yellow: colorize(fgYellow),
  blue: colorize(fgBlue),
  magenta: colorize(fgMagenta),
  cyan: colorize(fgCyan),
  white: colorize(fgWhite),
  bgBlack: colorize(bgBlack),
  bgRed: colorize(bgRed),
  bgGreen: colorize(bgGreen),
  bgYellow: colorize(bgYellow),
  bgBlue: colorize(bgBlue),
  bgMagenta: colorize(bgMagenta),
  bgCyan: colorize(bgCyan),
  bgWhite: colorize(bgWhite),
};


