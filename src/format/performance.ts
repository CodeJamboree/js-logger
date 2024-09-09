import { time } from '../time/time.js';
import { timeLog } from '../time/timeLog.js';

export const runningTimeLabel = 'Running time';

time(runningTimeLabel);

export const performance = () => {
  timeLog(runningTimeLabel);
}
