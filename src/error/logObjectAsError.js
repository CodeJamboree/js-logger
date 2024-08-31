import { logDetails } from "./logDetails.js";
import { logObjectKeysOfInterest } from "./logObjectKeysOfInterest.js";
import { logError } from "./logError.js";
import { logObjectKeysAsError } from './logObjectKeysAsError.js';

export const logObjectAsError = (obj) => {

  if (obj instanceof Date) {
    console.error(`Error (Date): ${obj.toISOString()}`);
    return;
  }

  if (obj instanceof Promise) {
    console.error("Error (Promise)");
    obj.then(logError).catch(logError);
    return;
  }

  if (obj instanceof Error) {
    console.error(obj.message);
    logObjectKeysOfInterest(obj);
    return;
  }

  if (Array.isArray(obj)) {
    console.log("Error (Array)");
    console.group();
    obj.forEach(logError);
    console.groupEnd();
    return;
  }

  if (!logObjectKeysAsError(obj)) {
    console.error("Error (Object)");
    logDetails(obj);
  }
}
