import { lineWidth } from "./lineWidth.js";
import { padCenter } from "./padCenter.js";

export const logTitle = title => {
  const cap = lineWidth;
  const line = '-'.repeat(cap);
  console.info(line);
  padCenter(title, cap).split("\n").forEach(line => {
    console.info(line);
  });
  console.info(line);
}