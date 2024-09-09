import { applyColor } from '../applyColor.js';

export const colorWith = (fn, _prefix, ...colorizers) => (...args) => {
  if (args.length === 0) {
    return fn();
  }
  const [message, ...optionalParams] = args;
  if (typeof message !== 'string') {
    return fn(message, ...optionalParams);
  }
  return fn(
    colorizers.reduce(applyColor, message),
    ...optionalParams
  );
};
