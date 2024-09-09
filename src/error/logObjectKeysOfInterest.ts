import { logDetails } from "./logDetails.js";

export const logObjectKeysOfInterest = (obj: NonNullable<object>) => {
  if ('rawPacket' in obj)
    logDetails(obj.rawPacket);
  if ('data' in obj)
    logDetails(obj.data);
}