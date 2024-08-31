import './logger.js';

export const runningTimeLabel = 'Running time';

console.time(runningTimeLabel);

export const logPerformance = (...args) => {
  console.timeLog(runningTimeLabel, ...args);
}
