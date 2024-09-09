import { isEmpty } from "../isEmpty.js";
import { debug } from '../log/debug.js';
import { group } from '../group/group.js';
import { groupEnd } from "../group/groupEnd.js";

export const logDetails = (data: any) => {
  if (data instanceof Buffer) data = data.toString();
  if (isEmpty(data)) return;
  group();
  debug(data);
  groupEnd();
}