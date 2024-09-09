import { applyColor } from '../applyColor.js';

export const colorWith = (fn: (...args: any[]) => any, _prefix: string, ...colorizers: ((message: string) => string)[]) => (...args: any[]) => {
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
