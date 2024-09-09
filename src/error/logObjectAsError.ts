import { logDetails } from "./logDetails.js";
import { logObjectKeysOfInterest } from "./logObjectKeysOfInterest.js";
import { logError } from "./logError.js";
import { logObjectKeysAsError } from './logObjectKeysAsError.js';
import { error } from '../log/error.js';
import { group } from '../group/group.js';
import { groupEnd } from "../group/groupEnd.js";

export const logObjectAsError = (obj: object) => {

  if (obj instanceof Date) {
    error(`Error (Date): ${obj.toISOString()}`);
    return;
  }

  if (obj instanceof Promise) {
    error("Error (Promise)");
    obj.then(logError).catch(logError);
    return;
  }

  if (obj instanceof Error) {
    error(obj.message);
    logObjectKeysOfInterest(obj);
    return;
  }

  if (Array.isArray(obj)) {
    error("Error (Array)");
    group();
    obj.forEach(logError);
    groupEnd();
    return;
  }

  if (!logObjectKeysAsError(obj)) {
    error("Error (Object)");
    logDetails(obj);
  }
}
