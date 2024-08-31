import { isEmpty } from "../isEmpty.js";

export const logDetails = data => {
  if (data instanceof Buffer) data = data.toString();
  if (isEmpty(data)) return;
  console.group();
  console.debug(data);
  console.groupEnd();
}