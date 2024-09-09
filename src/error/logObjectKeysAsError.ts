import { isNotEmpty } from "../isNotEmpty.js";
import { isEmpty } from "../isEmpty.js";
import { logObjectKeysOfInterest } from './logObjectKeysOfInterest.js';

const errorKeys = [
  'error',
  'errors',
  'reason',
  'reasons',
  'message',
  'messages'
];

export const logObjectKeysAsError = (obj: NonNullable<object>, logError: (data: any) => void) => {
  return errorKeys.some(showKeyAsError(obj, logError));
}

const showKeyAsError = (obj: NonNullable<Record<string, any>>, logError: (data: any) => void) =>
  (key: string) => {
    if (!(key in obj)) return;

    let value: any = obj[key];
    if (isEmpty(value)) return false;
    if (Array.isArray(value)) {
      value.filter(isNotEmpty).forEach(logError);
    } else {
      logError(value);
    }
    logObjectKeysOfInterest(obj);
    return true;
  }
