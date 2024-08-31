import { isNotEmpty } from "../isNotEmpty.js";
import { isEmpty } from "../isEmpty.js";
import { logObjectKeysOfInterest } from './logObjectKeysOfInterest.js';
import { logError } from "./logError.js";

const errorKeys = [
  'error',
  'errors',
  'reason',
  'reasons',
  'message',
  'messages'
];

export const logObjectKeysAsError = obj => {
  return errorKeys.some(showKeyAsError(obj));
}

const showKeyAsError = obj => key => {
  let value = obj[key];
  if (isEmpty(value)) return false;
  if (Array.isArray(value)) {
    value.filter(isNotEmpty).forEach(logError);
  } else {
    logError(value);
  }
  logObjectKeysOfInterest(obj);
  return true;
}
