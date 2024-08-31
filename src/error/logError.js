import { isEmpty } from "../isEmpty.js";
import { logDetails } from "./logDetails.js";
import { logObjectAsError } from "./logObjectAsError.js";

export const logError = data => {
  if (data instanceof Buffer) data = data.toString();
  if (isEmpty(data)) {
    console.error("Error (Empty)");
    return;
  }
  switch (typeof data) {
    case 'string':
      console.error(data);
      break;
    case 'object':
      logObjectAsError(data);
      break;
    case 'boolean':
    case 'number':
      console.error(`Error: ${data}`);
      break;
    case 'function':
      console.error(`Error: (callback: ${data.name})`);
      logDetails(data.toString());
      break;
    default:
      console.error(`Error (${typeof data})`);
      logDetails(data);
      break;
  }
}

