import { isEmpty } from "../isEmpty.js";
import { logDetails } from "./logDetails.js";
import { logObjectAsError } from "./logObjectAsError.js";
import { error } from '../log/error.js';

export const logError = (data: any) => {
  if (data instanceof Buffer) data = data.toString();
  if (isEmpty(data)) {
    error("Error (Empty)");
    return;
  }
  switch (typeof data) {
    case 'string':
      error(data);
      break;
    case 'object':
      logObjectAsError(data, logError);
      break;
    case 'boolean':
    case 'number':
      error(`Error: ${data}`);
      break;
    case 'function':
      error(`Error: (callback: ${data.name})`);
      logDetails(data.toString());
      break;
    default:
      console.error(`Error (${typeof data})`);
      logDetails(data);
      break;
  }
}

