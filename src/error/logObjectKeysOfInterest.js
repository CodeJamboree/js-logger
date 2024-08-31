import { logDetails } from "./logDetails.js";

export const logObjectKeysOfInterest = obj => {
  logDetails(obj.rawPacket);
  logDetails(obj.data);
}